
// Slide Control

let currentSlide = 0;

let slides = document.querySelectorAll(".slide");


function showSlide(index){

    slides.forEach((slide)=>{
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");

}


function nextSlide(){

    currentSlide++;

    if(currentSlide >= slides.length){
        currentSlide = slides.length - 1;
    }

    showSlide(currentSlide);

}



function prevSlide(){

    currentSlide--;

    if(currentSlide < 0){
        currentSlide = 0;
    }

    showSlide(currentSlide);

}



// Heart Opening Effect

function openHeart(){

    let message = document.getElementById("heartMessage");

    message.innerHTML =
    "❤️ My heart belongs to you Chini ❤️<br><br>" +
    "You are the most special person in my life.";

    message.style.animation = "letterShow 1s ease";

}



// Love Celebration

function celebrateLove(){

    confetti({

        particleCount:150,
        spread:120,
        origin:{
            y:0.6
        }

    });


    setTimeout(()=>{

        confetti({

            particleCount:100,
            spread:160,
            origin:{
                y:0.4
            }

        });

    },800);

}
// Floating Hearts Effect

function createHeart(){

    let heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.className = "floatingHeart";

    heart.style.left = Math.random()*100 + "%";

    heart.style.animationDuration =
    (3 + Math.random()*3) + "s";

    document.body.appendChild(heart);


    setTimeout(()=>{

        heart.remove();

    },6000);

}


setInterval(createHeart,1200);



// Page Start Effect

window.addEventListener("load",()=>{

    showSlide(0);

});



// Photo Click Glow Effect

let photos = document.querySelectorAll(".mainPhoto,.galleryPhoto");


photos.forEach(photo=>{

    photo.addEventListener("click",()=>{

        photo.style.transform="scale(1.1)";

        setTimeout(()=>{

            photo.style.transform="";

        },500);

    });

});
