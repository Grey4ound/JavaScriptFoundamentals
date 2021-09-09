// // console.log('Hello World');
//  let  name = 'Mosh'; // String Literal
//  let age = 30; // Number Literal
//  let isApproved = true; // Boolean Literal
//  let firstName = undefined;
//  let selectedColor = null;
//  let person = {
//     name: 'Mosh',
//     age: 30
//  };

 // Dot Notation
//  person.name = 'John';
// let selection = 'name';
 // Bracket Notation
//  person[selection]= 'Mary';
//  console.log(person.name);
// console.log(name);

// // Cannot be a reserved keyword
// // Should be meaningful
// // Cannot start with a number (1name)
// // Cannot contain a space or hyphen (-)

// let firstName = "Mosh";
// let lastNaame = "Hamedani";

// const interestRate = 0.3;
// interestRate = 1;
// console.log(interestRate);

// Arrays
// let selectedColors = ['red', 'blue'];
// selectedColors[2] = '1';
// console.log(selectedColors.length);

// Performing a task
// function greet(name, lastName) {
//     console.log('Hello ' + name + ' ' + lastName);
// }

// Calculating a value

// function square(number){
//     return number * number;
// }
// console.log(square(2));

// let x = 10;
// let y = 3;

// console.log(x + y);
// Increment (++)
// console.log(x++);
// console.log(x);

// Decrement (--)
// console.log(--x);

// let x = 10;

// x++;
// x +=5;
// x = x * 3;
// x *= 3;

// let x = 1;

// Relational
// console.log(x > 0);
// console.log(x >= 1);
// console.log(x <= 1);
// console.log(x < 1);

// Equality
// console.log(x === 1);
// console.log(x !== 1);


// String Equality (Type + Value)
// console.log(1 === 1);
// console.log('1' === 1);

// Lose Equality (Values)
// console.log(1 == 1);
// console.log('1' == 1);


// If a customer has more 100 points,
// they are a 'gold' customer, otherwise,
// they are a 'silver' customer.

// let points = 90;
// let type = points > 100 ? 'gold' : 'silver';

// console.log(type);

// Logical AND (&&)
// Returns TRUE if both operands are TRUE


// Logical OR (||)
// // Retirms TRUE if one of the operands is TRUE
// let highIncome = false;
// let goodCreditsScore = false;
// let eligibleForLoan = highIncome || goodCreditsScore;
// console.log('Eligible', eligibleForLoan);
// NOT (!)
// let applicationRefused = !eligibleForLoan;
// console.log('Application Refused', applicationRefused);


// Fasy (false)
// undefined
// null
// - 
// false
// ''
// NaN

// Anything that is not Falsy -> Truthy

// Short-circuiting 

// let userColor = undefined;
// let defaultColor = 'blue';
// let currentColor = userColor || defaultColor;

// console.log(currentColor);


// let a = 'red';
// let b = 'blue';
// let c = a;
// a = b;
// b = c;


// console.log(a);
// console.log(b);

// IF

// let hour = 19;


// if (hour >= 6 && hour < 12)
//     console.log('Good morning');
// else if (hour >= 12 && hour < 18)
//     console.log('Good afternoon');
// else
//     console.log('Good evening');

// Switch

// let role = 'guest';

// switch (role){
//     case 'guest':
//         console.log('Guest user');
//         break
//     case 'moderator':
//         console.log('Moderator user');
//         break;
//     default:
//         console.log('Unknown user');
// }

// For

// for (let i = 1; i <= 5; i++){
//     }

// While

// let i = 9;
// while (i <= 5){
//     if (i % 2 !== 0) console.log(i);
//     i++;
// }

// do-while
// let i = 9;
// do {
//     if (i % 2 !== 0) console.log(i);
//      i++;
// } while (i <= 5);


// let i = 0;

// while (i < 5)
// {
//     console.log(i);
//      i++;
// }

// while (true)
// {
// }

// let x = 0;
// do {
// } while (x<5);


// for (let i = 0; i < 10;){}


// for-in
// const person = {
//     name: 'Mosh',
//     age: 30
// };

// for (let key in person)
// console.log(key, person[key]);

// const colors = ['red', 'green', 'blue'];

// for (let index in colors)
// console.log(colors[index]);


// for-of

// const colors = ['red', 'green', 'blue'];

// for (let color of colors)
// console.log(color);

// let i = 0;
// while (i <= 10){
// if (i === 5)
// break;

//     console.log(i);
//     i++;
// }

// function max(a, b){
//     // if (a > b) return a;
//     // return b;

//     return (a > b) ? a : b;
// }

// let number = max (3, 9);
// console.log(number);

// function isLandscape(width, height){
//     return (width > height);
// }

// let isit = isLandscape(2000, 250);
// console.log(isit);


// const output = fizzBuzz(5);
// console.log(output);

// function fizzBuzz(input){
//     if (typeof input !== 'number') return NaN;
//     else if (input !== 0 && input % 3 === 0 && input % 5 === 0) return 'fizzBuzz';
//     else if (input !== 0 && input % 3 === 0) return 'fizz';
//     else  if (input !== 0 && input % 5 === 0) return 'buzz';
//     return input;
// }

// output = checkSpeed(125);

// console.log(output);

// function checkSpeed(speed){
//     let realspeed = Math.floor(speed);
//     let points = 0;
//     const speedLimit = 70;
//     const kmPerPoint = 5;
//     if (typeof speed !== 'number') return NaN;
//     else if (realspeed <= 0) return 'malakies';
//     else if (realspeed < (speedLimit + kmPerPoint)) return 'ok';
//     else if (realspeed > speedLimit){
//         while (realspeed>=(speedLimit + kmPerPoint)){
//             points = points + 1;
//             realspeed = realspeed - kmPerPoint;
//         }
//         if (points >= 12)
//             return 'License suspended';
//         else return points + ' points taken';
//     }
// }



// const output = showNumbers (3);

// function showNumbers(limit){
//     for (let i = 0; i <= limit; i++){
//         const message = (i % 2 === 0) ? 'EVEN' : 'ODD'
//         console.log(i, message);
//     }
// }

// const array = [3, false];
// console.log(countTruthy(array));

// function countTruthy(array){
//     let count = 0;
//     for (let value of array)
//     if (value)
//     count++;
//     return count;
// }


// const movie = {
//     title: 'a',
//     releaseYear: 2018,
//     rating: 4.5,
//     director: 'b'
// };

// showProperties(movie);

// function showProperties(obj){
//     for (let key in obj)
//         if (typeof obj[key] !== 'number') 
//         console.log(key, obj[key]);
// }

// console.log(sum(6));


// function sum(limit){
//     let sum = 0;
//     for (let i = 0; i <= limit; i++)
//         if (i % 3 === 0 || i % 5 === 0)
//             sum += i;

//     return sum;
// }

// const marks = [5, 5, 5];

// console.log(calculateGrade(marks));

// function calculateGrade(marks){
//     let summ = 0;
//     for (let value of marks){
//         if (value)
//         summ += value
//     }
//     let average = summ / 3;
//     if (average <= 59 && average >= 1) return 'F';
//     else if (average <= 69 && average >= 60) return 'D';
//     else if (average <= 79 && average >= 70) return 'C';
//     else if (average <= 89 && average >= 80) return 'B';
//     else if (average <= 100 && average >= 90) return 'A';
//     else return 'malakies'
// }


// showStars(5);

// function showStars(rows){
//     for (let row = 1; row <= rows; row++){
//         let pattern = '';
//         for (let i = 0; i < row; i++)
//         pattern += '*';
//         console.log(pattern);
//     }
// }

// showPrime(20);

// function showPrime(limit){
//     for (let number = 2; number <= limit; number++){
//         if (isPrime(number)) console.log(number);
//     }   
// }
// function isPrime(number){
//     for (let factor = 2; factor < number; factor++){
//             if (number % factor === 0) {
//                 return false;
//             }
//             return isPrime;
//     }
// }


// Object-Oriented-Programming (OOP)

// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     isVisible: true,
//     draw: function(){
//         console.log('draw');
//     }
// };

// Factory Function
// function createCircle(radius, location){
//     return {
//         radius,
//         draw() {
//             console.log('draw');
//         }
//     };
// }

// const circle1 = createCircle(1);
// console.log(circle1);
// const circle2 = createCircle(2);
// console.log(circle2);

// Constructor Function

// function Circle(radius){
//     this.radius = radius;
//     this.draw = function(){
//         console.log('draw');
//     }
// }

// const circle = new Circle(1);

