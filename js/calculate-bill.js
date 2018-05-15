//get a reference to the calculate button
var calculateBtn = document.querySelector('.calculateBtn');
//get a reference to the billTotal element
var billTotalElement = document.querySelector('.billTotal');
//get a reference to the billString
var billStringField = document.querySelector('.billString');
//create the function that will be called when the calculate button is pressed



function calculateBtnClicked(billString){


  var TotalBill = 0;

   var billItems = billString.split(',');

   for( var i =0; i < billItems.length;i++){
     var billItem = billItems[i].trim();
     if (billItem ==="call") {
        TotalBill  += 2.75;
     }
     else if (billItem ==="sms") {
      TotalBill  += 0.75;

     }
}
return   TotalBill;
}


function Screen(){

 var billString = billStringField .value;

 var bill = calculateBtnClicked(billString);

  var roundedBillTotal = bill.toFixed(2);

  billTotalElement.innerHTML = roundedBillTotal;

  if (roundedBillTotal >= 30){
          // adding the danger class will make the text red
          billTotalElement.classList.add("danger");
      }
      else if (roundedBillTotal >= 20){
          billTotalElement.classList.add("warning");
      }
      if (roundedBillTotal <= 30){
          // adding the danger class will make the text red
          billTotalElement.classList.remove("danger");
        }
        if (roundedBillTotal <= 20){
            // adding the danger class will make the text red
            billTotalElement.classList.remove("warning");
          }



}
calculateBtn.addEventListener('click', Screen) ;
// function calculateBtnClicked(string){
//     // get the string entered in the textArea
// var string = "";
//     //split the string
//     var billItems = string.split(",");
//     // a variable for the total phone bill.
//     var billTotal = 0;
//     //loop over all the bill items
//     for (var i=0;i<billItems.length;i++){
//         var billItem = billItems[i].trim();
//         if (billItem === "call"){
//             billTotal += 2.75;
//         }
//         else if (billItem === "sms"){
//             billTotal += 0.75;
//         }
//     }return  billTotal;
//   }
//
//
//     function domcode() {
//
//
// var roundedBillTotal = calculateBtnClicked(string);
//
//     var string = billStringField.value;
//     //round to two decimals
//     var roundedBillTotal = roundedBillTotal.toFixed(2);
//     billTotalElement.innerHTML = roundedBillTotal;
//     //
//     // if (roundedBillTotal >= 30){
//     //     // adding the danger class will make the text red
//     //     billTotalElement.classList.add("danger");
//     // }
//     // else if (roundedBillTotal >= 20){
//     //     billTotalElement.classList.add("warning");
//     // }
//     // if (roundedBillTotal <= 30){
//     //     // adding the danger class will make the text red
//     //     billTotalElement.classList.remove("danger");
//     //   }
//     //   if (roundedBillTotal <= 20){
//     //       // adding the danger class will make the text red
//     //       billTotalElement.classList.remove("warning");
//     //     }
// }
// calculateBtn.addEventListener('click', domcode) ;
//
// //  * this function should read the string value entered - split it on a comma.
// //  * loop over all the entries in the the resulting list
// //  * check if it is a call or an sms and add the right amount to the overall total
// //  * once done looping over all the entries - display the total onto the screen in the billTotal element
//
// //link the function to a click event on the calculate button
//
//
// //
// // btn.addEventListener('click', function(roundedBillTotal) {
// //   // read values from the DOM
// //   var call = 0;
// //   var sms = 0;
// //   var total = 0;
// //   // --> use it in the function -->
// //
// //   for (var i=0;i<billItems.length;i++){
// //       var billItem = billItems[i].trim();
// //       if (billItem === "call"){
// //           total += 2.75;
// //       }
// //       else if (billItem === "sms"){
// //           total += 0.75;
// //       }
// //   }return  total;
// // }
// //
// //   // now call your tested function
// //
// //   // use the results from your tested function in the DOM
//
//
// //});
