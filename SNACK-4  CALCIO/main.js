'use strict'


function numeriRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


const squadre = [ 
    {   
    nome: 'Milan',
    puntiFatti: 0,
    falliSubiti: 0
},
{
    nome: 'Juve',
    puntiFatti: 0,
    falliSubiti: 0
},
{
    nome: 'Inter 3',
    puntiFatti: 0,
    falliSubiti: 0
},];


/* console.log(squadre);
 */
squadre.forEach(element => {
    const RNum1 =numeriRandom(10,100);
    const RNum2 =numeriRandom(10,100);

    element.puntiFatti = RNum1;
    element.falliSubiti = RNum2;
});

const bo = squadre.map(({nome, falliSubiti}) => {
    return {nome, falliSubiti}
});


console.log(bo)




 
