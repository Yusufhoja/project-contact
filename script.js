let sanoq1 = 0;
const sanoq1Element = document.getElementById('sanoq1');

const intervalId = setInterval(() => {
    sanoq1Element.textContent = sanoq1;
    sanoq1++;
    if (sanoq1 > 4  ) {
        clearInterval(intervalId);
    }
}, 200); 
let sanoq2 = 0;
const sanoq2Element = document.getElementById('sanoq2');

const intervalId2 = setInterval(() => {
    sanoq2Element.textContent = sanoq2;
    sanoq2++;
    if (sanoq2 > 20) {
        clearInterval(intervalId2);
    }
}, 10);
let sanoq3 = 0;
const sanoq3Element = document.getElementById('sanoq3');

const intervalI3 = setInterval(() => {
    sanoq3Element.textContent = sanoq3;
    sanoq3++;
    if (sanoq3 > 20000) {
        clearInterval(intervalI3);
    }
}, 0.1); 

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: "fade",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


  <script>
    AOS.init();
</script>


document.addEventListener('DOMContentLoaded', () => {
    const targetElement = document.querySelector('.box');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__bounceInLeft');
                observer.unobserve(entry.target); // Faqat bir marta animatsiyani bajarish uchun
            }
        });
    }, {
        threshold: 0.5 // 50% ko'rinadigan bo'lganda animatsiya boshlanadi
    });

    observer.observe(targetElement);
});