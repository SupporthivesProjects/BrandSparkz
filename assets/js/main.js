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

const images = [
    './assets/img/owl_seo.png',
    './assets/img/owl_ppc.png',
    './assets/img/owl_orm.png',
    './assets/img/owl_wdd.png',
    './assets/img/owl_em.png',
    './assets/img/owl_smm.png'
]
const hover_card_images = [
    './assets/img/cut_seo.png',
    './assets/img/cut_ppc.png',
    './assets/img/cut_orm.png',
    './assets/img/cut_wdd.png',
    './assets/img/cut_em.png',
    './assets/img/cut_smm.png'
]
const videos = [
    './assets/img/hs1_vid_seo.mp4',
    './assets/img/hs1_vid_ppc.mp4',
    './assets/img/hs1_vid_orm.mp4',
    './assets/img/hs1_vid_wdd.mp4',
    './assets/img/hs1_vid_em.mp4',
    './assets/img/hs1_vid_smm.mp4',
]
const videos_mob = [
    './assets/img/hs1_vid_seo_mob.mp4',
    './assets/img/hs1_vid_ppc_mob.mp4',
    './assets/img/hs1_vid_orm_mob.mp4',
    './assets/img/hs1_vid_wdd_mob.mp4',
    './assets/img/hs1_vid_em_mobo.mp4',
    './assets/img/hs1_vid_smm_mob.mp4',
]
const text_array = [
    'Search Engine Optimization',
    'Pay-Per-Click',
    'Online Reputation managment',
    'Web Design & Web Development',
    'Email Marketing',
    'Social Media Management',
]
const crd_text_array = [
    'SEO',
    'PPC',
    'ORM',
    'UI/UX',
    'Email',
    'Social',
]

let index = 0;
const imgElements = document.querySelectorAll('.owl_image');

function updateSlider() {
  imgElements.forEach((img, i) => {
    img.classList.remove('show');
    setTimeout(() => {
      if (screen.width > 700) {
        let items = document.querySelectorAll('.hs1_slider_disc_div .hs1_slide_disc');
        items.forEach(item => item.classList.remove('active'));
        items[index].classList.add('active');

        img.src = images[(index + i) % images.length];
        $(".hs1_element_card_image").attr("src", hover_card_images[index]);

        $(".slide_btm_trix_txt").text(text_array[index]);
        $(".hs1_ele_crd_pill_txt").text(crd_text_array[index]);
        
        var index_val = index + 1
        $('.index_pos span').text('0' + index_val);

        $("#hs1_vid_desk").fadeOut(100, function () {
            $("#hs1_vid_desk source").attr("src", videos[index]);
            this.load();
            $("#hs1_vid_desk").fadeIn(500);
        });

      } else {
        let items = document.querySelectorAll('.hs1_slider_disc_div_mob .hs1_slide_disc_mob');
        items.forEach(item => item.classList.remove('active'));
        items[index].classList.add('active');


        $(".navitrix_text").text(crd_text_array[index]);

        $("#hs1_vid_mobo").fadeOut(100, function () {
            $("#hs1_vid_mobo source").attr("src", videos_mob[index]);
            this.load();
            $("#hs1_vid_mobo").fadeIn(500);
        }); 
      }

      img.classList.add('show');
    }, 500);
  });
}

function showNext() {
  index = (index + 1) % images.length;
  updateSlider();
}

function showPrev() {
  index = (index - 1 + images.length) % images.length;
  updateSlider();
}

document.querySelector('.right-btn').addEventListener('click', showNext);
document.querySelector('.left-btn').addEventListener('click', showPrev);
document.querySelector('.right-btn_mob').addEventListener('click', showNext);
document.querySelector('.left-btn_mob').addEventListener('click', showPrev);

// Auto-play
updateSlider();
let sliderInterval = setInterval(showNext, 3000);
