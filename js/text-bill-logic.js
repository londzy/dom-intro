function TextBill() {


  var callTotal = 0;
  var smsTotal = 0;
  var totalCost = 0;

  function callsTotals(billTypeEntered) {
    if (billTypeEntered === "call") {
      callTotal += 2.75;
    }

  }

  function smsTotals(billTypeEntered) {
    if (billTypeEntered === "sms") {
      smsTotal += 0.75;
    }
  }

  function getCall() {
    return callTotal;

  }

  function getSms() {
    return smsTotal;

  }

  function getTotalCost() {
    return totalCost = callsTotals + smsTotals;

  }

  return {
    TextBill,
    getTotalCost,
    getSms,
    getCall,
    smsTotals,
    callsTotals
  }
}
