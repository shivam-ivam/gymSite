const cross_btn = document.querySelector(".btn-cross");
const cross_btn_modal = document.querySelector(".btn-cross-modal");
const hamberg_btn = document.querySelector(".btn-hamberg");
const nav = document.querySelector("nav");
const equipment_btn = document.querySelector(".sec-1-btn2");
const equipment_section = document.querySelector(".sec-3");




// cross button
cross_btn.addEventListener("click", function () {
    nav.classList.add("hidden");
    hamberg_btn.classList.remove("hidden");
    cross_btn.classList.add("hidden");

});

// hamberg button
hamberg_btn.addEventListener("click", function () {
    nav.classList.remove("hidden");
    hamberg_btn.classList.add("hidden");
    cross_btn.classList.remove("hidden");
});

// showing equipments section 
equipment_btn.addEventListener("click", function () {
    equipment_section.classList.remove("hidden");
    cross_btn_modal.classList.remove("hidden");
});
cross_btn_modal.addEventListener("click", function () {
    equipment_section.classList.add("hidden");
    cross_btn_modal.classList.add("hidden");
});

