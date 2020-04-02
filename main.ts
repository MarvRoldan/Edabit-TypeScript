// -- Which Function Returns the Larger Number? --
function sayHelloBye(name: string, num: number) {
  const n = name[0].toUpperCase() + name.slice(1);

  if (num === 1) {
    console.log("Hello " + n);
  } else {
    console.log("Bye " + n);
  }
}
sayHelloBye("John", 0);

// -- Recursion: Factorials --
function factorial(n: number): number {
  if (n < 0) {
    return -1;
  } else if (n == 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log(factorial(5));
