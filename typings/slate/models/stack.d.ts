declare const Stack_base: any;
/**
 * Stack.
 *
 * @type {Stack}
 */
declare class Stack extends Stack_base {
    /**
     * Constructor.
     *
     * @param {Object} attrs
     *   @property {Array} plugins
     *   @property {Schema|Object} schema
     *   @property {Function} ...handlers
     */
    static create(attrs?: {}): any;
    /**
     * Check if a `value` is a `Stack`.
     *
     * @param {Any} value
     * @return {Boolean}
     */
    static isStack(value: any): boolean;
    /**
     * Get the kind.
     *
     * @return {String}
     */
    readonly kind: string;
    /**
     * Invoke `render` on all of the plugins in reverse, building up a tree of
     * higher-order components.
     *
     * @param {State} state
     * @param {Editor} editor
     * @param {Object} children
     * @param {Object} props
     * @return {Component}
     */
    render(state: any, editor: any, props: any): any;
    /**
     * Invoke `renderPortal` on all of the plugins, building a list of portals.
     *
     * @param {State} state
     * @param {Editor} editor
     * @return {Array}
     */
    renderPortal(state: any, editor: any): any[];
}
export default Stack;
