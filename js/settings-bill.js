// get a reference to the sms or call radio buttons
//var billItemTypeWithSettingsElement= document.querySelector('.billItemTypeWithSettings');
//get a reference to the add button
var addBtn = document.querySelector(".addBtn");
//get a reference to the 'Update settings' button
var updateSettings = document.querySelector(".updateSettings");
var callCostSetting = document.querySelector(".callCostSetting");
var smsCostSetting = document.querySelector(".smsCostSetting");
var warningLevelSetting = document.querySelector(".warningLevelSetting");
var criticalLevelSetting = document.querySelector(".criticalLevelSetting");
var callsTotalElement = document.querySelector(".callTotalSettings");
var smsTotalElement = document.querySelector(".smsTotalSettings");

// get refences to all the settings fields
var totSettings = document.querySelector(".totalSettings");

//create a factory function
function settingsBill() {
  // create a variables that will keep track of all the settings
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
   return callTotal;
 }

 var callBill = function () {
   return smsTotal;
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
getCriticalLevel


}
}


var settingsWithBill = settingsBill();

var update = function(){
settingsWithBill.setCostCall(callCostSetting.value);
settingsWithBill.setCostSms(smsCostSetting.value);
settingsWithBill.setWarning(warningLevelSetting.value);
settingsWithBill.setCritical(criticalLevelSetting.value);

//   if (totall < criticalLevelSettin){
//     totSettings.classList.remove("danger");
//      addBtn.disabled= false;
//   }
//
// if (totall < warningLevelSettin){
//      totSettings.classList.remove("warning");
//
//    }

};
updateSettings.addEventListener('click', update);

var radioBillTotal =function(){
    var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
  if (checkedRadioBtn){
      var billItemType = checkedRadioBtn.value;
     settingsWithBill.calculateBill(billItemType);
  }



     totall= settingsWithBill.totalBill();

  callsTotalElement.innerHTML =settingsWithBill.callBill()
  smsTotalElement.innerHTML =settingsWithBill.smsBill()
  totSettings.innerHTML = totall.toFixed(2);
  if (totall >= settingsWithBill.getWarning()){
     totSettings.classList.add("warning");

 }



 if (totall >= settingsWithBill.getCritical()){
     // adding the danger class will make the text red
     totSettings.classList.add("danger");
     addBtn.disabled= true;
   }


}


addBtn.addEventListener('click', radioBillTotal);
