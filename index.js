'use strict'

function encode(str, jsUnicode = true) {
	const result = []
	const len = str.length
	for (let i = 0; i < len; i++) {
		const hex = str.charAt(i).charCodeAt(0).toString(16)
		if (jsUnicode) {
			result.push(`\\u${((`000${hex}`).slice(-4))}`)
		} else {
			result.push(hex)
		}
	}
	return result.join('')
}

function decode(hex, jsUnicode = true) {
	const _hex = hex.toString()
	if (jsUnicode) {
		return _hex
	}
	const result = []
	const len = _hex.length
	for (let i = 0; i < len; i += 2) {
		result.push(String.fromCharCode(parseInt(_hex.substr(i, 2), 16)))
	}
	return result.join('')
}

export {
	encode,
	decode
}
