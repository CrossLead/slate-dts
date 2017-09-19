/**
 * Node.
 *
 * And interface that `Document`, `Block` and `Inline` all implement, to make
 * working with the recursive node tree easier.
 *
 * @type {Node}
 */
declare class Node {
    /**
     * Create a new `Node` with `attrs`.
     *
     * @param {Object|Node} attrs
     * @return {Node}
     */
    static create(attrs?: {}): any;
    /**
     * Create a list of `Nodes` from an array.
     *
     * @param {Array<Object|Node>} elements
     * @return {List<Node>}
     */
    static createList(elements?: any[]): any;
    /**
     * Create a dictionary of settable node properties from `attrs`.
     *
     * @param {Object|String|Node} attrs
     * @return {Object}
     */
    static createProperties(attrs?: {}): {} | {
        data: any;
        isVoid: any;
        type: any;
    } | {
        type: string;
    };
    /**
     * Create a `Node` from a JSON `object`.
     *
     * @param {Object} object
     * @return {Node}
     */
    static fromJSON(object: any): any;
    /**
     * Alias `fromJS`.
     */
    static fromJS: typeof Node.fromJSON;
    /**
     * Check if a `value` is a `Node`.
     *
     * @param {Any} value
     * @return {Boolean}
     */
    static isNode(value: any): any;
    /**
     * Check if a `value` is a list of nodes.
     *
     * @param {Any} value
     * @return {Boolean}
     */
    static isNodeList(value: any): any;
    /**
     * True if the node has both descendants in that order, false otherwise. The
     * order is depth-first, post-order.
     *
     * @param {String} first
     * @param {String} second
     * @return {Boolean}
     */
    areDescendantsSorted(first: any, second: any): any;
    /**
     * Assert that a node has a child by `key` and return it.
     *
     * @param {String} key
     * @return {Node}
     */
    assertChild(key: any): any;
    /**
     * Assert that a node has a descendant by `key` and return it.
     *
     * @param {String} key
     * @return {Node}
     */
    assertDescendant(key: any): any;
    /**
     * Assert that a node's tree has a node by `key` and return it.
     *
     * @param {String} key
     * @return {Node}
     */
    assertNode(key: any): any;
    /**
     * Assert that a node exists at `path` and return it.
     *
     * @param {Array} path
     * @return {Node}
     */
    assertPath(path: any): this;
    /**
     * Recursively filter all descendant nodes with `iterator`.
     *
     * @param {Function} iterator
     * @return {List<Node>}
     */
    filterDescendants(iterator: any): any;
    /**
     * Recursively find all descendant nodes by `iterator`.
     *
     * @param {Function} iterator
     * @return {Node|Null}
     */
    findDescendant(iterator: any): any;
    /**
     * Recursively iterate over all descendant nodes with `iterator`. If the
     * iterator returns false it will break the loop.
     *
     * @param {Function} iterator
     */
    forEachDescendant(iterator: any): any;
    /**
     * Get the path of ancestors of a descendant node by `key`.
     *
     * @param {String|Node} key
     * @return {List<Node>|Null}
     */
    getAncestors(key: any): any;
    /**
     * Get the leaf block descendants of the node.
     *
     * @return {List<Node>}
     */
    getBlocks(): any;
    /**
     * Get the leaf block descendants of the node.
     *
     * @return {List<Node>}
     */
    getBlocksAsArray(): any;
    /**
     * Get the leaf block descendants in a `range`.
     *
     * @param {Selection} range
     * @return {List<Node>}
     */
    getBlocksAtRange(range: any): any;
    /**
     * Get the leaf block descendants in a `range` as an array
     *
     * @param {Selection} range
     * @return {Array}
     */
    getBlocksAtRangeAsArray(range: any): any;
    /**
     * Get all of the leaf blocks that match a `type`.
     *
     * @param {String} type
     * @return {List<Node>}
     */
    getBlocksByType(type: any): any;
    /**
     * Get all of the leaf blocks that match a `type` as an array
     *
     * @param {String} type
     * @return {Array}
     */
    getBlocksByTypeAsArray(type: any): any;
    /**
     * Get all of the characters for every text node.
     *
     * @return {List<Character>}
     */
    getCharacters(): any;
    /**
     * Get all of the characters for every text node as an array
     *
     * @return {Array}
     */
    getCharactersAsArray(): any;
    /**
     * Get a list of the characters in a `range`.
     *
     * @param {Selection} range
     * @return {List<Character>}
     */
    getCharactersAtRange(range: any): any;
    /**
     * Get a list of the characters in a `range` as an array.
     *
     * @param {Selection} range
     * @return {Array}
     */
    getCharactersAtRangeAsArray(range: any): any;
    /**
     * Get a child node by `key`.
     *
     * @param {String} key
     * @return {Node|Null}
     */
    getChild(key: any): any;
    /**
     * Get closest parent of node by `key` that matches `iterator`.
     *
     * @param {String} key
     * @param {Function} iterator
     * @return {Node|Null}
     */
    getClosest(key: any, iterator: any): any;
    /**
     * Get the closest block parent of a `node`.
     *
     * @param {String} key
     * @return {Node|Null}
     */
    getClosestBlock(key: any): any;
    /**
     * Get the closest inline parent of a `node`.
     *
     * @param {String} key
     * @return {Node|Null}
     */
    getClosestInline(key: any): any;
    /**
     * Get the closest void parent of a `node`.
     *
     * @param {String} key
     * @return {Node|Null}
     */
    getClosestVoid(key: any): any;
    /**
     * Get the common ancestor of nodes `one` and `two` by keys.
     *
     * @param {String} one
     * @param {String} two
     * @return {Node}
     */
    getCommonAncestor(one: any, two: any): any;
    /**
     * Get the component for the node from a `schema`.
     *
     * @param {Schema} schema
     * @return {Component|Void}
     */
    getComponent(schema: any): any;
    /**
     * Get the decorations for the node from a `schema`.
     *
     * @param {Schema} schema
     * @return {Array}
     */
    getDecorators(schema: any): any;
    /**
     * Get the depth of a child node by `key`, with optional `startAt`.
     *
     * @param {String} key
     * @param {Number} startAt (optional)
     * @return {Number} depth
     */
    getDepth(key: any, startAt?: number): any;
    /**
     * Get a descendant node by `key`.
     *
     * @param {String} key
     * @return {Node|Null}
     */
    getDescendant(key: any): any;
    /**
     * Get a descendant by `path`.
     *
     * @param {Array} path
     * @return {Node|Null}
     */
    getDescendantAtPath(path: any): this;
    /**
     * Get the decorators for a descendant by `key` given a `schema`.
     *
     * @param {String} key
     * @param {Schema} schema
     * @return {Array}
     */
    getDescendantDecorators(key: any, schema: any): any[];
    /**
     * Get the first child text node.
     *
     * @return {Node|Null}
     */
    getFirstText(): any;
    /**
     * Get a fragment of the node at a `range`.
     *
     * @param {Selection} range
     * @return {Document}
     */
    getFragmentAtRange(range: any): any;
    /**
     * Get the furthest parent of a node by `key` that matches an `iterator`.
     *
     * @param {String} key
     * @param {Function} iterator
     * @return {Node|Null}
     */
    getFurthest(key: any, iterator: any): any;
    /**
     * Get the furthest block parent of a node by `key`.
     *
     * @param {String} key
     * @return {Node|Null}
     */
    getFurthestBlock(key: any): any;
    /**
     * Get the furthest inline parent of a node by `key`.
     *
     * @param {String} key
     * @return {Node|Null}
     */
    getFurthestInline(key: any): any;
    /**
     * Get the furthest ancestor of a node by `key`.
     *
     * @param {String} key
     * @return {Node|Null}
     */
    getFurthestAncestor(key: any): any;
    /**
     * Get the furthest ancestor of a node by `key` that has only one child.
     *
     * @param {String} key
     * @return {Node|Null}
     */
    getFurthestOnlyChildAncestor(key: any): any;
    /**
     * Get the closest inline nodes for each text node in the node.
     *
     * @return {List<Node>}
     */
    getInlines(): any;
    /**
     * Get the closest inline nodes for each text node in the node, as an array.
     *
     * @return {List<Node>}
     */
    getInlinesAsArray(): any[];
    /**
     * Get the closest inline nodes for each text node in a `range`.
     *
     * @param {Selection} range
     * @return {List<Node>}
     */
    getInlinesAtRange(range: any): any;
    /**
     * Get the closest inline nodes for each text node in a `range` as an array.
     *
     * @param {Selection} range
     * @return {Array}
     */
    getInlinesAtRangeAsArray(range: any): any[];
    /**
     * Get all of the leaf inline nodes that match a `type`.
     *
     * @param {String} type
     * @return {List<Node>}
     */
    getInlinesByType(type: any): any;
    /**
     * Get all of the leaf inline nodes that match a `type` as an array.
     *
     * @param {String} type
     * @return {Array}
     */
    getInlinesByTypeAsArray(type: any): any;
    /**
     * Return a set of all keys in the node.
     *
     * @return {Set<String>}
     */
    getKeys(): any;
    /**
     * Get the last child text node.
     *
     * @return {Node|Null}
     */
    getLastText(): any;
    /**
     * Get all of the marks for all of the characters of every text node.
     *
     * @return {Set<Mark>}
     */
    getMarks(): any;
    /**
     * Get all of the marks for all of the characters of every text node.
     *
     * @return {OrderedSet<Mark>}
     */
    getOrderedMarks(): any;
    /**
     * Get all of the marks as an array.
     *
     * @return {Array}
     */
    getMarksAsArray(): any;
    /**
     * Get a set of the marks in a `range`.
     *
     * @param {Selection} range
     * @return {Set<Mark>}
     */
    getMarksAtRange(range: any): any;
    /**
     * Get a set of the marks in a `range`.
     *
     * @param {Selection} range
     * @return {OrderedSet<Mark>}
     */
    getOrderedMarksAtRange(range: any): any;
    /**
     * Get a set of the active marks in a `range`.
     *
     * @param {Selection} range
     * @return {Set<Mark>}
     */
    getActiveMarksAtRange(range: any): any;
    /**
     * Get a set of the marks in a `range`, by unioning.
     *
     * @param {Selection} range
     * @return {Array}
     */
    getMarksAtRangeAsArray(range: any): any;
    /**
     * Get a set of marks in a `range`, by intersecting.
     *
     * @param {Selection} range
     * @return {Array}
     */
    getActiveMarksAtRangeAsArray(range: any): any;
    /**
     * Get all of the marks that match a `type`.
     *
     * @param {String} type
     * @return {Set<Mark>}
     */
    getMarksByType(type: any): any;
    /**
     * Get all of the marks that match a `type`.
     *
     * @param {String} type
     * @return {OrderedSet<Mark>}
     */
    getOrderedMarksByType(type: any): any;
    /**
     * Get all of the marks that match a `type` as an array.
     *
     * @param {String} type
     * @return {Array}
     */
    getMarksByTypeAsArray(type: any): any;
    /**
     * Get the block node before a descendant text node by `key`.
     *
     * @param {String} key
     * @return {Node|Null}
     */
    getNextBlock(key: any): any;
    /**
     * Get the node after a descendant by `key`.
     *
     * @param {String} key
     * @return {Node|Null}
     */
    getNextSibling(key: any): any;
    /**
     * Get the text node after a descendant text node by `key`.
     *
     * @param {String} key
     * @return {Node|Null}
     */
    getNextText(key: any): any;
    /**
     * Get a node in the tree by `key`.
     *
     * @param {String} key
     * @return {Node|Null}
     */
    getNode(key: any): any;
    /**
     * Get a node in the tree by `path`.
     *
     * @param {Array} path
     * @return {Node|Null}
     */
    getNodeAtPath(path: any): this;
    /**
     * Get the offset for a descendant text node by `key`.
     *
     * @param {String} key
     * @return {Number}
     */
    getOffset(key: any): any;
    /**
     * Get the offset from a `range`.
     *
     * @param {Selection} range
     * @return {Number}
     */
    getOffsetAtRange(range: any): any;
    /**
     * Get the parent of a child node by `key`.
     *
     * @param {String} key
     * @return {Node|Null}
     */
    getParent(key: any): any;
    /**
     * Get the path of a descendant node by `key`.
     *
     * @param {String|Node} key
     * @return {Array}
     */
    getPath(key: any): any[];
    /**
     * Get the block node before a descendant text node by `key`.
     *
     * @param {String} key
     * @return {Node|Null}
     */
    getPreviousBlock(key: any): any;
    /**
     * Get the node before a descendant node by `key`.
     *
     * @param {String} key
     * @return {Node|Null}
     */
    getPreviousSibling(key: any): any;
    /**
     * Get the text node before a descendant text node by `key`.
     *
     * @param {String} key
     * @return {Node|Null}
     */
    getPreviousText(key: any): any;
    /**
     * Get the indexes of the selection for a `range`, given an extra flag for
     * whether the node `isSelected`, to determine whether not finding matches
     * means everything is selected or nothing is.
     *
     * @param {Selection} range
     * @param {Boolean} isSelected
     * @return {Object|Null}
     */
    getSelectionIndexes(range: any, isSelected?: boolean): {
        start: any;
        end: any;
    };
    /**
     * Get the concatenated text string of all child nodes.
     *
     * @return {String}
     */
    getText(): any;
    /**
     * Get the descendent text node at an `offset`.
     *
     * @param {String} offset
     * @return {Node|Null}
     */
    getTextAtOffset(offset: any): any;
    /**
     * Get the direction of the node's text.
     *
     * @return {String}
     */
    getTextDirection(): any;
    /**
     * Recursively get all of the child text nodes in order of appearance.
     *
     * @return {List<Node>}
     */
    getTexts(): any;
    /**
     * Recursively get all the leaf text nodes in order of appearance, as array.
     *
     * @return {List<Node>}
     */
    getTextsAsArray(): any[];
    /**
     * Get all of the text nodes in a `range`.
     *
     * @param {Selection} range
     * @return {List<Node>}
     */
    getTextsAtRange(range: any): any;
    /**
     * Get all of the text nodes in a `range` as an array.
     *
     * @param {Selection} range
     * @return {Array}
     */
    getTextsAtRangeAsArray(range: any): any[];
    /**
     * Check if a child node exists by `key`.
     *
     * @param {String} key
     * @return {Boolean}
     */
    hasChild(key: any): boolean;
    /**
     * Recursively check if a child node exists by `key`.
     *
     * @param {String} key
     * @return {Boolean}
     */
    hasDescendant(key: any): boolean;
    /**
     * Recursively check if a node exists by `key`.
     *
     * @param {String} key
     * @return {Boolean}
     */
    hasNode(key: any): boolean;
    /**
     * Check if a node has a void parent by `key`.
     *
     * @param {String} key
     * @return {Boolean}
     */
    hasVoidParent(key: any): boolean;
    /**
     * Insert a `node` at `index`.
     *
     * @param {Number} index
     * @param {Node} node
     * @return {Node}
     */
    insertNode(index: any, node: any): any;
    /**
     * Check whether the node is in a `range`.
     *
     * @param {Selection} range
     * @return {Boolean}
     */
    isInRange(range: any): boolean;
    /**
     * Check whether the node is a leaf block.
     *
     * @return {Boolean}
     */
    isLeafBlock(): any;
    /**
     * Check whether the node is a leaf inline.
     *
     * @return {Boolean}
     */
    isLeafInline(): any;
    /**
     * Merge a children node `first` with another children node `second`.
     * `first` and `second` will be concatenated in that order.
     * `first` and `second` must be two Nodes or two Text.
     *
     * @param {Node} first
     * @param {Node} second
     * @return {Node}
     */
    mergeNode(withIndex: any, index: any): this;
    /**
     * Map all child nodes, updating them in their parents. This method is
     * optimized to not return a new node if no changes are made.
     *
     * @param {Function} iterator
     * @return {Node}
     */
    mapChildren(iterator: any): any;
    /**
     * Map all descendant nodes, updating them in their parents. This method is
     * optimized to not return a new node if no changes are made.
     *
     * @param {Function} iterator
     * @return {Node}
     */
    mapDescendants(iterator: any): any;
    /**
     * Regenerate the node's key.
     *
     * @return {Node}
     */
    regenerateKey(): any;
    /**
     * Remove a `node` from the children node map.
     *
     * @param {String} key
     * @return {Node}
     */
    removeDescendant(key: any): this;
    /**
     * Remove a node at `index`.
     *
     * @param {Number} index
     * @return {Node}
     */
    removeNode(index: any): any;
    /**
     * Split a child node by `index` at `position`.
     *
     * @param {Number} index
     * @param {Number} position
     * @return {Node}
     */
    splitNode(index: any, position: any): this;
    /**
     * Set a new value for a child node by `key`.
     *
     * @param {Node} node
     * @return {Node}
     */
    updateNode(node: any): any;
    /**
     * Validate the node against a `schema`.
     *
     * @param {Schema} schema
     * @return {Object|Null}
     */
    validate(schema: any): any;
    /**
     * True if the node has both descendants in that order, false otherwise. The
     * order is depth-first, post-order.
     *
     * @param {String} first
     * @param {String} second
     * @return {Boolean}
     */
    areDescendantSorted(first: any, second: any): any;
    /**
     * Concat children `nodes` on to the end of the node.
     *
     * @param {List<Node>} nodes
     * @return {Node}
     */
    concatChildren(nodes: any): any;
    /**
     * Decorate all of the text nodes with a `decorator` function.
     *
     * @param {Function} decorator
     * @return {Node}
     */
    decorateTexts(decorator: any): any;
    /**
     * Recursively filter all descendant nodes with `iterator`, depth-first.
     * It is different from `filterDescendants` in regard of the order of results.
     *
     * @param {Function} iterator
     * @return {List<Node>}
     */
    filterDescendantsDeep(iterator: any): any;
    /**
     * Recursively find all descendant nodes by `iterator`. Depth first.
     *
     * @param {Function} iterator
     * @return {Node|Null}
     */
    findDescendantDeep(iterator: any): any;
    /**
     * Get children between two child keys.
     *
     * @param {String} start
     * @param {String} end
     * @return {Node}
     */
    getChildrenBetween(start: any, end: any): any;
    /**
     * Get children between two child keys, including the two children.
     *
     * @param {String} start
     * @param {String} end
     * @return {Node}
     */
    getChildrenBetweenIncluding(start: any, end: any): any;
    /**
     * Get the highest child ancestor of a node by `key`.
     *
     * @param {String} key
     * @return {Node|Null}
     */
    getHighestChild(key: any): any;
    /**
     * Get the highest parent of a node by `key` which has an only child.
     *
     * @param {String} key
     * @return {Node|Null}
     */
    getHighestOnlyChildParent(key: any): any;
    /**
     * Check if the inline nodes are split at a `range`.
     *
     * @param {Selection} range
     * @return {Boolean}
     */
    isInlineSplitAtRange(range: any): any;
}
export default Node;
