// get a reference to the textbox where the bill type is to be entered
var billTypeText = document.querySelector('.billTypeText');
//get a reference to the add button
var addToBillBtn = document.querySelector('.addToBillBtn');
//create a variable that will keep track of the total bill
var callTotalOne = document.querySelector('.callTotalOne');
var smsTotalOne = document.querySelector('.smsTotalOne');

var totalOne = document.querySelector('.totalOne');


// var callTotal = 0;
// var smsTotal = 0;
// var totalCost = 0;

addToBillBtn.addEventListener('click', textBillTotal);
//add an event listener for when the add button is pressed


var clc = TextBill();


    function textBillTotal(){
    // get the value entered in the billType textfield
    var billTypeEntered = billTypeText.value.trim();
    // update the correct total
    // if (billTypeEntered === "call"){
    //     callTotal += 2.75
    // }
    // else if (billTypeEntered === "sms"){
    //     smsTotal += 0.75;
    // }
      clc.callsTotals(billTypeEntered)
      clc.smsTotals(billTypeEntered)

    //update the totals that is displayed on the screen.
    callTotalOne.innerHTML = clc.getCall();
    smsTotalOne.innerHTML = clc.getSms();
    // var totalCost = callTotal + smsTotal;
    totalOne.innerHTML = clc.getTotalCost();

    if (getTotalCost >= 50){
        // adding the danger class will make the text red
        totalOne.classList.add("danger");
    }
    else if (getTotalCost >= 30){
        totalOne.classList.add("warning");
    }
    if (getTotalCost <= 50){
        // adding the danger class will make the text red
        totalOne.classList.remove("danger");
      }
      if (getTotalCost <= 30){

          totalOne.classList.remove("warning");
        }
}


//textTotalAddBtn.addEventListener('click', textBillTotal);



//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen

/*function textBillTotal(){

    // ... other code here

    //update the totals that is displayed on the screen.
    callsTotalElem.innerHTML = callsTotal.toFixed(2);
    smsTotalElem.innerHTML = smsTotal.toFixed(2);
    var totalCost = callsTotal + smsTotal;
    totalCostElem.innerHTML = totalCost.toFixed(2);

    //color the total based on the criteria
    if (callTotalOne >= 50){
        // adding the danger class will make the text red
        totalCostElem.classList.add("danger");
    }
    else if (smsTotalOne >= 30){
        totalCostElem.classList.add("warning");
    }
}*/
