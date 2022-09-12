export default function longestWord (message) {
    var splitMessage = message.split(" "); 
     //console.log(splitMessage); 
    var counter = 0;
    var word = null;
     
     for (var i=0; i<splitMessage.length; i++) {
       //console.log(splitMessage[i]); 
       if (splitMessage[i].length >= counter) {
        counter = splitMessage[i].length;
         //console.log(counter); 
         word = splitMessage[i];
         //console.log(splitMessage); 
       }
     }
   return word
   }
   //console.log(longestWord('The dog jumped over the shipyard fence'));
   //console.log(longestWord('The yellow dog barked loud')); 
   