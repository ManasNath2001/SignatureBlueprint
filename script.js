console.log("i am working");
$(document).ready(function () {
    const backToTop = $("#backToTop");

    // Show when scrolled past #about
    $(window).on("scroll", function () {
        const aboutOffset = $("#about").offset().top;
        if ($(this).scrollTop() >= aboutOffset - 50) {
            backToTop.removeClass("d-none hide").addClass("show");
        } else {
            backToTop.removeClass("show").addClass("hide");
        }
    });

    // Smooth scroll to #hero
    backToTop.on("click", function (e) {
        e.preventDefault();
        $("html, body").animate({ scrollTop: $("#hero").offset().top }, 100);
    });


    // hero section background animation
    const images = [
        "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=870&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1617050055577-f3f9c5548ca0?q=80&w=1406&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1638200975732-3828f089b8cc?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1753111842498-04ffad865dc8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1674976177850-b121d1236526?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1712076335886-2fccef5d3fee?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ];

    let index = 0;
    let toggle = true;

    function changeBackground() {
        const url = `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.8)), url(${images[index]})`;

        if (toggle) {
            $("#bg1").css("background-image", url).removeClass("hidden");
            $("#bg2").addClass("hidden");
        } else {
            $("#bg2").css("background-image", url).removeClass("hidden");
            $("#bg1").addClass("hidden");
        }

        toggle = !toggle;
        index = (index + 1) % images.length;
    }

    function preloadImages(imageArray, callback) {
        let loaded = 0;
        const total = imageArray.length;

        $.each(imageArray, function (i, src) {
            $("<img/>").attr("src", src).on("load", function () {
                loaded++;
                if (loaded === total && typeof callback === "function") {
                    callback();
                }
            });
        });
    }

    // ✅ Preload images
    preloadImages(images, function () {
        // Fade out loader
        $("#loader").addClass("hidden");

        // Init slideshow
        changeBackground();
        setInterval(changeBackground, 3000);
    });

    
});