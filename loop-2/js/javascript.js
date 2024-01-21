const array1 = [10, 55, 352, 4];
const array2 = [543, 40, 0, 34];
var total = 0;
let divTable1 = document.getElementById("table1");
let divTable2 = document.getElementById("table2");
let divTotal = document.getElementById("total");

for(var i = 0; i < array1.length; i++){
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(array1[i]));
    divTable1.appendChild(div);
}

for(var i = 0; i < array2.length; i++){
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(array2[i]));
    divTable2.appendChild(div);
}

for(var i = 0; i < array1.length; i++){
    total = array1[i] * array2[i];
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(total));
    divTotal.appendChild(div);
}

