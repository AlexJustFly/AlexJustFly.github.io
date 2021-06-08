"use strict";

// ACCORDEON
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
}
//# sourceMappingURL=accordeon.js.map
