
const findLongestWordLength = require("./palabra");

describe("la palabra mas grande",() =>{

    it ("should give 0 when str1 is empty",()=>{
        expect (findLongestWordLength("")).toBe(0);
    });

    it ("should give one number when str1 have two words with the longestlength",()=>{
        expect (findLongestWordLength("Hola Nat y Sara")).toBe(4);
    });

    it ("should give str1.length when str1 have only one word",()=>{
        expect (findLongestWordLength("Hola")).toBe(4);

    });
});

//que funcione cuando tiene un str vacio
//que funcione cuando tiene una str con una sola palabra
// que funcione cuando tiene  una str con dos palabras del mismo tamaño 
