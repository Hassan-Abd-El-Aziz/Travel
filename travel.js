let searchbtn = document.querySelector("#search-btn");
let searchForm = document.querySelector(".search-form");
let loginForm = document.querySelector(".login-form");
let menuBar = document.querySelector("#menu-bar");
let ancorMenu = document.querySelector(".navbar");
let videoBtn = document.querySelectorAll(".Video-btn");

function showbar() {
    searchbtn.classList.toggle("fa-times");
    searchForm.classList.toggle("active")
}

function showForm() {
    loginForm.classList.add("active")
}
function hideForm() {
    loginForm.classList.remove("active")

}
function showmenu() {
    menuBar.classList.toggle("fa-times");
    ancorMenu.classList.toggle("active")
}
videoBtn.forEach(slide => {
    slide.addEventListener("click", function () {
        document.querySelector(".controls .blue").classList.remove("blue");
        slide.classList.add("blue");
        let src = slide.getAttribute("data-src");

        document.querySelector("#video-slider").src = src;
    })
})

//start creat-swiper

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2500
    },
    // طريقة العرض على حجم الشاشات
    breakpoints: {
        640: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3

        }
    }
});

//end creat-swiper