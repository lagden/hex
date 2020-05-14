'use strict'

export default [{
	input: 'src/index.js',
	output: [
		{
			file: 'dist/index.mjs',
			format: 'es',
			name: 'hex',
			sourcemap: true,
			strict: false
		}, {
			file: 'dist/index.js',
			format: 'umd',
			name: 'hex',
			sourcemap: true,
			strict: true
		}
	]
}]
