// ?Hamburger menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navClose = document.querySelector(".nav-close");
const shadow1 = document.getElementsByClassName("shadow1")[0];

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  navMenu.classList.toggle("active");
  navClose.classList.toggle("active");
  hamburger.classList.add("hide");
  shadow1.classList.add("active");
}

// Close navbar when link is clicked
const closeNav = document.querySelectorAll(".close");

closeNav.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  navMenu.classList.remove("active");
  hamburger.classList.remove("hide");
  shadow1.classList.remove("active");
}

// Close navbar when link is clicked
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("hide");
  navClose.classList.remove("active");
  navMenu.classList.remove("active");
  shadow1.classList.remove("active");
}

//Back this project Modal Documents
const backProject = document.getElementsByClassName("back_button");
const buttonContinue = document.getElementsByClassName("button_continue");
const selection = document.getElementsByClassName("selection")[0];
const success = document.getElementsByClassName("container_3")[0];
const content = document.getElementsByClassName("container")[0];
const shadow = document.getElementsByClassName("shadow")[0];

const money = document.querySelector(".money");
const errmoney = document.querySelector(".errmoney");
const money1 = document.querySelector(".money1");
const errmoney1 = document.querySelector(".errmoney1");
const money2 = document.querySelector(".money2");
const errmoney2 = document.querySelector(".errmoney2");

let c;
for (c = 0; c < backProject.length; c++) {
  backProject[c].addEventListener("click", getInput4);
  function getInput4() {
    if (this.classList.toggle("active")) {
    } else {
      this.classList.add("active")
      selection.classList.remove("hide");
      content.classList.add("hide");
      shadow.classList.add("active");
    }
}

}

//Back this project Modal
const acc = document.getElementsByClassName("project_wrapper");

let i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", getInput);
  function getInput() {
    if (this.classList.contains("active")) {
    } else {
      const activeAccordions = document.getElementsByClassName("project_wrapper active");
      for (let j = 0; j < activeAccordions.length; j++) {
        activeAccordions[j].classList.remove("active");
      }
      this.classList.add("active");
    }
}
}

// Continue botton Modal
let a;
  for (a = 0; a < buttonContinue.length; a++) {
  buttonContinue[a].addEventListener("click", getInput2);
  function getInput2() {
    const usmoney = money.value;
    const usmoney1 = money1.value;
    const usmoney2 = money2.value;

    if(usmoney==''){
      errmoney.innerHTML ="Can't be 0";
      money.style.borderColor = 'crimson'
      errmoney.style.color = "crimson"
    }
    if(usmoney1==''){
      errmoney1.innerHTML ="Can't be 0";
      money1.style.borderColor = 'crimson'
      errmoney1.style.color = "crimson"
    }
    if(usmoney2==''){
      errmoney2.innerHTML ="Can't be 0";
      money2.style.borderColor = 'crimson'
      errmoney2.style.color = "crimson"
    }

    else if (this.classList.toggle("active")) {
    } else {
      this.classList.add("active")
      success.classList.remove("hide");
      selection.classList.add("hide");
      shadow.classList.add("active");
    }
  }
}

const closeModal = document.getElementsByClassName("close_modal");
let b;
  for (b = 0; b < closeModal.length; b++) {
    closeModal[b].addEventListener("click", getInput7);
  function getInput7() {
    if (this.classList.toggle("active")) {
    } else {
      this.classList.add("active")
      selection.classList.add("hide");
      content.classList.remove("hide");
      shadow.classList.remove("active");
    }
  }
}

// Progress Bar function
const progressBtn = document.querySelector("#btnIncrease");
progressBtn.addEventListener("click", onButtonIncreaseClicked);
function onButtonIncreaseClicked(){ 
    if (this.classList.toggle("active")) {
    } else {
      this.classList.add("active")
      success.classList.add("hide");
      shadow.classList.remove("active");
      selection.classList.add("hide");
      content.classList.remove("hide");
    }
} 

setInterval(function time() {
  const date = new Date();
  const days = 56 - date.getDate();
  // const hours = 24 - date.getHours();
  // const minutes = 60 - date.getMinutes();
  // const seconds = 60 - date.getSeconds();

  document.querySelector(".timer").innerHTML = days 
})