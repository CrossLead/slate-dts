var dts = require('dts-bundle');
const [_, __, package] = process.argv;

dts.bundle({
	name: package,
	main: `packages/${package}/index.d.ts`
});