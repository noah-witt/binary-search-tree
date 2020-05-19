"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Node {
    constructor(item, parrent) {
        this.left = null;
        this.right = null;
        this.value = item;
        this.hidden = false;
        if (typeof parrent !== 'undefined')
            this.parrent = parrent;
        else
            parrent = null;
    }
    /**
     * @returns true if inserted. false if not inserted due to having same hashCode. If this is returning false and the objects are different you should fix your hashCode implementation.
     * @param item the item to be inserted.
     */
    insert(item) {
        let comparison = this.value.compareTo(item);
        if (comparison == 0)
            return false;
        if (comparison < 0) {
            if (this.left == null) {
                this.left = new Node(item, this);
                return true;
            }
            return this.left.insert(item);
        }
        if (this.right == null) {
            this.right = new Node(item, this);
            return true;
        }
        return this.right.insert(item);
    }
    /**
     * @returns the node that is value 'item' or null if it is not found.
     * @param item the item to be found.
     */
    find(item) {
        return this.findByHash(item.hashCode());
    }
    findByHash(item) {
        let comparison = this.value.compareToHash(item);
        if (comparison == 0) {
            if (this.hidden)
                return null;
            return this;
        }
        if (comparison < 0) {
            if (this.left == null)
                return null;
            return this.left.findByHash(item);
        }
        if (this.right == null)
            return null;
        return this.right.findByHash(item);
    }
    /**
     * @returns true if it contains the item.
     * @param item the item to check if it contains.
     */
    contains(item) {
        return this.find(item) != null;
    }
    /**
     * @returns true if it contains the item.
     * @param item the hash of the item to check if it contains.
     */
    containsHash(item) {
        return this.findByHash(item) != null;
    }
    /**
     * @returns value if it exists and null if it does not.
     * @param hash the hash to find the element asosciated with.
     */
    getFromHash(hash) {
        let node = this.findByHash(hash);
        if (node == null)
            return null;
        return node.value;
    }
    /**
     * @returns the element removed or null if it was not found.
     * @param hash the value to removes hash
     */
    removeByHash(hash) {
        let element = this.findByHash(hash);
        let value = element.value;
        if (element == null)
            return null;
        if (element.left == null && element.right == null) {
            //is a leaf so we just return the value and strip it from the tree.
            if (element.parrent.left == element)
                element.parrent.left = null;
            else
                element.parrent.right = null;
            return value;
        }
        if (element.left == null) {
            //only right sub tree exists
            if (element.parrent.left == element)
                element.parrent.left = element.right;
            else
                element.parrent.right = element.right;
            return value;
        }
        if (element.right == null) {
            //only left sub tree exists
            if (element.parrent.left == element)
                element.parrent.left = element.left;
            else
                element.parrent.right = element.left;
            return value;
        }
        //both sub trees must exist.
        if (element.parrent.left == element)
            element.parrent.left = element.left;
        else
            element.parrent.right = element.left;
        element.parrent.left.insertTree(element.right);
        return value;
    }
    /**
     * This inserts a tree but be carefull with this method.
     * @param item the tree to be inserted.
     */
    insertTree(item) {
        let comparison = this.value.compareTo(item.value);
        if (comparison == 0)
            return false;
        if (comparison < 0) {
            if (this.left == null) {
                this.left = item;
                item.parrent = this.left;
                return true;
            }
            return this.left.insertTree(item);
        }
        if (this.right == null) {
            this.right = item;
            item.parrent = this.right;
            return true;
        }
        return this.right.insertTree(item);
    }
}
exports.default = Node;
