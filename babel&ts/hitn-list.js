"use strict";

//HINT LISTS
var html_hint = document.getElementById('html_hints');
var css_hint = document.getElementById('css_hints');
var js_hint = document.getElementById('js_hints');
var html_hint_list = document.getElementById('html_hints-list');
var css_hint_list = document.getElementById('css_hints-list');
var js_hint_list = document.getElementById('js_hints-list');

html_hint.onclick = function () {
  html_hint_list.style.display = 'block';
  css_hint_list.style.display = 'none';
  js_hint_list.style.display = 'none';
};

css_hint.onclick = function () {
  css_hint_list.style.display = 'block';
  html_hint_list.style.display = 'none';
  js_hint_list.style.display = 'none';
};

js_hint.onclick = function () {
  js_hint_list.style.display = 'block';
  html_hint_list.style.display = 'none';
  css_hint_list.style.display = 'none';
};
//# sourceMappingURL=hitn-list.js.map
