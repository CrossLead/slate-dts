/**
 * Prevent circular dependencies.
 */
import './document';
declare const Block_base: any;
/**
 * Block.
 *
 * @type {Block}
 */
declare class Block extends Block_base {
    /**
     * Create a new `Block` from `value`.
     *
     * @param {Object|String|Block} value
     * @return {Block}
     */
    static create(value?: {}): any;
    /**
     * Create a list of `Blocks` from `value`.
     *
     * @param {Array<Block|Object>|List<Block|Object>} value
     * @return {List<Block>}
     */
    static createList(value?: any[]): any;
    /**
     * Create a `Block` from a JSON `object`.
     *
     * @param {Object|Block} object
     * @return {Block}
     */
    static fromJSON(object: any): any;
    /**
     * Alias `fromJS`.
     */
    static fromJS: typeof Block.fromJSON;
    /**
     * Check if a `value` is a `Block`.
     *
     * @param {Any} value
     * @return {Boolean}
     */
    static isBlock(value: any): boolean;
    /**
     * Check if a `value` is a block list.
     *
     * @param {Any} value
     * @return {Boolean}
     */
    static isBlockList(value: any): any;
    /**
     * Get the node's kind.
     *
     * @return {String}
     */
    readonly kind: string;
    /**
     * Check if the block is empty.
     *
     * @return {Boolean}
     */
    readonly isEmpty: boolean;
    /**
     * Get the concatenated text of all the block's children.
     *
     * @return {String}
     */
    readonly text: any;
    /**
     * Return a JSON representation of the block.
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
export default Block;
