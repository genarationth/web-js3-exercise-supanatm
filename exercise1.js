const payCal = function(pay) {
    return pay <= 0 ? "Ennter positive number" : (pay + 3) + (pay * 0.01);
}

console.log(payCal(8));
console.log(payCal(0));
console.log(payCal(-2));