
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
