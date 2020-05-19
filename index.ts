import Comparable from './Comparable';
import Node from './Node';
export {Comparable};
export class bst<T extends Comparable<T>>{
    /**
     * only the left child of header should ever be used.
     */
    readonly header: Node<T>;
    constructor(){
        this.header = new Node<T>(null, null);
    } 

    /**
     * @returns true if inserted. false if not inserted due to having same hashCode. If this is returning false and the objects are different you should fix your hashCode implementation.
     * @param item the item to be inserted.
     */
    public insert(item: T): boolean{
        if(this.header.left== null) {
            this.header.left = new Node<T>(item, this.header);
            return true;
        }
        return this.header.left.insert(item);
    }

    /**
     * @returns true if it contains the item.
     * @param item the item to check if it contains.
     */
    public contains(item: T): boolean{
        if(this.header.left==null) return false;
        return this.header.left.contains(item);
    }

    /**
     * @returns true if it contains the item.
     * @param item the hash of the item to check if it contains.
     */
    public containsHash(item: number): boolean{
        if(this.header.left==null) return false;
        return this.header.left.containsHash(item);
    }

    /**
     * @returns value if it exists and null if it does not.
     * @param hash the hash to find the element asosciated with.
     */
    public getFromHash(hash: number): T{
        if(this.header.left==null) return null;
        return this.header.left.getFromHash(hash);
    }

    /**
     * @returns the element removed or null if it was not found.
     * @param hash the value to removes hash
     */
    public removeByHash(hash: number): T{
        if(this.header.left==null) return null;
        return this.header.left.removeByHash(hash);
    }

    /**
     * @returns the element removed or null if it was not found.
     * @param hash the value to removes hash
     */
    public remove(item: T): T{
        if(this.header.left==null) return null;
        return this.header.left.removeByHash(item.hashCode());
    }

    /**
     * @returns an array of the elements.
     */
    public toArray(): T[] {
        if(this.header.left==null) return [];
        return this.header.left.toArray();
    }
}