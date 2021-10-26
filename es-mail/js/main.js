// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere (che hai fatto tu precedentemente), stampa un messaggio appropriato sull’esito del controllo.


// creare variabile

const mail = document.getElementById ("messaggio-mail");

// chiedere la propria mail 

let userMail = prompt("scrivi la tua mail");
console.log(userMail);


// creare array 

const arrMail = ["pinco@hotmail.it","pallo@hotmail.it","pippo@hotmail.it","pluto@hotmail.it"];

// scrivere condizioni

if ( userMail == arrMail){
    mail.innerHTML = "La tua mail è presente.";

}else if ( userMail != arrMail)
{
    mail.innerHTML = "La tua mail è presente.";
}

