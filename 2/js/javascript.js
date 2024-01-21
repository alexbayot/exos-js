let n = 0;
let elem = document.getElementById("elem");
elem.innerHTML = n;

let btnAugmenter = document.getElementById("btn_Augmenter");
btnAugmenter.onclick = function() {
    n = n+1;
    elem.innerHTML = n;
}

let btnDecrementer = document.getElementById("btn_Decrementer");
btnDecrementer.onclick = function() {
    n = n-1;
    elem.innerHTML = n;
}