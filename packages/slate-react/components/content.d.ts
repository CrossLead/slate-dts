import React from 'react';
/**
 * Content.
 *
 * @type {Component}
 */
declare class Content extends React.Component {
    /**
     * Property types.
     *
     * @type {Object}
     */
    static propTypes: {
        autoCorrect: any;
        autoFocus: any;
        children: any;
        className: any;
        editor: any;
        onBeforeInput: any;
        onBlur: any;
        onCopy: any;
        onCut: any;
        onDrop: any;
        onFocus: any;
        onKeyDown: any;
        onKeyUp: any;
        onPaste: any;
        onSelect: any;
        readOnly: any;
        role: any;
        schema: any;
        spellCheck: any;
        state: any;
        style: any;
        tabIndex: any;
        tagName: any;
    };
    /**
     * Default properties.
     *
     * @type {Object}
     */
    static defaultProps: {
        style: {};
        tagName: string;
    };
    /**
     * Constructor.
     *
     * @param {Object} props
     */
    constructor(props: any);
    /**
     * When the editor first mounts in the DOM we need to:
     *
     *   - Update the selection, in case it starts focused.
     *   - Focus the editor if `autoFocus` is set.
     */
    componentDidMount: () => void;
    /**
     * On update, update the selection.
     */
    componentDidUpdate: () => void;
    /**
     * Update the native DOM selection to reflect the internal model.
     */
    updateSelection: () => void;
    /**
     * The React ref method to set the root content element locally.
     *
     * @param {Element} element
     */
    ref: (element: any) => void;
    /**
     * Check if an event `target` is fired from within the contenteditable
     * element. This should be false for edits happening in non-contenteditable
     * children, such as void nodes and other nested Slate editors.
     *
     * @param {Element} target
     * @return {Boolean}
     */
    isInEditor: (target: any) => boolean;
    /**
     * On before input, bubble up.
     *
     * @param {Event} event
     */
    onBeforeInput: (event: any) => void;
    /**
     * On blur, update the selection to be not focused.
     *
     * @param {Event} event
     */
    onBlur: (event: any) => void;
    /**
     * On focus, update the selection to be focused.
     *
     * @param {Event} event
     */
    onFocus: (event: any) => void;
    /**
     * On composition start, set the `isComposing` flag.
     *
     * @param {Event} event
     */
    onCompositionStart: (event: any) => void;
    /**
     * On composition end, remove the `isComposing` flag on the next tick. Also
     * increment the `forces` key, which will force the contenteditable element
     * to completely re-render, since IME puts React in an unreconcilable state.
     *
     * @param {Event} event
     */
    onCompositionEnd: (event: any) => void;
    /**
     * On copy, defer to `onCutCopy`, then bubble up.
     *
     * @param {Event} event
     */
    onCopy: (event: any) => void;
    /**
     * On cut, defer to `onCutCopy`, then bubble up.
     *
     * @param {Event} event
     */
    onCut: (event: any) => void;
    /**
     * On drag end, unset the `isDragging` flag.
     *
     * @param {Event} event
     */
    onDragEnd: (event: any) => void;
    /**
     * On drag over, set the `isDragging` flag and the `isInternalDrag` flag.
     *
     * @param {Event} event
     */
    onDragOver: (event: any) => void;
    /**
     * On drag start, set the `isDragging` flag and the `isInternalDrag` flag.
     *
     * @param {Event} event
     */
    onDragStart: (event: any) => void;
    /**
     * On drop.
     *
     * @param {Event} event
     */
    onDrop: (event: any) => void;
    /**
     * On input, handle spellcheck and other similar edits that don't go trigger
     * the `onBeforeInput` and instead update the DOM directly.
     *
     * @param {Event} event
     */
    onInput: (event: any) => void;
    /**
     * On key down, prevent the default behavior of certain commands that will
     * leave the editor in an out-of-sync state, then bubble up.
     *
     * @param {Event} event
     */
    onKeyDown: (event: any) => void;
    /**
     * On key up, unset the `isShifting` flag.
     *
     * @param {Event} event
     */
    onKeyUp: (event: any) => void;
    /**
     * On paste, determine the type and bubble up.
     *
     * @param {Event} event
     */
    onPaste: (event: any) => void;
    /**
     * On select, update the current state's selection.
     *
     * @param {Event} event
     */
    onSelect: (event: any) => void;
    /**
     * Render the editor content.
     *
     * @return {Element}
     */
    render(): any;
    /**
     * Render a `child` node of the document.
     *
     * @param {Node} child
     * @param {Boolean} isSelected
     * @return {Element}
     */
    renderNode: (child: any, isSelected: any) => any;
}
export default Content;
