'use strict';

//! Sections

const home = document.querySelector('#hero');
const nav = document.querySelector('#navigation');
const aboutMe = document.querySelector('#about-me');
const allSections = document.querySelectorAll('.section');
const navClass = document.querySelector('.navigation');
const projects = document.querySelector('#projects');
const hamburger = document.querySelector('.navigation-hamburger');
const navList = document.querySelector('.nav');

//! Navigation

//* Navigation text
const navTextLogo = document.querySelector('.navigation-logo-text');
navTextLogo.textContent = '</Đ>';

const navBtn = document.querySelector('.navigation-btn');

//* Scroll
const scrollBtn = document.querySelector('.navigation-list');
scrollBtn.addEventListener('click', function (e) {
    if (e.target.classList.contains('navigation-list-text')) {
        e.preventDefault();

        const id = e.target.getAttribute('href')
        document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    }
});

navTextLogo.addEventListener('click', function (e) {
    e.preventDefault()
    home.scrollIntoView({ behavior: 'smooth' })
})

//* Fade navigation

const links = document.querySelectorAll('.navigation-list-li');
links.forEach(el => {
    el.addEventListener('mouseover', function (e) {
        if (e.target.classList.contains('navigation-list-text')) {
            const link = e.target;
            const linkText = document.querySelectorAll('.navigation-list-text');
            linkText.forEach(elem => {
                if (elem !== link) elem.style.opacity = 0.5
            })
        }
    })
})
const linksOut = document.querySelectorAll('.navigation-list-li');
links.forEach(el => {
    el.addEventListener('mouseout', function (e) {
        if (e.target.classList.contains('navigation-list-text')) {
            const link = e.target;
            const linkText = document.querySelectorAll('.navigation-list-text');
            linkText.forEach(elem => {
                if (elem !== link) elem.style.opacity = 1
            })
        }
    })
})

//* Sticky navigation after some time

const navHeight = nav.getBoundingClientRect().height;
console.log(navHeight);

const headerObserver = new IntersectionObserver(function (entries) {
    const [entry] = entries;

    if (!entry.isIntersecting) {
        nav.classList.add('sticky')
    } else {
        nav.classList.remove('sticky')
    }

}, {
    root: null,
    threshold: 0,
    rootMargin: `-${navHeight}px`
})

headerObserver.observe(home)


//* Hamburger menu
hamburger.addEventListener('click', () => {
    navList.classList.toggle('active');

    document.querySelectorAll('.navigation-list-li').forEach(item => item.addEventListener('click', () => {
        navList.classList.remove('active');
    }));
});


//! Hero 

//* Hero text
const heroText = document.querySelector('.hero-text');
const heroTextBottom = document.querySelector('.hero-text-bottom');
heroText.textContent = '<welcome>';
heroTextBottom.textContent = '</welcome>';

const hand = document.querySelector('.hero-pointer-link');
hand.addEventListener('click', function (e) {
    e.preventDefault();
    projects.scrollIntoView({ behavior: 'smooth' })
})


//! Game

const p2 = document.querySelector('.hero-game-p2-inner');
const gameTitle = document.querySelector('.hero-game-question');

const btnGame = document.querySelector('.btn-game');

const p2Options = ['Rock🤜🏻', 'Paper🖐🏻', 'Scissors✌🏻'];

//* TimeOut for restart - Uradi!!!!

const restartGame = function () {
    gameTitle.innerHTML = `Let's play a quick game?`;
    gameTitle.style.color = '#E7E5E5';

    const p1 = document.getElementById('hero-game-options');
    const p1Value = p1.options[0].selected = 'selected';
}

restartGame();

btnGame.addEventListener('click', function () {
    const p1 = document.getElementById('hero-game-options');
    const p1Value = p1.options[p1.selectedIndex].text;
    const randomP2Options = p2Options[Math.floor(Math.random() * p2Options.length)]
    p2.innerHTML = randomP2Options;

    if (p1Value === randomP2Options) {
        gameTitle.innerHTML = `It's a draw`;
        gameTitle.style.color = '#E7E5E5';
    } else if (p1Value === 'Scissors✌🏻' && randomP2Options === 'Paper🖐🏻') {
        gameTitle.innerHTML = `You won!!!`
        gameTitle.style.color = 'green';
    } else if (p1Value === 'Paper🖐🏻' && randomP2Options === 'Rock🤜🏻') {
        gameTitle.innerHTML = `You won!!!`
        gameTitle.style.color = 'green';
    } else if (p1Value === 'Rock🤜🏻' && randomP2Options === 'Scissors✌🏻') {
        gameTitle.innerHTML = `You won!!!`
        gameTitle.style.color = 'green';
    } else {
        gameTitle.innerHTML = `You lost!!!`
        gameTitle.style.color = 'red';
    }
})


//! Sections fade

const sectionReveal = new IntersectionObserver(function (entries, observer) {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    entry.target.classList.remove('section-hidden')
    observer.unobserve(entry.target)

}, {
    root: null,
    threshold: 0.15
})

allSections.forEach(function (section) {
    sectionReveal.observe(section)
    section.classList.add('section-hidden')
})



//! About Me

const aboutMeText = document.querySelector('.about-me-text');
const aboutMeTextBottom = document.querySelector('.about-me-text-bottom');
const aboutMeWorkBtn = document.querySelector('.work-link');
aboutMeText.textContent = '<about>'
aboutMeTextBottom.textContent = '</about>'

aboutMeWorkBtn.addEventListener('click', (e) => {
    e.preventDefault()
    projects.scrollIntoView({ behavior: 'smooth' })
})




//! Projects

const projectText = document.querySelector('.project-content-text');
const projectTextBottom = document.querySelector('.project-content-text-bottom');

projectText.textContent = '<projects>';
projectTextBottom.textContent = '</projects>'


//! Video projects

const videoProjectText = document.querySelector('.video-projects-content-text');
const videoProjectTextBottom = document.querySelector('.video-projects-content-text-bottom');
videoProjectText.textContent = '<videoprojects>'
videoProjectTextBottom.textContent = '</videoprojects>'

//* Slider

const btnRight = document.querySelector('.slider__btn--right');
const btnLeft = document.querySelector('.slider__btn--left');
const slide = document.querySelector('.slide');
const video = document.querySelector('.video');

const videoprojects = [
    {
        id: 0,
        videoSrc: 'https://www.youtube.com/embed/hli0Mzs-8d0'
    },
    {
        id: 1,
        videoSrc: 'https://www.youtube.com/embed/lXPn2MuE_uI'
    },
    {
        id: 2,
        videoSrc: 'https://www.youtube.com/embed/7wg5urK1YlA'
    },
    {
        id: 3,
        videoSrc: 'https://www.youtube.com/embed/3BAStW7Kuls'
    },
];

let countVid = 0;

const showVideo = function () {
    const item = videoprojects[countVid];
    video.src = item.videoSrc;
}

btnRight.addEventListener('click', function () {
    countVid++
    if (countVid > videoprojects.length - 1) {
        countVid = 0;
    };
    showVideo(countVid)
})

btnLeft.addEventListener('click', function () {
    countVid--;
    if (countVid < 0) {
        countVid = videoprojects.length - 1;
    };
    showVideo(countVid)
})



//! Testimonials

const testimonialsText = document.querySelector('.testimonials-text');
const testimonialsTextBottom = document.querySelector('.testimonials-text-bottom');

testimonialsText.textContent = '<testimonials>'
testimonialsTextBottom.textContent = '</testimonials>'


//! Contact

const contactText = document.querySelector('.contact-content-text');
const contactTextBottom = document.querySelector('.contact-content-text-bottom');

contactText.textContent = '<contact>'
contactTextBottom.textContent = '</contact>'


//! Clock

const clock = document.querySelector('.clock');

setInterval(function () {
    const now = new Date();

    const options = {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    };

    const clockNow = new Intl.DateTimeFormat(navigator.locate, options).format(now);
    clock.textContent = clockNow
}, 1000);


