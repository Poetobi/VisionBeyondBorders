let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('open');
}

// slider Script

var swiper = new Swiper (".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 7500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

      var container = document.querySelector('.mySwiper');
      container.addEventListener('mouseover', function() {
        swiper.autoplay.stop();
      });
      container.addEventListener('mouseleave', function() {
        swiper.autoplay.start();
      });
      

      // testimonials 


      $(document).ready(function(){
        pagenum = 1;
        function AutoRotate() {
           var myele = null;
           var allElements = document.getElementsByTagName('label');
           for (var i = 0, n = allElements.length; i < n; i++) {
             var myfor = allElements[i].getAttribute('for');
             if ((myfor !== null) && (myfor == ('slide_2_' + pagenum))) {
               allElements[i].click();
               break;
             }
           }
           if (pagenum == 4) {
             pagenum = 1;
           } else {
             pagenum++;
           }
        }
        setInterval(AutoRotate, 5000);
      });


      //return to the top

      

      //Pretty Accordion Tabs Snippet


      // tabs

var tabLinks = document.querySelectorAll(".tablinks");
var tabContent = document.querySelectorAll(".tabcontent");


tabLinks.forEach(function(el) {
   el.addEventListener("click", openTabs);
});


function openTabs(el) {
   var btnTarget = el.currentTarget;
   var country = btnTarget.dataset.country;

   tabContent.forEach(function(el) {
      el.classList.remove("active");
   });

   tabLinks.forEach(function(el) {
      el.classList.remove("active");
   });

   document.querySelector("#" + country).classList.add("active");
   
   btnTarget.classList.add("active");
}


//read more


function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}



function myFunction2() {
  var dots = document.getElementById("dots2");
  var moreText = document.getElementById("more2");
  var btnText = document.getElementById("myBtn2");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}


function myFunction3() {
  var dots = document.getElementById("dots3");
  var moreText = document.getElementById("more3");
  var btnText = document.getElementById("myBtn3");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}


// Book Appointment Popup

$ = function(id) {
  return document.getElementById(id);
}

var show = function(id) {
	$(id).style.display ='block';
}
var hide = function(id) {
	$(id).style.display ='none';
}



// Show the button when the user scrolls down the page
window.onscroll = function() {
  if (window.scrollY > 100) {
    document.getElementById("return-to-top").style.display = "block";
  } else {
    document.getElementById("return-to-top").style.display = "none";
  }
};



// Smoothly scroll to the top of the page when the button is clicked
document.getElementById("return-to-top").addEventListener("click", function() {
  window.scrollTo({ top: 0, behavior: "smooth" });
});



$(".toggle_btn").click(function(){
  $(this).toggleClass("active");
 $(".wrapper ul").toggleClass("active");

 if($(".toggle_btn").hasClass("active")){
   $(".toggle_text").text("Show Less");
 }
 else{
   $(".toggle_text").text("Show More");
 }
});


//faq styling 

const h2s = document.querySelectorAll(".faq-second-hd");
h2s.forEach(h2 => {
  h2.addEventListener("click", function() {
    this.classList.toggle("expanded");
    this.setAttribute("aria-expanded", this.classList.contains("expanded"));
  });
});


//Consult styling 

const htwos = document.querySelectorAll(".consult-second-hd");
htwos.forEach(h2 => {
  h2.addEventListener("click", function() {
    this.classList.toggle("expanded");
    this.setAttribute("aria-expanded", this.classList.contains("expanded"));
  });
});



//enquire pop
$(document).ready(function(){
  $('.popup-btn').click(function(){ 
    var popupBlock = $('#'+$(this).data('popup'));
    popupBlock.addClass('active')
      .find('.fade-out').click(function(){
        popupBlock.css('opacity','0').find('.popup-content').css('margin-top','350px');        
        setTimeout(function(){
          $('.popup').removeClass('active');
          popupBlock.css('opacity','').find('.popup-content').css('margin-top','');
        }, 600);
      });
 });
});