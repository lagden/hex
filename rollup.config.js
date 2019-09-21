'use strict'

export default [{
	input: 'src/index.js',
	output: [
		{
			file: 'dist/index.es.js',
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
