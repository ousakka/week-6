let a = 4;
let b = 5;

function add(a, b) {
  let c = a + b;
  console.log(a, "+", b, "=", c);
  return c;
}

function increment(a) {
  let c = ++a;
  console.log("the result of incrementing is", c);
  return c;
}

function multiplication(a, b) {
  let c = a * b;
  console.log(a, "*", b, "=", c);
  return c;
}
multiplication(a, b);

multiplication(add(a, b), increment(a));
