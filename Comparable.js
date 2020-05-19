"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Comparable {
    /**
     *
     * @param a the object to compare to
     */
    compareTo(a) {
        return this.hashCode() - a.hashCode();
    }
    compareToHash(a) {
        return this.hashCode() - a;
    }
    equals(a) {
        return this.hashCode() == a.hashCode();
    }
}
exports.default = Comparable;
