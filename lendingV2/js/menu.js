
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

var arr = $(".stepsname button");

for (i=0; i < arr.length; i++){
  var k = arr[i]
  
  $(k).attr('onClick', 'showstep(' + i + ')');
  //$(k).css('background-color', 'rgb(' + 17 + i*3 + ', ' + 17 + i*3 + ',' + 17 + i*3 + ')');
}

function showstep(i){
  $(".steps p").css('display', 'none');
  $(".steps p").css('opacity', '0');
  var a = $(".steps p")[i];
  a.style.display = 'block';
  $(a).animate({opacity: '1'}, 'slow');
}
showstep(0);