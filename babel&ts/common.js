"use strict"; // TO TOP SCROLLER

var $page = $('html, body');
$('a[href*="#"]').click(function () {
  $page.animate({
    scrollTop: $($.attr(this, 'href')).offset().top - 70
  }, 500);
  return false;
}); // ANCHOR SCROLLER

jQuery(document).ready(function () {
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
}); // ACCORDEON

var category_html_link = document.getElementsByClassName('category_list-link');

for (var i = 0; i < category_html_link.length; i++) {
  category_html_link[i].addEventListener("click", function () {
    var panel = this.parentNode.nextElementSibling;

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
} // ACCORDEON IN ACCORDEON


var category_sublist_link = document.getElementsByClassName('category_sublist-link');

for (var _i = 0; _i < category_sublist_link.length; _i++) {
  category_sublist_link[_i].addEventListener("click", function () {
    var panel = this.parentNode.nextElementSibling;

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.parentNode.style.maxHeight = parseInt(panel.parentNode.style.maxHeight) + panel.scrollHeight + 'px';
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
} // MODAL WINDOW


var myWorkImg = document.getElementsByClassName('work_img');
var modalWindow = document.getElementById('modal-window');
var modalImg = document.getElementById('modal-content');
var modalClose = document.getElementById('modal-close'); // open modal window

var _loop = function _loop(_i2) {
  myWorkImg[_i2].addEventListener("click", function () {
    modalImg.src = myWorkImg[_i2].src;
    modalImg.alt = myWorkImg[_i2].alt;
    modalWindow.style.animationName = "open";
    modalWindow.style.display = "flex";
  });
};

for (var _i2 = 0; _i2 < myWorkImg.length; _i2++) {
  _loop(_i2);
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
}); // BURGER

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
//# sourceMappingURL=common.js.map
