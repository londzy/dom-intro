function settingsBill(){


  var callTotal = 0;
  var smsTotal = 0;
  var totall= 0;

  var callTotalSettin = 0;
  var smsTotalSettin = 0;
  var warningLevelSettin = 0;
  var criticalLevelSettin = 0;
  // create a variables that will keep track of all three totals.
  var totalSettings = 0;





  var calculateBill= function(billType){
    if (billType === "call"){
        callTotal += callTotalSettin;
      //console.log(callsTotal);
    }
    if (billType === "sms"){
        smsTotal += smsTotalSettin;
    }
  }
  //create 4 functions
  function getCall() {
    return callTotalSettin;
  }

  function getSms() {
    return smsTotalSettin;
  }

  function getTotalCost() {
    return totalSettings;
  }

  function getWarningLevel() {
    return warningLevelSettin;
  }

  function getCriticalLevel() {
    return criticalLevelSettin;
  }
  //setters


  var setCostCall = function(costs){
  return callTotalSettin=parseFloat(costs);
  }


     var setCostSms= function(sms){
    return smsTotalSettin=parseFloat(sms);
   }

     var setWarning = function(warning){
       warningLevelSettin=parseFloat(warning);
   }


    var setCritical = function(critical){
        criticalLevelSettin=parseFloat(critical);
  }

  //getters
  var getWarning = function(){
    return warningLevelSettin;
  }

  var getCritical = function(){
    return criticalLevelSettin;
  }

   var smsBill = function () {
     return smsTotal;
   }

   var callBill = function () {
     return callTotal;
   }

   var totalBill = function () {
     return smsTotal +callTotal;
   }


  return{
  calculateBill,
  setCostCall,
  setCostSms,
  setWarning,
  setCritical,
  getWarning,
  getCritical,
  smsBill,
  callBill,
  getCall,
  getSms,
  getTotalCost,
  getWarningLevel,
  getCriticalLevel,
totalBill

  }


}

var settingsWithBill = settingsBill();
