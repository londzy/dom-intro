// get a reference to the sms or call radio buttons
//var billItemTypeWithSettingsElement= document.querySelector('.billItemTypeWithSettings');
var callsTotalElement = document.querySelector(".callTotalSettings");
var smsTotalElement = document.querySelector(".smsTotalSettings");

// get refences to all the settings fields
var totSettings = document.querySelector(".totalSettings");


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
var totall= 0;

var callTotalSettin = 0;
var smsTotalSettin = 0;
var warningLevelSettin = 0;
var criticalLevelSettin = 0;


// create a variables that will keep track of all three totals.
var totalSettings = 0;

var update = function(){
  callTotalSettin= parseFloat(callCostSetting.value);
  smsTotalSettin= parseFloat(smsCostSetting.value);
  warningLevelSettin = parseFloat(warningLevelSetting.value);
  criticalLevelSettin = parseFloat(criticalLevelSetting.value);
  console.log(callTotalSettin);

  if (totall < criticalLevelSettin){
    totSettings.classList.remove("danger");
  }

if (totall < warningLevelSettin){
     totSettings.classList.remove("danger");
     addBtn.disabled= false;
   }

};
updateSettings.addEventListener('click', update);

var radioBillTotal =function(){

    var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
  if (checkedRadioBtn){
      var billItemType = checkedRadioBtn.value;
  }
// if (total >=criticalLevelSettin){
//
// } else {

    if (billItemType === "call"){
        callTotal += callTotalSettin;
      //console.log(callsTotal);
    }
    if (billItemType === "sms"){
        smsTotal += smsTotalSettin;
    }
     totall=smsTotal + callTotal;
  //  total = callsTotal + smsTotal;
  callsTotalElement.innerHTML = callTotal.toFixed(2);
  smsTotalElement.innerHTML = smsTotal.toFixed(2);
  totSettings.innerHTML = totall.toFixed(2);
  if (totall >= warningLevelSettin){
     totSettings.classList.add("warning");

 }

 if (totall >= criticalLevelSettin){
     // adding the danger class will make the text red
     totSettings.classList.add("danger");
     addBtn.disabled= true;
   }


}
 // else
 //}

  //
    // update the correct total

//  var total = callTotal + smsTotal;


    //totSettingsE.innerHTML = total.toFixed(2);

    //color the total based on the criteria
    // if (totall >= criticalLevelSettin){
    //     // adding the danger class will make the text red
    //     totSettings.classList.add("danger");
    //
    // }

//};

addBtn.addEventListener('click', radioBillTotal);








//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.


//add an event listener for when the 'Update settings' button is pressed
//updateSettings.addEventListener('click', update);

//add an event listener for when the add button is pressed
//addBtn.addEventListener('click', addBtn);
