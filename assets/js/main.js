$(document).ready(function () {
    $(".hamburger_menu").click(function () {
        $(".header_mobo_main_slide").fadeIn("slow");
        $(".hamburger_menu").fadeOut("slow");
        $(".hamburger_menu_close").fadeIn("slow");
        $(".header_cart_mobo_main_slide").fadeOut("slow");
    });
    $(".hamburger_menu_close").click(function () {

        if ($(".header_cart_mobo_main_slide").css("display") != "none") {
            $(".header_mobo_main_slide").fadeIn("slow");
            $(".header_cart_mobo_main_slide").fadeOut("slow");
        } else {
            $(".hamburger_menu").fadeIn("slow");
            $(".header_mobo_main_slide").fadeOut("slow");
            $(".hamburger_menu_close").fadeOut("slow");
        }
    });
    $(".cart_menu").click(function () {
        $(".header_cart_mobo_main_slide").fadeIn("slow");
        $(".header_mobo_main_slide").fadeOut("slow");
    });
});

function closeMobileCart() {
    if ($(".header_cart_mobo_main_slide").css("display") != "none") {
        $(".header_cart_mobo_main_slide").fadeOut("slow");
        $(".header_mobo_main_slide").fadeIn("slow");
    } else {
        $(".header_mobo_main_slide").fadeOut("slow");
        $(".hamburger_menu").fadeIn("slow");
        $(".hamburger_menu_close").fadeOut("slow");
    }
}
function justDrop(droperId, roterId, element) {
    const theId = document.getElementById(droperId);
    const theId2 = document.getElementById(roterId);

    if (screen.width < 700) {
        if (element.style.backgroundColor != "rgb(238, 89, 33)") {
            theId.classList.remove('d-none');
            theId2.style.rotate = '180deg';
            element.style.backgroundColor = "#EE5921";
            element.style.color = "#fff";
            element.style.borderRadius = "3px";
            theId2.querySelector("path").setAttribute("stroke", "#FFF");
        } else {
            theId.classList.add('d-none');
            theId2.style.rotate = '0deg';
            element.style.backgroundColor = "unset";
            element.style.color = "#3C3C3C";
            element.style.borderRadius = "3px";
            theId2.querySelector("path").setAttribute("stroke", "#3C3C3C");
        }
    } else {
        if (theId.classList.contains('d-none')) {
            theId.classList.remove('d-none');
            theId2.style.rotate = '180deg';
        } else {
            theId.classList.add('d-none');
            theId2.style.rotate = '0deg';
        }
    }

    
    
}
