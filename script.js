const cross_btn = document.querySelector(".btn-cross");
const cross_btn_modal = document.querySelector(".btn-cross-modal");
const hamberg_btn = document.querySelector(".btn-hamberg");
const nav = document.querySelector("nav");
const equipment_btn = document.querySelector(".sec-1-btn2");
const equipment_section = document.querySelector(".sec-3");
const contact_page = document.querySelector(".contact-page");
const contact_btn1 = document.querySelector(".sec-1-btn1");
const contact_btn2 = document.querySelector(".contact-btn");
// const contact_btn3 = document.querySelector(".nav-btn-3");
const sec_7 = document.querySelector(".sec-7");
const get_btns = document.querySelectorAll(".sec-2-btn");

const go_btn = document.querySelector(".con");




// cross button
// cross_btn.addEventListener("click", function () {
//     nav.classList.add("hidden");
//     hamberg_btn.classList.remove("hidden");
//     cross_btn.classList.add("hidden");

// });

// hamberg button
// hamberg_btn.addEventListener("click", function () {
//     nav.classList.remove("hidden");
//     hamberg_btn.classList.add("hidden");
//     cross_btn.classList.remove("hidden");
// });

// showing equipments section
equipment_btn.addEventListener("click", function () {
    equipment_section.classList.remove("hidden");
    cross_btn_modal.classList.remove("hidden");
});
cross_btn_modal.addEventListener("click", function () {
    equipment_section.classList.add("hidden");
    cross_btn_modal.classList.add("hidden");
    contact_page.classList.add("hidden");
    sec_7.classList.add("hidden");
});


//  contact btn work
contact_btn1.addEventListener("click", function () {
    cross_btn_modal.classList.remove("hidden");
    contact_page.classList.remove("hidden");
});
contact_btn2.addEventListener("click", function () {
    cross_btn_modal.classList.remove("hidden");
    contact_page.classList.remove("hidden");
});
// contact_btn3.addEventListener("click", function () {
//     cross_btn_modal.classList.remove("hidden");
//     contact_page.classList.remove("hidden");
// });


// get buttons


get_btns.forEach(function (Element) {
    Element.addEventListener("click", function () {
        sec_7.classList.remove("hidden");
        cross_btn_modal.classList.remove("hidden");
    })
});

go_btn.addEventListener("click", function () {
    sec_7.classList.add("hidden");
    contact_page.classList.remove("hidden");
});




