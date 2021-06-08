"use strict"

// TO TOP SCROLLER
var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 70
    }, 500);
    return false;
});

// ANCHOR SCROLLER
jQuery(document).ready(function(){
    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
            $('#scroller').fadeIn();
        } else {
            $('#scroller').fadeOut();
        }
    });
    $('#scroller').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
});




// ACCORDEON
let category_html_link = document.getElementsByClassName('category_list-link');

for (let i = 0; i < category_html_link.length; i++) {
    category_html_link[i].addEventListener("click", function() {
      let panel = this.parentNode.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
}

// ACCORDEON IN ACCORDEON
let category_sublist_link = document.getElementsByClassName('category_sublist-link');

for (let i = 0; i < category_sublist_link.length; i++) {
    category_sublist_link[i].addEventListener("click", function() {
      let panel = this.parentNode.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.parentNode.style.maxHeight = parseInt(panel.parentNode.style.maxHeight) + panel.scrollHeight + 'px';
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
}

// MODAL WINDOW
let myWorkImg = document.getElementsByClassName('work_img');
let modalWindow = document.getElementById('modal-window');
let modalImg = document.getElementById('modal-content');
let modalClose = document.getElementById('modal-close');
// open modal window
for (let i = 0; i < myWorkImg.length; i++) {
    myWorkImg[i].addEventListener("click", function() {
      modalImg.src = myWorkImg[i].src;
      modalImg.alt = myWorkImg[i].alt;
      modalWindow.style.animationName = "open";
      modalWindow.style.display = "flex";
    });
}
// close modal on X
modalClose.onclick = function() {
  modalWindow.style.animationName = "close";
  setTimeout(function(){modalWindow.style.display = "none"}, 300)
}
// close modal on modalWindow
modalWindow.addEventListener("click", function(){
  if (event.target != modalImg) {
    modalWindow.style.animationName = "close";
    setTimeout(function(){modalWindow.style.display = "none"}, 300)
  }
})

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