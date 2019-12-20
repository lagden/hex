'use strict'

export function encode(str, unicode = true) {
	const result = []
	const len = str.length
	for (let i = 0; i < len; i++) {
		const hex = str[i].charCodeAt().toString(16).padStart(4, 0)
		result.push(unicode ? `\\u${hex}` : hex)
	}

	return result.join('')
}

export function decode(hex, unicode = true) {
	const _hex = hex.toString()
	if (unicode) {
		return _hex
	}

	const result = []
	const len = _hex.length
	for (let i = 0; i < len; i += 4) {
		result.push(String.fromCharCode(parseInt(_hex.slice(i, i + 4), 16)))
	}

	return result.join('')
}
