'use strict';


/**
 * Perform arithmetic operation on two numbers
 *
 * body Calculate_body 
 * authorization String 
 * returns inline_response_200
 **/
// DefaultService.js or wherever code2 is from
exports.calculate = function(body,operation) {
  // const token = jwt.sign({ data: 'exampleData' }, process.env.JWT_SECRET_KEY, {
  //   algorithm: 'HS256',
  //   expiresIn: '4h', // Token expires in 2 hours
  // });
  return new Promise(function(resolve, reject) {
    // Extracting num1, num2, and operation from the body
    const { num1, num2 } = body;


    let result;
    switch (operation.toLowerCase()) { // Assuming operation is a string
      case 'add':
      case 'addition':
        result = num1 + num2;
        break;
      case 'subtract':
      case 'subtraction':
        result = num1 - num2;
        break;
      case 'multiply':
      case 'multiplication':
        result = num1 * num2;
        break;
      case 'divide':
      case 'division':
        result = num1 / num2;
        break;
      case 'modulus':
        result = num1 % num2;
        break;
      case 'exponentiation':
        result = Math.pow(num1, num2);
        break;
      default:
        // Reject the promise if the operation is not supported
        // This will be caught by the .catch block in your controller
        return reject({ error: 'Invalid operation' });
    }

    // Resolve the promise with the result
    resolve({ result: result });
  });
};


