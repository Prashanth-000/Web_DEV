document.addEventListener("keydown",(event)=>{
    console.log(`key down ${event.key}`);
})
document.addEventListener("keyup",(event)=>{
    console.log(`key up ${event.key}`);
})
document.addEventListener("keypress",(event)=>{
    console.log(`key press ${event.key}`)
})
