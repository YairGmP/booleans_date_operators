// && - and o conjuncion logica
const check = 4>3 && 10 > 5 //true -  true
const check1 = 4 > 3 && 10 <5 //true && false -> false
const check2 = 4 < 3 && 10 < 5 // false && false -> fale

// || - OR o disyuncion logica 
const check4 = 4 > 3 || 10 >5 // true
const check5 = 4 > 3 || 10 < 5 // true
const check6 = 4 < 3 || 10 < 5 //false

// ! - NOT, el operador nieha verdadero a falso y falso a verdaero
let check7 = 4 > 3 
let check8 = !( 4 > 3 )// false
let isLightOn = true
let isLightOff = !isLightOn
let isMarried = !false

// INCREMENT OPERATORS - ++

// Pre-incremento
let count = 0 
console.log(++count)
console.log(count)

//post-incremonto
let count1 = 0
console.log(count1++)
console.log(count1)//1

//operadores de decremento --

//predecremento 
let count2 = 0
console.log(--count2)
console.log(count2)//-1

//postdecremento
let count3 = 0
console.log(count3--)
console.log(count3)//-1

//TERNARY OPERATORS
let firstcheck = false, secondcheck = false, access = firstcheck ? "Acceso denegado" : secondcheck ? "Accesso denegado" : "Acceso permitido"
console.log(access)// Acceso permitido

let israining = true 
israining
? console.log('You need a rain coat')
: console.log('No need for a rain coat')

israining = false
? console.log('You need a rain coat')
: console.log('No need for a rain coat')