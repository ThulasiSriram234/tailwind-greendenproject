const btn=document.getElementById("btn")
const right=document.getElementById("right")
const outbtn=document.getElementById("outbtn")


btn.addEventListener("click",function(){
    right.style.right=0


})
outbtn.addEventListener("click",function(){
    right.style.right="-50%"
})