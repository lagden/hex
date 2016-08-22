'use strict';

import test from 'ava';
import {encode, decode} from '../';

test('Deve retornar um texto em hexadecimal', t => {
	const result = encode('Tadashi');
	t.is(result, '\\u0054\\u0061\\u0064\\u0061\\u0073\\u0068\\u0069');
});

test('Deve retornar um texto normal', t => {
	const result = decode('\u0054\u0061\u0064\u0061\u0073\u0068\u0069');
	t.is(result, 'Tadashi');
});
