// STRAIGHT MARQUEE
let marqueeCarousel = new Swiper(".marquee-carousel", {
    autoplay: {
        delay: 1,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
    },
    slidesPerView: 10,
    speed: 6000, // for marquee speed
    spaceBetween: 50,
    resistance: true,
    resistanceRatio: 0,
    loop: true,
    allowTouchMove: false,
});
  // REVERSE MARQUEE
let reverseMarqueeCarousel = new Swiper(".reverse-marquee-carousel", {
    autoplay: {
        delay: 1,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
        reverseDirection: true, // FOR REVERSE
    },
    slidesPerView: 1,
    speed: 6000, // for marquee speed
    spaceBetween: 50,
    resistance: true,
    resistanceRatio: 0,
    loop: true,
    allowTouchMove: false,
});