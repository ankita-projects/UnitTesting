calc library API
sum(a,b)
Function returns the sum of two numbers. Numbers are passed to the function as parameters.

Returns the sum on given numbers

if parameter is missing, throw an exception: 'parameter is missing'
if parameters are not numbers, throw an exception 'only numbers allowed'
Test cases
Note that test case descriptions are usually in their own file but for the sake of simplicity, we are keeping everything in one file

Integers
sum(1,1) return 2

sum (2,3) return 5

sum (-2,-4) return -6

sum (-2,4) return 2 [2, -4, -2], [0, 0, 0], [0, 3, 3], [3, 0, 3], [0, -3, -3], [-3, 0, -3]

Floats
sum(10, 11.5) return 21.5

[10, 11.5, 21.5], [2.5, 3. 5.5], [-2.5, 3, 0.5], [3, -2.5, 0.5], [-3, 2.5, -0.5], [-2.5, -3, -5.5], [-2.5. -2.5, -5.0], [-2.5, 2.5, 0], [2.4, -2.5, -0.1]

2 Missing parameter
sum() throw an exception 'parameter is missing'
sum(1) throws an exception 'parameter is missing'
sum('a') throws an exception 'parameter is missing'
sum('') throws an exception 'parameter is missing'
3 Parameters are not numbers
sum('a',1) throws an exception 'only numbers allowed'
sum(1, 'a') throws and exception 'only numbers allowed'
sum('a', 'b') throws and exception 'only numbers allowed'
sum ('', '') throws and exception 'only numbers allowed'
sum (null, 1) throws and exception 'parameter is missing'
sum (undefines, 1) throws and exception 'parameter is missing'
subtract(a,b)
Function returns subtraction of two numbers. Numbers are passed to the function as parameters.

Returns the subtraction on given numbers

if parameter is missing, throw an exception: 'parameter is missing'
if parameters are not numbers, throw an exception 'only numbers allowed'
Test cases
Note that test case descriptions are usually in their own file but for the sake of simplicity, we are keeping everything in one file

Integers
subtract(1,1) return 0

subtract (2,3) return -1

subtract (-2,-4) return 2

subtract (-2,4) return -6 [2, -4, 6], [0, 0, 0], [0, 3, -3], [3, 0, 0], [0, -3, 3], [-3, 0, 3]

Floats
subtract(10, 11.5) return -1.5

[10, 11.5, -1.5], [2.5, 3. -0.5], [-2.5, 3, -5.5], [3, -2.5, 5.5], [-3, 2.5, -5.5], [-2.5, -3, 5.5], [-2.5. -2.5, 5.0], [-2.5, 2.5, 0], [2.4, -2.5, 4.9]

2 Missing parameter
subtract() throw an exception 'parameter is missing'
subtract(1) throws an exception 'parameter is missing'
subtract('a') throws an exception 'parameter is missing'
subtract('') throws an exception 'parameter is missing'
3 Parameters are not numbers
subtract('a',1) throws an exception 'only numbers allowed'
subtract(1, 'a') throws and exception 'only numbers allowed'
subtract('a', 'b') throws and exception 'only numbers allowed'
subtract ('', '') throws and exception 'only numbers allowed'
subtract (null, 1) throws and exception 'parameter is missing'
subtract (undefined, 1) throws and exception 'parameter is missing'
Division
function divide(a,b) return a/b.

problems:

0/0 =>NaN 2/0 => Infinity -2/0 => -Infinity Infinity / Infinity =>NaN -Infinity / Infinity =>NaN Infinity / -Infinity =>NaN

Test values: [0, 0, Number.NaN], [2, 0, Number.POSITIVE_INFINITY], [-2, 0, Number:NEGATIVE_INFINITY], [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY, Number.NaN]
