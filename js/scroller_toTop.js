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

// let scroller = document.getElementById('scroller');


// scroller.onclick = function() {
//     window.scrollTo({
//         top: 0,
//         behavior: "smooth"
//     });
// }

// function fadeIn() {
//     scroller.style.display = 'block'
//     let fadeEffect = setInterval(function () {
//         if (scroller.style.opacity) {
//             scroller.style.opacity = 0;
//         }
//         if (scroller.style.opacity < 1) {
//             scroller.style.opacity += 0.1;
//         } else {
//             clearInterval(fadeEffect);
//         }
//     }, 50);
// }

// function fadeOut() {
//     let fadeEffect = setInterval(function () {
//         if (!scroller.style.opacity) {
//             scroller.style.opacity = 1;
//         }
//         if (scroller.style.opacity > 0) {
//             scroller.style.opacity -= 0.1;
//         } else {
//             clearInterval(fadeEffect);
//         }
//     }, 50);
//     setTimeout(() => {
//         scroller.style.display = 'none';
//     }, 500); 
// }

// window.addEventListener('scroll', function(){
//     if (window.scrollY <= 600) {
//         fadeOut();
//     } else if (window.scrollY >= 601) {
//         fadeIn();
//     }
// })



