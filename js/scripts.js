// var num = 0;
//
// var mapToPlaces = function(number) {
//   // var romanNumeralArray = ['I','V','X','L','C','D','M'];
//   var Array1 = number.toString().split("");
//   // for (var i = 0; i < Array1.length; i++){
//     if (Array1.length === 1){
//       var result = toNumeral(number);
//
//     } else if (Array1.length === 2){
//       var preResult = toNumeral(Array1[0]);
//       if (preResult === "I"){
//       var newResult = "C";
//     } console.log("result=" + newResult);
//    }
//   // }// for end
//   // num = number;
//   return result;
// }// fun end


//
// function separateNumberIntoUnits(number) {
//   if (number == 0) return [0];
//
//   var convertedByPlace = [];
//   var i = 1;
//
//   while (number > 0) {
//     convertedByPlace.unshift((number % 10) * i);
//     number = Math.floor(number / 10);
//     i *= 10
//   }
//   return convertedByPlace;
// }

// convert to numeral



function toNumeral(number){
  var numberArray = [1,5,10,50,100,500,1000];

  var inputArray = [];
  // var numString = number.toString();
  //seperateNumberIntoUnits(number);
  for(var i = 0; i < number; i++){
    if(number < 4){
      inputArray.push("I");
    } else if (number === 4){
      inputArray.push("IV");
      i = number;
   } else if (number === 5) {
      inputArray.push("V");
      i = number;
    }else if(number < 9){
      inputArray.push("V") + inputArray.push("I".repeat(number-5)); console.log(inputArray);
      i= number;
    } else if (number = 9) {
      inputArray.push("IX");
      i=number;
    }
    console.log("inputArray:" + inputArray);
  }
  return inputArray.join('');
  };





$(document).ready(function(){
  $("#roman-num").submit(function(event){
  event.preventDefault();

  var number = parseInt($("input#number").val());
  // var result = $();
  var result = toNumeral(number);
    $("#result").text(result);
  });
});
