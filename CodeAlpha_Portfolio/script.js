window.addEventListener("scroll", function(){

let sections = document.querySelectorAll(".section");

sections.forEach(section => {

let position = section.getBoundingClientRect().top;
let screen = window.innerHeight;

if(position < screen - 100){
section.style.opacity = "1";
section.style.transform = "translateY(0)";
}

});

});

let topBtn=document.getElementById("topBtn");
window.onscroll=function(){
    if(document.body.scrollTop>200||
    document.documentElement.scrollTop>200){
        topBtn.style.display="block";
}else{
    topBtn.style.display="none";

}
};

topBtn.onclick=function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
};