/**
 * Memoize all of the `properties` on a `object`.
 *
 * @param {Object} object
 * @param {Array} properties
 * @return {Record}
 */
declare function memoize(object: any, properties: any, options?: {}): void;
/**
 * In DEV mode, clears the previously memoized values, globally.
 *
 * @return {Void}
 */
declare function __clear(): void;
/**
 * In DEV mode, enable or disable the use of memoize values, globally.
 *
 * @param {Boolean} enabled
 * @return {Void}
 */
declare function __enable(enabled: any): void;
/**
 * Export.
 *
 * @type {Object}
 */
export { memoize as default, __clear, __enable };
