const arrow =document.getElementById("arrow1")
window.onscroll=function(){
    if(scrollY >= 300){
        arrow.style.display='block'
    }else{
        arrow.style.display ='none'
    }
}
arrow1.onclick=function(){
    scroll({
    left:0,
    top:0,
    behavior:"smooth"
    })
}

console.log("hello");