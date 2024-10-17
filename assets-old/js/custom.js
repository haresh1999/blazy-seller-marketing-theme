// plan-page banner slider
var swiper = new Swiper(".custom-plan-slider", {
  loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});
  
// faq-section
document.querySelectorAll('.custom-faq .accordion-button').forEach(button => {
  if (!button.classList.contains('collapsed')) {
      button.closest('.accordion-item').classList.add('active');
  }

  button.addEventListener('click', function() {
      document.querySelectorAll('.custom-faq .accordion-item').forEach(item => {
          item.classList.remove('active');
      });

      if (!this.classList.contains('collapsed')) {
          this.closest('.accordion-item').classList.add('active');
      }
  });
});


// learning-page slider
var swiper = new Swiper(".mySwiper4", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

