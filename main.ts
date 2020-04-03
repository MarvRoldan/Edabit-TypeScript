// -- Which Function Returns the Larger Number? --
function sayHelloBye(name: string, num: number) {
  const n = name[0].toUpperCase() + name.slice(1);

  if (num === 1) {
    console.log("Hello " + n);
  } else if (num === 0) {
    console.log("Bye " + n);
  } else {
    console.log("Please enter 1 or 0");
  }
}
sayHelloBye("Marvin", 1);

// -- Recursion: Factorials --
function factorial(n: number): number {
  if (n < 0) {
    return -1;
  } else if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log(factorial(5));

// -- Return the End Letters of Numbers --
function returnEndOfNumber(num: number) {
  const lastDigit: string = num.toString();

  if (parseInt(lastDigit) === 1) {
    console.log(num + "-ST");
  } else if (parseInt(lastDigit) === 2) {
    console.log(num + "-ND");
  } else if (parseInt(lastDigit) === 3) {
    console.log(num + "-RD");
  } else if (parseInt(lastDigit) > 3) {
    console.log(num + "-TH");
  }
}
returnEndOfNumber(1);

// -- Get the Date --
// https://www.w3schools.com/js/js_switch.asp
function getDay(day: number) {
  const dateGiven = new Date(day);

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