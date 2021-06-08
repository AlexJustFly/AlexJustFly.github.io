let targetLink = document.querySelectorAll('a[data-anchor]');

for (let i = 0; i < targetLink.length; i++) {
    targetLink[i].addEventListener('click', function(){
        let blockID = targetLink[i].dataset.anchor;
        let targetElement = document.getElementById(blockID);
        let tp = targetElement.offsetTop;
        if (blockID == "my-works") {
            tp-=70;
        }
        window.scrollTo({
            top: tp,
            left: 0,
            behavior: "smooth"
        });
    })
}