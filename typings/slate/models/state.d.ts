declare const State_base: any;
/**
 * State.
 *
 * @type {State}
 */
declare class State extends State_base {
    /**
     * Create a new `State` with `attrs`.
     *
     * @param {Object|State} attrs
     * @param {Object} options
     * @return {State}
     */
    static create(attrs?: {}, options?: {}): any;
    /**
     * Create a `State` from a JSON `object`.
     *
     * @param {Object} object
     * @param {Object} options
     *   @property {Boolean} normalize
     *   @property {Array} plugins
     * @return {State}
     */
    static fromJSON(object: any, options?: {}): any;
    /**
     * Alias `fromJS`.
     */
    static fromJS: typeof State.fromJSON;
    /**
     * Check if a `value` is a `State`.
     *
     * @param {Any} value
     * @return {Boolean}
     */
    static isState(value: any): boolean;
    /**
     * Get the kind.
     *
     * @return {String}
     */
    readonly kind: string;
    /**
     * Are there undoable events?
     *
     * @return {Boolean}
     */
    readonly hasUndos: boolean;
    /**
     * Are there redoable events?
     *
     * @return {Boolean}
     */
    readonly hasRedos: boolean;
    /**
     * Is the current selection blurred?
     *
     * @return {Boolean}
     */
    readonly isBlurred: any;
    /**
     * Is the current selection focused?
     *
     * @return {Boolean}
     */
    readonly isFocused: any;
    /**
     * Is the current selection collapsed?
     *
     * @return {Boolean}
     */
    readonly isCollapsed: any;
    /**
     * Is the current selection expanded?
     *
     * @return {Boolean}
     */
    readonly isExpanded: any;
    /**
     * Is the current selection backward?
     *
     * @return {Boolean} isBackward
     */
    readonly isBackward: any;
    /**
     * Is the current selection forward?
     *
     * @return {Boolean}
     */
    readonly isForward: any;
    /**
     * Get the current start key.
     *
     * @return {String}
     */
    readonly startKey: any;
    /**
     * Get the current end key.
     *
     * @return {String}
     */
    readonly endKey: any;
    /**
     * Get the current start offset.
     *
     * @return {String}
     */
    readonly startOffset: any;
    /**
     * Get the current end offset.
     *
     * @return {String}
     */
    readonly endOffset: any;
    /**
     * Get the current anchor key.
     *
     * @return {String}
     */
    readonly anchorKey: any;
    /**
     * Get the current focus key.
     *
     * @return {String}
     */
    readonly focusKey: any;
    /**
     * Get the current anchor offset.
     *
     * @return {String}
     */
    readonly anchorOffset: any;
    /**
     * Get the current focus offset.
     *
     * @return {String}
     */
    readonly focusOffset: any;
    /**
     * Get the current start text node's closest block parent.
     *
     * @return {Block}
     */
    readonly startBlock: any;
    /**
     * Get the current end text node's closest block parent.
     *
     * @return {Block}
     */
    readonly endBlock: any;
    /**
     * Get the current anchor text node's closest block parent.
     *
     * @return {Block}
     */
    readonly anchorBlock: any;
    /**
     * Get the current focus text node's closest block parent.
     *
     * @return {Block}
     */
    readonly focusBlock: any;
    /**
     * Get the current start text node's closest inline parent.
     *
     * @return {Inline}
     */
    readonly startInline: any;
    /**
     * Get the current end text node's closest inline parent.
     *
     * @return {Inline}
     */
    readonly endInline: any;
    /**
     * Get the current anchor text node's closest inline parent.
     *
     * @return {Inline}
     */
    readonly anchorInline: any;
    /**
     * Get the current focus text node's closest inline parent.
     *
     * @return {Inline}
     */
    readonly focusInline: any;
    /**
     * Get the current start text node.
     *
     * @return {Text}
     */
    readonly startText: any;
    /**
     * Get the current end node.
     *
     * @return {Text}
     */
    readonly endText: any;
    /**
     * Get the current anchor node.
     *
     * @return {Text}
     */
    readonly anchorText: any;
    /**
     * Get the current focus node.
     *
     * @return {Text}
     */
    readonly focusText: any;
    /**
     * Get the characters in the current selection.
     *
     * @return {List<Character>}
     */
    readonly characters: any;
    /**
     * Get the marks of the current selection.
     *
     * @return {Set<Mark>}
     */
    readonly marks: any;
    /**
     * Get the active marks of the current selection.
     *
     * @return {Set<Mark>}
     */
    readonly activeMarks: any;
    /**
     * Get the block nodes in the current selection.
     *
     * @return {List<Block>}
     */
    readonly blocks: any;
    /**
     * Get the fragment of the current selection.
     *
     * @return {Document}
     */
    readonly fragment: any;
    /**
     * Get the inline nodes in the current selection.
     *
     * @return {List<Inline>}
     */
    readonly inlines: any;
    /**
     * Get the text nodes in the current selection.
     *
     * @return {List<Text>}
     */
    readonly texts: any;
    /**
     * Check whether the selection is empty.
     *
     * @return {Boolean}
     */
    readonly isEmpty: boolean;
    /**
     * Create a new `Change` with the current state as a starting point.
     *
     * @param {Object} attrs
     * @return {Change}
     */
    change(attrs?: {}): any;
    /**
     * Deprecated.
     *
     * @return {Change}
     */
    transform(...args: any[]): any;
    /**
     * Return a JSON representation of the state.
     *
     * @param {Object} options
     * @return {Object}
     */
    toJSON(options?: {}): {
        data: any;
        document: any;
        kind: string;
        history: any;
        selection: any;
    };
    /**
     * Alias `toJS`.
     */
    toJS(options: any): {
        data: any;
        document: any;
        kind: string;
        history: any;
        selection: any;
    };
}
export default State;
