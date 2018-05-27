window.onload=function() {
    console.log(window.innerWidth);
    let  banner = document.querySelector(".banner")
    let  img =  banner.querySelectorAll("img")
    let currentIndex = 0
    setInterval(move, 2000)
    function move(){
        currentIndex++;
        if(currentIndex==img.length){
            currentIndex=0
        }
        img.forEach(function(element){
            animate(element,{opacity:0})
        })
        animate(img[currentIndex],{opacity:1})
    }


}