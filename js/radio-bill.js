var billItemTypeRadioElement = document.querySelector(".billItemTypeRadio");
var radioBillAddBtnElement = document.querySelector(".radioBillAddBtn");
var callsTotalElemen = document.querySelector(".callTotalTwo" );
var smsTotalElemen = document.querySelector(".smsTotalTwo" );
var totalCostElem = document.querySelector(".totalTwo");
var textTotalAddBtnElement = document.querySelector(".textTotalAddBtn");


var callsTotal1 = 0;
var smsTotal1 = 0;
function radioBillTotal(){

    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
  if (checkedRadioBtn){
      var billItemType = checkedRadioBtn.value

  }

    if (billItemType === "call"){
        callsTotal1 += 2.75
    }
    else if (billItemType === "sms"){
        smsTotal1 += 0.75;
    }

    callsTotalElemen.innerHTML = callsTotal1.toFixed(2);
    smsTotalElemen.innerHTML = smsTotal1.toFixed(2);
    var totalCost = callsTotal1 + smsTotal1;
    totalCostElem.innerHTML = totalCost.toFixed(2);


    if (totalCost >= 50){
      
        totalCostElem.classList.add("danger");
    }
    else if (totalCost >= 30){
        totalCostElem.classList.add("warning");
    }
};

radioBillAddBtnElement.addEventListener('click', radioBillTotal);
