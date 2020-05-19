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
        if(comparison==0) {
            if(! this.hidden) return false;
            this.value = item;
            this.hidden = false;
            return true;
        }
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
        if(element == null) return null;
        element.hidden = true;
        return element.value;
    }

    public toArray(): T[] {
        let out: T[] = [this.value];
        if(this.hidden) out = [];
        if(this.left!==null) out = out.concat( this.left.toArray());
        if(this.right!==null) out = this.right.toArray().concat(out);
        return out;
    }
}
