/* 1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use
the typeof operator to check different data types.*/

let firsName = 'Yair';
let lastName = 'Guzman';
let country = 'Mexico';
let city = 'Playa del Carmen';
let age = 23;
let isMarried_1 = false;
let year = 2024;

console.log(typeof firsName); // String
console.log(typeof lastName); // String
console.log(typeof country); // String
console.log(typeof city); // String
console.log(typeof age); // Number
console.log(typeof isMarried_1); // Boolean
console.log(typeof year); //Number

//2.- Check if type of '10' is equal to 10

console.log(typeof '10' === typeof 10); // False

//3.- Check if parseInt('9.8') is equal to 10

console.log(parseInt('9.8') === 10); //False

/* 4.- Boolean value is either true or false.
i.- Write three JavaScript statement which provide truthy value.
ii.- Write three JavaScript statement which provide falsy value. */

// truthy values
console.log( 23 === age); //true
console.log(5 < 10); //true
console.log("12" != 0); //true

// falsy values

console.log("" === age); // false
console.log(9 > 16); //false
console.log(12 == 6); //false

/* 5. Figure out the result of the following comparison expression first without using console.log(). After
you decide the result confirm it using console.log() */

4 > 3 //true
4 >= 3 //true
4 < 3 //false
4 <= 3 //false
4 == 4 //true
4 === 4 //true
4 != 4 //false
4 !== 4 //false
4 != '4' //false
4 == '4' //true
4 === '4' //false

console.log(4 > 3); // true
console.log(4 >= 3); // true
console.log(4 < 3); // false
console.log(4 <= 3); // false
console.log(4 == 4); // true
console.log(4 === 4); // true
console.log(4 != 4); // false
console.log(4 !== 4); // false
console.log(4 != '4'); // false
console.log(4 == '4'); // true
console.log(4 === '4'); // false

//6.- Use the Date object to do the following activities
const now = new Date();

//i. What is the year today?
console.log(now.getFullYear());

//ii. What is the month today as a number?
console.log(now.getMonth());

//iii. What is the date today?
console.log(now.getDate());

//iv. What is the day today as a number?
console.log(now.getDay());

//v. What is the hours now?
console.log(now.getHours());

//vi. What is the minutes now?
console.log(now.getMinutes());

//vii. Find out the numbers of seconds elapsed from January 1, 1970 to now.
const allSeconds = Date.now() 
console.log(allSeconds)

/*7.- Write a script that prompt the user to enter base and height of the triangle and calculate an area of a
triangle (area = 0.5 x b x h).
Enter base: 20
Enter height: 10
The area of the triangle is 100 */

let base = prompt("Enter base: "); //para ingresar la base
let height = prompt("Enter height: "); //para ingresar la altura
let area = 0.5 * base * height; //operacion realizada para el area

console.log(`The area of the triangle is:  ${area}`); //resultado

/* 8.- Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate
the perimeter of triangle (perimeter = a + b + c)
Enter side a: 5
Enter side b: 4
Enter side c: 3
The perimeter of the triangle is 12 */

let side_A = prompt("Enter side a:"); //para ingresar el lado a 
let side_B = prompt("Enter side b:"); //para ingresar el lado b
let side_C = prompt("Enter side c:"); //para ingresar el lado c
let perimeter = Number(side_A) + Number(side_B) + Number(side_C); //operacion para el perimetro
console.log(`The perimeter of the triangle is ${perimeter}`); //resultado




console.log('by Yair Guzman')
