
const firstName = prompt('Come ti chiami?');
console.log(firstName);
document.getElementById('firstname').innerHTML = firstName;

const lastName = prompt('inserisci il tuo cognome?');
console.log(lastName);
document.getElementById('lastname').innerHTML = lastName;

const birthYear = prompt('in che anno sei nato?'); 
let age = 2022 - parseInt(birthYear);
console.log(birthYear);
document.getElementById('age').innerHTML = age;

const favoriteColor = prompt('Colore preferito?');
console.log(favoriteColor);
document.getElementById('favoritecolor').innerHTML = favoriteColor;

/* se uso let popsso dichiararla e poi succesivamente assgnarla mentre con const no, la devo dichiarare ed assegnare */
/* sostanzialmente non posso mutare il vaolore di const una volta dichiarato */

/*  primo metodo*/

/* 
const passWord = `${firstName}${lastName}${favoriteColor}${age}`;
console.log(passWord);
document.getElementById('password').innerHTML = `Ciao boomer questa è la tua password monouso (si spera) \: ${passWord}`;
*/

/* secondo metodo  */

let passWord;
passWord = `${firstName}${lastName}${favoriteColor}${age}`;
console.log(passWord);
document.getElementById('password').innerHTML = `Ciao boomer questa è la tua password monouso (si spera) \: ${passWord}`;

