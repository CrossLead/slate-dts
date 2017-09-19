/**
 * The default plugin.
 *
 * @param {Object} options
 *   @property {Element} placeholder
 *   @property {String} placeholderClassName
 *   @property {Object} placeholderStyle
 * @return {Object}
 */
declare function Plugin(options?: {}): {
    onBeforeChange: (change: any, editor: any) => void;
    onBeforeInput: (e: any, data: any, change: any, editor: any) => void;
    onBlur: (e: any, data: any, change: any) => void;
    onCopy: (e: any, data: any, change: any) => void;
    onCut: (e: any, data: any, change: any, editor: any) => void;
    onDrop: (e: any, data: any, change: any) => void;
    onKeyDown: (e: any, data: any, change: any) => void;
    onPaste: (e: any, data: any, change: any) => void;
    onSelect: (e: any, data: any, change: any) => void;
    render: (props: any, state: any, editor: any) => any;
    schema: {
        rules: {
            match: (node: any) => boolean;
            render: (props: any) => any;
        }[];
    };
};
export default Plugin;
