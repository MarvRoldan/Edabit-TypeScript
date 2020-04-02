function sayHelloBye(name, num) {
    var n = name[0].toUpperCase() + name.slice(1);
    if (num === 1) {
        console.log("Hello " + n);
    }
    else {
        console.log("Bye " + n);
    }
}
sayHelloBye("John", 0);
function factorial(n) {
    if (n < 0) {
        return -1;
    }
    else if (n == 0) {
        return 1;
    }
    else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(5));
//# sourceMappingURL=main.js.map