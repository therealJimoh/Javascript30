function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide(e) {
    sliderImages.forEach(slider => {
        const slideInAt = (window.scrollY + window.innerHeight) - slider.height / 2;
        const imageButtom = slider.offsetTop + slider.height;
        const isHalfShown = slideInAt > slider.offsetTop;
        const isNotScrolledPass = window.scrollY < imageButtom;

        if (isHalfShown && isNotScrolledPass) {
            slider.classList.add('active');
        } else {
            slider.classList.remove('active');

        }
    });
}

window.addEventListener('scroll', debounce(checkSlide));