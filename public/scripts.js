const jokeContainer = document.getElementById("joke");
const newquotebutton = document.getElementsByClassName("newquotebutton")[0];
const actualquote = document.getElementsByClassName("actualquote")[0];
const quoteby = document.getElementsByClassName("quoteby")[0];


const btn = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
const emoji = document.querySelector("span");
console.log("Hello");
canclick = true;




newquotebutton.addEventListener("click",async ()=>{
  console.log("Clicked");
   var a= await fetch('https://api.quotable.io/quotes?tags=love%7Chappiness')
   a=await a.json();
   console.log(a);
   var random=Math.floor(Math.random() * 19) + 1;
   console.log(random);
   actualquote.innerHTML=a.results[random].content;
   quoteby.innerHTML=a.results[random].author;
   console.log("Hello");
})
