'use strict'

import buble from 'rollup-plugin-buble'

export default {
	input: 'src/index.js',
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
