var age = 15;
var guess = 0;
while (guess < 4) {
guess++;
var answer = parseInt(prompt("Guess my age!"));
if (guess == 4) {
alert("No more chances!");
} else if (answer == age) {
alert("That's right!");
 break;
 } else if (answer < age) {
    alert ("Too young!");
 } else if (answer > age) {
  alert("Too old!"); 
}
}