// Generated by dts-bundle v0.7.3

declare module "slate-collapse-on-escape" {
  /**
   * A Slate plugin to add soft breaks on return.
   *
   * @param {Object} options
   *   @property {String} toEdge
   * @return {Object}
   */
  function CollapseOnEscape(options?: {}): {
    onKeyDown(event: any, change: any): any;
  };
  export default CollapseOnEscape;
}