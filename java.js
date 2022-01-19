
let who = ['the dog','my granma','his turtle','my bird'];
let what = ['eat','pissed','crushed','broked'];
let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];

/*
let alewho = Math.floor(Math.random()*who.length);
let alewhat = Math.floor(Math.random()*who.length);
let alewhen = Math.floor(Math.random()*who.length);
*/

// buscar la lógica de math.random / una vez hecho entener el proque multiplica por la longitud y por ultimo "math.floor"

let quien  = who[Math.floor(Math.random()*who.length)];
let que  = what [Math.floor(Math.random()*what.length)];
let cuando = when [Math.floor(Math.random()*when.length)];


let total = `${quien} ${que}  ${cuando}`;

document.querySelector("#excuse").innerHTML = total;

