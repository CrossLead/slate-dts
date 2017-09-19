/**
 * Get caret position from selection point.
 *
 * @param {String} key
 * @param {Number} offset
 * @param {State} state
 * @param {Editor} editor
 * @param {Element} el
 * @return {Object}
 */
declare function getCaretPosition(key: any, offset: any, state: any, editor: any, el: any): {
    node: any;
    offset: any;
};
export default getCaretPosition;
