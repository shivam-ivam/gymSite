const cross_btn = document.querySelector(".btn-cross");
const hamberg_btn = document.querySelector(".btn-hamberg");
const nav = document.querySelector("nav");



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