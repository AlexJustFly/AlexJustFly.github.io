// BURGER
let burgerButton = document.getElementById('burger_button');
burgerButton.onclick = function() {
  burgerButton.classList.toggle("change");
  let panel = this.parentNode.nextElementSibling;
  if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
  } else {
    panel.style.maxHeight = panel.scrollHeight + "px";
  }
}