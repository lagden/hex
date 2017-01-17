'use strict'

import buble from 'rollup-plugin-buble'

export default {
	entry: 'index.js',
	moduleName: 'hex',
	plugins: [
		buble()
	],
	sourceMap: true,
	targets: [
		{dest: 'dist/index.js', format: 'umd'}
	]
}
