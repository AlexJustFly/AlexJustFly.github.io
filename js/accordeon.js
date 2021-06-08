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