var a = prompt('Choisissez un nombre');
var signe = prompt('Choisissez un signe operatoire : +, -, *, /');
var b = prompt('Choisissez un deuxième nombre');var add = Number(a)+Number(b); /* ou var add = a-(-b); */
var sous = a-b;
var div = a/b;
var mult = a*b;if (signe === '-'){
 console.log(sous);
} if (signe === '*'){
 console.log(mult);
}if (signe === '/'){
 console.log(div);
}if (signe === '+' ){
 console.log(add);
 
}else {
console.log('veuillez choisir un signe valide! +, -, * ou /');
}