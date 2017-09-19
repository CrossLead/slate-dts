declare const Selection_base: any;
/**
 * Selection.
 *
 * @type {Selection}
 */
declare class Selection extends Selection_base {
    /**
     * Create a new `Selection` with `attrs`.
     *
     * @param {Object|Selection} attrs
     * @return {Selection}
     */
    static create(attrs?: {}): any;
    /**
     * Create a dictionary of settable selection properties from `attrs`.
     *
     * @param {Object|String|Selection} attrs
     * @return {Object}
     */
    static createProperties(attrs?: {}): {} | {
        anchorKey: any;
        anchorOffset: any;
        focusKey: any;
        focusOffset: any;
        isBackward: any;
        isFocused: any;
        marks: any;
    };
    /**
     * Create a `Selection` from a JSON `object`.
     *
     * @param {Object} object
     * @return {Selection}
     */
    static fromJSON(object: any): any;
    /**
     * Alias `fromJS`.
     */
    static fromJS: typeof Selection.fromJSON;
    /**
     * Check if a `value` is a `Selection`.
     *
     * @param {Any} value
     * @return {Boolean}
     */
    static isSelection(value: any): boolean;
    /**
     * Get the kind.
     *
     * @return {String}
     */
    readonly kind: string;
    /**
     * Check whether the selection is blurred.
     *
     * @return {Boolean}
     */
    readonly isBlurred: boolean;
    /**
     * Check whether the selection is collapsed.
     *
     * @return {Boolean}
     */
    readonly isCollapsed: boolean;
    /**
     * Check whether the selection is expanded.
     *
     * @return {Boolean}
     */
    readonly isExpanded: boolean;
    /**
     * Check whether the selection is forward.
     *
     * @return {Boolean}
     */
    readonly isForward: boolean;
    /**
     * Check whether the selection's keys are set.
     *
     * @return {Boolean}
     */
    readonly isSet: boolean;
    /**
     * Check whether the selection's keys are not set.
     *
     * @return {Boolean}
     */
    readonly isUnset: boolean;
    /**
     * Get the start key.
     *
     * @return {String}
     */
    readonly startKey: any;
    /**
     * Get the start offset.
     *
     * @return {String}
     */
    readonly startOffset: any;
    /**
     * Get the end key.
     *
     * @return {String}
     */
    readonly endKey: any;
    /**
     * Get the end offset.
     *
     * @return {String}
     */
    readonly endOffset: any;
    /**
     * Check whether anchor point of the selection is at the start of a `node`.
     *
     * @param {Node} node
     * @return {Boolean}
     */
    hasAnchorAtStartOf(node: any): boolean;
    /**
     * Check whether anchor point of the selection is at the end of a `node`.
     *
     * @param {Node} node
     * @return {Boolean}
     */
    hasAnchorAtEndOf(node: any): boolean;
    /**
     * Check whether the anchor edge of a selection is in a `node` and at an
     * offset between `start` and `end`.
     *
     * @param {Node} node
     * @param {Number} start
     * @param {Number} end
     * @return {Boolean}
     */
    hasAnchorBetween(node: any, start: any, end: any): any;
    /**
     * Check whether the anchor edge of a selection is in a `node`.
     *
     * @param {Node} node
     * @return {Boolean}
     */
    hasAnchorIn(node: any): any;
    /**
     * Check whether focus point of the selection is at the end of a `node`.
     *
     * @param {Node} node
     * @return {Boolean}
     */
    hasFocusAtEndOf(node: any): boolean;
    /**
     * Check whether focus point of the selection is at the start of a `node`.
     *
     * @param {Node} node
     * @return {Boolean}
     */
    hasFocusAtStartOf(node: any): boolean;
    /**
     * Check whether the focus edge of a selection is in a `node` and at an
     * offset between `start` and `end`.
     *
     * @param {Node} node
     * @param {Number} start
     * @param {Number} end
     * @return {Boolean}
     */
    hasFocusBetween(node: any, start: any, end: any): any;
    /**
     * Check whether the focus edge of a selection is in a `node`.
     *
     * @param {Node} node
     * @return {Boolean}
     */
    hasFocusIn(node: any): any;
    /**
     * Check whether the selection is at the start of a `node`.
     *
     * @param {Node} node
     * @return {Boolean}
     */
    isAtStartOf(node: any): boolean;
    /**
     * Check whether the selection is at the end of a `node`.
     *
     * @param {Node} node
     * @return {Boolean}
     */
    isAtEndOf(node: any): boolean;
    /**
     * Focus the selection.
     *
     * @return {Selection}
     */
    focus(): any;
    /**
     * Blur the selection.
     *
     * @return {Selection}
     */
    blur(): any;
    /**
     * Unset the selection.
     *
     * @return {Selection}
     */
    deselect(): any;
    /**
     * Flip the selection.
     *
     * @return {Selection}
     */
    flip(): any;
    /**
     * Move the anchor offset `n` characters.
     *
     * @param {Number} n (optional)
     * @return {Selection}
     */
    moveAnchor(n?: number): any;
    /**
     * Move the anchor offset `n` characters.
     *
     * @param {Number} n (optional)
     * @return {Selection}
     */
    moveFocus(n?: number): any;
    /**
     * Move the selection's anchor point to a `key` and `offset`.
     *
     * @param {String} key
     * @param {Number} offset
     * @return {Selection}
     */
    moveAnchorTo(key: any, offset: any): any;
    /**
     * Move the selection's focus point to a `key` and `offset`.
     *
     * @param {String} key
     * @param {Number} offset
     * @return {Selection}
     */
    moveFocusTo(key: any, offset: any): any;
    /**
     * Move the selection to `anchorOffset`.
     *
     * @param {Number} anchorOffset
     * @return {Selection}
     */
    moveAnchorOffsetTo(anchorOffset: any): any;
    /**
     * Move the selection to `focusOffset`.
     *
     * @param {Number} focusOffset
     * @return {Selection}
     */
    moveFocusOffsetTo(focusOffset: any): any;
    /**
     * Move the selection to `anchorOffset` and `focusOffset`.
     *
     * @param {Number} anchorOffset
     * @param {Number} focusOffset (optional)
     * @return {Selection}
     */
    moveOffsetsTo(anchorOffset: any, focusOffset?: any): any;
    /**
     * Move the focus point to the anchor point.
     *
     * @return {Selection}
     */
    moveToAnchor(): any;
    /**
     * Move the anchor point to the focus point.
     *
     * @return {Selection}
     */
    moveToFocus(): any;
    /**
     * Move the selection's anchor point to the start of a `node`.
     *
     * @param {Node} node
     * @return {Selection}
     */
    moveAnchorToStartOf(node: any): any;
    /**
     * Move the selection's anchor point to the end of a `node`.
     *
     * @param {Node} node
     * @return {Selection}
     */
    moveAnchorToEndOf(node: any): any;
    /**
     * Move the selection's focus point to the start of a `node`.
     *
     * @param {Node} node
     * @return {Selection}
     */
    moveFocusToStartOf(node: any): any;
    /**
     * Move the selection's focus point to the end of a `node`.
     *
     * @param {Node} node
     * @return {Selection}
     */
    moveFocusToEndOf(node: any): any;
    /**
     * Move to the entire range of `start` and `end` nodes.
     *
     * @param {Node} start
     * @param {Node} end (optional)
     * @return {Selection}
     */
    moveToRangeOf(start: any, end?: any): any;
    /**
     * Normalize the selection, relative to a `node`, ensuring that the anchor
     * and focus nodes of the selection always refer to leaf text nodes.
     *
     * @param {Node} node
     * @return {Selection}
     */
    normalize(node: any): any;
    /**
     * Return a JSON representation of the selection.
     *
     * @return {Object}
     */
    toJSON(): {
        anchorKey: any;
        anchorOffset: any;
        focusKey: any;
        focusOffset: any;
        isBackward: any;
        isFocused: any;
        kind: string;
        marks: any;
    };
    /**
     * Alias `toJS`.
     */
    toJS(): {
        anchorKey: any;
        anchorOffset: any;
        focusKey: any;
        focusOffset: any;
        isBackward: any;
        isFocused: any;
        kind: string;
        marks: any;
    };
    /**
     * Unset the selection.
     *
     * @return {Selection}
     */
    unset(): any;
    /**
     * Move the selection forward `n` characters.
     *
     * @param {Number} n (optional)
     * @return {Selection}
     */
    moveForward(n?: number): any;
    /**
     * Move the selection backward `n` characters.
     *
     * @param {Number} n (optional)
     * @return {Selection}
     */
    moveBackward(n?: number): any;
    /**
     * Move the anchor offset `n` characters.
     *
     * @param {Number} n (optional)
     * @return {Selection}
     */
    moveAnchorOffset(n?: number): any;
    /**
     * Move the focus offset `n` characters.
     *
     * @param {Number} n (optional)
     * @return {Selection}
     */
    moveFocusOffset(n?: number): any;
    /**
     * Move the start offset `n` characters.
     *
     * @param {Number} n (optional)
     * @return {Selection}
     */
    moveStartOffset(n?: number): any;
    /**
     * Move the focus offset `n` characters.
     *
     * @param {Number} n (optional)
     * @return {Selection}
     */
    moveEndOffset(n?: number): any;
    /**
     * Extend the focus point forward `n` characters.
     *
     * @param {Number} n (optional)
     * @return {Selection}
     */
    extendForward(n?: number): any;
    /**
     * Extend the focus point backward `n` characters.
     *
     * @param {Number} n (optional)
     * @return {Selection}
     */
    extendBackward(n?: number): any;
    /**
     * Move the selection to `anchorOffset` and `focusOffset`.
     *
     * @param {Number} anchorOffset
     * @param {Number} focusOffset (optional)
     * @return {Selection}
     */
    moveToOffsets(anchorOffset: any, focusOffset?: any): any;
}
export default Selection;
