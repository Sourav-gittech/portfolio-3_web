// Header Scroll 
let navbar = document.querySelector('.navbar');
document.onscroll = () => {
    if (document.documentElement.scrollTop > 20) {
        navbar.classList.add('header-scrolled');
    }
    else {
        navbar.classList.remove('header-scrolled');
    }
}

// Nav Hide
let navlink = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse');
navlink.forEach(function (a) {
    a.addEventListener('click', function () {
        navCollapse.classList.remove('show');
    });
});

// counter design 
document.addEventListener('DOMContentLoaded', () => {
    function counter(id, start, end, duration) {
        let obj = document.getElementById(id),
            current = start,
            range = end - start,
            increment = end > start ? 1 : -1,
            step = Math.abs(Math.floor(duration / range)),
            timer = setInterval(() => {
                current += increment;
                obj.textContent = current;
                if (current == end) {
                    clearInterval(timer);
                }
            }, step);
    }
    counter('count', 0, 10, 3000);
});