(function () {
    var burger = document.querySelector(".burger");
    var menu = document.querySelector(".nav__links");
    burger.addEventListener('click', function () {
        burger.classList.toggle('burger--active');
        menu.classList.toggle('nav__links--active');
    })

    $('.feedback__persons').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 780,
                settings: {
                    autoplay: false,
                    arrows: false,
                    autoplaySpeed: 2000,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.feedback__persons').on('afterChange', function (event, slick, currentSlide) {
        $('.current').text(currentSlide + 3);

    });

}());