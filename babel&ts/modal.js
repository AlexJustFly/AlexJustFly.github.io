"use strict";

// MODAL WINDOW
var myWorkImg = document.getElementsByClassName('work_img');
var modalWindow = document.getElementById('modal-window');
var modalImg = document.getElementById('modal-content');
var modalClose = document.getElementById('modal-close'); // open modal window

var _loop = function _loop(i) {
  myWorkImg[i].addEventListener("click", function () {
    modalImg.src = myWorkImg[i].src;
    modalImg.alt = myWorkImg[i].alt;
    modalWindow.style.animationName = "open";
    modalWindow.style.display = "flex";
  });
};

for (var i = 0; i < myWorkImg.length; i++) {
  _loop(i);
} // close modal on X


modalClose.onclick = function () {
  modalWindow.style.animationName = "close";
  setTimeout(function () {
    modalWindow.style.display = "none";
  }, 300);
}; // close modal on modalWindow


modalWindow.addEventListener("click", function () {
  if (event.target != modalImg) {
    modalWindow.style.animationName = "close";
    setTimeout(function () {
      modalWindow.style.display = "none";
    }, 300);
  }
});
//# sourceMappingURL=modal.js.map
