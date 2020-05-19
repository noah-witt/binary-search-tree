[@noahwitt/binary-search-tree](../README.md) › [Globals](../globals.md) › ["index"](../modules/_index_.md) › [bst](_index_.bst.md)

# Class: bst <**T**>

## Type parameters

▪ **T**: *[Comparable](_comparable_.comparable.md)‹T›*

## Hierarchy

* **bst**

## Index

### Constructors

* [constructor](_index_.bst.md#constructor)

### Properties

* [header](_index_.bst.md#readonly-header)

### Methods

* [contains](_index_.bst.md#contains)
* [containsHash](_index_.bst.md#containshash)
* [getFromHash](_index_.bst.md#getfromhash)
* [insert](_index_.bst.md#insert)
* [remove](_index_.bst.md#remove)
* [removeByHash](_index_.bst.md#removebyhash)
* [toArray](_index_.bst.md#toarray)

## Constructors

###  constructor

\+ **new bst**(): *[bst](_index_.bst.md)*

*Defined in [index.ts:8](https://github.com/noah-witt/binary-search-tree/blob/3e90ee6/index.ts#L8)*

**Returns:** *[bst](_index_.bst.md)*

## Properties

### `Readonly` header

• **header**: *[Node](_node_.node.md)‹T›*

*Defined in [index.ts:8](https://github.com/noah-witt/binary-search-tree/blob/3e90ee6/index.ts#L8)*

only the left child of header should ever be used.

## Methods

###  contains

▸ **contains**(`item`: T): *boolean*

*Defined in [index.ts:29](https://github.com/noah-witt/binary-search-tree/blob/3e90ee6/index.ts#L29)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`item` | T | the item to check if it contains.  |

**Returns:** *boolean*

true if it contains the item.

___

###  containsHash

▸ **containsHash**(`item`: number): *boolean*

*Defined in [index.ts:38](https://github.com/noah-witt/binary-search-tree/blob/3e90ee6/index.ts#L38)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`item` | number | the hash of the item to check if it contains.  |

**Returns:** *boolean*

true if it contains the item.

___

###  getFromHash

▸ **getFromHash**(`hash`: number): *T*

*Defined in [index.ts:47](https://github.com/noah-witt/binary-search-tree/blob/3e90ee6/index.ts#L47)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`hash` | number | the hash to find the element asosciated with.  |

**Returns:** *T*

value if it exists and null if it does not.

___

###  insert

▸ **insert**(`item`: T): *boolean*

*Defined in [index.ts:17](https://github.com/noah-witt/binary-search-tree/blob/3e90ee6/index.ts#L17)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`item` | T | the item to be inserted.  |

**Returns:** *boolean*

true if inserted. false if not inserted due to having same hashCode. If this is returning false and the objects are different you should fix your hashCode implementation.

___

###  remove

▸ **remove**(`item`: T): *T*

*Defined in [index.ts:65](https://github.com/noah-witt/binary-search-tree/blob/3e90ee6/index.ts#L65)*

**Parameters:**

Name | Type |
------ | ------ |
`item` | T |

**Returns:** *T*

the element removed or null if it was not found.

___

###  removeByHash

▸ **removeByHash**(`hash`: number): *T*

*Defined in [index.ts:56](https://github.com/noah-witt/binary-search-tree/blob/3e90ee6/index.ts#L56)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`hash` | number | the value to removes hash  |

**Returns:** *T*

the element removed or null if it was not found.

___

###  toArray

▸ **toArray**(): *T[]*

*Defined in [index.ts:73](https://github.com/noah-witt/binary-search-tree/blob/3e90ee6/index.ts#L73)*

**Returns:** *T[]*

an array of the elements.
