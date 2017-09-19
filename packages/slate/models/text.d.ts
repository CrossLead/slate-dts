declare const Text_base: any;
/**
 * Text.
 *
 * @type {Text}
 */
declare class Text extends Text_base {
    /**
     * Create a new `Text` with `attrs`.
     *
     * @param {Object|Array|List|String|Text} attrs
     * @return {Text}
     */
    static create(attrs?: {}): any;
    /**
     * Create a list of `Texts` from a `value`.
     *
     * @param {Array<Text|Object>|List<Text|Object>} value
     * @return {List<Text>}
     */
    static createList(value?: any[]): any;
    /**
     * Create a `Text` from a JSON `object`.
     *
     * @param {Object|Text} object
     * @return {Text}
     */
    static fromJSON(object: any): any;
    /**
     * Alias `fromJS`.
     */
    static fromJS: typeof Text.fromJSON;
    /**
     * Check if a `value` is a `Text`.
     *
     * @param {Any} value
     * @return {Boolean}
     */
    static isText(value: any): boolean;
    /**
     * Check if a `value` is a list of texts.
     *
     * @param {Any} value
     * @return {Boolean}
     */
    static isTextList(value: any): any;
    /**
     * Deprecated.
     */
    static createFromString(string: any): any;
    /**
     * Deprecated.
     */
    static createFromRanges(ranges: any): any;
    /**
     * Get the node's kind.
     *
     * @return {String}
     */
    readonly kind: string;
    /**
     * Is the node empty?
     *
     * @return {Boolean}
     */
    readonly isEmpty: boolean;
    /**
     * Get the concatenated text of the node.
     *
     * @return {String}
     */
    readonly text: any;
    /**
     * Add a `mark` at `index` and `length`.
     *
     * @param {Number} index
     * @param {Number} length
     * @param {Mark} mark
     * @return {Text}
     */
    addMark(index: any, length: any, mark: any): any;
    /**
     * Derive a set of decorated characters with `decorators`.
     *
     * @param {Array} decorators
     * @return {List<Character>}
     */
    getDecorations(decorators: any): any;
    /**
     * Get the decorations for the node from a `schema`.
     *
     * @param {Schema} schema
     * @return {Array}
     */
    getDecorators(schema: any): any;
    /**
     * Get all of the marks on the text.
     *
     * @return {OrderedSet<Mark>}
     */
    getMarks(): any;
    /**
     * Get all of the marks on the text as an array
     *
     * @return {Array}
     */
    getMarksAsArray(): any;
    /**
     * Get the marks on the text at `index`.
     *
     * @param {Number} index
     * @return {Set<Mark>}
     */
    getMarksAtIndex(index: any): any;
    /**
     * Get a node by `key`, to parallel other nodes.
     *
     * @param {String} key
     * @return {Node|Null}
     */
    getNode(key: any): this;
    /**
     * Derive the ranges for a list of `characters`.
     *
     * @param {Array|Void} decorators (optional)
     * @return {List<Range>}
     */
    getRanges(decorators?: any[]): any[];
    /**
     * Check if the node has a node by `key`, to parallel other nodes.
     *
     * @param {String} key
     * @return {Boolean}
     */
    hasNode(key: any): boolean;
    /**
     * Insert `text` at `index`.
     *
     * @param {Numbder} index
     * @param {String} text
     * @param {String} marks (optional)
     * @return {Text}
     */
    insertText(index: any, text: any, marks: any): any;
    /**
     * Regenerate the node's key.
     *
     * @return {Text}
     */
    regenerateKey(): any;
    /**
     * Remove a `mark` at `index` and `length`.
     *
     * @param {Number} index
     * @param {Number} length
     * @param {Mark} mark
     * @return {Text}
     */
    removeMark(index: any, length: any, mark: any): any;
    /**
     * Remove text from the text node at `index` for `length`.
     *
     * @param {Number} index
     * @param {Number} length
     * @return {Text}
     */
    removeText(index: any, length: any): any;
    /**
     * Return a JSON representation of the text.
     *
     * @param {Object} options
     * @return {Object}
     */
    toJSON(options?: {}): {
        key: any;
        kind: string;
        ranges: any;
    };
    /**
     * Alias `toJS`.
     */
    toJS(options: any): {
        key: any;
        kind: string;
        ranges: any;
    };
    /**
     * Update a `mark` at `index` and `length` with `properties`.
     *
     * @param {Number} index
     * @param {Number} length
     * @param {Mark} mark
     * @param {Object} properties
     * @return {Text}
     */
    updateMark(index: any, length: any, mark: any, properties: any): any;
    /**
     * Validate the text node against a `schema`.
     *
     * @param {Schema} schema
     * @return {Object|Void}
     */
    validate(schema: any): any;
}
export default Text;
