define(['exports'], function (exports) { 'use strict';

function encode(str, jsUnicode) {
	if ( jsUnicode === void 0 ) jsUnicode = true;

	var result = [];
	var len = str.length;
	for (var i = 0; i < len; i++) {
		var hex = str.charAt(i).charCodeAt(0).toString(16);
		if (jsUnicode) {
			result.push(("\\u" + (((("000" + hex)).slice(-4)))));
		} else {
			result.push(hex);
		}
	}
	return result.join('')
}

function decode(hex, jsUnicode) {
	if ( jsUnicode === void 0 ) jsUnicode = true;

	var _hex = hex.toString();
	if (jsUnicode) {
		return _hex
	}
	var result = [];
	var len = _hex.length;
	for (var i = 0; i < len; i += 2) {
		result.push(String.fromCharCode(parseInt(_hex.substr(i, 2), 16)));
	}
	return result.join('')
}

exports.encode = encode;
exports.decode = decode;

Object.defineProperty(exports, '__esModule', { value: true });

});
//# sourceMappingURL=index.amd.js.map
