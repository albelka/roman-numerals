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





$(document).ready(function(){
  $("#roman-num").submit(function(event){
  event.preventDefault();

  var number = parseInt($("input#number").val());
  // var result = $();
  var result = separateNumberIntoUnits(number) ;
  $("#result").text(result);
  });
});
