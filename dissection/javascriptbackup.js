    
// Open the Modal
function openModal() {
 document.getElementById("myModal").style.display = "block";
    
}

// Close the Modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";

}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
    var captionText = document.getElementById("caption2");
    var captionText = document.getElementById("caption3");
    var captionText = document.getElementById("caption4");
    var captionText = document.getElementById("caption5");
    var captionText = document.getElementById("caption6");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}




// Open the Modal PIG
function openModal2() {
 document.getElementById("myModal2").style.display = "block";
    
}

// Close the Modal PIG
function closeModal2() {
    document.getElementById("myModal2").style.display = "none";

}

// Open the Modal CARE
function openModal3() {
 document.getElementById("myModal3").style.display = "block";
    
}

// Close the Modal CARE
function closeModal3() {
    document.getElementById("myModal3").style.display = "none";

}

// Open the Modal SNEEZE
function openModal4() {
 document.getElementById("myModal4").style.display = "block";
    
}

// Close the Modal SNEEZE
function closeModal4() {
    document.getElementById("myModal4").style.display = "none";

}

// Open the Modal HUMANI
function openModal5() {
 document.getElementById("myModal5").style.display = "block";
    
}

// Close the Modal HUMANI
function closeModal5() {
    document.getElementById("myModal5").style.display = "none";

}

// Open the Modal GAZE
function openModal6() {
 document.getElementById("myModal6").style.display = "block";
    
}

// Close the Modal GAZE
function closeModal6() {
    document.getElementById("myModal6").style.display = "none";

}


// Open the Modal TINY
function openModal6() {
 document.getElementById("myModal7").style.display = "block";
    
}

// Close the Modal TINY
function closeModal6() {
    document.getElementById("myModal7").style.display = "none";

}