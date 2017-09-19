/**
 * Generate a key.
 *
 * @return {String}
 */
declare function generateKey(): any;
/**
 * Set a different unique ID generating `function`.
 *
 * @param {Function} func
 */
declare function setKeyGenerator(func: any): void;
/**
 * Reset the key generating function to its initial state.
 */
declare function resetKeyGenerator(): void;
/**
 * Export.
 *
 * @type {Object}
 */
export { generateKey as default, setKeyGenerator, resetKeyGenerator };
