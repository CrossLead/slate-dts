/**
 * Prevent circular dependencies.
 */
import './document';
declare const Inline_base: any;
/**
 * Inline.
 *
 * @type {Inline}
 */
declare class Inline extends Inline_base {
    /**
     * Create a new `Inline` with `attrs`.
     *
     * @param {Object|String|Inline} attrs
     * @return {Inline}
     */
    static create(attrs?: {}): any;
    /**
     * Create a list of `Inlines` from an array.
     *
     * @param {Array<Inline|Object>|List<Inline|Object>} elements
     * @return {List<Inline>}
     */
    static createList(elements?: any[]): any;
    /**
     * Create a `Inline` from a JSON `object`.
     *
     * @param {Object|Inline} object
     * @return {Inline}
     */
    static fromJSON(object: any): any;
    /**
     * Alias `fromJS`.
     */
    static fromJS: typeof Inline.fromJSON;
    /**
     * Check if a `value` is a `Inline`.
     *
     * @param {Any} value
     * @return {Boolean}
     */
    static isInline(value: any): boolean;
    /**
     * Check if a `value` is a list of inlines.
     *
     * @param {Any} value
     * @return {Boolean}
     */
    static isInlineList(value: any): any;
    /**
     * Get the node's kind.
     *
     * @return {String}
     */
    readonly kind: string;
    /**
     * Check if the inline is empty.
     *
     * @return {Boolean}
     */
    readonly isEmpty: boolean;
    /**
     * Get the concatenated text of all the inline's children.
     *
     * @return {String}
     */
    readonly text: any;
    /**
     * Return a JSON representation of the inline.
     *
     * @param {Object} options
     * @return {Object}
     */
    toJSON(options?: {}): {
        data: any;
        key: any;
        kind: string;
        isVoid: any;
        type: any;
        nodes: any;
    };
    /**
     * Alias `toJS`.
     */
    toJS(options: any): {
        data: any;
        key: any;
        kind: string;
        isVoid: any;
        type: any;
        nodes: any;
    };
}
export default Inline;
