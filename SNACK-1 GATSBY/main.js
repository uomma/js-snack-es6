'use strict'
let i = 1;

const invitati = [
    {
        nome: 'Bread Pitt',
        tavolo: 'TavoloVIP',

    },
    {
        nome: 'Jhonny Deep',
        tavolo: 'TavoloVIP',

    },
    {
        nome: 'Lady Gaga',
        tavolo: 'TavoloVIP',

    },
    {
        nome: 'Cristiano Ronaldo',
        tavolo: 'TavoloVIP',

    },
    {
        nome: 'Georgina Rodriguez',
        tavolo: 'TavoloVIP',

    },
    {
        nome: 'Chiara Ferragni',
        tavolo: 'TavoloVIP',

    },
    {
        nome: 'Fedez',
        tavolo: 'TavoloVIP',

    },

    {
        nome: 'George Clooney',
        tavolo: 'TavoloVIP',

    },
    {
        nome: 'Amal Clooney',
        tavolo: 'TavoloVIP',

    },
    {
        nome: 'Maneskin',
        tavolo: 'TavoloVIP',

    }
];
/* console.log(invitati)
*/
const seat = 'il tuo posto a tavola è: ';
invitati.forEach((Element, index) => {
    console.log(Element, seat, index);
});