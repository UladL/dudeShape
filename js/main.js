var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  });


 
document.addEventListener("DOMContentLoaded", function() {
    let images = document.querySelectorAll(".imagetest");
  
    images.forEach(function(img) {
      let isFirstImage = true; 
  
      img.addEventListener("click", function() {
        if (isFirstImage) {
          img.src = "../img/not.png";
        } else {
          img.src = "../img/love.png";
        }
        isFirstImage = !isFirstImage;
      });
    });
  });



  const buttons = document.querySelectorAll(".buyNowBtn"); // найти все кнопки

  buttons.forEach(button => { // стрелка фуннция button = 1,2,3,4 etc
    button.addEventListener("click", () => { //дабав add event для каждой кнопки
      alert("Ваша заявка принята! После обработки с вами свяжется менеджер нашей компании для согласовании заявки.");
    });// alert !
  });



 let container = document.querySelector(".textInside");
let headers = container.querySelectorAll(".def");

headers.forEach(h => {
  h.addEventListener("click", () => {
    container.querySelectorAll(".def.under").forEach(el => el.classList.remove("under"));
    h.classList.add("under");
  });
});
