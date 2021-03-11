'use strict'

const config = [{
	input: 'src/index.js',
	output: [
		{
			file: 'dist/index.js',
			format: 'es',
			name: 'hex',
			sourcemap: true,
			strict: false
		}, {
			file: 'dist/index.umd.js',
			format: 'umd',
			name: 'hex',
			sourcemap: true,
			strict: true
		}
	]
}]

export default config
