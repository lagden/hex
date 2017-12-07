'use strict'

import test from 'ava'
import {encode, decode} from '../src'

test('Hexadecimal no formato Javascript Unicode', t => {
	const result = encode('Tadashi')
	t.is(result, '\\u0054\\u0061\\u0064\\u0061\\u0073\\u0068\\u0069')
})

test('Texto de um Hexadecimal no formato Javascript Unicode', t => {
	const result = decode('\u0054\u0061\u0064\u0061\u0073\u0068\u0069')
	t.is(result, 'Tadashi')
})

test('Hexadecimal', t => {
	const result = encode('Tadashi', false)
	t.is(result, '54616461736869')
})

test('Texto', t => {
	const result = decode('54616461736869', false)
	t.is(result, 'Tadashi')
})
