"use strict";

const { sum, subtract } = require("../calclibrary");

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

describe('Testing sum with floats', () => {
	const testValues = [
		[2.5, 3, 5.5],
		[-2.5, -3, -5.5],
		[2.4, -2.5, -0.1]
	];
	test.each(testValues)('sum(%f, %f) = %f', (a, b, expected) => {
		expect(sum(a, b)).toBeCloseTo(expected);
	});
});

// describe('Test missing parameters', () => {
// 	test('sum() throws "parameter missing?"', () => {
// 		expect(() => sum()).toThrow("parameter missing");
// 	});
// });

describe('Test subtraction', () => {
	test('That 1 - 1 = 0', () => {
		expect(subtract(1, 1)).toBe(0);
	})
});