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
 let shownav = document.getElementById("store")
 let storenavcontainer = document.getElementById("store-navcontainer")

  shownav.addEventListener("mouseenter", function(){
   blurcontainer.style.display="block"
   blurcontainer.style.transform=""
  })
  shownav.addEventListener("mouseleave", function(){
   blurcontainer.style.display="none"
  });

  storenavcontainer.addEventListener("mouseenter", function(){
   blurcontainer.style.display ="block"
  });
  storenavcontainer.addEventListener("mouseleave", function(){
   blurcontainer.style.display = "none"
  })
            