/**
 * Extends a DOM `selection` to a given `el` and `offset`.
 *
 * COMPAT: In IE11, `selection.extend` doesn't exist natively, so we have to
 * polyfill it with this. (2017/09/06)
 *
 * https://gist.github.com/tyler-johnson/0a3e8818de3f115b2a2dc47468ac0099
 *
 * @param {Selection} selection
 * @param {Element} el
 * @param {Number} offset
 * @return {Selection}
 */
declare function extendSelection(selection: any, el: any, offset: any): any;
export default extendSelection;
