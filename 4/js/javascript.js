const numbers = [4, 60, 88, 127, 36, 95, 44, 55];
let elemUL = document.getElementById("elemUL");
for (var i = 0; i < numbers.length; i++) {
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(numbers[i]));
    elemUL.appendChild(li);
}

let btnAverage = document.getElementById("btnAverage");
btnAverage.onclick = function() {
    var total = 0;
    for (var i = 0; i < numbers.length; i++) {
        total = total + numbers[i];
        //total+= numbers[i]; //Same as above (Add to total)
    }
    var average = total / numbers.length;
    let elemAverage = document.getElementById("average");
    elemAverage.innerHTML = average;
}