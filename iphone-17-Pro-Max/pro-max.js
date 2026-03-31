/*let elements = document.querySelectorAll(".heroimg-animation")
let observer = new IntersectionObserver( function(entries, observer){
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
            observer.unobserve(entry.target)
        }
    },{threshold: 0.2})
})
elements.forEach(el =>{observer.observe(el);})*/
let heroes = document.querySelectorAll(".hero");


let firstImg1 = heroes[0].querySelector(".img1");
let firstImg2 = heroes[0].querySelector(".img2");

setTimeout(() => {
  firstImg1.style.transform = "translateY(0)";
}, 200);

setTimeout(() => {
  firstImg1.style.opacity = "0";
  firstImg2.style.opacity = "1";
}, 2000);


let observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {

    if (entry.isIntersecting) {

      let img1 = entry.target.querySelector(".img1");
      let img2 = entry.target.querySelector(".img2");

      img1.style.transform = "translateY(0)";

      setTimeout(() => {
        img1.style.opacity = "0";
        img2.style.opacity = "1";
      }, 2000);

      observer.unobserve(entry.target);
    }

  });
}, { threshold: 0.5 });


// Skip first hero, observe rest
for (let i = 1; i < heroes.length; i++) {
  observer.observe(heroes[i]);
}

// Mobile responsiveness improvements
const isMobile = () => window.innerWidth <= 768;

// Optimize image loading for mobile devices
document.addEventListener("DOMContentLoaded", function() {
  if (isMobile()) {
    // Reduce animation delays on mobile for faster load
    document.querySelectorAll(".hero").forEach(hero => {
      let img = hero.querySelector(".img1");
      if (img) {
        img.style.transitionDuration = "1s";
      }
    });
  }
});

// Handle window resize events
window.addEventListener("resize", function() {
  // Recalculate observer threshold on resize
  if (isMobile()) {
    observer.disconnect();
    // Could re-observe with different threshold if needed
  }
});