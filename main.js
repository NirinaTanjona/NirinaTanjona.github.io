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
