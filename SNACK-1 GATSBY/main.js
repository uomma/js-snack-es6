'use strict'


const invitati =[ 'Brad Pitt', 'Johnny Depp',  'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin'] 
    

const nuovaListaInvitati = [];

invitati.forEach((Element, i, array) => {

    const dati = {
        nomeTavolo: 'tavolo VIP',
        opsite : Element,
        seat : i+1
    }
    nuovaListaInvitati.push(dati);
});

console.log(nuovaListaInvitati);
