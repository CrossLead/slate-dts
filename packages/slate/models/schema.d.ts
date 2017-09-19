declare const Schema_base: any;
/**
 * Schema.
 *
 * @type {Schema}
 */
declare class Schema extends Schema_base {
    /**
     * Create a new `Schema` with `attrs`.
     *
     * @param {Object|Schema} attrs
     * @return {Schema}
     */
    static create(attrs?: {}): any;
    /**
     * Check if a `value` is a `Schema`.
     *
     * @param {Any} value
     * @return {Boolean}
     */
    static isSchema(value: any): boolean;
    /**
     * Create a `Schema` from a JSON `object`.
     *
     * @param {Object} object
     * @return {Schema}
     */
    static fromJSON(object: any): any;
    /**
     * Alias `fromJS`.
     */
    static fromJS: typeof Schema.fromJSON;
    /**
     * Get the kind.
     *
     * @return {String}
     */
    readonly kind: string;
    /**
     * Return true if one rule can normalize the document
     *
     * @return {Boolean}
     */
    readonly hasValidators: any;
    /**
     * Return true if one rule can decorate text nodes
     *
     * @return {Boolean}
     */
    readonly hasDecorators: any;
    /**
     * Return the renderer for an `object`.
     *
     * This method is private, because it should always be called on one of the
     * often-changing immutable objects instead, since it will be memoized for
     * much better performance.
     *
     * @param {Mixed} object
     * @return {Component|Void}
     */
    __getComponent(object: any): any;
    /**
     * Return the decorators for an `object`.
     *
     * This method is private, because it should always be called on one of the
     * often-changing immutable objects instead, since it will be memoized for
     * much better performance.
     *
     * @param {Mixed} object
     * @return {Array}
     */
    __getDecorators(object: any): any;
    /**
     * Validate an `object` against the schema, returning the failing rule and
     * value if the object is invalid, or void if it's valid.
     *
     * This method is private, because it should always be called on one of the
     * often-changing immutable objects instead, since it will be memoized for
     * much better performance.
     *
     * @param {Mixed} object
     * @return {Object|Void}
     */
    __validate(object: any): {
        rule: any;
        value: any;
    };
}
export default Schema;
