//header button and hidden nav

document.getElementsByClassName("navbar-toggler")[0].addEventListener("click", toggle);
let x = document.getElementsByClassName("navbar-container")[0];
let collapse = document.getElementsByClassName("navbar-collapse")[0];
let nav = x.innerHTML;
collapse.innerHTML = nav;

function toggle() {
  let isClick = document.getElementsByClassName("is-clicked")[0]; 
  let button = document.getElementsByClassName("navbar-toggler")[0]; 
  if (isClick === undefined) {
    button.classList.add("is-clicked");
    collapse.style.display = "block";
    document.getElementsByClassName("header-nav-main")[1].classList.add("collapse");
  } else {
    button.classList.remove("is-clicked");
    collapse.style.display = "none";
    document.getElementsByClassName("header-nav-main")[1].classList.remove("collapse");
  }
}

//------------------------back-to-top button-----------------------------
// get the button
let myButton = document.getElementById("back-to-top");
myButton.addEventListener("click", topFunction);

//when the user scrolls down 20px from top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }
}
// back-to-top on click function
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

