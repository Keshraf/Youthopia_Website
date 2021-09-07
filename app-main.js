// Set the date we're counting down to
var countDownDate = new Date("Sep 11, 2021 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "D : " + hours + "H : "
  + minutes + "M : " + seconds + "S";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "THE PHEONIX RISES FROM THE ASHES";
  }
}, 1000);

const nav = document.querySelector('.nav-column');
const overlay = document.querySelector('.overlay');

document.querySelector('.but-nav').addEventListener("click", function(){
    nav.classList.add("nav2-column");
    overlay.classList.add("overlay2")
})

document.querySelector('.close-nav').addEventListener("click",function(){
    nav.classList.remove("nav2-column");
    overlay.classList.remove("overlay2");
})

document.querySelector(".overlay").addEventListener("click",function(){
    nav.classList.remove("nav2-column");
    overlay.classList.remove("overlay2");
})

/*GUEST IMAGES*/ 
const slides = document.querySelectorAll(".slide")
slides[1].style.display="none";
let n=0;
setInterval(()=>{
    for(let i=0;i<2;i++){
        slides[i].style.display = "none";
    }
    if(n==2){
        n=0;
    }
    slides[n].style.display="block";
    n++;

},5000)

/*MESSAGE IMAGES*/
const slides2 = document.querySelectorAll(".outer-box")
for(let i=1;i<7;i++){
    slides2[i].style.display="none";
}
let m=0;
setInterval(()=>{
    for(let i=0;i<7;i++){
        slides2[i].style.display = "none";
    }
    if(m==7){
        m=0;
    }
    slides2[m].style.display="flex";
    m++;

},5000)

// document.querySelector('#prev').addEventListener('click',()=>{
//     for(let i=0;i<7;i++){
//         slides2[i].style.display = "none";
//     }
//     if(m==0){
//         m=6;
//     }
//     else if(m==1){
//         m=0;
//     }
//     else if(m==2){
//         m=1;
//     }
//     else if(m==3){
//         m=2;
//     }
//     else if(m==4){
//         m=3;
//     }
//     else if(m==5){
//         m=4;
//     }
//     else if(m==6){
//         m=5;
//     }
//     else{
//         m=0;
//     }
//     slides2[m].style.display="flex";
//     m--;

// })
// document.querySelector('#next').addEventListener('click',()=>{
//     if(m==6){
//         m=0;
//     }
//     ++m;
// })




/*UPDATE IMAGES*/
const slides3 = document.querySelectorAll(".update")
for(let i=1;i<3;i++){
    slides3[i].style.display="none";
}
let p=0;
setInterval(()=>{
    for(let i=0;i<3;i++){
        slides3[i].style.display = "none";
    }
    if(p==3){
        p=0;
    }
    slides3[p].style.display="block";
    p++;

},5000)
