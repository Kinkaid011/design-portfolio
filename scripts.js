

gsap.registerPlugin(ScrollTrigger);


gsap.timeline()
.from("#captiontext", {stagger:0.1, opacity: 0, y: 100, delay: .5, duration: 1, ease: "back"})
.from(".headshot", {opacity: 0, y: -50, duration: 1, ease: "back"});








gsap.from("#c1", {scrollTrigger: { trigger:"#c1", start: "top 70%" }, opacity: 0, width: 0, height: 0,  duration: 1, ease: "back"});
gsap.from(".projectbox", { scrollTrigger:{ trigger:".projectbox", start: "top 70%" }, stagger: 0.1, y: 100, opacity: 0, duration: 1, ease: "back"});
gsap.from("#c2", {scrollTrigger: { trigger:"#c2", start: "top 70%" }, opacity: 0, width: 0, height: 0,  duration: 1, ease: "back"});
gsap.from(".projectbox2", { scrollTrigger:{ trigger:".projectbox2", start: "top 70%" }, stagger: 0.1, y: 100, opacity: 0, duration: 1, ease: "back"});
gsap.from("#c3", {scrollTrigger: { trigger:"#c3", start: "top 70%" }, opacity: 0, width: 0, height: 0,  duration: 1, ease: "back"});
gsap.from(".projectbox3", { scrollTrigger:{ trigger:".projectbox3", start: "top 70%" }, stagger: 0.1, y: 100, opacity: 0, duration: 1, ease: "back"});
gsap.from("#c4", {scrollTrigger: { trigger:"#c4", start: "top 70%" }, opacity: 0, width: 0, height: 0,  duration: 1, ease: "back"});
gsap.from(".projectbox4", { scrollTrigger:{ trigger:"#c4", start: "top 70%" }, delay: .5, y: 100, opacity: 0, duration: 1, ease: "back"});


