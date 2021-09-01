const slider = document.querySelector('.slider')


let squad = [

  {
    image: './assets/images/logo-white.svg',
    name: 'André Canton 1',
    linkedinUser: "André Canton",
    linkedinLink: "https://...",
    instagramUser: "dede_canton",
    instagramLink: "https://...",
    githubUser: "André Canton",
    githubLink: "https://...",
    whatsapp: '54 999812140'
  },

  {
    image: './assets/images/logo-white.svg',
    name: 'André Canton 2',
    linkedinUser: "André Canton",
    linkedinLink: "https://...",
    instagramUser: "dede_canton",
    instagramLink: "https://...",
    githubUser: "André Canton",
    githubLink: "https://...",
    whatsapp: '54 999812140'
  },

  {
    image: './assets/images/logo-white.svg',
    name: 'André Canton 3',
    linkedinUser: "André Canton",
    linkedinLink: "https://...",
    instagramUser: "dede_canton",
    instagramLink: "https://...",
    githubUser: "André Canton",
    githubLink: "https://...",
    whatsapp: '54 999812140'
  },

  {
    image: './assets/images/logo-white.svg',
    name: 'André Canton 4',
    linkedinUser: "André Canton",
    linkedinLink: "https://...",
    instagramUser: "dede_canton",
    instagramLink: "https://...",
    githubUser: "André Canton",
    githubLink: "https://...",
    whatsapp: '54 999812140'
  },

  {
    image: './assets/images/logo-white.svg',
    name: 'André Canton 5',
    linkedinUser: "André Canton",
    linkedinLink: "https://...",
    instagramUser: "dede_canton",
    instagramLink: "https://...",
    githubUser: "André Canton",
    githubLink: "https://...",
    whatsapp: '54 999812140'
  },

  {
    image: './assets/images/logo-white.svg',
    name: 'André Canton 6',
    linkedinUser: "André Canton",
    linkedinLink: "https://...",
    instagramUser: "dede_canton",
    instagramLink: "https://...",
    githubUser: "André Canton",
    githubLink: "https://...",
    whatsapp: '54 999812140'
  },

  {
    image: './assets/images/logo-white.svg',
    name: 'André Canton 7',
    linkedinUser: "André Canton",
    linkedinLink: "https://...",
    instagramUser: "dede_canton",
    instagramLink: "https://...",
    githubUser: "André Canton",
    githubLink: "https://...",
    whatsapp: '54 999812140'
  },

  {
    image: './assets/images/logo-white.svg',
    name: 'André Canton 8',
    linkedinUser: "André Canton",
    linkedinLink: "https://...",
    instagramUser: "dede_canton",
    instagramLink: "https://...",
    githubUser: "André Canton",
    githubLink: "https://...",
    whatsapp: '54 999812140'
  },

];




let mainCard = 0;
let prevCard = squad.length - 1;
let nextCard = 1;

function loadGallery() {



  // cards fade in / fade out 
  transitionCards()


// =============== MAIN VIEW ==============
  let mainView = document.getElementById("mainView");
  // img
  let mainImg = mainView.querySelector('.card-img')
  mainImg.style.backgroundImage = `url(${squad[mainCard].image})`
  
  // title
  let mainTitle = mainView.querySelector('.card-title')
  mainTitle.textContent = squad[mainCard].name
  
  let mainLinkedin = mainView.querySelector('.linkedin')
  mainLinkedin.querySelector('a').href = squad[mainCard].linkedinLink;
  mainLinkedin.querySelector('.text').textContent = squad[mainCard].linkedinUser
  
  let mainInstagram = mainView.querySelector('.instagram')
  mainInstagram.querySelector('a').href = squad[mainCard].instagramLink;
  mainInstagram.querySelector('.text').textContent = squad[mainCard].instagramUser
  
  let mainGithub = mainView.querySelector('.github')
  mainGithub.querySelector('a').href = squad[mainCard].githubLink;
  mainGithub.querySelector('.text').textContent = squad[mainCard].githubUser
  
  let mainWhatsapp = mainView.querySelector('.whatsapp')
  mainWhatsapp.querySelector('.text').textContent = squad[mainCard].whatsapp

// =============== LEFT VIEW ==============
  let leftView = document.getElementById("leftView");
  // img
  let leftImg = leftView.querySelector('.card-img')
  leftImg.style.backgroundImage = `url(${squad[prevCard].image})`
  
  // title
  let leftTitle = leftView.querySelector('.card-title')
  leftTitle.textContent = squad[prevCard].name
  
  let leftLinkedin = leftView.querySelector('.linkedin')
  leftLinkedin.querySelector('a').href = squad[prevCard].linkedinLink;
  leftLinkedin.querySelector('.text').textContent = squad[prevCard].linkedinUser
  
  let leftInstagram = leftView.querySelector('.instagram')
  leftInstagram.querySelector('a').href = squad[prevCard].instagramLink;
  leftInstagram.querySelector('.text').textContent = squad[prevCard].instagramUser
  
  let leftGithub = leftView.querySelector('.github')
  leftGithub.querySelector('a').href = squad[prevCard].githubLink;
  leftGithub.querySelector('.text').textContent = squad[prevCard].githubUser
  
  let leftWhatsapp = leftView.querySelector('.whatsapp')
  leftWhatsapp.querySelector('.text').textContent = squad[prevCard].whatsapp

// =============== RIGHT VIEW ==============
  let rightView = document.getElementById("rightView");
  // img
  let rightImg = rightView.querySelector('.card-img')
  rightImg.style.backgroundImage = `url(${squad[nextCard].image})`
  
  // title
  let rightTitle = rightView.querySelector('.card-title')
  rightTitle.textContent = squad[nextCard].name
  
  let rightLinkedin = rightView.querySelector('.linkedin')
  rightLinkedin.querySelector('a').href = squad[nextCard].linkedinLink;
  rightLinkedin.querySelector('.text').textContent = squad[nextCard].linkedinUser
  
  let rightInstagram = rightView.querySelector('.instagram')
  rightInstagram.querySelector('a').href = squad[nextCard].instagramLink;
  rightInstagram.querySelector('.text').textContent = squad[nextCard].instagramUser
  
  let rightGithub = rightView.querySelector('.github')
  rightGithub.querySelector('a').href = squad[nextCard].githubLink;
  rightGithub.querySelector('.text').textContent = squad[nextCard].githubUser
  
  let rightWhatsapp = rightView.querySelector('.whatsapp')
  rightWhatsapp.querySelector('.text').textContent = squad[nextCard].whatsapp

};


function transitionCards() {
    

  const cards = document.querySelectorAll('.card')
  cards.forEach(card => card.classList.add('transition'))
  setTimeout(()=> {
    cards.forEach(card => card.classList.remove('transition'))
  }, 501)

  


};

function scrollRight() {

  prevCard = mainCard;
  mainCard = nextCard;
  if (nextCard >= (squad.length - 1)) {
    nextCard = 0;
  } else {
    nextCard++;
  };
  loadGallery();
};

function scrollLeft() {
  nextCard = mainCard
  mainCard = prevCard;

  if (prevCard === 0) {
    prevCard = squad.length - 1;
  } else {
    prevCard--;
  };
  loadGallery();
};

function listenerScroll(){
  document.getElementById("navRight").addEventListener("click", scrollRight);
  document.getElementById("navLeft").addEventListener("click", scrollLeft);
  document.getElementById("rightView").addEventListener("click", scrollRight);
  document.getElementById("leftView").addEventListener("click", scrollLeft);
  document.addEventListener('keyup', function (e) {
    if (e.keyCode === 37) {
      scrollLeft();
    } else if (e.keyCode === 39) {
      scrollRight();
    }
  });
}


export {loadGallery, listenerScroll}