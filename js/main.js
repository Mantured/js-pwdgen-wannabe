/*
const firstName = prompt('Come ti chiami?');
console.log(firstName);
document.getElementById('firstname').innerHTML = firstName;

const lastName = prompt('Inserisci il tuo cognome?');
console.log(lastName);
document.getElementById('lastname').innerHTML = lastName;

const birthYear = prompt('In che anno sei nato?');
let age = 2022 - parseInt(birthYear);
console.log(birthYear);
document.getElementById('age').innerHTML = age;

const favoriteColor = prompt('Il tuo colore preferito?');
console.log(favoriteColor);
document.getElementById('favoritecolor').innerHTML = favoriteColor;
*/

/* se uso let popsso dichiararla e poi succesivamente assgnarla mentre con const no, la devo dichiarare ed assegnare */
/* sostanzialmente non posso mutare il vaolore di const una volta dichiarato */

/*  primo metodo*/

/* 
const passWord = `${firstName}${lastName}${favoriteColor}${age}`;
console.log(passWord);
document.getElementById('password').innerHTML = `Ciao boomer questa è la tua password monouso (si spera) \: ${passWord}`;
*/

/* secondo metodo  */

/* 
let passWord;
passWord = `${firstName}${lastName}${favoriteColor}${age}`;
console.log(passWord);
document.getElementById('password').innerHTML = `Ciao boomer questa è la tua password monouso (si spera) \: ${passWord}`;
 */

const firstName = prompt('Inserisci il tuo nome');
console.log(firstName);

const lastName = prompt('Inserisci il tuo cognome');
console.log(lastName);

const birthYear = prompt('inserisci l\'anno di nascita');
let age = 2022 - parseInt(birthYear);
console.log(birthYear);

const favoriteColor = prompt('Inserisci il tuo colore preferito');
console.log(favoriteColor);

const passWord = `${firstName}${lastName}${favoriteColor}${age}`;
console.log(passWord);
document.getElementById('password').innerHTML = `Ciao ${firstName} ${lastName}! la tua nuova password super segreta è\: ${passWord}`;

/* oppure in questo caso andiamo ad aggiungere il "ciao.." sull'html */ 
/* document.getElementById('password').innerHTML = firstName + lastName + favoriteColor + age; */