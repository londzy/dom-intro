// get a reference to the sms or call radio buttons
var billItemTypeWithSettings = document.querySelector('.billItemTypeWithSettings');
var callTotal = document.querySelector(".callTotalSettings");
var smsTotal = document.querySelector(".smsTotalSettings");

// get refences to all the settings fields
var totSettings = document.querySelector(".totalSettings");
console.log(totSettings);

//get a reference to the add button
var addBtn = document.querySelector(".addBtn");
//get a reference to the 'Update settings' button
var updateSettings = document.querySelector(".updateSettings");
var callCostSetting = document.querySelector(".callCostSetting");
var smsCostSetting = document.querySelector(".smsCostSetting");
var warningLevelSetting = document.querySelector(".warningLevelSetting");
var criticalLevelSetting = document.querySelector(".criticalLevelSetting");

// create a variables that will keep track of all the settings
var callTotal = 0;
var smsTotal = 0;
var total= 0;

var callCost= 0;
var smsCost = 0;
var warningLevelSetting = 0;
var criticalLevelSettin = 0;

//updateSettings.addEventListener('click', update)

// create a variables that will keep track of all three totals.
var totalSettings = 0;

var update = function(){
  callCost= parseFloat(callCostSetting.value);
  smsCost= parseFloat(smsCostSetting.value);
  warningLevelSetting = parseFloat(warningLevelSetting.value);
  criticalLevelSetting = parseFloat(criticalLevelSetting.value);

};

var radioBillTotal =function(){

    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
  if (checkedRadioBtn){
      var billItemType = checkedRadioBtn.value


  }
if (total >=criticalLevelSettin){

} else {
    if (billItemType === "call"){
        callsTotal += callCost;
      //console.log(callsTotal);
    }
    else if (billItemType === "sms"){
        smsTotal += smsCost;
    }
  //  total = callsTotal + smsTotal;

  }
    // update the correct total

  var total = callTotal + smsTotal;
    callTotal.innerHTML = callTotalSettings.toFixed(2);
    smsTotal.innerHTML = smsTotalSettings.toFixed(2);

    totSettings.innerHTML = total.toFixed(2);

    //color the total based on the criteria
    if (total >= criticalLevelSettin){
        // adding the danger class will make the text red
        totSettings.classList.add("danger");

    }
    else if (total >= warningLevelSettingSettin){
        totSettings.classList.add("warning");

    }
    else {
      totSettings.classList.remove("danger");
      totSettings.classList.remove("danger");
    }
};

addBtn.addEventListener('click', radioBillTotal);








//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.


//add an event listener for when the 'Update settings' button is pressed
updateSettings.addEventListener('click', update);

//add an event listener for when the add button is pressed
//addBtn.addEventListener('click', addBtn);
