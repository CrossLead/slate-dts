declare const Character_base: any;
/**
 * Character.
 *
 * @type {Character}
 */
declare class Character extends Character_base {
    /**
     * Create a `Character` with `attrs`.
     *
     * @param {Object|String|Character} attrs
     * @return {Character}
     */
    static create(attrs?: {}): any;
    /**
     * Create a list of `Characters` from `elements`.
     *
     * @param {String|Array<Object|Character|String>|List<Object|Character|String>} elements
     * @return {List<Character>}
     */
    static createList(elements?: any[]): any;
    /**
     * Create a `Character` from a JSON `object`.
     *
     * @param {Object} object
     * @return {Character}
     */
    static fromJSON(object: any): any;
    /**
     * Alias `fromJS`.
     */
    static fromJS: typeof Character.fromJSON;
    /**
     * Check if a `value` is a `Character`.
     *
     * @param {Any} value
     * @return {Boolean}
     */
    static isCharacter(value: any): boolean;
    /**
     * Check if a `value` is a character list.
     *
     * @param {Any} value
     * @return {Boolean}
     */
    static isCharacterList(value: any): any;
    /**
     * Deprecated.
     */
    static createListFromText(string: any): any;
    /**
     * Get the kind.
     *
     * @return {String}
     */
    readonly kind: string;
    /**
     * Return a JSON representation of the character.
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
export default Character;
