/*======= menu icon navbar =======*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = ()=>{
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

/*========= highlight navbar links on scroll  =======*/
let sections = document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a')
window.onscroll=() =>{
    sections.forEach(sec => {
        let top=window.scrollY;
        let offset= sec.offsetTop - 150;
        let height=sec.offsetHeight;
        let id= sec.getAttribute('id');

        if (top>=offset && top<offset+height){
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };

    });

    /*========= sticky navbar =======*/
    let header=document.querySelector ('.header');
    header.classList.toggle('sticky', window.scrollY>100);

    /*======== remove menu icon navbar when click navbar link (scroll) =======*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/*======= Typing effect using Typed.js =======*/
var typed = new Typed("#typed", {
    strings: ["Frontend Developer", "Web Designer", "Tech Enthusiast", "UI/UX Learner"],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1500,
    loop: true
});

/*======= scroll reveal =======*/
if (!window.matchMedia('(prefers-reduced-motion: reduce').matches){
    ScrollReveal({
        reset:true,
        distance:'80px',
        duration:2000,
        delay:50
    });
    ScrollReveal().reveal('.home-content, .heading',{origin: 'top'});
    ScrollReveal().reveal('.home-img img, .skills-container, .contact',{origin: 'bottom'});
    ScrollReveal().reveal('.home-content h1, .about-img img',{origin: 'left'});
    ScrollReveal().reveal('.home-content h3, .home-content p, .about-content',{origin: 'right'});
}
/*======= Feedback Handling in Contact Form =======*/
const form = document.querySelector('form');
const formMessage = document.getElementById('form-message');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(form);

    fetch(form.action, {
      method: "POST",
      body: formData,
    })
    .then(response => {
      if (response.ok) {
        formMessage.textContent = "Message sent successfully!";
        formMessage.style.color = "green";
        form.reset();
      } else {
        throw new Error("Form submission error.");
      }
    })
    .catch(error => {
      formMessage.textContent = "Something went wrong. Please try again.";
      formMessage.style.color = "red";
    });
});
/*======= Particles Background for Home Section =======*/
particlesJS("particles-js", {
  particles: {
    number: { value: 80 },
    color: { value: "#00ffff" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 3 },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#00ffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 3
    }
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" }
    },
    modes: {
      repulse: { distance: 100 },
      push: { particles_nb: 4 }
    }
  },
  retina_detect: true
});
/*======== Light mode =======*/
let lightModeIcon=document.querySelector('#lightMode-icon');
lightModeIcon.onclick=() => {
    document.body.classList.toggle('light-mode'); 

    if (lightModeIcon.classList.contains('bx-sun')) {
        lightModeIcon.classList.remove('bx-sun');
        lightModeIcon.classList.add('bx-moon');
    } else {
        lightModeIcon.classList.remove('bx-moon');
        lightModeIcon.classList.add('bx-sun');
    }

};
