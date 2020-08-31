var mySwiper = new Swiper (' .swiper-container', {
  // Optional parameters
  // direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
})

$(document).ready(function(){
  $('.owl-carousel').owlCarousel();

  $(function() {
    $('input[name="daterange"]').daterangepicker({
      opens: 'left'
    }, function(start, end, label) {
      console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
    });
  });


  // маски для формы 
  $("#date").mask("99.99.9999", {placeholder: "  .  .    " });
  $("#time").mask("99:99", {placeholder: "00:00" });

  

  $('input').keydown(function(e) {
    if(e.keyCode === 13) {
      event.preventDefault();
      $(this).next().focus();
    }
  });
});

$('.owl-carousel').owlCarousel({
  // center: true,
  items:2,
  // loop:false,
  navContainer: ".nav-container",
  navClass: ["carousel__left", "carousel__right"],
  nav: true,
  margin:40,
  responsive:{
      1050:{
          items:2 
      },
      0:{
        
        items:1
      }
  }
});

document.addEventListener('DOMContentLoaded', () => {

  const btn = document.getElementById('nav-menu_mini');

  const menu = document.querySelector('.nav-menu_mini-list');

  

  btn.addEventListener('click', () => {
    console.log("pip")
    if (menu.style.display == "flex") {
      menu.style.display = "none";
      btn.classList.remove("nav-menu_mini_active");
    } else {
      menu.style.display = "flex";
      btn.classList.add('nav-menu_mini_active');
    }
  });




 

});

document.addEventListener('DOMContentLoaded', function() {
  var modalButtons = document.querySelectorAll('.js-open-modal'),
      overlay      = document.querySelector('#overlay-modal'),
      closeButtons = document.querySelector('.js-modal-close'),
      modalElem = document.querySelector('.modal');
  
  
  modalButtons.forEach(function(item){
     
     item.addEventListener('click', function(e) {

        
        
        modalElem.classList.add('modal-active');
        overlay.classList.add('modal-active');
     }); // end click
  }); // end foreach

    closeButtons.addEventListener('click', () => {
      //  var parentModal = this.closest('.modal');
      modalElem.classList.remove('modal-active');
      overlay.classList.remove('modal-active');
    });
 }); // end foreach
