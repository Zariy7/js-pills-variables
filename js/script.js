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
console.log(name);
name = 'Marco';
console.log(name);
//'name' viene considerato deprecato perché dichiararlo top-level va a intaccare il fatto che é una variabile nominata specialmente per i browser e VSC ti fa notare questa cosa