const myInformation = require('./information');

console.log(myInformation.nom);
console.log(myInformation.campus);


const  cowsay  =  require ( "cowsay" ) ;

console . log ( cowsay . say ( { 
    text : `Hello,I'm ${myInformation.nom}`,
    e : "oO" , 
    T : "U "
} ) ) ;