const Texts = [
    "HTML", "CSS", "Bootstrap", "JavaScript", "GSAP", "Figma", "Wordpress"
];
var tagCloud = TagCloud(".sphere", Texts, {
    radius: 230,
    maxSpeed: "normal",
    initSpeed: "fast",
    direction: 135,
    keep: true
});

var color = "red";
document.querySelector(".sphere").style.color = color;

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

ScrollSmoother.create({
    wrapper: ".wrapper",
    content: ".content",
})