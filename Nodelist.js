/*
In HTML create 4 buttons with class name "buttons".add simle css with background color "hsl(34, 73%, 50%)"
*/

let mybuttons=document.querySelectorAll(".buttons");

// mybuttons.forEach((button)=>{
//     button.addEventListener("click",(event)=>{
//         event.target.style.backgroundColor="hsl(34, 73%, 80%)";
//     })
// })

const button5=document.createElement("button");
button5.textContent="button 5";
button5.classList="buttons";
document.body.appendChild(button5);

mybuttons=document.querySelectorAll(".buttons");
console.log(mybuttons);
mybuttons.forEach((button)=>{
    button.addEventListener("click",(event)=>{
        event.target.remove();
        mybuttons=document.querySelectorAll(".buttons");
        console.log(mybuttons);
    })
})

mybuttons.forEach((button)=>{
    button.addEventListener("mouseover",(event)=>{
        event.target.style.backgroundColor="blue";
    })
})
mybuttons.forEach((button)=>{
    button.addEventListener("mouseout",(event)=>{
        event.target.style.backgroundColor="hsl(34, 73%, 50%)";
    })
})
