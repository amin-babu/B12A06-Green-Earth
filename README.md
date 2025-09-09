1) What is the difference between var, let, and const?
1. Answer = Before ES6 JS provided var keyword and only has Global and Function scope. From ES6 JS introduced let and const keyword. They prodive block scope in JavaScript. Var can redeclare and reassign. Var prodives Global and Function scope. Var is hoisted and assign undefined data. The let variable can not be redeclared, But can reassign. let prodives block scope and also prodives function scope. Let is hoisted but doesn't define any data. Const can not redeclare and reassign. Must be assigned after declaration. Const prodives block scope and also prodives function scope. It is used for array, objects, function, regexp. Const is hoisted but doesn't define any data.


2) What is the difference between map(), forEach(), and filter()?
2. Answer = map(callback) -> runs the given function for every item in the array and returns a new array with the results, without changing the original array. The callback function takes (value, index, array) as parameters. 
forEach(callback) -> runs the given function once for every item in the array, in order, without returning a new array. The callback function takes (value, index, array) as parameters.
filter(callback) -> keeps only the items that match the condition and returns them in a new array without changing the original array. The callback function takes (value, index, array) as parameters.

3) What are arrow functions in ES6?
3. Answer = Arrow functions are a shorter, cleaner way to write functions in ES6. They use the => syntax instead of the function keyword. The main difference between arrow function and normal fucntion is Normal function → this works from the object. Arrow function → this comes from outside the object. in arrow function no need to write function or return (for single-expression functions)

4) How does destructuring assignment work in ES6?
4. Destructuring in ES6 is a quick way to take values from an array or object and put them into variables. Example: [a, b] = [1, 2] gives a = 1 and b = 2. For objects, {name, age} = user takes the name and age from the object. You can also give default values, skip items, or take the rest of the data. It makes code shorter and easier to read.

5) Explain template literals in ES6. How are they different from string concatenation?
5. Template literals in ES6 are a new way to write strings using backticks (``) instead of quotes. They make it easy to join variables and text without using +. Inside a template literal, you can put variables or expressions using ${ }. For example, `Hello, ${name}` will show the value of name. They are also useful for writing multi-line strings directly, which normal quotes cannot do easily. Compared to string concatenation, template literals are shorter, cleaner, and easier to read.