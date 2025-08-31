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



  let buttons = document.querySelectorAll(".buyNowBtn");

  