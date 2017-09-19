import React from 'react';
/**
 * Void.
 *
 * @type {Component}
 */
declare class Void extends React.Component {
    /**
     * Property types.
     *
     * @type {Object}
     */
    static propTypes: {
        block: any;
        children: any;
        editor: any;
        node: any;
        parent: any;
        readOnly: any;
        schema: any;
        state: any;
    };
    /**
     * State
     *
     * @type {Object}
     */
    state: {
        dragCounter: number;
        editable: boolean;
    };
    /**
     * Debug.
     *
     * @param {String} message
     * @param {Mixed} ...args
     */
    debug: (message: any, ...args: any[]) => void;
    /**
     * When one of the wrapper elements it clicked, select the void node.
     *
     * @param {Event} event
     */
    onClick: (event: any) => void;
    /**
     * Increment counter, and temporarily switch node to editable to allow drop events
     * Counter required as onDragLeave fires when hovering over child elements
     *
     * @param {Event} event
     */
    onDragEnter: () => void;
    /**
     * Decrement counter, and if counter 0, then no longer dragging over node
     * and thus switch back to non-editable
     *
     * @param {Event} event
     */
    onDragLeave: () => void;
    /**
     * If dropped item onto node, then reset state
     *
     * @param {Event} event
     */
    onDrop: () => void;
    /**
     * Render.
     *
     * @return {Element}
     */
    render(): any;
    /**
     * Render a fake spacer leaf, which will catch the cursor when it the void
     * node is navigated to with the arrow keys. Having this spacer there means
     * the browser continues to manage the selection natively, so it keeps track
     * of the right offset when moving across the block.
     *
     * @return {Element}
     */
    renderSpacer: () => any;
    /**
     * Render a fake leaf.
     *
     * @return {Element}
     */
    renderLeaf: () => any;
}
export default Void;
