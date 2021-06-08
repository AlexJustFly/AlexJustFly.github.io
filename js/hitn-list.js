//HINT LISTS
let html_hint = document.getElementById('html_hints');
let css_hint = document.getElementById('css_hints');
let js_hint = document.getElementById('js_hints');
let html_hint_list = document.getElementById('html_hints-list');
let css_hint_list = document.getElementById('css_hints-list');
let js_hint_list = document.getElementById('js_hints-list');

html_hint.onclick = function() {
    html_hint_list.style.display = 'block';
    css_hint_list.style.display = 'none';
    js_hint_list.style.display = 'none';
}
css_hint.onclick = function() {
    css_hint_list.style.display = 'block';
    html_hint_list.style.display = 'none';
    js_hint_list.style.display = 'none';
}
js_hint.onclick = function() {
    js_hint_list.style.display = 'block';
    html_hint_list.style.display = 'none';
    css_hint_list.style.display = 'none';
}