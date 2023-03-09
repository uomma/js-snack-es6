'use strict'

const bici = [
{
    nome : 'cervelo',
    peso : 10
},

{
    nome : 'Cannondale',
    peso : 5

},
{
    nome: 'Pinarello',
    peso : 7
},
{
    nome: 'Orbea',
    peso : 12 
}];

console.log(bici);


const [{nome:cervelo,peso: valueOf10}, {nome:Cannondale,peso: valueOf5},{nome :Pinarello, peso: valueOf7},{nome:Orbea, peso: valueOf12}] = bici

const pesominore =(Math.min(
  valueOf10, valueOf5, valueOf7,valueOf12,
));


console.log(`il peso minore è ${pesominore} kg ed è di  `)

