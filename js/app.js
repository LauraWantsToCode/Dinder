
// ============================================
// profile images and little thumbnails 

function IMGsrc(source) {
    document.getElementById('img-preview').src = source;
  }


// ============================================
// Calculating dislikes, likes, superlikes: 

var valueX = 0;
function funcX() {
    document.getElementById('disCalc').innerHTML = ++valueX;
    }


var valueSuper = 0   
function funcSuper() {
    document.getElementById('superCalc').innerHTML = ++valueSuper;
}

var valueHeart = 0   
function funcHeart() {
    document.getElementById('heartCalc').innerHTML = ++valueHeart;
}

// ============================================
// prints text on-hover above x, superlike, heart

function Show1() {
    document.getElementById("hovertext").innerHTML="Don't do it!";
}
function Hide1() {
    document.getElementById("hovertext").innerHTML=" ";
}

function Show2() {
    document.getElementById("hovertext2").innerHTML="You SUPER-like me? I Super-like you too!";
}
function Hide2() {
    document.getElementById("hovertext2").innerHTML=" ";
}

function Show3() {
    document.getElementById("hovertext2").innerHTML="Awwwww, I <3 you too!";
}
function Hide3() {
    document.getElementById("hovertext2").innerHTML=" ";
}

// ======================================
// Video, thumbnails, click for next

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var thumbnail = document.getElementsByClassName("demo");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < thumbnail.length; i++) {
    thumbnail[i].className = thumbnail[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  thumbnail[slideIndex-1].className += " active";
  }






  // ============================================
// button to go back to the top - this is causing issues for other buttons! 
//  it was set up as <a> rather than <button>. For a, the below function is not required as <a> scrolls up anyway.
// executing the function no matter whether it is clicked
// innerHTML is used when I want to affect inner HTML or get into it - not relevant to below.

// const BtnUp = document.getElementById("BtnUp"); 
// BtnUp.AddEventListener('click', function() {
// //   when using function in {} instead of =>, to ensure IE compatibility
// window.scrollTo(0, 0); 
// // above 0 means pixels. first - X (left), second - y (top)
// // // adding 50 would mean 50px from the top
// // })
// =============================================

// learning points: 
//      ADD THE BELOW to <a> function SO IT WOULDN’T REFRESH THE PAGE ON CLICK!!!! 
//   e.preventDefault(); 
  // e is required for the page to not refresh (default behaviour)
