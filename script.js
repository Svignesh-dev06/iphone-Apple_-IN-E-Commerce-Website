let elements = document.querySelectorAll(".explore-anmition, .navimg-anmition, .brand-anmition, .topic-head, .nav-heading, .discount, .heading-explore, .why-best, .essentials-iphone, .heroimg-animation ");
 let observer = new IntersectionObserver(function(entries, observer){
    entries.forEach(entry =>{ 
    if(entry.isIntersecting){ 
        entry.target.classList.add("show"); 
        observer.unobserve(entry.target); } });
     }); 
     elements.forEach(el =>{ observer.observe(el); });
     
     
     let video = document.getElementById("video-played"); 
     let observer2 =new IntersectionObserver(function(entries){ 
        entries.forEach(entry =>{ 
            if(entry.isIntersecting){ video.play();

             }
            else{ video.pause(); 

            } }, {threshold: 0.9}) })

 let blurcontainer = document.getElementById("blur-container")
 let blurcontainer2=document.getElementById("blur-container2")

 let shownav = document.getElementById("store")
 let shownav2 =document.getElementById("mac")

 let storenavcontainer = document.getElementById("store-navcontainer")
 let macnavcontainer =document.getElementById("mac-navcontainer")

 // Check if device is mobile
 const isMobile = () => window.innerWidth <= 768;

 // Close dropdowns function
 const closeDropdowns = () => {
  blurcontainer.style.display = "none";
  blurcontainer2.style.display = "none";
 };

 // Desktop dropdown behavior
 if (!isMobile()) {
  shownav.addEventListener("mouseenter", function(){
   blurcontainer.style.display="block"
   blurcontainer.style.height="100%"
  });
  shownav.addEventListener("mouseleave", function(){
   blurcontainer.style.display="none"
  });

  shownav2.addEventListener("mouseenter", function(){
   blurcontainer2.style.display="block"
   blurcontainer2.style.height="100%"
   blurcontainer2.style.transform="trans"
  });
  shownav2.addEventListener("mouseleave", function(){
   blurcontainer2.style.display="none"
  })

  storenavcontainer.addEventListener("mouseenter", function(){
   blurcontainer.style.display ="block"
  });
  storenavcontainer.addEventListener("mouseleave", function(){
   blurcontainer.style.display = "none"
  });

  macnavcontainer.addEventListener("mouseenter" , function(){
   blurcontainer2.style.display="block"
  })
  macnavcontainer.addEventListener("mouseleave", function(){
   blurcontainer2.style.display="none"
  })
 }

 // Mobile tap behavior
 if (isMobile()) {
  let storeOpen = false;
  let macOpen = false;

  shownav.addEventListener("click", function(e){
   e.preventDefault();
   storeOpen = !storeOpen;
   if (storeOpen) {
    blurcontainer.style.display = "block";
    blurcontainer.style.height = "100%";
    macOpen = false;
    blurcontainer2.style.display = "none";
   } else {
    blurcontainer.style.display = "none";
   }
  });

  shownav2.addEventListener("click", function(e){
   e.preventDefault();
   macOpen = !macOpen;
   if (macOpen) {
    blurcontainer2.style.display = "block";
    blurcontainer2.style.height = "100%";
    storeOpen = false;
    blurcontainer.style.display = "none";
   } else {
    blurcontainer2.style.display = "none";
   }
  });

  // Close on blur
  document.addEventListener("click", function(e){
   if (!e.target.closest(".store") && !e.target.closest(".mac") && !e.target.closest(".blur-container") && !e.target.closest(".blur-container2")) {
    closeDropdowns();
    storeOpen = false;
    macOpen = false;
   }
  });
 }

 let showone = document.querySelector(".one-show")
 let whyblurcontainer1 = document.querySelector(".why-imgblur-container1")

 showone.addEventListener("click", function(){
  whyblurcontainer1.style.display="block"
 })

 let search = document.getElementById("search")
 let searchinput = document.getElementById("search-input")
 search.addEventListener("click", function(e){
  e.preventDefault()
  searchinput.style.display="block"
  searchinput.focus();
 })

 // Close search on Escape key
 document.addEventListener("keydown", function(e){
  if (e.key === "Escape") {
   searchinput.style.display = "none";
   closeDropdowns();
  }
 })

 // Handle window resize
 window.addEventListener("resize", function(){
  if (!isMobile()) {
   closeDropdowns();
  }
 })
            