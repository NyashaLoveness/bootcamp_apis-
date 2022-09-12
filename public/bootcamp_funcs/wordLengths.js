export default function wordLengths (message) {
    var splitMessage2 = message.split(" ");
    var length = 0; 
     
     for (var i=0; i<splitMessage2.length; i++) {
       var string = splitMessage2.join(''); 
       //console.log(string);
     }
    return string.length;
   }
   //console.log(wordLengths('The dog jumped over the shipyard fence')); 