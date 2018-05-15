var billItemTypeRadioElement = document.querySelector(".billItemTypeRadio");
var radioBillAddBtnElement = document.querySelector(".radioBillAddBtn");
var callsTotalElemen = document.querySelector(".callTotalTwo" );
var smsTotalElemen = document.querySelector(".smsTotalTwo" );
var totalCostElem = document.querySelector(".totalTwo");
var textTotalAddBtnElement = document.querySelector(".textTotalAddBtn");


var calTotal2 = 0;
var smsTotals = 0;
var radioBillTotal =function(){

    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
  if (checkedRadioBtn){
      var billItemType = checkedRadioBtn.value

  }

    if (billItemType === "call"){
        calTotal2 += 1
    }
    else if (billItemType === "sms"){
        smsTotals += 2;
    }

    callsTotalElemen.innerHTML = calTotal2.toFixed(2);
    smsTotalElemen.innerHTML = smsTotals.toFixed(2);
    var totalCost = calTotal2 + smsTotals;
    totalCostElem.innerHTML = totalCost.toFixed(2);


    if (totalCost >= 50){

        totalCostElem.classList.add("danger");
    }
    else if (totalCost >= 30){
        totalCostElem.classList.add("warning");
    }
};

radioBillAddBtnElement.addEventListener('click', radioBillTotal);
