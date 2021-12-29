
var valueX = 0;

function funcX() {
    document.getElementById('disCalc').value = ++valueX;
    console.log(valueX)
}

function funcSuper() {
    var element2 = document.getElementById('superCalc');
    var valueSuper = element2.innerHTML; 

    ++valueSuper; 

    console.log(valueSuper);
    document.getElementById('superCalc').innerHTML = valueSuper;
}


function funcHeart() {
    var element3 = document.getElementById('heartCalc');
    var valueH = element3.innerHTML; 

    ++valueH; 

    console.log(valueH);
    document.getElementById('heartCalc').innerHTML = valueH;
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

// ============================================
// profile images and little thumbnails 

function IMGsrc(source) {
    document.getElementById('img-preview').src = source;
  }

  // ============================================
// button to go back to the top
const BtnUp = document.getElementById("BtnUp").innerHTML; 

BtnUp.AddEventListener('click', function() {
    // when using function in {} instead of =>, to ensure IE compatibility
window.scrollTo(0, 0); 
// above 0 means pixels. first - X (left), second - y (top)
// adding 50 would mean 50px from the top
})

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

document.querySelector('#btn1').addEventListener('click', funcVideo1);
document.querySelector('#btn2').addEventListener('click', funcVideo2);

// ============================================

funcVideo1();






//      ADD THE BELOW SO IT DOES NOT REFRESH THE PAGE ON BUTTON CLICK!!!!
//   e.preventDefault(); 
  // e is required for the page to not refresh (default behaviour)



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
