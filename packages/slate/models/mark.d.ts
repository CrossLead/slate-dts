declare const Mark_base: any;
/**
 * Mark.
 *
 * @type {Mark}
 */
declare class Mark extends Mark_base {
    /**
     * Create a new `Mark` with `attrs`.
     *
     * @param {Object|Mark} attrs
     * @return {Mark}
     */
    static create(attrs?: {}): any;
    /**
     * Create a set of marks.
     *
     * @param {Array<Object|Mark>} elements
     * @return {Set<Mark>}
     */
    static createSet(elements: any): any;
    /**
     * Create a dictionary of settable mark properties from `attrs`.
     *
     * @param {Object|String|Mark} attrs
     * @return {Object}
     */
    static createProperties(attrs?: {}): {} | {
        data: any;
        type: any;
    } | {
        type: string;
    };
    /**
     * Create a `Mark` from a JSON `object`.
     *
     * @param {Object} object
     * @return {Mark}
     */
    static fromJSON(object: any): any;
    /**
     * Alias `fromJS`.
     */
    static fromJS: typeof Mark.fromJSON;
    /**
     * Check if a `value` is a `Mark`.
     *
     * @param {Any} value
     * @return {Boolean}
     */
    static isMark(value: any): boolean;
    /**
     * Check if a `value` is a set of marks.
     *
     * @param {Any} value
     * @return {Boolean}
     */
    static isMarkSet(value: any): any;
    /**
     * Get the kind.
     */
    readonly kind: string;
    /**
     * Get the component for the node from a `schema`.
     *
     * @param {Schema} schema
     * @return {Component|Void}
     */
    getComponent(schema: any): any;
    /**
     * Return a JSON representation of the mark.
     *
     * @return {Object}
     */
    toJSON(): {
        data: any;
        kind: string;
        type: any;
    };
    /**
     * Alias `toJS`.
     */
    toJS(): {
        data: any;
        kind: string;
        type: any;
    };
}
export default Mark;
