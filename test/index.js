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
	t.is(result, '0054006100640061007300680069')
})

test('Texto', t => {
	const result = decode('0054006100640061007300680069', false)
	t.is(result, 'Tadashi')
})

test('😃 hex unicode', t => {
	const result = encode('😃')
	t.is(result, '\\ud83d\\ude03')
})

test('😃 ico unicode', t => {
	const result = decode('\uD83D\uDE03')
	t.is(result, '😃')
})

test('😃 hex', t => {
	const result = encode('😃', false)
	t.is(result, 'd83dde03')
})

test('😃 ico', t => {
	const result = decode('D83DDE03', false)
	t.is(result, '😃')
})
