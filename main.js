function sayHelloBye(name, num) {
    var n = name[0].toUpperCase() + name.slice(1);
    if (num === 1) {
        console.log("Hello " + n);
    }
    else if (num === 0) {
        console.log("Bye " + n);
    }
    else {
        console.log("Please enter 1 or 0");
    }
}
sayHelloBye("Marvin", 1);
function factorial(n) {
    if (n < 0) {
        return -1;
    }
    else if (n === 0) {
        return 1;
    }
    else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(5));
function returnEndOfNumber(num) {
    var lastDigit = num.toString();
    if (parseInt(lastDigit) === 1) {
        console.log(num + "-ST");
    }
    else if (parseInt(lastDigit) === 2) {
        console.log(num + "-ND");
    }
    else if (parseInt(lastDigit) === 3) {
        console.log(num + "-RD");
    }
    else if (parseInt(lastDigit) > 3) {
        console.log(num + "-TH");
    }
}
returnEndOfNumber(1);
function getDay(day) {
    var dateGiven = new Date(day);
    switch (dateGiven.getDay()) {
        case 1:
            return "Monday";
            break;
        case 2:
            return "Tuesday";
            break;
        case 3:
            return "Wednesday";
            break;
        case 4:
            return "Thursday";
            break;
        case 5:
            return "Friday";
            break;
        case 6:
            return "Saturday";
            break;
        case 0:
            return "Sunday";
            break;
    }
}
//# sourceMappingURL=main.js.map