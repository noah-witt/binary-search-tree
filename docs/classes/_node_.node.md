[@noahwitt/binary-search-tree](../README.md) › [Globals](../globals.md) › ["Node"](../modules/_node_.md) › [Node](_node_.node.md)

# Class: Node <**T**>

## Type parameters

▪ **T**: *[Comparable](_comparable_.comparable.md)‹T›*

## Hierarchy

* **Node**

## Index

### Constructors

* [constructor](_node_.node.md#constructor)

### Properties

* [hidden](_node_.node.md#hidden)
* [left](_node_.node.md#left)
* [parrent](_node_.node.md#parrent)
* [right](_node_.node.md#right)
* [value](_node_.node.md#value)

### Methods

* [contains](_node_.node.md#contains)
* [containsHash](_node_.node.md#containshash)
* [find](_node_.node.md#private-find)
* [findByHash](_node_.node.md#private-findbyhash)
* [getFromHash](_node_.node.md#getfromhash)
* [insert](_node_.node.md#insert)
* [removeByHash](_node_.node.md#removebyhash)
* [toArray](_node_.node.md#toarray)

## Constructors

###  constructor

\+ **new Node**(`item`: T, `parrent?`: [Node](_node_.node.md)‹T›): *[Node](_node_.node.md)*

*Defined in [Node.ts:7](https://github.com/noah-witt/binary-search-tree/blob/477dd8c/Node.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`item` | T |
`parrent?` | [Node](_node_.node.md)‹T› |

**Returns:** *[Node](_node_.node.md)*

## Properties

###  hidden

• **hidden**: *boolean*

*Defined in [Node.ts:7](https://github.com/noah-witt/binary-search-tree/blob/477dd8c/Node.ts#L7)*

___

###  left

• **left**: *[Node](_node_.node.md)‹T›*

*Defined in [Node.ts:3](https://github.com/noah-witt/binary-search-tree/blob/477dd8c/Node.ts#L3)*

___

###  parrent

• **parrent**: *[Node](_node_.node.md)‹T›*

*Defined in [Node.ts:5](https://github.com/noah-witt/binary-search-tree/blob/477dd8c/Node.ts#L5)*

___

###  right

• **right**: *[Node](_node_.node.md)‹T›*

*Defined in [Node.ts:4](https://github.com/noah-witt/binary-search-tree/blob/477dd8c/Node.ts#L4)*

___

###  value

• **value**: *T*

*Defined in [Node.ts:6](https://github.com/noah-witt/binary-search-tree/blob/477dd8c/Node.ts#L6)*

## Methods

###  contains

▸ **contains**(`item`: T): *boolean*

*Defined in [Node.ts:69](https://github.com/noah-witt/binary-search-tree/blob/477dd8c/Node.ts#L69)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`item` | T | the item to check if it contains.  |

**Returns:** *boolean*

true if it contains the item.

___

###  containsHash

▸ **containsHash**(`item`: number): *boolean*

*Defined in [Node.ts:77](https://github.com/noah-witt/binary-search-tree/blob/477dd8c/Node.ts#L77)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`item` | number | the hash of the item to check if it contains.  |

**Returns:** *boolean*

true if it contains the item.

___

### `Private` find

▸ **find**(`item`: T): *[Node](_node_.node.md)‹T›*

*Defined in [Node.ts:47](https://github.com/noah-witt/binary-search-tree/blob/477dd8c/Node.ts#L47)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`item` | T | the item to be found.  |

**Returns:** *[Node](_node_.node.md)‹T›*

the node that is value 'item' or null if it is not found.

___

### `Private` findByHash

▸ **findByHash**(`item`: number): *[Node](_node_.node.md)‹T›*

*Defined in [Node.ts:51](https://github.com/noah-witt/binary-search-tree/blob/477dd8c/Node.ts#L51)*

**Parameters:**

Name | Type |
------ | ------ |
`item` | number |

**Returns:** *[Node](_node_.node.md)‹T›*

___

###  getFromHash

▸ **getFromHash**(`hash`: number): *T*

*Defined in [Node.ts:85](https://github.com/noah-witt/binary-search-tree/blob/477dd8c/Node.ts#L85)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`hash` | number | the hash to find the element asosciated with.  |

**Returns:** *T*

value if it exists and null if it does not.

___

###  insert

▸ **insert**(`item`: T): *boolean*

*Defined in [Node.ts:21](https://github.com/noah-witt/binary-search-tree/blob/477dd8c/Node.ts#L21)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`item` | T | the item to be inserted.  |

**Returns:** *boolean*

true if inserted. false if not inserted due to having same hashCode. If this is returning false and the objects are different you should fix your hashCode implementation.

___

###  removeByHash

▸ **removeByHash**(`hash`: number): *T*

*Defined in [Node.ts:95](https://github.com/noah-witt/binary-search-tree/blob/477dd8c/Node.ts#L95)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`hash` | number | the value to removes hash  |

**Returns:** *T*

the element removed or null if it was not found.

___

###  toArray

▸ **toArray**(): *T[]*

*Defined in [Node.ts:102](https://github.com/noah-witt/binary-search-tree/blob/477dd8c/Node.ts#L102)*

**Returns:** *T[]*
