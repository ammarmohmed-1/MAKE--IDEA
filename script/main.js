// navbar
var bar =document.querySelector(".bar");
var nav =document.querySelector("nav");

var botton = [
`<img style="width:40px; height:auto;" src="images/icon/close.png" alt="botton">`,
`<img style="width:40px; height:auto;" src="images/icon/menu.png" alt="botton">`,
];

let A = 0;
bar.addEventListener("click",()=>{
  bar.innerHTML = botton[A++];
  if(A >= botton.length ){ A=0 }

  nav.classList.toggle("navbar");
})


// contact us FROM

var icon_form = document.querySelector(".icon_form");
var form = document.querySelector(".form");

var start_now = document.querySelector(".start_now");
console.log(start_now);
start_now.addEventListener("click",()=>{
  form.classList.toggle("form_close")
});

icon_form.addEventListener("click",()=>{
  form.classList.toggle("form_close");
});


window.onscroll = ()=>{
  nav.classList.remove("navbar");
  bar.innerHTML = botton[1];
  form.classList.add("form_close");

}

// make a auto typing

// heading
var make_idea = document.querySelector("#make_idea");
var tittle = "MAKE IDEA";
let i = 0;
const make_ideaa = () => {
  make_idea.innerText = tittle.slice(0,i++);
  if (tittle.length < i) {
    clearInterval(stopfun);
  }
}
const stopfun = setInterval(make_ideaa, 200);

// tittle heading 

var heading_MI = document.querySelector(".heading_MI");
var words = [` انت لديك الفكرة ونحن علينا<span data-aos="zoom-out-down"> التخطيط</span>`,` انت لديك الفكرة ونحن علينا<span data-aos="zoom-out-down"> التصميم الابداعى</span>`,` انت لديك الفكرة ونحن علينا<span data-aos="zoom-out-down"> التنفيذ</span>`];
let ii =0;
const heading_MII = () => {
  heading_MI.innerHTML = words[ii++];
  if(words.length == ii){
    ii = 0;
  }
}
setInterval(heading_MII , 2000);