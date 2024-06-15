// MARQUEE
let marqueeCarousel = new Swiper(".marquee-carousel", {
    autoplay: {
        delay: 1,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
    },
    slidesPerView: 10,
    speed: 6000, // for marquee speed
    resistance: true,
    resistanceRatio: 0,
    loop: true,
    allowTouchMove: false,
});
// MARQUEE