/**
 * Get the data and type from a native data `transfer`.
 *
 * @param {DataTransfer} transfer
 * @return {Object}
 */
declare function getTransferData(transfer: any): {
    files: any;
    fragment: any;
    html: any;
    node: any;
    rich: any;
    text: any;
};
export default getTransferData;
