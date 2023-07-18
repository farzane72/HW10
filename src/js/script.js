let btnDark = document.getElementById("btn-dark");
let btnLight = document.getElementById("btn-light");
let btnSystem = document.getElementById("btn-system");
let html = document.documentElement;
let width = 0;

btnDark.addEventListener("click", () => {
  html.classList.add("dark");
  //--------------local storage-----------------------------------------------------
  localStorage.setItem("theme", "dark");
  //--------------changhing ui-----------------------------------------------------
  changeDarkMode();
});
btnLight.addEventListener("click", () => {
  html.classList.remove("dark");
  //--------------local storage-------------------------------------------------------
  localStorage.removeItem("theme");
  //--------------changhing ui-------------------------------------------------------
  changeLightMode();
});

btnSystem.addEventListener("click", () => {
  let test = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (test) {
    html.classList.add("dark");
  } else {
    html.classList.remove("dark");
  }
  changeSystemMode();
});
//----------------------------function-------------------------------------------------
function changeDarkMode() {
  btnDark.classList.remove("lg:block");
  btnDark.classList.add("lg:hidden");
  btnLight.classList.add("lg:block");
  btnLight.classList.remove("lg:hidden");
}
function changeLightMode() {
  btnLight.classList.remove("lg:block");
  btnLight.classList.add("lg:hidden");
  btnSystem.classList.add("lg:block");
  btnSystem.classList.remove("lg:hidden");
}
function changeSystemMode() {
  btnSystem.classList.remove("lg:block");
  btnSystem.classList.add("lg:hidden");
  btnDark.classList.add("lg:block");
  btnDark.classList.remove("lg:hidden");
}
//--------------------------load window-------------------------------------------------
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  html.classList.add("dark");
  //changeDarkMode();
} else {
  html.classList.remove("dark");
  //changeLightMode();
}
//----------------------------------------vavigation dark mode-----------------------------------------------------------\
let btnDark2 = document.getElementById("btn-dark2");
let btnLight2 = document.getElementById("btn-light2");
let btnSystem2 = document.getElementById("btn-system2");

btnDark2.addEventListener("click", () => {
  html.classList.add("dark");
  //--------------local storage-----------------------------------------------------
  localStorage.setItem("theme", "dark");
  //--------------changhing ui-----------------------------------------------------
  changeDarkMode2();
});
btnLight2.addEventListener("click", () => {
  html.classList.remove("dark");
  //--------------local storage-------------------------------------------------------
  localStorage.removeItem("theme");
  //--------------changhing ui-------------------------------------------------------
  changeLightMode2();
});

btnSystem2.addEventListener("click", () => {
  let test = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (test) {
    html.classList.add("dark");
  } else {
    html.classList.remove("dark");
  }
  changeSystemMode2();
});

function changeDarkMode2() {
  btnDark2.classList.remove("block");
  btnDark2.classList.add("hidden");
  btnLight2.classList.add("block");
  btnLight2.classList.remove("hidden");
}
function changeLightMode2() {
  btnLight2.classList.remove("block");
  btnLight2.classList.add("hidden");
  btnSystem2.classList.add("block");
  btnSystem2.classList.remove("hidden");
}
function changeSystemMode2() {
  btnSystem2.classList.remove("block");
  btnSystem2.classList.add("hidden");
  btnDark2.classList.add("block");
  btnDark2.classList.remove("hidden");
}
// //--------------------------load window-------------------------------------------------
// if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
//   html.classList.add('dark')
//  //changeDarkMode();

// } else {
//   html.classList.remove('dark')
//   //changeLightMode();
// }
//----------------------dark and light mode system- my first solution------------------------------------------------
// btnDark.addEventListener("click",()=>{
//     document.documentElement.classList.add('bg-slate-800');
//     document.documentElement.classList.remove('bg-zinc-100');
//     btnDark.classList.remove('lg:block');
//     btnDark.classList.add('lg:hidden');

//     btnLight.classList.add('lg:block');
//     btnLight.classList.remove('lg:hidden');
// })

// btnLight.addEventListener("click",()=>{
//     document.documentElement.classList.remove('bg-slate-800');
//     document.documentElement.classList.add('bg-zinc-100');

//     btnLight.classList.remove('lg:block');
//     btnLight.classList.add('lg:hidden');

//     btnSystem.classList.add('lg:block');
//     btnSystem.classList.remove('lg:hidden');

// })

// btnSystem.addEventListener("click",()=>{
//     document.documentElement.classList.remove('bg-slate-800');
//     document.documentElement.classList.add('bg-zinc-100');

//     btnSystem.classList.remove('lg:block');
//     btnSystem.classList.add('lg:hidden');

//     btnDark.classList.add('lg:block');
//     btnDark.classList.remove('lg:hidden');

// })

//---------------------------------menu------------------------------
let superMenu = document.querySelector(".super-menu");
let normalMenu = document.querySelector(".normal-menu");
//console.log(superMenu.lastElementChild);
superMenu.addEventListener("click", () => {
  let item = superMenu.lastElementChild;
  item.classList.toggle("lg:hidden");
});
normalMenu.addEventListener("click", () => {
  let item = normalMenu.lastElementChild;
  item.classList.toggle("lg:hidden");
});

//---------------------------------navigation menu---------------------
let superMenuNav = document.querySelector(".super-menu-nav");
let normalMenuNav = document.querySelector(".normal-menu-nav");
let iconMenu = document.querySelector(".icon-menu");
let nav = document.querySelector(".navbar");
let iconClose = document.querySelector(".icon-close");
//------bacground menu navigation-
let bacMenuNav = document.querySelector(".bac-menu-nav ");

//console.log(superMenu.lastElementChild);
superMenuNav.addEventListener("click", () => {
  let item = superMenuNav.lastElementChild;
  item.classList.toggle("hidden");
});
normalMenuNav.addEventListener("click", () => {
  let item = normalMenuNav.lastElementChild;
  item.classList.toggle("hidden");
});
iconMenu.addEventListener("click", () => {
  nav.classList.remove("hidden");
  //------bacground menu navigation-
  bacMenuNav.classList.remove("hidden");
});
iconClose.addEventListener("click", () => {
  nav.classList.add("hidden");
  //------bacground menu navigation-
  bacMenuNav.classList.add("hidden");
});
//------------------------------bacground menu navigation--------------------------------------
bacMenuNav.addEventListener("click", () => {
  nav.classList.add("hidden");
  //------bacground menu navigation-
  bacMenuNav.classList.add("hidden");
});

//-----------------------------slider---------------------------------------------------------

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  centeredSlides: false,
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },
  breakpoints: {
    460: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    
    640: {
      slidesPerView:2,
      spaceBetween: 30
    },
    
    768: {
      slidesPerView: 3,
      spaceBetween: 0
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 0
    }
  },
 
});
//}


let sliders =[...document.getElementsByClassName("swiper-slide")];
let buttons=document.querySelector("#buttons");

buttons.addEventListener('click',clickButtons)
function clickButtons(){

sliders.forEach(element => {
  console.log(element)
  if (element.classList.contains('swiper-slide-active'))
  {
   
    element.classList.add("bg-white","dark:bg-dark-700","rounded-md")

  }
  else{
    element.classList.remove("bg-white","dark:bg-dark-700","rounded-md")
  }
});
}
clickButtons()


//----------------previous solution------------------------------------------

// let sliders = document.querySelector(".sliders");
// let slides = document.querySelectorAll(".slider");
// let firstSlider = document.querySelector(".first");
// let nextEl = document.querySelector(".swiper-button-next");
// let prevEl = document.querySelector(".swiper-button-prev");
// let counter = 0;
//-----------------------------------------------------------------
//console.log(nextEl)
// nextEl.addEventListener("click", () => {
//   let direction = "next";
//   changeSlide(direction);
// });
// prevEl.addEventListener("click", () => {
//   let direction = "prev";
//   changeSlide(direction);
// });
// function changeSlide(dir) {
//   if (dir === "next"){
//     slides[counter].classList.remove("bg-white");
//     counter++;
//     //if (counter === 0) {
//       //firstSlider.classList.add("-ml-[409px]");
//     //}
//     if (counter === 1) {
//       slides[0].classList.add("hidden");
//     }
//     if (counter === 2) {
//       slides[1].classList.add("hidden");
//     }
//     if (counter === 3) {
//       slides[2].classList.add("hidden");
//     }
//     if (counter === 4) {
//       slides[3].classList.add("hidden");
//     }
//   }
//   if (dir === "prev"){
//     slides[counter].classList.remove("bg-white");
//     counter--;
//     //if (counter === 0) {
//       //firstSlider.classList.add("-ml-[409px]");
//     //}
//     if (counter === 1) {
//       slides[0].classList.remove("hidden");
//     }
//     if (counter === 2) {
//       slides[1].classList.remove("hidden");
//     }
//     if (counter === 3) {
//       slides[2].classList.remove("hidden");
//     }
//   }

//   slides[counter].classList.add("bg-white");

// }

//.log(slides)
//for(let  i=0;i<=slides.lentgh;i++){
// if (counter === slides.length) {
//   nextEl.ariaDisabled;
// }
// if (counter === 0) {
//   prevEl.ariaDisabled;
// }
//if (dir === "next") {
// slides[counter].classList.remove("bg-white");

// slides[counter].style.background="none"
// counter++;

//if (counter === 0) {
// sliders.classList.add("transform");
// sliders.classList.add("translate-x-[380px]");
// sliders.classList.add("translate-x-[380px]");
// }
// if (counter === 1) {
//   sliders.classList.add("transform");
//  // sliders.classList.add("translate-x-[760px]");
//  sliders.classList.add("translate-x-[380px]");
// }
// if (counter === 3) {
//   sliders.classList.add("transform");
//   sliders.classList.add("translate-x-[760px]");
//  // sliders.classList.add("translate-x-[1140px]");
// }
// if (counter === 4) {
//   sliders.classList.add("transform");
//   sliders.classList.add("translate-x-[1140px]");
//  // sliders.classList.add("translate-x-[1540px]");
// }
// if (counter === 5) {
//   sliders.classList.add("transform");
//   sliders.classList.add("translate-x-[1900px]");
// }

// }
// if (dir === "prev") {
//   slides[counter].classList.remove("bg-white");
// slides[counter].style.background="none"

// if (counter === 0) {
//   sliders.classList.add("transform");
//   sliders.classList.add("translate-x-[380px]");
// }
// if (counter === 5) {
//   sliders.classList.add("transform");
//   sliders.classList.add("translate-x-[380px]");
// }
// if (counter === 1) {
//   sliders.classList.add("transform");
//   sliders.classList.add("translate-x-[760px]");
// }
// if (counter === 3) {
//   sliders.classList.add("transform");
//   sliders.classList.add("translate-x-[1140px]");
// }
// if (counter === 4) {
//   sliders.classList.add("transform");
//   sliders.classList.add("translate-x-[1540px]");
// }
// counter--;
// }
// slides[counter].classList.add("bg-white");
// slides[counter].style.background="white"
//}

//function Swiper() {


  // for(let  i=0;i<=sliders.length;i++){
  //   console.log(sliders[i])
  //   if (sliders[i].classList.contains('swiper-slide-active'))
  //   {
     
  //     sliders[i].classList.add("bg-white","dark:bg-dark-930")

  //   }
  //   else{
  //     sliders[i].classList.remove("bg-white","dark:bg-dark-930")
  //       }

  // }

  


//setInterval(Swiper, 1000)
//let sliders = document.querySelector(".sliders");
//sliders.addEventListener("resize", Swiper);

//console.log(window.innerWidth);
//console.log(document.documentElement.scrollWidth)
// function calcWidth() {
//   width = window.innerWidth;
//   if (width < 600) {
//     return 1;
//   }
//   if (width > 600 && width < 845) {
//     return 2;
//   }
//   if (width > 845 && width < 1020) {
//     return 3;
//   }
//   if (width > 1020) {
//     return 3;
//   }
// }
// function widthResizer() {
//   width = window.innerWidth;
//   console.log(width);

// }
//widthResizer();
//window.addEventListener("resize", Swiper);

//let test=document.querySelector(".swiper-slide-active")
//test.classList.add('bg-white','rounded')
