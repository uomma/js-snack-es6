'use strict';


/* Abbiamo un elenco degli studenti di una facoltà, identificati da _id_, _Nome_ e _somma totale_ dei loro voti di esame...
1. Per preparare l’aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo
ES (Marco della Rovere => MARCO DELLA ROVERE); */


const studentsName = ['Marco della Rovere ', 'Paola Cortellessa', 'Andrea Mantegna ', 'Gaia Borromini', 'Luigi Grimaldello', 'Piero della Francesca ', 'Francesca da Polenta'];
/* console.log(students) */

studentsName.forEach((Element, index) => {
    console.log(Element.toUpperCase())
})
 
const studentsGrades = [78, 96, 48, 74, 68, 50, 84];


const studentsId = [213,110,250,145,196,102,120];

studentsId.forEach((Element ,studentsGrades ,index) => {
    if (Element > 120 ) {
        console.log(Element)
    }
    if(studentsGrades >70){
        console.log(studentsGrades)
    }
});