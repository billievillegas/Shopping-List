var button = document.getElementById("enter");
var inputItems = document.getElementById("inputItems");
var ul = document.querySelector("ul");

function inputLength() {
  return inputItems.value.length;
}

function addListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(inputItems.value));
  ul.appendChild(li);
  inputItems.value = "";
  inputItems.focus();
}

function addListAfterClick() {
  if (inputLength() > 0) {
    addListElement();
  }
}

function addListAfterKeyPress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    addListElement();
  }
}

button.addEventListener("click", addListAfterClick);

button.addEventListener("keypress", addListAfterKeyPress);
