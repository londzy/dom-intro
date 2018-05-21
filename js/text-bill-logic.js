function TextBill() {


  var callTotal = 0;
  var smsTotal = 0;
  var totalCost = 0;

  var billTypeEntered = callTotal.toFixed(2);
  totalOne.innerHTML = billTypeEntered;


  function bills(billTypeEntered) {
    if (billTypeEntered === "call") {
      callTotal += 2.75;
    }
    else if (billTypeEntered === "sms") {
      smsTotal += 0.75;
    }
  }

  // function smsTotals(billTypeEntered) {
  //
  // }

  function getCall() {
    return callTotal;
  }

  function getSms() {
    return smsTotal;

  }

  function getTotalCost() {
    return totalCost = callTotal + smsTotal;

  }

  return{
    getTotalCost,
    getSms,
    getCall,
    bills
  }
}
