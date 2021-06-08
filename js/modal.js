// MODAL WINDOW
let myWorkImg = document.getElementsByClassName('work_img');
let modalWindow = document.getElementById('modal_window');
let modalImg = document.getElementById('modal_content');
let modalClose = document.getElementById('modal_close');
let modalCaption = document.getElementById('modal_caption');
// open modal window
for (let i = 0; i < myWorkImg.length; i++) {
    myWorkImg[i].addEventListener("click", function() {
      modalImg.src = myWorkImg[i].dataset.img;
      modalImg.alt = myWorkImg[i].alt;
      modalCaption.href = myWorkImg[i].dataset.caption;
      modalWindow.style.animationName = "open";
      modalWindow.style.display = "block";
    });
}
// close modal on X
modalClose.onclick = function() {
  modalWindow.style.animationName = "close";
  setTimeout(function(){modalWindow.style.display = "none"}, 300)
}
// close modal on modalWindow
modalWindow.addEventListener("click", function(){
  if (event.target != modalImg && event.target != modalCaption) {
    modalWindow.style.animationName = "close";
    setTimeout(function(){modalWindow.style.display = "none"}, 300)
  }
})