describe("radioBill", function(){

  it("should return R2.75 when call is clicked " ,function()  {
    var calls = TextBill() ;
    calls.bills('call')
    assert.equal(calls.getCall(),2.75);
  });

    it("should return R0.75 when sms is clicked " ,function()  {
      var msg = TextBill() ;
      msg.bills('sms')
      assert.equal(msg.getSms(),0.75);
    });

    it("should return the total of R3.50 when both 'sms' and 'call' are selected " ,function()  {
      var nothing = TextBill() ;
        nothing.bills('call')
        nothing.bills('sms')
      //nothing.bills('totalOne')
      assert.equal(nothing.getTotalCost(),3.50);
    });

    it("should return 0.00 when nothing is clicked " ,function()  {
      var nthing = TextBill() ;
      nthing.bills('totalCostElem')
      assert.equal(nthing.getTotalCost(),0.00);
    });

});
