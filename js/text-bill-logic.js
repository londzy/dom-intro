function TextBill() {


  var callTotal = 0;
  var smsTotal = 0;
  var totalCost = 0;




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
    return callTotal.toFixed(2);
  }

  function getSms() {
    return smsTotal.toFixed(2);

  }

  function getTotalCost() {
    totalCost = callTotal + smsTotal;
    return totalCost.toFixed(2);

  }

  return{
    getTotalCost,
    getSms,
    getCall,
    bills
  }
}
