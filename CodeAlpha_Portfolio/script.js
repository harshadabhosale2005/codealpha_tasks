const sections = document.querySelectorAll(".section");
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

sections.forEach(section => {
let position = section.getBoundingClientRect().top;
let screen = window.innerHeight;

if(position < screen - 100){
section.style.opacity = "1";
section.style.transform = "translateY(0)";
}
});

if(document.documentElement.scrollTop > 200){
topBtn.style.display = "block";
}else{
topBtn.style.display = "none";
}
});

topBtn.addEventListener("click", () => {
window.scrollTo({
top:0,
behavior:"smooth"
});
});