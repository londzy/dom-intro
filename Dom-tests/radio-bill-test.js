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

    it("should show 0.00 when nothing is clicked " ,function()  {
      var nthing = TextBill() ;
      nthing.bills('totalCostElem')
      assert.equal(nthing.getTotalCost(),0.00);
    });
  // it("should show the amount of a call R0.75 " ,function()  {
  //   assert.equal(calculateBtnClicked("sms"),0.75);
  // });
  // it("should calculate the sms and/or call total of R3.5 " ,function()  {
  //   assert.equal(calculateBtnClicked("call,sms"),3.5);
  // });
});
