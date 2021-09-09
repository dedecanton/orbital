export function scrollTop() {
    const scrollTop = document.getElementById('scroll-top')
    // scroll > 560 vh, add show-scroll to the tag with the class scroll-top  
    this.scrollY >= 560 ? scrollTop.classList.add('show-scroll') : scrollTop.classList.remove('show-scroll')
}

