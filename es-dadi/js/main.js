/* Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

// creo la variabile richimando il div

let  messLacio = document.getElementById ("risultato-lancio");

// creare un numero ramdom da 1 a 6

const numUtente = Math.floor(Math.random()*6+1);
console.log(numUtente);

const numPc = Math.floor(Math.random()*6+1);
console.log(numPc);

// scrivo le condizioni per cambiare il messaggio in base al numero

if ( numUtente > numPc){
    messLacio.innerHTML = " hai vinto";
}else if ( numUtente < numPc){
    messLacio.innerHTML = " hai perso";
}else if (numUtente === numPc){
    messLacio.innerHTML = " pareggio";
}




