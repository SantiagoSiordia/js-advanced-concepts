// Call stack + Memory heap

const number = 610; // Please allocate memoty for a number.
const string = "Some text"; // Please allocate memory for a string.
const object = { // Allocate memory for an object... and its values.
    firstName: "Santiago",
    lastName: "Siordia"
}

function subtractTwo(num){
    return num - 2;
}

function calculate() {
    const sumTotal = 5 + 4;
    return subtractTwo(sumTotal);
}

debugger;
calculate();
calculate();
calculate();
