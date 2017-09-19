/**
 * Change.
 *
 * @type {Change}
 */
declare class Change {
    /**
     * Check if a `value` is a `Change`.
     *
     * @param {Any} value
     * @return {Boolean}
     */
    static isChange(value: any): boolean;
    /**
     * Create a new `Change` with `attrs`.
     *
     * @param {Object} attrs
     *   @property {State} state
     */
    constructor(attrs: any);
    /**
     * Get the kind.
     *
     * @return {String}
     */
    readonly kind: string;
    /**
     * Apply an `operation` to the current state, saving the operation to the
     * history if needed.
     *
     * @param {Object} operation
     * @param {Object} options
     * @return {Change}
     */
    applyOperation(operation: any, options?: {}): this;
    /**
     * Apply a series of `operations` to the current state.
     *
     * @param {Array} operations
     * @param {Object} options
     * @return {Change}
     */
    applyOperations(operations: any, options: any): this;
    /**
     * Call a change `fn` with arguments.
     *
     * @param {Function} fn
     * @param {Mixed} ...args
     * @return {Change}
     */
    call(fn: any, ...args: any[]): this;
    /**
     * Set an operation flag by `key` to `value`.
     *
     * @param {String} key
     * @param {Any} value
     * @return {Change}
     */
    setOperationFlag(key: any, value: any): this;
    /**
     * Unset an operation flag by `key`.
     *
     * @param {String} key
     * @return {Change}
     */
    unsetOperationFlag(key: any): this;
    /**
     * Deprecated.
     *
     * @return {State}
     */
    apply(options?: {}): any;
}
export default Change;
