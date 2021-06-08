"use strict";

// BURGER
var burgerButton = document.getElementById('burger_button');

burgerButton.onclick = function () {
  burgerButton.classList.toggle("change");
  var panel = this.parentNode.nextElementSibling;

  if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
  } else {
    panel.style.maxHeight = panel.scrollHeight + "px";
  }
};
//# sourceMappingURL=burger.js.map
