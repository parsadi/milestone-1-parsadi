const navEl = document.querySelector(".nav-list");
const hamburgerEl = document.querySelector(".hamburger");
const content = document.querySelector(".quote");

hamburgerEl.addEventListener("click", () => {
    navEl.classList.toggle("nav--open");
    console.log("hello");
    hamburgerEl.classList.toggle("hamburger--open");
    content.classList.toggle("quote--open");

});

const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')

    })
})

function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })
}




