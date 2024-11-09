let mybox=document.getElementById("box");
mybox.addEventListener("click",(event)=>{
    event.target.style.backgroundColor="tomato";
    event.target.textContent="clicked!!";
});

mybox.addEventListener("mouseover",(event)=>{
    event.target.style.backgroundColor="red";
    event.target.textContent="don't do this!";
})
mybox.addEventListener("mouseout",(event)=>{
    event.target.style.backgroundColor="orange";
    event.target.textContent="come again! click";
})
