// const printSentance = () => {
//   const yourSentance = document.getElementById("sentance").value;
//   document.getElementById("sentanceOutput").innerHTML = yourSentance;
//   printWord();
// };

// const printWord = () => {
//   const yourWord = document.getElementById("word").value;
//   document.getElementById("wordOut").innerHTML = yourWord;
// };
const printSentance = () => {
  const yourSentance = document.getElementById("sentance").value;
  document.getElementById("sentanceOutput").innerHTML = yourSentance;
  const yourWord = document.getElementById("word").value;

  `${yourWord} ${
    yourSentance.includes(yourWord)
      ? (document.getElementById(
          "wordOut"
        ).innerHTML = `Your sentence does include the word: ${yourWord}`)
      : (document.getElementById(
          "wordOut"
        ).innerHTML = `Your sentence doesn't include the word: ${yourWord}`)
  }`;
};

// const wordSearch = (yourSentance, yourWord) => {
//     if yourSentance.contains
// };

// let str = "engineering";
// let toCheck = 'g';
// let count = 0;

// for (int i = 0; i < str.length(); i++) {
//     if (str.charAt(i) == toCheck) {
//         count++;
//     }

//     for ( i=0 ; i<= str.length; i++) {
//         if (str.charAt(i) === toCheck) {
//             count++
//         }
//     }
// }

//Split the sentence into diff words
//Loop through the array of splitted words and check how many times it appears
//increase count, whenever the word appears
