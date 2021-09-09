import {index} from '../index.js';

let navbar = document.querySelector(".navbar");
let menuBtn = document.querySelector('.menu-btn');
let icon = document.querySelector('.menu-btn i');
let navList = document.querySelector('.nav-list');
let navLinks = document.querySelectorAll('.nav-link')
let navLogo = document.querySelector('.nav-logo')
const tagsActive = [navList, icon, menuBtn,navLogo]


// ============= SECTIONS ==========
const sections = document.querySelectorAll('section[id]')

export function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(currentSection => {
        const sectionHeight = currentSection.offsetHeight
        const sectionTop = currentSection.offsetTop - 200;
        let sectionId = currentSection.getAttribute('id')


        let link = document.querySelector('.nav-link[href*=' + sectionId + ']')
        let text = link.textContent;
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            link.innerHTML = `<i class="fas fa-angle-right"></i> ${text}`
            document.title = `${index.title} - ${text}`;
        } else {
            link.innerHTML = text
        }
    })
}

export function showMenu(){
    menuBtn.addEventListener('click', event => {
        tagsActive.forEach(tag => tag.classList.toggle('active'))
    })
}

export function removeMenuOnClick(){
    navLinks.forEach(link => link.addEventListener('click', () => tagsActive.forEach(tag => tag.classList.remove('active'))))
}

function changeNavbarColor(){
    if (window.scrollY >= navbar.offsetHeight){
        navbar.classList.add("active");
    } else {
        navbar.classList.remove("active");
    }
}
changeNavbarColor();
window.addEventListener('scroll', changeNavbarColor);