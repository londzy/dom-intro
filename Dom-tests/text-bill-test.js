describe("textBill", function(){

  it("should return R2.75 when 'call' is inputted " ,function()  {
    var callss = TextBill() ;
    callss.bills('call')
    assert.equal(callss.getCall(),2.75);
  });

  it("should return R0.75 when 'sms' is inputted" ,function()  {
    var smsz = TextBill() ;
    smsz.bills('sms')
    assert.equal(smsz.getSms(),0.75);
  });

  it("should show 0.00 when nothing is inputted " ,function()  {
    var nothing = TextBill() ;
    nothing.bills('totalOne')
    assert.equal(nothing.getTotalCost(),0.00);
  });

  // it("should show the amount of a call R0.75 " ,function()  {
  //   assert.equal(calculateBtnClicked("sms"),0.75);
  // });
  // it("should calculate the sms and/or call total of R3.5 " ,function()  {
  //   assert.equal(calculateBtnClicked("call,sms"),3.5);
  // });
});
