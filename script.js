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
            