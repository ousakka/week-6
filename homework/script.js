let count = 0;

function increase() {
  if (count < 20) count++;
  updateDisplay();
}

function decrease() {
  if (count > 0) {
    count--;
  }
  updateDisplay();
}

function reset() {
  count = 0;
  updateDisplay();
}

function toggleSpan() {
  const span = document.getElementById("freeShippingSpan");
  if (count >= 10 && count < 20) {
    span.classList.remove("visually-hidden");
  } else {
    span.classList.add("visually-hidden");
  }
}

function buttonPlusToRed() {
  const toRed = document.getElementById("plusToRed");
  const shouldBeRed = count >= 20;
  toRed.classList.toggle("redPlus", shouldBeRed);
  toRed.classList.toggle("plus", !shouldBeRed);
}

function outOfStock() {
  const stock = document.getElementById("outOfStock");
  if (count >= 20) {
    stock.classList.remove("visually-hidden");
  } else {
    stock.classList.add("visually-hidden");
  }
}

function updateDisplay() {
  toggleSpan();
  buttonPlusToRed();
  outOfStock();
  document.getElementById("count").textContent = count;
}
