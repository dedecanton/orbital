const sr = ScrollReveal({
    distance: '30px',
    duration: 1800,
    reset: true,
    interval: 500
});

if(window.innerWidth > 968){
    sr.reveal('.sobre-image, .home-texts, .left', {
        origin:'left'
    })
    
    sr.reveal('.home-img, .sobre-texts, .right', {
        origin: 'right'
    })
    
    sr.reveal('.slider, .project-row, .home-btn', {
        origin:'top'
    })
    sr.reveal('.activities, .form-btn', {
        origin:'bottom'
    })
}else{
    sr.reveal('.home-img, .slider, .project-row, .sobre-texts, .left ', {
        origin:'top'
    })
    sr.reveal('.activities, .home-texts, .form-btn, .home-btn, .sobre-image, .right', {
        origin:'bottom'
    })
}

