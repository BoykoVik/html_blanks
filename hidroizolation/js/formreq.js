var modal = document.getElementById("order");

// Get the button that opens the modal
var btn = document.getElementById("openform");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.classList.add("wrooom");
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.classList.remove("wrooom");
}

var k = false;

//setTimeout(showForm, 5000);
function showForm() {
    modal.classList.add("wrooom");
}
window.onscroll = function() {myFunction()};

function myFunction() {
    if (document.documentElement.scrollTop >= 700 && !k) {
        k = true;
        showForm();
    }
    //console.log(document.documentElement.scrollTop);
  }
//tel
window.addEventListener("DOMContentLoaded", function() {
    [].forEach.call( document.querySelectorAll('.tel'), function(input) {
    var keyCode;
    function mask(event) {
        event.keyCode && (keyCode = event.keyCode);
        var pos = this.selectionStart;
        if (pos < 3) event.preventDefault();
        var matrix = "+7 (___) ___ ____",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, ""),
            new_value = matrix.replace(/[_\d]/g, function(a) {
                return i < val.length ? val.charAt(i++) || def.charAt(i) : a
            });
        i = new_value.indexOf("_");
        if (i != -1) {
            i < 5 && (i = 3);
            new_value = new_value.slice(0, i)
        }
        var reg = matrix.substr(0, this.value.length).replace(/_+/g,
            function(a) {
                return "\\d{1," + a.length + "}"
            }).replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
        if (event.type == "blur" && this.value.length < 5)  this.value = ""
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false)

  });

});

function costConverter(valNum) {
    var rez = valNum * document.getElementById("typeprice").value;
    document.getElementById("cost").value=rez.toFixed(2);
  }