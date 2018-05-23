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


    it("should return the total of 'call' and 'sms' added together  " ,function()  {
      var to = settingsBill() ;
      to.setCostSms(3)
      to.setCostCall(2)
      to.smsBill('sms')
      to.smsBill('sms')
      to.callBill('call')
      assert.equal(to.getCall(),2);
    });

      it("should show warning level amount R6 " ,function()  {
        var warninng = settingsBill() ;
        warninng.setWarning(6)
        assert.equal(warninng.getWarningLevel(),6);
      });

    it("should show critical level amount R12 " ,function()  {
        var criticall = settingsBill() ;
        criticall.setCritical(12)
        assert.equal(criticall.getCriticalLevel(),12);

    });


});
