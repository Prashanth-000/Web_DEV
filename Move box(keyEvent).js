let mybox=document.getElementById("box");
document.addEventListener("keydown",(event)=>{
    mybox.style.backgroundColor="tomato";
    mybox.textContent="🥶";
    console.log(event.key);
});
document.addEventListener("keyup",(event)=>{
    mybox.style.backgroundColor="greenyellow";
    mybox.textContent="😎";
})
const move=10;
let x=0;
let y=0;
document.addEventListener("keydown",(event)=>{
    if(event.key.startsWith("Arrow")){
        switch(event.key){
            case "ArrowUp":y-=move;
            break;
            case "ArrowDown":y+=move;
            break;
            case "ArrowRight":x+=move;
            break;
            case "ArrowLeft":x-=move;
            break;
            default:console.log("good luck!");
        }

        mybox.style.top=`${y}px`;
        mybox.style.left=`${x}px`
    }
})
//HTML->code
/*<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Document</title>
</head>
<body>
<div id="box">
    😎
</div>
</diiv>
<script src="script.js"></script>
</body>
</html>
*/
//CSS code->
/*
#box{
    background-color:aquamarine;
    width:150px;
    height:150px;
    border:2px solid greenyellow;
    display:flex;
    justify-content: center;
    align-items: center;
    font-size: 5rem;
    position: relative;
    border-radius: 50%;
}
*/
