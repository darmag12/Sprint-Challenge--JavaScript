// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/
// my work starts here

function consume(num1, num2, cb){
  return cb(num1, num2);
}


/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
// add function
function add(number1, number2){
  return number1 + number2;
}
// multiply function
function multiply(number1, number2){
  return number1 * number2;
}
// greeting function
function greeting(firstName, LastName){
return `Hello ${firstName} ${LastName}, nice to meet you!`
}


/* Step 3: Check your work by un-commenting the following calls to consume(): */
  console.log(consume(2,2,add)); // 4
  console.log(consume(10,16,multiply)); // 160
  console.log(consume("Mary","Poppins", greeting)); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: the reason why nestedfunction can access the variable 'internal' is because nestedfunction is in the same function scope as the variable internal


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();