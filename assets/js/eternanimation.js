// gsap.from(".pink-candy ", { y: -600, duration: 5, });
gsap.fromTo(".pink-candy", { y:-600 }, { y:0, duration: 3, });

gsap.from(".gqueen", { x: -600, duration: 1.5 });
gsap.from(".barb img,.hog img,.maing .maingrass", { scale: .2, duration: 1.5 })
gsap.fromTo(".cloud2", { x: -400 }, { x: 2000, repeat: -1, duration: 200, ease: Linear.easeNone, });
gsap.fromTo(".cloud3", { x: -5400 }, { x: 2000, repeat: -1, duration: 200, ease: Linear.easeNone, });
gsap.fromTo(".cloud5", { x: -200 }, { x: 2000, repeat: -1, duration: 200, ease: Linear.easeNone, });
gsap.from(".archerqueen", { scale: .1, duration: 2.5 })
gsap.from(".towerboy", { scale: .1, duration: 2.5 })
gsap.from(".abt", { x: -1600, duration: 1.5 });
gsap.from(".abt-o", { x: 1600, duration: 1.5 });






gsap.from(".aboutking", { y: 600, duration: 1.5 });


gsap.from(".grandwar", {
    scrollTrigger: {
        trigger: ".grandwar",
        start: "top 50%",
        end: "end 70%",
        scrub: 2,
    },
    x: -300,
    duration: 1,
    opacity: 0,
});
gsap.from(".brownboardbg", {
    scrollTrigger: {
        trigger: ".brownboardbg",
        start: "top 80%",
        end: "end 70%",
        scrub: 2,
    },
    scale: .01,
    duration: 2,

});