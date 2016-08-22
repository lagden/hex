'use strict';

function encode(str) {
	const result = [];
	for (const char of str) {
		const hex = char.charCodeAt(0).toString(16);
		result.push(`\\u${((`000${hex}`).slice(-4))}`);
	}
	return result.join('');
}

function decode(hex) {
	return hex.toString();
}

exports.encode = encode;
exports.decode = decode;
