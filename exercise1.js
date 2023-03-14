const payCal = function(pay) {
    return pay <= 0 ? "Enter positive number" : (pay + 3) + (pay * 0.01);
}

console.log(payCal(8));
console.log(payCal(0));
console.log(payCal(-2));