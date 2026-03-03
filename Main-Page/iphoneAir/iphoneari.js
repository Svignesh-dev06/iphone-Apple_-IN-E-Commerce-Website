 
     let video = document.getElementById("video-played"); 
     let observer2 =new IntersectionObserver(function(entries){ 
        entries.forEach(entry =>{ 
            if(entry.isIntersecting){ video.play();

             }
            else{ video.pause(); 

            } }, {threshold: 0.10}) })


            