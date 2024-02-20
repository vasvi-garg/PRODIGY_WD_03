document.addEventListener("DOMContentLoaded", function() {
    var navbar = document.getElementById("navbar");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            navbar.style.background = "#555"; /* Change background color on scroll */
        } else {
            navbar.style.background = "#333";
        }
    });
});
