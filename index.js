"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bst = exports.Comparable = void 0;
const Comparable_1 = require("./Comparable");
exports.Comparable = Comparable_1.default;
const Node_1 = require("./Node");
class bst {
    constructor() {
        this.header = new Node_1.default(null, null);
    }
    /**
     * @returns true if inserted. false if not inserted due to having same hashCode. If this is returning false and the objects are different you should fix your hashCode implementation.
     * @param item the item to be inserted.
     */
    insert(item) {
        if (this.header.left == null) {
            this.header.left = new Node_1.default(item, this.header);
            return true;
        }
        return this.header.left.insert(item);
    }
    /**
     * @returns true if it contains the item.
     * @param item the item to check if it contains.
     */
    contains(item) {
        if (this.header.left == null)
            return false;
        return this.header.left.contains(item);
    }
    /**
     * @returns true if it contains the item.
     * @param item the hash of the item to check if it contains.
     */
    containsHash(item) {
        if (this.header.left == null)
            return false;
        return this.header.left.containsHash(item);
    }
    /**
     * @returns value if it exists and null if it does not.
     * @param hash the hash to find the element asosciated with.
     */
    getFromHash(hash) {
        if (this.header.left == null)
            return null;
        return this.header.left.getFromHash(hash);
    }
    /**
     * @returns the element removed or null if it was not found.
     * @param hash the value to removes hash
     */
    removeByHash(hash) {
        if (this.header.left == null)
            return null;
        return this.header.left.removeByHash(hash);
    }
    /**
     * @returns the element removed or null if it was not found.
     * @param hash the value to removes hash
     */
    remove(item) {
        if (this.header.left == null)
            return null;
        return this.header.left.removeByHash(item.hashCode());
    }
}
exports.bst = bst;
