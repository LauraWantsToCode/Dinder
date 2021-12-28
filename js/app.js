
function funcX() {
// use this and two below to calculate how many times this was clicked? or only calculate
// heart and super - maybe x - only show an error message, or message saying they are going to 
// hell and they should benefit from clicking on the link, and it send to smth 
// become a good person or smth
}


function funcSuper() {

}


function funcHeart() {

}



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

function IMGsrc(source) {
    document.getElementById('img-preview').src = source;
  }

const BtnUp = document.getElementById("BtnUp").innerHTML; 

BtnUp.AddEventListener('click', function() {
    // when using function in {} instead of =>, to ensure IE compatibility
window.scrollTo(0, 0); 
// above 0 means pixels. first - X (left), second - y (top)
// adding 50 would mean 50px from the top
})


