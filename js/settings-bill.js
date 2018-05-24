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


//totall= settingsWithBill.totalBill();

  callsTotalElement.innerHTML =settingsWithBill.callBill().toFixed(2)
  smsTotalElement.innerHTML =settingsWithBill.smsBill().toFixed(2)
  var totall=settingsWithBill.totalBill().toFixed(2);
  totSettings.innerHTML = totall;

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
