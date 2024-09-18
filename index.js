const backtotop = document.querySelector(".back-to-top")

const observertarget = document.querySelector("header");

const observer = new IntersectionObserver((enteries, observer) => {
    enteries.forEach(entry => {
        if(!entry.isIntersecting) {
            backtotop.classList.add("shown");
        } else {
            backtotop.classList.remove("shown");
        }
    });
});

observer.observe(observertarget);