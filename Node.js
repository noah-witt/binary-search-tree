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
        if (comparison == 0) {
            if (!this.hidden)
                return false;
            this.value = item;
            this.hidden = false;
            return true;
        }
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
        if (element == null)
            return null;
        element.hidden = true;
        return element.value;
    }
    toArray() {
        let out = [this.value];
        if (this.hidden)
            out = [];
        if (this.left !== null)
            out = out.concat(this.left.toArray());
        if (this.right !== null)
            out = this.right.toArray().concat(out);
        return out;
    }
}
exports.default = Node;
