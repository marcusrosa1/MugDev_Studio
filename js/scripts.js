// MENU MOBILE
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("activate");
});

//SCROLL SUAVE
const links = documentquerySelectorAll('nav a');

links.forEach(link => {
    links.addEventListener("click", () =>{
        navMenu.classList.remove("activate");
})
})

//ANIMAÇÃO AO SCROLL
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold:2.0
});

sections.forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
});
