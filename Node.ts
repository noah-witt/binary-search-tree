import Comparable from "./Comparable";
export default class Node<T extends Comparable<T>>{
    left: Node<T>;
    right: Node<T>;
    parrent: Node<T>;
    value: T;
    hidden: boolean;
    constructor(item: T, parrent?: Node<T>){
        this.left =null;
        this.right=null;
        this.value = item;
        this.hidden = false;
        if(typeof parrent !== 'undefined') this.parrent = parrent;
        else parrent = null;
    }

    /**
     * @returns true if inserted. false if not inserted due to having same hashCode. If this is returning false and the objects are different you should fix your hashCode implementation.
     * @param item the item to be inserted.
     */
    public insert(item: T): boolean{
        let comparison: number = this.value.compareTo(item);
        if(comparison==0) return false;
        if(comparison<0) {
            if(this.left == null) {
                this.left = new Node<T>(item, this);
                return true;
            }
            return this.left.insert(item);
        }
        if(this.right == null) {
            this.right = new Node<T>(item, this);
            return true;
        }
        return this.right.insert(item);
    }

    /**
     * @returns the node that is value 'item' or null if it is not found.
     * @param item the item to be found.
     */
    private find(item: T): Node<T>{
        return this.findByHash(item.hashCode());
    }

    private findByHash(item: number): Node<T>{
        let comparison: number = this.value.compareToHash(item);
        if(comparison==0){
            if(this.hidden) return null;
            return this;
        }
        if(comparison<0) {
            if(this.left ==null) return null;
            return this.left.findByHash(item);
        }
        if(this.right ==null) return null;
        return this.right.findByHash(item);
    }

    /**
     * @returns true if it contains the item.
     * @param item the item to check if it contains.
     */
    public contains(item: T): boolean{
        return this.find(item)!=null;
    }

    /**
     * @returns true if it contains the item.
     * @param item the hash of the item to check if it contains.
     */
    public containsHash(item: number): boolean{
        return this.findByHash(item)!=null;
    }

    /**
     * @returns value if it exists and null if it does not.
     * @param hash the hash to find the element asosciated with.
     */
    public getFromHash(hash: number): T{
        let node = this.findByHash(hash);
        if(node==null) return null;
        return node.value;
    }

    /**
     * @returns the element removed or null if it was not found.
     * @param hash the value to removes hash
     */
    public removeByHash(hash: number): T{
        let element: Node<T> = this.findByHash(hash);
        let value: T = element.value;
        if(element == null) return null;
        if(element.left==null&&element.right==null){
            //is a leaf so we just return the value and strip it from the tree.
            if(element.parrent.left==element) element.parrent.left= null;
            else element.parrent.right = null;
            return value;
        }
        if(element.left==null) {
            //only right sub tree exists
            if(element.parrent.left==element) element.parrent.left= element.right;
            else element.parrent.right = element.right;
            return value;
        }
        if(element.right==null) {
            //only left sub tree exists
            if(element.parrent.left==element) element.parrent.left= element.left;
            else element.parrent.right = element.left;
            return value;
        }
        //both sub trees must exist.
        if(element.parrent.left==element) element.parrent.left= element.left;
        else element.parrent.right = element.left;
        element.parrent.left.insertTree(element.right);
        return value;
    }

    /**
     * This inserts a tree but be carefull with this method.
     * @param item the tree to be inserted.
     */
    protected insertTree(item: Node<T>): boolean{
        let comparison: number = this.value.compareTo(item.value);
        if(comparison==0) return false;
        if(comparison<0) {
            if(this.left == null) {
                this.left = item;
                item.parrent = this.left;
                return true;
            }
            return this.left.insertTree(item);
        }
        if(this.right == null) {
            this.right = item;
            item.parrent = this.right;
            return true;
        }
        return this.right.insertTree(item);
    }
}