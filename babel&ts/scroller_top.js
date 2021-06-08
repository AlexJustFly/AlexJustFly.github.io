"use strict";

var $page = $('html, body');
$('a[href*="#"]').click(function () {
  $page.animate({
    scrollTop: $($.attr(this, 'href')).offset().top - 70
  }, 500);
  return false;
});
//# sourceMappingURL=scroller_top.js.map
