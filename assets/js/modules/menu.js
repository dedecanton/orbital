let menuBtn = document.querySelector('.menu-btn');
let icon = document.querySelector('.menu-btn i');
let navList = document.querySelector('.nav-list');
let navLinks = document.querySelectorAll('.nav-link')
let navLogo = document.querySelector('.nav-logo')
const tagsActive = [navList, icon, menuBtn,navLogo]


function showMenu(){
    menuBtn.addEventListener('click', event => {
        tagsActive.forEach(tag => tag.classList.toggle('active'))
    })
}

function removeMenuOnClick(){
    navLinks.forEach(link => link.addEventListener('click', () => tagsActive.forEach(tag => tag.classList.remove('active'))))
}



// ============= SECTIONS ==========
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(currentSection => {
        const sectionHeight = currentSection.offsetHeight
        const sectionTop = currentSection.offsetTop - 50;
        let sectionId = currentSection.getAttribute('id')


        let link = document.querySelector('.nav-link[href*=' + sectionId + ']')
        let text = link.textContent;
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            link.innerHTML = `<i class="fas fa-angle-right"></i> ${text}`
        } else {
            link.innerHTML = text
        }
    })
}




// ================ EXPORTS ============

export {showMenu, removeMenuOnClick, scrollActive}