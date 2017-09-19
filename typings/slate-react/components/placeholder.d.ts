import React from 'react';
/**
 * Placeholder.
 *
 * @type {Component}
 */
declare class Placeholder extends React.Component {
    /**
     * Property types.
     *
     * @type {Object}
     */
    static propTypes: {
        children: any;
        className: any;
        firstOnly: any;
        node: any;
        parent: any;
        state: any;
        style: any;
    };
    /**
     * Default properties.
     *
     * @type {Object}
     */
    static defaultProps: {
        firstOnly: boolean;
    };
    /**
     * Should the placeholder update?
     *
     * @param {Object} props
     * @param {Object} state
     * @return {Boolean}
     */
    shouldComponentUpdate: (props: any, state: any) => boolean;
    /**
     * Is the placeholder visible?
     *
     * @return {Boolean}
     */
    isVisible: () => boolean;
    /**
     * Render.
     *
     * If the placeholder is a string, and no `className` or `style` has been
     * passed, give it a default style of lowered opacity.
     *
     * @return {Element}
     */
    render(): any;
}
export default Placeholder;
