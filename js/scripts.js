function separateNumberIntoUnits(number) {
  if (number == 0) return [0];

  var convertedByPlace = [];
  var i = 1;

  while (number > 0) {
    convertedByPlace.unshift((number % 10) * i);
    number = Math.floor(number / 10);
    i *= 10
  }
  return convertedByPlace;
}

// convert to numeral



function toNumeral(number){
  var numberArray = [1,5,10,50,100,500,1000];
  var romanNumeralArray = ['I','V','X','L','C','D','M'];
  var inputArray = [];//seperateNumberIntoUnits(number);
console.log(inputArray);
  for(var i = 0; i < number ; i++){
    if(number < 4){
      inputArray.push("I");
    } else if (number = 4){
      inputArray.push("IV");
      break;
   }
 }
return inputArray;
};// function end





$(document).ready(function(){
  $("#roman-num").submit(function(event){
  event.preventDefault();

  var number = parseInt($("input#number").val());
  // var result = $();
  var result = toNumeral(number) ;
  $("#result").text(result);
  });
});
