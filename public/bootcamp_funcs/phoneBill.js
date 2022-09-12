export default function totalPhoneBill(account){
    var calls = 0; 
    var sms = 0; 
      
    var splitAccount = account.split(",");
    //console.log(splitAccount);
    
    for(var i = 0; i < splitAccount.length; i++){
        //console.log(splitAccount[i]);
      var trimString = splitAccount[i].trim(); 
      //console.log(trimString);
      if (trimString.startsWith('ca')) {
        calls++  
          } else if(trimString.startsWith('sm')) {
            sms++
    }  
  }
    console.log("Calls:" + calls);  
    var answer = calls*2.75 + sms*0.65;
    return "R" + answer.toFixed(2); 
  }
    