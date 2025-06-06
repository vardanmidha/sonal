noButton = document.getElementById("no");
yesButton = document.getElementById("yes");

noButton.addEventListener("mouseover" , ()=>{

    noButton.style.position = "absolute";
    noButton.style.left = Math.random()*70+ "vw";
    noButton.style.top = Math.random()*80 + "vh";

}

)

yesButton.addEventListener("mouseover" , ()=>{

    document.getElementById('centreimg').setAttribute( "src" , "output-onlinegiftools.gif");

    setTimeout(() => {
        document.getElementById('centreimg').setAttribute("src" , "mochi-cat.gif");
      }, 1500);
})

yesButton.addEventListener("click" , ()=>{
    yesButton.style.pointerEvents = "none";


    document.getElementById('centreimg').setAttribute("src" , "dance.gif");
    yesButton.style.pointerEvents = "none";
    noButton.style.pointerEvents = "none";
    noButton.style.display = "none";

    setTimeout(()=>{
    document.getElementById('hearts').style.visibility="visible";
    } , 1500)

    setTimeout(()=>{
        document.getElementById('date').style.visibility="visible";
        } , 2500)

    yesButton.innerHTML =  "Yay!!! Let's goooooooooooo" ;

})

