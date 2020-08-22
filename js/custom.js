// Custom Function Start Here

$(function () {

    //  Banner Jquery Code Start Here
    $('.banner-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        spped: 300,
      });
    //  Banner Jquery Code End Here

    //  Video-Part Jquery Code Start Here
    $('.venobox').venobox(); 
    //  Video-Part Jquery Code End Here

    //  MixItUp Jquery Code Start Here
    var containerEl = document.querySelector('.mixit-work');
    var mixer = mixitup(containerEl);
    //  MixItUp Jquery Code End Here

    //  Client-review Jquery Code Start Here
    $('.review-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        spped: 300,
      });
    //  Client-review Jquery Code End Here

    //  Common Jquery Code Start Here

    //  Common Jquery Code End Here

});
// Custom Function End Here