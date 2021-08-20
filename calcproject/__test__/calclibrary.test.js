"use strict";

const { sum } = require("../calclibrary");

describe("Test sum with integers", () => {
	test("Test that 1 + 1 = 2", () => {
		expect(sum(1, 1)).toBe(2);
	});

	test('test 2 + 3 = 5', () => {
		expect(sum(2, 3)).toBe(5);
	});
});

describe('Test sum with integers using test.each', () => {
	const testValues = [
		//a  b  expected 
		[1, 1, 2],
		[2, 3, 5],
		[-2, -4, -6]
	];
	test.each(testValues)('sum(%s, %s) = %s', (a, b, expected) => {
		expect(sum(a, b)).toBe(expected);
	});
});