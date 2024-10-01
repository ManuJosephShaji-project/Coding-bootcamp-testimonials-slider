const reviews = [
    {
    name:"Tanya Sinclair",
    job: "UX Engineer",
    img:"./images/image-tanya.jpg",
    text:"“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”"
    },
    {
        name: "John Tarkpor",
        job: "Junior Front-end Developer",
        img: "./images/image-john.jpg",
        text: " “ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”"
    }
];
const content = document.querySelector(".review");
const author = document.querySelector(".name");
const jobTitle = document.querySelector(".name .job-title");
const img = document.querySelector(".avater-img")
const perv_btn = document.querySelector(".perv-btn");
const next_btn = document.querySelector(".next-btn");

let currentItem = 0; 

window.addEventListener("DOMContentLoaded",()=>{
   
    showContent(currentItem);
});

function showContent(person){
  let item = reviews[person];
  content.textContent = item.text;
  author.firstChild.textContent = item.name;
  jobTitle.textContent = item.job;
  img.src = item.img;
  
}

next_btn.addEventListener("click",()=>{
    currentItem--;
    if ( currentItem < 0 ){
        currentItem = reviews.length - 1
    }
    showContent(currentItem);
});

perv_btn.addEventListener("click",()=>{
    currentItem++;
    if( currentItem > reviews.length -1){
        currentItem = 0;
    }
    showContent(currentItem);
});

