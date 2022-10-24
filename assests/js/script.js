$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }
    });

});

document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Portfolio | Chirag Panchal";
            $("#favicon").attr("href", "assests/images/favicon.png");
        }
        else {
            document.title = "Come Back To Portfolio";

        }
    });

// <!-- typed js effect -->
var typed = new Typed(".typing-text", {
    strings: ["Web development", "App development", "Full-Stack development"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});
// <!-- typed js effect ends -->

// <!-- mail contact form data -->

// $("#contact-form").submit(function (event) {
//     event.preventDefault();
// });


