let sanoq1 = 0;
const sanoq1Element = document.getElementById('sanoq1');

const intervalId = setInterval(() => {
    sanoq1Element.textContent = sanoq1;
    sanoq1++;
    if (sanoq1 > 123) {
        clearInterval(intervalId);
    }
}, 20); 
let sanoq2 = 0;
const sanoq2Element = document.getElementById('sanoq2');

const intervalId2 = setInterval(() => {
    sanoq2Element.textContent = sanoq2;
    sanoq2++;
    if (sanoq2 > 234) {
        clearInterval(intervalId2);
    }
}, 10);
let sanoq3 = 0;
const sanoq3Element = document.getElementById('sanoq3');

const intervalI3 = setInterval(() => {
    sanoq3Element.textContent = sanoq3;
    sanoq3++;
    if (sanoq3 > 345) {
        clearInterval(intervalI3);
    }
}, 7); 

