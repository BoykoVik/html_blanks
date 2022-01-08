
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
  $(k).css('background-color', '#2b2929');
}

function showstep(i){
  for (t=0; t < arr.length; t++){
    var k = arr[t]
    $(k).css('background-color', '#2b2929');
  }
  $(".step").css('display', 'none');
  $(".step").css('opacity', '0');
  var a = $(".step")[i];
  var bt = arr[i];
  $(bt).css('background-color', '#24292B');

  bt.classList.add("activebtn");
  a.style.display = 'flex';
  $(a).animate({opacity: '1'}, 'slow');
}
showstep(0);