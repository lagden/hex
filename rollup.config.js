'use strict'

import buble from 'rollup-plugin-buble'

export default {
	input: 'index.mjs',
	output: {
		file: 'dist/index.js',
		format: 'umd',
		name: 'hex',
		sourcemap: true,
		strict: true
	},
	plugins: [
		buble()
	]
}
