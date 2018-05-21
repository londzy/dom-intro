var billItemTypeRadioElement = document.querySelector(".billItemTypeRadio");
var radioBillAddBtnElement = document.querySelector(".radioBillAddBtn");
var callsTotalElemen = document.querySelector(".callTotalTwo" );
var smsTotalElemen = document.querySelector(".smsTotalTwo" );
var totalCostElem = document.querySelector(".totalTwo");
var textTotalAddBtnElement = document.querySelector(".textTotalAddBtn");


var calTotal2 = 0;
var smsTotals = 0;




var rd = TextBill();

var radioBillTotal =function(){

    var checkedRadioBtn = document.querySelector("input[name='billItemTypeRadio']:checked");
  if (checkedRadioBtn){
      var us = checkedRadioBtn.value

  }

  rd.bills(us)

//update the totals that is displayed on the screen.
callsTotalElemen.innerHTML = rd.getCall();
smsTotalElemen.innerHTML = rd.getSms();
// var totalCost = callTotal + smsTotal;
totalCostElem.innerHTML = rd.getTotalCost();

if (rd.getTotalCost() >= 50){
    // adding the danger class will make the text red
    totalCostElem.classList.add("danger");
}
else if (rd.getTotalCost() >= 30){
    totalCostElem.classList.add("warning");
}
if (rd.getTotalCost() <= 50){
    // adding the danger class will make the text red
    totalCostElem.classList.remove("danger");
  }
  if (rd.getTotalCost() <= 30){

      totalCostElem.classList.remove("warning");
    }
};

radioBillAddBtnElement.addEventListener('click', radioBillTotal);
