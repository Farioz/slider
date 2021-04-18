import {Swiper, Controller,} from "swiper";
Swiper.use([Controller]);

const swiperImg = new Swiper('.slider-image', {
    // Optional parameters
    direction: 'horizontal',
    speed: 500
    ,
    // loop: true,
});
const swiperText = new Swiper('.slider-text', {
    // Optional parameters
    direction: 'horizontal',
    speed: 500,
    // loop: true,
});

swiperImg.controller.control = swiperText;
swiperText.controller.control = swiperImg;