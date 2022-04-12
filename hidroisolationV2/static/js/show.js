//появление элементов
function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('element-show');
      }
    });
  }

  let options = { threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.element-animationleft');
  let elementsright = document.querySelectorAll('.element-animationright');
  
  for (let elm of elements) {
    observer.observe(elm);
  }

  for (let elm of elementsright) {
    observer.observe(elm);
  }


//переулючение вкладок медиа
var btns = $('.btnmedia');
var mediaitems = $('.mediacontentitem');

for (i=0; i < btns.length; i++){
  var k = btns[i];
  $(k).attr('onClick', 'showwindow(' + i + ')');
}

function showwindow(j){
  var a = $(".mediacontentitem")[j];

  for (i=0; i < mediaitems.length; i++){
    var k = mediaitems[i];
    $(k).css('display', 'none');
    btns[i].classList.remove("activemedia");
  }

  $(a).css('display', 'flex');
  btns[j].classList.add("activemedia");
}
showwindow(0)
//слайдер



var slides = $('.slide');
var nxt = $('.next');
var prw = $('.prev');
var nowslide = 0;

function showslide(nowslide){
  for (i=0; i < $(".slide").length; i++){
    slides[i].classList.remove("activeslide");
  }
  slides[nowslide].classList.add("activeslide");
}

showslide(nowslide);

$(nxt).attr('onClick', 'changeslide(1)');
$(prw).attr('onClick', 'changeslide(-1)');

function changeslide(i){
  if ((nowslide + i) >= slides.length) {
    nowslide = 0;
  }
  else  if ((nowslide + i) <= 0){
    nowslide = slides.length-1;
  } else {
    nowslide += i
  }
  showslide(nowslide);
}