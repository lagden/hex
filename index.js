'use strict';

function encode(str) {
	const result = [];
	const len = str.length;
	for (let i = 0; i < len; i++) {
		const hex = str.charAt(i).charCodeAt(0).toString(16);
		result.push(`\\u${((`000${hex}`).slice(-4))}`);
	}
	return result.join('');
}

function decode(hex) {
	return hex.toString();
}

exports.encode = encode;
exports.decode = decode;
