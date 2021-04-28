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

button.addEventListener("click", function () {
  if (inputLength > 0) {
    addListElement();
  }
});

button.addEventListener("keypress", function(event) {
  if (inputLength > 0 && event.which === 13) {
    addListElement();
  }
});
