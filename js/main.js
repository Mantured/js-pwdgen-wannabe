
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


const passWord = `${firstName}${lastName}${favoriteColor}${age}`;
console.log(passWord);
document.getElementById('password').innerHTML = passWord;
