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

  it("should show the total of 'sms' and 'call' added R3.50   " ,function()  {
    var nothing = TextBill() ;
      nothing.bills('call')
      nothing.bills('sms')
    //nothing.bills('totalOne')
    assert.equal(nothing.getTotalCost(),3.50);
  });

    it("should show 0.00 when nothing is inputted " ,function()  {
      var nothing = TextBill() ;
      nothing.bills('totalOne')
      assert.equal(nothing.getTotalCost(),0.00);
    });
  
});
