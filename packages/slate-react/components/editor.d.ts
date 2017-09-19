import React from 'react';
/**
 * Editor.
 *
 * @type {Component}
 */
declare class Editor extends React.Component {
    /**
     * Property types.
     *
     * @type {Object}
     */
    static propTypes: {
        autoCorrect: any;
        autoFocus: any;
        className: any;
        onBeforeChange: any;
        onChange: any;
        placeholder: any;
        placeholderClassName: any;
        placeholderStyle: any;
        plugins: any;
        readOnly: any;
        role: any;
        schema: any;
        spellCheck: any;
        state: any;
        style: any;
        tabIndex: any;
    };
    /**
     * Default properties.
     *
     * @type {Object}
     */
    static defaultProps: {
        autoFocus: boolean;
        autoCorrect: boolean;
        onChange: any;
        plugins: any[];
        readOnly: boolean;
        schema: {};
        spellCheck: boolean;
    };
    /**
     * When constructed, create a new `Stack` and run `onBeforeChange`.
     *
     * @param {Object} props
     */
    constructor(props: any);
    /**
     * When the `props` are updated, create a new `Stack` if necessary.
     *
     * @param {Object} props
     */
    componentWillReceiveProps: (props: any) => void;
    /**
     * Cache a `state` in memory to be able to compare against it later, for
     * things like `onDocumentChange`.
     *
     * @param {State} state
     */
    cacheState: (state: any) => void;
    /**
     * Programmatically blur the editor.
     */
    blur: () => void;
    /**
     * Programmatically focus the editor.
     */
    focus: () => void;
    /**
     * Get the editor's current schema.
     *
     * @return {Schema}
     */
    getSchema: () => any;
    /**
     * Get the editor's current state.
     *
     * @return {State}
     */
    getState: () => any;
    /**
     * Perform a change `fn` on the editor's current state.
     *
     * @param {Function} fn
     */
    change: (fn: any) => void;
    /**
     * On change.
     *
     * @param {Change} change
     */
    onChange: (change: any) => void;
    /**
     * Render the editor.
     *
     * @return {Element}
     */
    render(): any;
}
export default Editor;
