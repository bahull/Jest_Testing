// Begin in the main.test.js file follow the comments.
// Uncomment the code underneath each mark:  // RUN THE FOLLOWING CODE:
//After uncommenting the code, you will the run 'npm run test' in your shell to see the output
//Once the test has been ran, re-comment the code back out

//In the following example we will be looking at the basics of the testing syntax with Jest which is similiar to most major testing Suites.

//In this example you can see we are invoking a function called test that takes two parameters. The first parameter is the unit test name, followed by a callback. The unit test name parameter accepts a string which is
//how you will identify the test in your console. The callback is the actual test itself.

//When this test runs, it will print out a large object I want you to take a look at. This is a console log of the expect functions methods. When you run a test, you will pass a value to the expect function and utilize
//One of it methods to pass/fail the test.

// RUN THE FOLLOWING CODE:
// test("Example test", () => {
//   console.log(expect());
// });

//The following is an example of a basic test of an add function
//Example function to test with.
// You will not typically define unneccessary functions within the test suite unless your are mocking another function.
// Mocking will be described in more depth later in the workshop
function add(a, b) {
  return a + b;
}

// RUN THE FOLLOWING CODE:
// test("Testing the add function with 1 and 2", () => {
//   expect(add(1, 2)).toBe(3);
// });

//As you can see in the above example, our test passed. In this example ya pass the add function invoked with the values 1 and 2 to expect function. The add method returns a value of 3 to the expect function
//which then calls the toBe function which is Matcher that will determine if the result from expect is equal to whatever is passed in to the toBe function.
//We will cover more common matchers in the following files, but you can view them all on the expect object or at https://jestjs.io/docs/en/expect

//Below is an example of a describe blocks. Describe blocks allow you to test your code in subsections. It is common practice to test similiar areas of your code base, or similiar functionality code within the same describe block
//Describe blocks can be used to block scope mocked functions or hooks, but this will be covered at a later time.
//You will also see it neatly groups your tests in the output console as well

// RUN THE FOLLOWING CODE:
// describe("Initial describe set", () => {
//   test("Testing the add function with 1 and 2 first", () => {
//     expect(add(1, 2)).toBe(3);
//   });
//   test("Testing the add fu5ction with 2 and 3 second", () => {
//     expect(add(2, 3)).toBe(5);
//   });
//   test("Testing the add function with 5 and 5 third", () => {
//     expect(add(5, 5)).toBe(10);
//   });
// });

