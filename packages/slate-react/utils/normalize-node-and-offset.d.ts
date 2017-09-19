/**
 * From a DOM selection's `node` and `offset`, normalize so that it always
 * refers to a text node.
 *
 * @param {Element} node
 * @param {Number} offset
 * @return {Object}
 */
declare function normalizeNodeAndOffset(node: any, offset: any): {
    node: any;
    offset: any;
};
export default normalizeNodeAndOffset;
