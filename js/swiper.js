
        const otherSwiper = new Swiper('.other-swiper', {
            loop: true,
            spaceBetween: 20,
            speed: 600,
            slidesPerView: 1.5,
            breakpoints: {
                480: {
                    slidesPerView: 2.2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 3.5,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 4.5,
                    spaceBetween: 30,
                },
            },
            pagination: {
                el: '.other-swiper .swiper-pagination',
                type: 'progressbar',
            },
        });