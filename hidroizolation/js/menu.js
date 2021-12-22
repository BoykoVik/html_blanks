
  // Когда пользователь прокручивает страницу, выполните myFunction
window.onscroll = function() {myFunction()};

// Получить навигатор
var navbar = document.getElementById("borderdiv");

var winScroll = document.body.scrollTop || document.documentElement.scrollTop;

// Получить смещение позиции навигационной панели
var sticky = navbar.offsetTop;

// Добавить класс sticky к навигационной панели, когда вы достигнете ее положения прокрутки. Удалите "sticky", когда вы покидаете положение прокрутки
function myFunction() {
  if (document.documentElement.scrollTop >= 34) {
    //navbar.style.backgroundColor = "red";
    navbar.classList.remove("stickyt");
    navbar.classList.add("sticky");
  } else {
    //navbar.style.backgroundColor = "blue";
    navbar.classList.remove("sticky");
    navbar.classList.add("stickyt");
  }
  //console.log(document.documentElement.scrollTop);
}

//borderdiv

// Когда пользователь прокручивает страницу, выполните myFunction
//window.onscroll = function() {myFunction()};

//function myFunction() {
//  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
//  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//  var scrolled = (winScroll / height) * 100;
//  document.getElementById("myBar").style.width = scrolled + "%";
//}