var css = document.querySelector("h3");

var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("grad");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

    css.textContent = body.style.background + ";";
    
}


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
var fancyHeading = document.getElementsByClassName("fanc")[0];
var letters = fancyHeading.textContent.split('');

var content = letters.map((val, i) => {
  let delay = Math.floor((Math.random() * 1000) + 1);
  return ('<span style="animation-delay: '+ delay + 'ms">'
          + val +
          '</span>');
});

fancyHeading.innerHTML = "";

for (var i = 0; i < content.length; i++) {
  fancyHeading.innerHTML += content[i];
}

function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
	
    // changing button text to "COPIED" from copy
    var copyButton = document.querySelector(".btn-2");
    copyButton.textContent = "COPIED!";
    // changing button text back to "COPY" after 1.5 seconds
    setTimeout(function () {
        copyButton.textContent = "COPY";
    }, 1500);
  }
  
