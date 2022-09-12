export default function enoughAirtime (usage, airtime) {
    var usageStr = usage.split(",");
    var callNum = 0;
    var smsNum = 0; 
    var dataNum = 0;
    var zeroAirtime = 0; 
    var dataUsage = (callNum * 1.88) + (smsNum * 0.75) + (dataNum * 12);
    var airtimeLeft = airtime - dataUsage; 
     
     for (var i=0; i<usageStr.length; i++) {
     var trimStr = usageStr[i].trim();
       if (trimStr.includes("call")) {
       callNum++; 
         //console.log(callNum); 
       } else if (trimStr.includes("sms")) {
         smsNum++;
         //console.log(smsNum); 
     } else {
       dataNum++; 
      // console.log(dataNum); 
   }
     }
     var dataUsage = (callNum * 1.88) + (smsNum * 0.75) + (dataNum * 12);
     var airtimeLeft = airtime - dataUsage;
    
     if (airtimeLeft > 0) {
     return "R" + airtimeLeft.toFixed(2);
     } else {
       return "R" + zeroAirtime.toFixed(2); 
   }
   }
       //enoughAirtime('call,call,call,data,sms,sms,call,data', 50);