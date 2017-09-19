declare const History_base: any;
/**
 * History.
 *
 * @type {History}
 */
declare class History extends History_base {
    /**
     * Create a new `History` with `attrs`.
     *
     * @param {Object|History} attrs
     * @return {History}
     */
    static create(attrs?: {}): any;
    /**
     * Create a `History` from a JSON `object`.
     *
     * @param {Object} object
     * @return {History}
     */
    static fromJSON(object: any): any;
    /**
     * Alias `fromJS`.
     */
    static fromJS: typeof History.fromJSON;
    /**
     * Check if a `value` is a `History`.
     *
     * @param {Any} value
     * @return {Boolean}
     */
    static isHistory(value: any): boolean;
    /**
     * Get the kind.
     *
     * @return {String}
     */
    readonly kind: string;
    /**
     * Save an `operation` into the history.
     *
     * @param {Object} operation
     * @param {Object} options
     * @return {History}
     */
    save(operation: any, options?: {}): this;
    /**
     * Return a JSON representation of the history.
     *
     * @return {Object}
     */
    toJSON(): {
        kind: string;
        redos: any;
        undos: any;
    };
    /**
     * Alias `toJS`.
     */
    toJS(): {
        kind: string;
        redos: any;
        undos: any;
    };
}
export default History;
