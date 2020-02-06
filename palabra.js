function findLongestWordLength(str1){
    let words = str1.split(" ");
    let lengthWords = [];

    for (let i = 0; i < words.length; i++){
        let word = words[i];
        lengthWords.push(word.length);
    };
    

   return Math.max(...lengthWords); 


}; 

console.log(findLongestWordLength("hi world"))

module.exports = findLongestWordLength; 