/**
 * Prevent circular dependencies.
 */
import './block';
import './inline';
declare const Document_base: any;
/**
 * Document.
 *
 * @type {Document}
 */
declare class Document extends Document_base {
    /**
     * Create a new `Document` with `attrs`.
     *
     * @param {Object|Array|List|Text} attrs
     * @return {Document}
     */
    static create(attrs?: {}): any;
    /**
     * Create a `Document` from a JSON `object`.
     *
     * @param {Object|Document} object
     * @return {Document}
     */
    static fromJSON(object: any): any;
    /**
     * Alias `fromJS`.
     */
    static fromJS: typeof Document.fromJSON;
    /**
     * Check if a `value` is a `Document`.
     *
     * @param {Any} value
     * @return {Boolean}
     */
    static isDocument(value: any): boolean;
    /**
     * Get the node's kind.
     *
     * @return {String}
     */
    readonly kind: string;
    /**
     * Check if the document is empty.
     *
     * @return {Boolean}
     */
    readonly isEmpty: boolean;
    /**
     * Get the concatenated text of all the document's children.
     *
     * @return {String}
     */
    readonly text: any;
    /**
     * Return a JSON representation of the document.
     *
     * @param {Object} options
     * @return {Object}
     */
    toJSON(options?: {}): {
        data: any;
        key: any;
        kind: string;
        nodes: any;
    };
    /**
     * Alias `toJS`.
     */
    toJS(options: any): {
        data: any;
        key: any;
        kind: string;
        nodes: any;
    };
}
export default Document;
