let toggle = document.getElementById('togglebtn');
let bodycolor = document.getElementById('theme');
toggle.addEventListener("click",()=>{
    console.log();
    if(toggle.innerHTML=="OFF"){
        document.getElementById("togglebtn").innerHTML = "ON";
        bodycolor.classList.add("Dark");
        bodycolor.classList.remove("Light");
    }
    else {
        document.getElementById("togglebtn").innerHTML = "OFF";
        bodycolor.classList.add("Light");
        bodycolor.classList.remove("Dark");
    }
    
})
    
toggle.classList.add("mystyle");