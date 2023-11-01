function handleSelect(event) {
  event.preventDefault();
  const selection = document.getElementById("beverage").value;
  console.log(selection);
}

function handleRadio(event) {
  event.preventDefault();
  const radioSelection = document.querySelector("input[name='flavor']:checked").value;
  console.log(radioSelection);
}

function handleDate(event) {
  event.preventDefault();
  const dob = document.getElementById("born").value;
  console.log(dob);
}

function handleColor(event) {
  event.preventDefault();
  const color = document.getElementById("color").value;
  console.log(color);
}

window.addEventListener("load", function () {
  document.getElementById("select-form").addEventListener("submit", handleSelect);
});

window.addEventListener("load", function () {
  document.getElementById("radio-form").addEventListener("submit", handleRadio);
});

window.addEventListener("load", function () {
  document.getElementById("date-form").addEventListener("submit", handleDate);
});

window.addEventListener("load", function () {
  document.getElementById("color-form").addEventListener("submit", handleColor);
});