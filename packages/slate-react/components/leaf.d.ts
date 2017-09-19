import React from 'react';
/**
 * Leaf.
 *
 * @type {Component}
 */
declare class Leaf extends React.Component {
    /**
     * Property types.
     *
     * @type {Object}
     */
    static propTypes: {
        block: any;
        editor: any;
        index: any;
        marks: any;
        node: any;
        offset: any;
        parent: any;
        ranges: any;
        schema: any;
        state: any;
        text: any;
    };
    /**
     * Debug.
     *
     * @param {String} message
     * @param {Mixed} ...args
     */
    debug: (message: any, ...args: any[]) => void;
    /**
     * Should component update?
     *
     * @param {Object} props
     * @return {Boolean}
     */
    shouldComponentUpdate(props: any): boolean;
    /**
     * Render the leaf.
     *
     * @return {Element}
     */
    render(): any;
    /**
     * Render the text content of the leaf, accounting for browsers.
     *
     * @param {Object} props
     * @return {Element}
     */
    renderText(props: any): any;
    /**
     * Render all of the leaf's mark components.
     *
     * @param {Object} props
     * @return {Element}
     */
    renderMarks(props: any): any;
}
export default Leaf;
