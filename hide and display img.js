const myimg=document.getElementById("img");
const mybutton=document.getElementById("button");
mybutton.addEventListener("click",(event)=>{
    if(myimg.style.visibility==="hidden"){
        myimg.style.visibility="visible";
        mybutton.textContent="Hide";
    }
    else{
        myimg.style.visibility="hidden";
        mybutton.textContent="Show";
    }
})
