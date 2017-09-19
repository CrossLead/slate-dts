/**
 * Create a Slate hyperscript function with `options`.
 *
 * @param {Object} options
 * @return {Function}
 */
declare function createHyperscript(options?: {}): (tagName: any, attributes: any, ...children: any[]) => any;
declare const _default: (tagName: any, attributes: any, ...children: any[]) => any;
export default _default;
export { createHyperscript };
