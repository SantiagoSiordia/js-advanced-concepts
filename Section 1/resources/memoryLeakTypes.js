// Global Variables memory leak
var a = 1;
var b = 1;
var c = 1;
var d = 1;
var e = 1;
var f = 1;
var g = 1; //Let's never declare this many flobal variables.

// Event Listeners memory leak
var element = document.getElementById("button");
element.addEventListener("click", onClick)

// setInterval
setInterval(() => {
    // referencing objects...
}, someDuration);