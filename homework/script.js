let count = 0;

function increase() {
  count++;
  updateDisplay();
}

function decrease() {
  if (count > 0)
  {count--;}
  updateDisplay();
}

function reset() {
  count = 0;
  updateDisplay();
}


function toggleSpan() {
  const span = document.getElementById("freeShippingSpan");
  if (count >= 10) {
    span.classList.remove("visually-hidden");
  } else {
    span.classList.add("visually-hidden");
  }
}

function updateDisplay() {
  toggleSpan();
  document.getElementById("count").textContent = count;
}