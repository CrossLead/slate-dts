declare const Range_base: any;
/**
 * Range.
 *
 * @type {Range}
 */
declare class Range extends Range_base {
    /**
     * Create a new `Range` with `attrs`.
     *
     * @param {Object|Range} attrs
     * @return {Range}
     */
    static create(attrs?: {}): any;
    /**
     * Create a list of `Ranges` from `value`.
     *
     * @param {Array<Range|Object>|List<Range|Object>} value
     * @return {List<Range>}
     */
    static createList(value?: any[]): any;
    /**
     * Create a `Range` from a JSON `object`.
     *
     * @param {Object} object
     * @return {Range}
     */
    static fromJSON(object: any): any;
    /**
     * Alias `fromJS`.
     */
    static fromJS: typeof Range.fromJSON;
    /**
     * Check if a `value` is a `Range`.
     *
     * @param {Any} value
     * @return {Boolean}
     */
    static isRange(value: any): boolean;
    /**
     * Check if a `value` is a list of ranges.
     *
     * @param {Any} value
     * @return {Boolean}
     */
    static isRangeList(value: any): any;
    /**
     * Get the node's kind.
     *
     * @return {String}
     */
    readonly kind: string;
    /**
     * Return range as a list of characters
     *
     * @return {List<Character>}
     */
    getCharacters(): any;
    /**
     * Return a JSON representation of the range.
     *
     * @return {Object}
     */
    toJSON(): {
        kind: string;
        marks: any;
        text: any;
    };
    /**
     * Alias `toJS`.
     */
    toJS(): {
        kind: string;
        marks: any;
        text: any;
    };
}
export default Range;
