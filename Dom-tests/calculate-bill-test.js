describe("calculateBill", function(){

  it("should show the amount of a call R2.75 " ,function()  {
    assert.equal(calculateBtnClicked("call"),2.75);
  });
  it("should show the amount of a call R0.75 " ,function()  {
    assert.equal(calculateBtnClicked("sms"),0.75);
  });
  it("should calculate the sms and/or call total of R3.50 " ,function()  {
    assert.equal(calculateBtnClicked("call,sms"),3.50);
  });
});
