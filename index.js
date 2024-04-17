/*gsap.registerPlugin(ScrollTrigger);

gsap.from(".aboutMe", {
    duration: 4, 
    x: -100,
    opacity: 0,
    stagger: .5,
    scrollTrigger: ".aboutMe"
})

gsap.from("#loading", {
    duration: 4, 
    x: -100,
    opacity: 0,
    scrollTrigger: "#loading"
})
gsap.from("#about", {
    duration: 4, 
    x: 100,
    opacity: 0,
    scrollTrigger: "#about"
})
gsap.from("h4", {
    duration: 4, 
    x: -100,
    opacity: 0,
    stagger: .5,
    scrollTrigger: "h4"
})
gsap.from(".par", {
    duration: 4, 
    x: -100,
    opacity: 0,
    stagger: .5,
    scrollTrigger: ".par"
})

gsap.from(".animate-pulse", {
    duration: 4, 
    y: -50,
    opacity: 0,
    scrollTrigger: ".animate-pulse"
})
gsap.from(".first", {
    duration: 4, 
    x: -100,
    opacity: 0,
    scrollTrigger: ".first"
})
gsap.from(".second", {
    duration: 4, 
    x: 100,
    opacity: 0,
    scrollTrigger: ".second"
})
gsap.from(".cards", {
    duration: 4, 
    x: 100,
    opacity: 0,
    scrollTrigger: ".cards"
})
gsap.from(".pics", {
    duration: 4, 
    x: -100,
    opacity: 0,
    scrollTrigger: ".pics"
})
gsap.from("form", {
    duration: 4, 
    x: 100,
    opacity: 0,
    scrollTrigger: "form"
})
gsap.from(".social-accounts", {
    duration: 4, 
    y: 100,
    opacity: 0,
    scrollTrigger: ".social-accounts"
})
gsap.from(".new-kami", {
    duration: 4, 
    x: 100,
    opacity: 0,
    scrollTrigger: ".new-kami"
})*/
document.querySelector('.burger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.burger-menu').classList.toggle('open');
});

document.querySelectorAll('.burger-menu a').forEach(item => {
    item.addEventListener('click', event => {
        document.querySelector('.burger').classList.remove('active'); 
        document.querySelector('.burger-menu').classList.remove('open'); 
    });
  });

gsap.to (".one", {duration: 2, x: -400, ease: "power2.inOut", opacity: 0})
gsap.from (".two", {delay: .5, duration: 3, x: -400, ease: "power2.inOut", opacity: 0})
gsap.from (".menu", {delay: 3, duration: 2, y: 50, opacity: 0, stagger: .3})
gsap.from (".btn", {delay: 4, duration: 1, rotation: 720, opacity: 0})
gsap.to("h1", {text: "HELLO,", 
    duration: 2, delay: 4.5, ease: "power1.in"})
gsap.to(".name", {text: "I am K@MILL@ @B@ZOV@,", 
    duration: 2, delay: 6.5, ease: "power1.in"})
gsap.to("h3", {text: "a Frontend Web Developer", 
    duration: 2, delay: 8.5, repeat: 2, repeatDelay: .5, ease: "power1.in", yoyo: true})
gsap.to("h3", {text: "a Freelancer", 
    duration: 2, delay: 12.5, repeat: 2, repeatDelay: .5, ease: "power1.in", yoyo: true})




let move = 40;
gsap.to (".orange", {duration: 2, ease: "bounce", stagger: .3, delay: 5.5, y: function(i) {
    if (i%2 === 1) {
        return move
    }
    else return -move
}})
gsap.to (".box", {duration: 5, ease: "power1.in", stagger: .3, delay: 5, y: function(i) {
    if (i%2 === 1) {
        return move
    }
    else return -move
}})
gsap.to (".box", {duration: 5, ease: "power1.in", repeat: 100, stagger: .3, delay: 5, x: function(i) {
    if (i%2 === 1) {
        return move
    }
    else return -move
}})

/*gsap.from ("#logos", {duration: 3, scale: 0.2, opacity: 0, repeat: 100})*/

/*gsap.from (".diploma", {duration: 2, y: 50, opacity: 0, stagger: .3, repeat: 100, repeatDelay: 2})*/


const myTags = [
    "JavaScript",
    "CSS",
    "HTML",
    "Bootstrap",
    "Github",
    "React",
    "Figma",
    "GSAP",
    "Node",
    "Flexbox",
    "WordPress",
  ];
  
  var tagCloud = TagCloud(".cloud", myTags, {
    radius: 250,
  
    maxSpeed: "slow",
    initSpeed: "fast",
  
    direction: 135,
  
    keep: true,
  });

  AOS.init();

