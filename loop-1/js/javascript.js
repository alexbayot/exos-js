const numbers = [35, 22, 153, 5, 67, 256599];
let div_numbers = document.getElementById("div_numbers");
var total = 0;
for (var i = 0; i < numbers.length; i++) {
    total = total + numbers[i];
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(numbers[i]));
    div_numbers.appendChild(div);
}
let sum = document.getElementById("sum");
sum.appendChild(document.createTextNode("Total: " + total));
