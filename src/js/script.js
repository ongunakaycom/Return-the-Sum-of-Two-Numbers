function addition(a, b) {
  return a + b;
}

function addNumbers() {

  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);

  const sum = addition(num1, num2);

  document.getElementById("result").innerHTML = "The sum is: " + sum;
}