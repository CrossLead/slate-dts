/**
 * HTML serializer.
 *
 * @type {Html}
 */
declare class Html {
    /**
     * Create a new serializer with `rules`.
     *
     * @param {Object} options
     *   @property {Array} rules
     *   @property {String|Object|Block} defaultBlock
     *   @property {Function} parseHtml
     */
    constructor(options?: {});
    /**
     * Deserialize pasted HTML.
     *
     * @param {String} html
     * @param {Object} options
     *   @property {Boolean} toRaw
     * @return {State}
     */
    deserialize: (html: any, options?: {}) => any;
    /**
     * Deserialize an array of DOM elements.
     *
     * @param {Array} elements
     * @return {Array}
     */
    deserializeElements: (elements?: any[]) => any[];
    /**
     * Deserialize a DOM element.
     *
     * @param {Object} element
     * @return {Any}
     */
    deserializeElement: (element: any) => any;
    /**
     * Deserialize a `mark` object.
     *
     * @param {Object} mark
     * @return {Array}
     */
    deserializeMark: (mark: any) => any;
    /**
     * Serialize a `state` object into an HTML string.
     *
     * @param {State} state
     * @param {Object} options
     *   @property {Boolean} render
     * @return {String|Array}
     */
    serialize: (state: any, options?: {}) => any;
    /**
     * Serialize a `node`.
     *
     * @param {Node} node
     * @return {String}
     */
    serializeNode: (node: any) => any;
    /**
     * Serialize a `range`.
     *
     * @param {Range} range
     * @return {String}
     */
    serializeRange: (range: any) => any;
    /**
     * Serialize a `string`.
     *
     * @param {String} string
     * @return {String}
     */
    serializeString: (string: any) => any;
    /**
     * Filter out cruft newline nodes inserted by the DOM parser.
     *
     * @param {Object} element
     * @return {Boolean}
     */
    cruftNewline: (element: any) => boolean;
}
export default Html;
