/**
 * Find the closest ancestor of a DOM `element` that matches a given selector.
 *
 * COMPAT: In IE11, the `Node.closest` method doesn't exist natively, so we
 * have to polyfill it. (2017/09/06)
 *
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/closest#Polyfill
 *
 * @param {Element} node
 * @param {String} selector
 * @return {Element}
 */
declare function findClosestNode(node: any, selector: any): any;
export default findClosestNode;
