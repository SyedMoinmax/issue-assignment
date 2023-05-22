const tabs = document.querySelectorAll('.tab_btn');
const all_content = document.querySelectorAll('.content');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', (e) => {
        tabs.forEach(tab => { tab.classList.remove('active') });
        tab.classList.add('active');
        var line = document.querySelector('.line');
        line.style.width = e.target.offsetWidth + 'px';
        line.style.left = e.target.offsetLeft + 'px';
        all_content.forEach(content => { content.classList.remove('active') });
        all_content[index].classList.add('active');
    })
})

const formStep1 = document.getElementById('form-step-1');
const formStep2 = document.getElementById('form-step-2');

formStep1.addEventListener('submit', function (e) {
    e.preventDefault();
    showFormStep(2);
});


function showFormStep(step) {
    all_content.forEach(function (section, index) {
        if (index === step - 1) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });

    tabs.forEach(function (button, index) {
        if (index === step - 1) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}



// js logic for carousel

$(document).ready(function () {
    $(".customer-logos").slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 3
                }
            }
        ]
    });
});


const carousel = document.querySelector('.team-carousel');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const cardWidth = carousel.offsetWidth / 4; // Adjust based on the number of cards shown

nextBtn.addEventListener('click', () => {
    carousel.style.transition = 'transform 0.3s ease-in-out';
    carousel.style.transform = `translateX(-${cardWidth}px)`;
});

prevBtn.addEventListener('click', () => {
    carousel.style.transition = 'transform 0.3s ease-in-out';
    carousel.style.transform = `translateX(${cardWidth}px)`;
});

carousel.addEventListener('transitionend', () => {
    carousel.style.transition = '';
    carousel.style.transform = '';
});