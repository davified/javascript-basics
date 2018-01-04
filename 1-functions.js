var helper = require('./test-helper')

/* ---------------------- EXERCISE 1 ---------------------- */
// Define a function that returns 'hello world'
function hello() {
    return 'hello world'
}

helper.test(hello(), 'hello world')

/* ---------------------- EXERCISE 2 ---------------------- */
// Define a function, greet(personName), that returns 'hello specificPersonName'. If no name is supplied, return 'hello world'


// helper.test(greet('tom'), 'hello tom')
// helper.test(greet(), 'hello world')


/* ---------------------- EXERCISE 3 ---------------------- */
// Define a function, add2Numbers(num1, num2), to return the sum of 2 values

// helper.test(add2Numbers(1, 1), 2)
// helper.test(add2Numbers(100, 1), 101)


/* ---------------------- EXERCISE 4 ---------------------- */
// Define a function, invertCase(someString), that returns the input string with its case inverted
// helper.test(invertCase('Hello'), 'hELLO')
// helper.test(invertCase('hELLO wORLD'), 'Hello World')