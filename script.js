


gsap.from("#about-page #traveller", {
    x: -300,
    opacity: 0, 
    duration: 1.5, 
    scrollTrigger: {
        trigger: "#about-page",
        scroller: "body",
        start: "top 70%", 
        end: "top 40%",
        scrub: 3, 
   
    }
});

gsap.from("#about-page #text-container", {
    x: 300,
    opacity: 0, 
    duration: 1.5, 
    scrollTrigger: {
        trigger: "#about-page",
        scroller: "body",
        start: "top 70%", 
        end: "top 40%",
        scrub: 3, 
       
    }
});

gsap.from("#about-us #text-container2", {
    x: -300,
    opacity: 0, 
    duration: 1.5, 
    scrollTrigger: {
        trigger: "#about-us",
        scroller: "body",
        end: "top 40%",
        start: "top 70%", 
        scrub: 3, 
        markers: true, 
    }
});

gsap.from("#about-us #sitting", {
    x: 300,
    opacity: 0, 
    duration: 1.5, 
    scrollTrigger: {
        trigger: "#about-us",
        scroller: "body",
        start: "top 70%", 
        end: "top 40%",
        scrub: 3, 
        markers: true, 
    }
});

gsap.from("#services-page #multi", {
    y: -300,
    opacity: 0, 
    duration: 1.5, 
    scrollTrigger: {
        trigger: "#services-page",
        scroller: "body",
        start: "top 70%", 
        end: "top 40%",
        scrub: 3, 
        markers: true, 
    }
});

gsap.from("#services-page #service-text", {
    y:300,
    opacity: 0, 
    duration: 1.5, 
    scrollTrigger: {
        trigger: "#services-page",
        scroller: "body",
        start: "top 70%", 
        end: "top 40%",
        scrub: 3, 
        markers: true, 
    }
});

gsap.from("#contact-page #contact-head", {
    y:-300,
    opacity: 0, 
    duration: 1.5, 
    scrollTrigger: {
        trigger: "#contact-page",
        scroller: "body",
        start: "top 70%", 
        end: "top 40%",
        scrub: 3, 
        markers: true, 
    }
});

gsap.from("#contact-page form", {
    y:300,
    opacity: 0, 
    duration: 1.5, 
    scrollTrigger: {
        trigger: "#contact-page",
        scroller: "body",
        start: "top 70%", 
        end: "top 40%",
        scrub: 3, 
        markers: true, 
    }
});
var tl = gsap.timeline();
tl.from("#navbar",{
    y:-200,
    stagger:1,
    duration:0.5,
    delay:1
});
tl.from("#navbar a",{
    y:-200,
    stagger:1,
    duration:0.5,
});

tl.from("#landscape",{
    y:1200,
    duration:1,
    
});
tl.from("#building",{
    y:1200,
    duration:2
});


document.getElementById("full-nav").addEventListener("click", function () {
    let navbar = document.getElementById("navbarNavAltMarkup");
    
    if (navbar.classList.contains("show")) {
        navbar.classList.remove("show"); 
    } else {
        navbar.classList.add("show"); 
    }
});

let cursor = document.getElementById("cursor")
let main = document.getElementById("main")
main.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x :dets.x,
        y :dets.y,
    })
  
})


gsap.from("#webname .a",{
    duration:0.6,
    opacity:0,
    stagger:0.2,

})
gsap.from("#webname .b",{
    opacity:0,
    duration:0.6,
    stagger:-0.2,

})