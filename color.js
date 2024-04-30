const code = document.getElementById("code");
const box = document.getElementById("box");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
// const title = document.getElementById("title");
const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
btn1.addEventListener('click',()=>{
    var color = '#'
    for(let i=1;i<=6;i++){
         color = color + haxvalue()
    }
    box.style.backgroundColor = color;
    // title.style.background = color;
    code.innerHTML=color;
    // box.innerHTML = color;
})
btn2.addEventListener('click',()=>{
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    let codecolor = `rgb(${r}, ${g}, ${b})`;
    console.log(codecolor);
    box.style.backgroundColor = codecolor;
    // title.style.background = color;
    code.innerHTML=codecolor;
    // box.innerHTML = color;
})
btn3.addEventListener('click',()=>{
    let h = Math.floor(Math.random()*365);
    let s = Math.floor(Math.random()*101);
    let l = Math.floor(Math.random()*101);
    let hslcolor = `hsl(${h}, ${s}%, ${l}%)`;
    console.log(hslcolor);
    box.style.backgroundColor = hslcolor;
    // title.style.background = color;
    code.innerHTML=hslcolor;
    // box.innerHTML = color;
})
function haxvalue(){
    let randindex = Math.floor(Math.random()*16);
    return hex[randindex];

}
// function rgbvalue(){
    // let r = Math.floor(Math.random()*256);
    // let g = Math.floor(Math.random()*256);
    // let b = Math.floor(Math.random()*256);
    // let codecolor = `rgb(${r}, ${g}, ${b})`;
    // console.log(codecolor);
// }