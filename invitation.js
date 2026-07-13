/* ==========================================
   JANITH ❤️ SENURI WEDDING INVITATION
   PREMIUM SCRIPT
========================================== */



// ==========================================
// COUNTDOWN TIMER
// ==========================================


const weddingDate = new Date(
    "August 21, 2026 00:00:00"
).getTime();



function updateCountdown(){


    const now = new Date().getTime();


    const distance = weddingDate - now;



    if(distance <= 0){


        document.getElementById("days").innerHTML="00";
        document.getElementById("hours").innerHTML="00";
        document.getElementById("minutes").innerHTML="00";
        document.getElementById("seconds").innerHTML="00";


        return;


    }




    const days = Math.floor(

        distance /

        (1000 * 60 * 60 * 24)

    );



    const hours = Math.floor(

        (distance %

        (1000 * 60 * 60 * 24))

        /

        (1000 * 60 * 60)

    );



    const minutes = Math.floor(

        (distance %

        (1000 * 60 * 60))

        /

        (1000 * 60)

    );



    const seconds = Math.floor(

        (distance %

        (1000 * 60))

        /

        1000

    );





    document.getElementById("days").innerHTML =
    days;


    document.getElementById("hours").innerHTML =
    hours;


    document.getElementById("minutes").innerHTML =
    minutes;


    document.getElementById("seconds").innerHTML =
    seconds;



}



setInterval(updateCountdown,1000);

updateCountdown();







// ==========================================
// OPEN INVITATION
// ==========================================



function openInvitation(){


    window.scrollTo({


        top:window.innerHeight,


        behavior:"smooth"


    });



    startMusic();


}








// ==========================================
// MUSIC PLAYER
// ==========================================


const music = document.getElementById("music");


const musicBtn = document.getElementById("musicBtn");


let musicPlaying=false;





function startMusic(){


    music.play()

    .then(()=>{


        musicPlaying=true;


        musicBtn.innerHTML="🔊";


    })


    .catch(()=>{


        console.log(

        "Browser requires user interaction"

        );


    });



}






musicBtn.addEventListener(

"click",

()=>{


    if(musicPlaying){


        music.pause();


        musicPlaying=false;


        musicBtn.innerHTML="🎵";


    }


    else{


        music.play();


        musicPlaying=true;


        musicBtn.innerHTML="🔊";


    }


}

);









// ==========================================
// SCROLL FADE ANIMATION
// ==========================================



const observer = new IntersectionObserver(

(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add("show");


}


});


},

{

threshold:0.15

}

);




document

.querySelectorAll(

    ".section, .card, .gallery img, .story-item"

)

.forEach(element=>{


observer.observe(element);


});








// ==========================================
// ROMANTIC FLOATING HEARTS
// ==========================================


const particles = document.getElementById("particles");


for(let i = 0; i < 35; i++){


const heart = document.createElement("div");


heart.className = "heart-particle";


heart.innerHTML = "♥";



heart.style.left = Math.random() * 100 + "%";


heart.style.animationDuration =

(8 + Math.random()*12) + "s";



heart.style.animationDelay =

(Math.random()*8) + "s";



heart.style.fontSize =

(12 + Math.random()*25) + "px";



particles.appendChild(heart);


}




createParticles();








// ==========================================
// IMAGE LOAD EFFECT
// ==========================================



window.addEventListener(

"load",

()=>{


document.body.classList.add("loaded");


}

);



// ==========================================
// ADD TO CALENDAR
// ==========================================


function addToCalendar(){


    const event = {
    
    title:
    "Janith ❤️ Senuri Wedding",
    
    
    start:
    "20260821T073000",
    
    
    end:
    "20260821T130000",
    
    
    description:
    "Church Ceremony - 07.30 AM\nPoruwa Ceremony - 10.10 AM\nReception - Moon Light Orilla Hotel, Nainamadama",
    
    
    location:
    "St. Mary's Church Dummalakotuwa & Moon Light Orilla Hotel Nainamadama"
    
    
    };
    
    
    
    
    
    const calendarURL =
    
    "https://calendar.google.com/calendar/render?action=TEMPLATE"
    
    +
    
    "&text="
    
    +
    
    encodeURIComponent(event.title)
    
    
    +
    
    "&dates="
    
    +
    
    event.start
    
    +
    
    "/"
    
    +
    
    event.end
    
    
    
    +
    
    "&details="
    
    +
    
    encodeURIComponent(event.description)
    
    
    +
    
    "&location="
    
    +
    
    encodeURIComponent(event.location);
    
    
    
    
    window.open(
    
    calendarURL,
    
    "_blank"
    
    );
    
    
    
    }