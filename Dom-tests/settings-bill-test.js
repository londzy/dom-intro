describe("settingsWithBill", function(){

  it("should return 2 hence 'call' is set to 2 " ,function()  {
    var callss = settingsBill() ;
    callss.setCostCall(2)
    callss.callBill('calls')
    assert.equal(callss.getCall(),2);
  });

  it("should return 1 hence 'sms' is set to 1  " ,function()  {
    var smsz = settingsBill() ;
    smsz.setCostSms(1)
    smsz.smsBill('sms')
    assert.equal(smsz.getSms(),1);
  });

  
  // it("should return R0.75 when 'sms' is inputted" ,function()  {
  //   var smsz = TextBill() ;
  //   smsz.bills('sms')
  //   assert.equal(smsz.getSms(),0.75);
  // });
  //
  // it("should show the total of 'sms' and 'call' added R3.50   " ,function()  {
  //   var nothing = TextBill() ;
  //     nothing.bills('call')
  //     nothing.bills('sms')
  //   //nothing.bills('totalOne')
  //   assert.equal(nothing.getTotalCost(),3.50);
  // });
  //
  //   it("should show 0.00 when nothing is inputted " ,function()  {
  //     var nothing = TextBill() ;
  //     nothing.bills('totalOne')
  //     assert.equal(nothing.getTotalCost(),0.00);
  //   });

});
