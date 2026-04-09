const buttonsEl = document.querySelector(".buttons");
const inputFieldEl = document.getElementById("result");

buttonsEl.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const buttonValue = e.target.textContent;

    if (buttonValue === "C") {
      clear();
    } else if (buttonValue === "=") {
      calc();
    } else {
      appendValue(buttonValue);
    }
  }
});

function clear() {
  inputFieldEl.value = "";
}

function calc() {
  inputFieldEl.value = eval(inputFieldEl.value);
}

function appendValue(buttonvalue) {
  inputFieldEl.value += buttonvalue;
}
