document.getElementsByClassName('navbar-toggler')[0].addEventListener("click", toggle);


function toggle() {
  let isClick = document.getElementsByClassName("is-clicked")[0]; 
  let button = document.getElementsByClassName("navbar-toggler")[0]; 
  if (isClick === undefined) {
    button.classList.add("is-clicked");
  } else {
    button.classList.remove("is-clicked");
  }
}
