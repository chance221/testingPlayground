/* *** *** *** *** *** *** *** *** *** *** *** NOTES *** *** *** *** *** *** *** *** *** *** *** *** ***

Usually test are grouped in module. so this description could be the name of the module. 

Each test case (or spec) is defined by calling the global it() function.
A spec is also just a function that invokes the code under test and asserts that the expected outcomes are achieved.


/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ***

All test cases follow a similar pattern:
1. Set up any data as needed. Maybe we need an array in a particular format or special string. 
2. Invoke the function to be tested
3.Assert that all the effects of the invocation meet our expectations.

So for the test above we can:
1. Declare two variables to represent the paramters passed into our test
2. Invoke the function and in this case store the output in a variable:

  const c = divide (a, b);

3.Assert that c actually is equal to 2 as we expect.

The last step requires an assertion library. Mocha does not have built 
in assertions but is flexible enough to allow you to use any assertion library that you wish.

Chai is a very popular and easy to use assertion library that is often used alongside Mocha. 
Chai comes with several dialects that all do similar jobs but differ by syntax.

In this course, we will use the expect assertion syntax. 

*** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */ 

const divide = require('../index');
const expect = require ('chai').expect

//invoking a test on our divide function
it('should divide positive integers correctly', () => {
  
  //define inputs
  const a=8;
  const b=4;
  const expectedAnswer = 2;
  //invoke the function
  const actualAnswer = divide(a,b)


  expect(actualAnswer).to.equal(expectedAnswer);

});

it('should thow an error when divided by zero', () =>{
  
  //define inputs

  const a = 8, b = 0;

  //set up function call

  const fn = () => { divide(a, b) };

  //assert that exception is thrown

  expect(fn).to.throw();


})

//This is the same test as above but refactored to minimize code 
describe('Divide function', () => {
  it('should divide positive integers correctly', () => {
    
    expect(divide(8, 4)).to.equal(2);
  });

  it('should throw an error when divide by zero', () => {
    expect(() => { divide(8, 0) }).to.throw();
  });
});

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ***

There are many types of comparisons you can make, including to check to see if values in an array or object are
equal.  this is where .deep comes in

const a = { x: 5}
const b = { x: 5}  

expect(a).to.deep.equal(b)

*** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */




