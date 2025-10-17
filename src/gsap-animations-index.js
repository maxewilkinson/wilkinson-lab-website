

gsap.registerPlugin(ScrollTrigger, SplitText, ScrollSmoother);
ScrollSmoother.create({
  smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
  effects: true, // looks for data-speed and data-lag attributes on elements
  smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
});


gsap.from(".floating-banner-image, #banner h1, #banner h2", {
                duration: 1.2,          // How long the animation takes
                x: 100,                 // Start 100px to the right
                opacity: 0,             // Start invisible
                ease: "power3.out",     // An easing function for a smooth effect
                stagger: 0.2            // 0.2s delay between each element's animation
            });



const header = document.querySelector("#header");

// gsap.set(header,
//   {autoAlpha: 0.01}
// )

// // const fadeInHeader = gsap.to(header, {        
// //   autoAlpha: 1,
// //   duration: 0.1,
// //   ease: 'none',
// //   scrollTrigger: {
// //     trigger: "#banner",       
// //     start: "bottom 20%",       
// //     end: "bottom 10%",     
// //     scrub: true,          
// //   }
// // });



gsap.to(".floating-banner-image", {
  y: -500,      
  scrollTrigger: {
    trigger: "body",       
    start: "top -10%",       
    end: "top -80%",     
    scrub: true,          
    pin: false
  }
});

gsap.to(".background-image", {
  y: 500,      
  scrollTrigger: {
    trigger: "body",       
    start: "top top%",       
    end: "top -100%%",     
    scrub: true,          
    pin: false
  }
});

let mySplitText = new SplitText("#dna-sequence", { type: "chars" });
gsap.from(mySplitText.chars, {        
  y: -30,
  opacity: 0,
  stagger: 0.1,
  ease: "power3.out",
  scrollTrigger: {
    trigger: "body",       
    start: "top 10%",       
    end: "top -50%",      
    scrub: 0.5,           
    pin: false               
  }
});


const videos = document.querySelectorAll(".scroll-video");

// Loop over each video element
videos.forEach(video => {
    // Create a ScrollTrigger for each video
    ScrollTrigger.create({
        trigger: video,
        start: "top 70%",
        end: "bottom 20%",
        // markers: true, // Uncomment for debugging

        // --- Callbacks for THIS specific video ---
        onEnter: () => video.play(),
        onEnterBack: () => video.play(),
        onLeave: () => video.pause(),
        onLeaveBack: () => video.pause()
    });
});
