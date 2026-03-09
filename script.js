// Smooth scroll for navigation

document.querySelectorAll("nav a").forEach(link => {

link.addEventListener("click", function(e){

e.preventDefault()

const target = document.querySelector(this.getAttribute("href"))

if(target){

target.scrollIntoView({
behavior:"smooth"
})

}

})

})

/* =========================
   PORTFOLIO FILTER
========================= */

const filterButtons = document.querySelectorAll(".portfolio-menu span");
const portfolioItems = document.querySelectorAll(".portfolio-item");

filterButtons.forEach(button => {

button.addEventListener("click", () => {

document.querySelector(".portfolio-menu .active")
.classList.remove("active");

button.classList.add("active");

const filter = button.getAttribute("data-filter");

portfolioItems.forEach(item => {

if(filter === "all"){
item.style.display = "block";
}
else if(item.classList.contains(filter)){
item.style.display = "block";
}
else{
item.style.display = "none";
}

});

});

});


/* =========================
   TESTIMONIAL SLIDER
========================= */

let testimonials = document.querySelectorAll(".testimonial");
let index = 0;

function showTestimonial(){

testimonials.forEach(t =>{
t.style.display = "none";
});

testimonials[index].style.display = "block";

index++;

if(index >= testimonials.length){
index = 0;
}

}

showTestimonial();

setInterval(showTestimonial,4000);









// TYPINMG

const words = ["Web Development",
"Software Solutions",
"AI Innovation",
"Digital Products", "Digital Marketing"];

let wordIndex = 0;
let charIndex = 0;
let currentWord = "";
let isDeleting = false;

const typingElement = document.querySelector(".typing");

function typeEffect(){

currentWord = words[wordIndex];

if(!isDeleting){
typingElement.textContent = currentWord.substring(0,charIndex+1);
charIndex++;

if(charIndex === currentWord.length){
isDeleting = true;
setTimeout(typeEffect,1500);
return;
}

}else{
typingElement.textContent = currentWord.substring(0,charIndex-1);
charIndex--;

if(charIndex === 0){
isDeleting = false;
wordIndex++;
if(wordIndex === words.length){
wordIndex = 0;
}
}

}

setTimeout(typeEffect,isDeleting ? 80 : 120);

}

typeEffect();