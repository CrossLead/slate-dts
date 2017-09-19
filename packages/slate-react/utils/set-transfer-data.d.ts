/**
 * Set data with `type` and `content` on a `dataTransfer` object.
 *
 * COMPAT: In Edge, custom types throw errors, so embed all non-standard
 * types in text/plain compound object. (2017/7/12)
 *
 * @param {DataTransfer} dataTransfer
 * @param {String} type
 * @param {String} content
 */
declare function setTransferData(dataTransfer: any, type: any, content: any): void;
export default setTransferData;
