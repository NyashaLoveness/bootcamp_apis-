export default function shortestWord (message) {
    var splitMessage1 = message.split(" "); 
    var shortestWord = splitMessage1[0];
   
     for (var i=0; i<splitMessage1.length; i++) {
       console.log(splitMessage1[i]); 
      if (splitMessage1[i].length <= shortestWord.length) {
      shortestWord = splitMessage1[i];
      }
     }
     return shortestWord;
   }
   //console.log(shortestWord('The dog jumped over the shipyard fence')); 
   
