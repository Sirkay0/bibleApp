const id01= document.getElementById("id01")
const modal1= document.getElementById("modal1")
const closing= document.querySelector(".closing")
const closing2= document.querySelector(".closing2")
const id02 = document.getElementById("id02")
const modal2 = document.getElementById("modal2")
let info = document.querySelector(".info")
let microphone = document.getElementById("microphone")



id01.addEventListener( "click", function(){ 
    
    modal1.style.display = "block"

})

closing.addEventListener("click", function(){
    modal1.style.display = "none"
})
window.onclick = function(event) {
    if (event.target == modal1) {
      modal1.style.display = "none"
    }
  }

  id02.addEventListener("click", function(){
    modal2.style.display = "block"
  })
  closing2.addEventListener("click", function(){
    modal2.style.display = "none"
})

microphone.addEventListener("drag", function(){
  info.classList.add("error")
  info.innerHTML = ""
})

let slideIndex = 1
showSlides(slideIndex)

function plusSlides(n) {
  showSlides(slideIndex += n)
}

function currentSlide(n) {
  showSlides(slideIndex = n)
}
function showSlides(n) {
  let i 
  let  slides= document.getElementsByClassName("devotion-img")
  let dots = document.getElementsByClassName("demo")
  let captionText = document.getElementById("caption")

  if(n > slides.length) {slideIndex =1}
  if (n < 1 ) {slideIndex = slides.length}
  for(i = 0; i < slides.length; i++){
      slides[i].style.display = "none"
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", " ")
  }
  slides[slideIndex-1].style.display = "block"
  dots[slideIndex-1].className += " active"
  captionText.innerHTML = dots[slideIndex-1].alt
}
  
