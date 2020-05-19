const assert = require('assert');
const bst = require("../index");
class test extends bst.Comparable {
    value;
    constructor(value){
        super();
        this.value = value;
    }
    getValue(){
        return this.value;
    }
    hashCode(){
        return this.value;
    }
}
describe('test the proper function of the api', () => {
    let tree = new bst.bst();
    it('test public api on bst', () => {
        let tree = new bst.bst();
        assert.equal(tree.insert(new test(2)), true);
        assert.equal(tree.insert(new test(2)), false);
        tree.insert(new test(10));
        tree.insert(new test(1));
        tree.insert(new test(7));
        tree.insert(new test(8));
        tree.insert(new test(9));
        tree.insert(new test(11));
        tree.insert(new test(13));
        tree.insert(new test(15));
        tree.insert(new test(12));
        //10 elements inserted.
        assert.equal(tree.toArray().length, 10);
        console.log(tree.getFromHash(2));
        assert.equal(tree.insert(new test(13)), false);
        assert.equal(tree.getFromHash(-4), null);
        assert.equal(tree.getFromHash(2).value, 2);
        assert.equal(tree.getFromHash(11).value, 11);
        assert.equal(tree.getFromHash(15).value, 15);
        assert.equal(tree.contains(new test(15)), true);
        assert.equal(tree.contains(new test(99)), false);
        assert.equal(tree.containsHash(9), true);
        assert.equal(tree.containsHash(0), false);
        assert.notEqual(tree.removeByHash(7), null);
        let temp = tree.getFromHash(11);
        assert.equal(tree.removeByHash(11), temp);
        temp = tree.getFromHash(15);
        assert.equal(temp.value, 15);
        assert.equal(tree.remove(temp), temp);
        temp = new test(12314);
        assert.equal(tree.remove(temp), null);
        //3 elements removed so the length should now be 7
        assert.equal(tree.toArray().length, 7);
        assert.equal(tree.containsHash(2), true);
        assert.equal(tree.containsHash(10), true);
        assert.equal(tree.containsHash(1), true);
        assert.equal(tree.containsHash(8), true);
        assert.equal(tree.containsHash(9), true);
        assert.equal(tree.containsHash(13), true);
        assert.equal(tree.containsHash(12), true);
        arr = tree.toArray();
        assert.equal(arr.length, 7);
        assert.equal(arr[0].value,1);
        assert.equal(arr[1].value, 2);
        assert.equal(arr[2].value, 8);
        assert.equal(arr[3].value, 9);
        assert.equal(arr[4].value, 10);
        assert.equal(arr[5].value, 12);
        assert.equal(arr[6].value, 13);
    });
    /*it('test setup 2', () => {
        
    });*/
});

