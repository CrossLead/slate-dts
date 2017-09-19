import React from 'react';
/**
 * Node.
 *
 * @type {Component}
 */
declare class Node extends React.Component {
    /**
     * Property types.
     *
     * @type {Object}
     */
    static propTypes: {
        block: any;
        editor: any;
        isSelected: any;
        node: any;
        parent: any;
        readOnly: any;
        schema: any;
        state: any;
    };
    /**
     * Constructor.
     *
     * @param {Object} props
     */
    constructor(props: any);
    /**
     * Debug.
     *
     * @param {String} message
     * @param {Mixed} ...args
     */
    debug: (message: any, ...args: any[]) => void;
    /**
     * On receiving new props, update the `Component` renderer.
     *
     * @param {Object} props
     */
    componentWillReceiveProps: (props: any) => void;
    /**
     * Should the node update?
     *
     * @param {Object} nextProps
     * @param {Object} state
     * @return {Boolean}
     */
    shouldComponentUpdate: (nextProps: any) => boolean;
    /**
     * On drag start, add a serialized representation of the node to the data.
     *
     * @param {Event} e
     */
    onDragStart: (e: any) => void;
    /**
     * Render.
     *
     * @return {Element}
     */
    render(): any;
    /**
     * Render a `child` node.
     *
     * @param {Node} child
     * @param {Boolean} isSelected
     * @return {Element}
     */
    renderNode: (child: any, isSelected: any) => any;
    /**
     * Render an element `node`.
     *
     * @return {Element}
     */
    renderElement: () => any;
    /**
     * Render a text node.
     *
     * @return {Element}
     */
    renderText: () => any;
    /**
     * Render a single leaf node given a `range` and `offset`.
     *
     * @param {List<Range>} ranges
     * @param {Range} range
     * @param {Number} index
     * @param {Number} offset
     * @return {Element} leaf
     */
    renderLeaf: (ranges: any, range: any, index: any, offset: any) => any;
}
export default Node;
