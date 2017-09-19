/**
 * Simulator.
 *
 * @type {Simulator}
 */
declare class Simulator {
    /**
     * Create a new `Simulator` with `plugins` and an initial `state`.
     *
     * @param {Object} attrs
     */
    constructor({plugins, state}: {
        plugins: any;
        state: any;
    });
}
export default Simulator;
