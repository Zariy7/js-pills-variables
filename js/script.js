// 1
let number = 100;
console.log(number);

// 2
const PI = 3.14;
console.log(PI);

// 2/B - non succede niente, PI è una costante che non viene sovrascritta;
//PI = 3.1416;
// il riassegnamento di un valore a PI blocca il codice e non permette di continuare i prossimi calcoli, da errore

// 2/C
let radius = 8;
let circle = 8 * 2 * PI;
console.log(circle);

// 3
let name;
name = 'Carlo';
//console.log(name);
name = 'Marco';
console.log(name);
//'name' viene considerato deprecato perché dichiararlo top-level va a intaccare il fatto che é una variabile nominata specialmente per i browser e VSC ti fa notare questa cosa

// 4
let greet = 'Ciao, Mondo!';
console.log(greet);

// 4/B
//let greet = 'Come stai, Mondo?';
//console.log(greet);
//non puoi ridichiarare una variabile

// 4/C
/* greet = greet + " " + "Come stai?";
console.log(greet); */
greet = `${greet} Come stai?`;
console.log(greet);

/* CONDITIONALS */

/* let comparison;
let str1 = prompt('Inserire stringa:');
let str2 = prompt('Inserire stringa:');

if (str1 === str2){
    comparison = true;
}
else{
    comparison = false;
}

console.log(comparison); */

let num1 = 1;
let num2 = '1';
let comparison;

if (num1 == num2){
    comparison = true;
}
else{
    comparison = false;
}

console.log(comparison);

for(let i=1; i<=42; i++){
    console.log(i);
}

for(let i=42; i>=1; i--){
    console.log(i);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(numbers);

let fruits = ['mela', 'banana', 'pesca', 'pera', 'albicocca', 'mango', 'kiwi', 'papaya'];
console.log(fruits);
console.log(fruits.length);

let num = parseInt(prompt('Inserisci un numero per la sequenza di Fibbonacci.'));

let a = 0, b = 1, c;
let count = 0;

while(count < num){
    c = a + b;
    a = b;
    b = c;
    console.log(c);
    count++;
}

function HelloWorld(){
    console.log('Ciao Mondo!');
}

HelloWorld();

function Sum(x, y){
    let sum = x + y;
    return sum;
}

let result = Sum(10, 9);
console.log(result);

function getOneStringFromTwo(x, y){
    return x + y;
}

let stringOne = "Hello ";
let stringTwo =  "World!";

console.log(getOneStringFromTwo(stringOne, stringTwo));