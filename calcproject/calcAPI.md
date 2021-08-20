# calc library API

## sum(a,b)

Function returns the sum of two numbers. Numbers are passed to the function as parameters.

Returns the sum on given numbers.

- If parameter is missing, throws an exception: `'parameter missing'`
- If parameters are not numbers, throws an exception: `'only numbers allowed'`

### Test cases

Note that test case descriptions are usually in their own file but for the sake of simplicity, we're keeping everything in one file.

#### Integers

- sum(1,1) return 2
- sum(2,3) return 5
- sum(-2,-4) return -6
- sum(-2,4) return 2
[3,-4- 2],
[0, 0, 0],
[0,-3,-3]

#### Floats
sum(10, 11.5) return 21.5
[2.5, 3, 5.5],
[-2.5, -3, -5.5],
[2.4, -2.5, -0.1]