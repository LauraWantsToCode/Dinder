
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



//                  working on below now


// ============================================

// === below does not work ====

// Content Functions
funcVideo1 = () => {
    document.querySelector('#video1').classList.remove('hideItem');
    document.querySelector('#video2').classList.add('hideItem');
    document.querySelector('#video3').classList.add('hideItem');
};

funcVideo2 = () => {
    document.querySelector('#video2').classList.remove('hideItem');
    document.querySelector('#video3').classList.add('hideItem');
    document.querySelector('#video1').classList.add('hideItem');
};

funcVideo3 = () => {
    document.querySelector('#video3').classList.remove('hideItem');
    document.querySelector('#video1').classList.add('hideItem');
    document.querySelector('#video2').classList.add('hideItem');
};
// ============================================

// ============================================
// Life Cyle Events

//                  below are giving errors!! 
// document.querySelector('#btn1').addEventListener('click', funcVideo1);
// document.querySelector('#btn2').addEventListener('click', funcVideo2);

// funcVideo1();




// video_count =1;
//   videoPlayer = document.getElementsByClassName("slides");

//   function runNext()  //this function must be added for the button 'next'. 
//                         // create a function for previous with -1
//   {
//     runVideo(video_count+1);
//   }

//   function runVideo(number)
//   {
//     if (number > 3) return;  // returns to video_count initial calc - 1? 
//     video_count = number; // this prints the number once it is clear whether it returns or not?
//     videoPlayer.src = "video"+video_count+".mp4";
//     videoPlayer.play();
    
//   }


  // how to set that the on-web open it shows the first video, and then iterates to +1 each time or -1













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
