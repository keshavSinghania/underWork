const themeBtn= document.querySelector(".themeBtn");
const root= document.querySelector(":root");
let count=0;

function changeTheme(){
    if(count==5){
        count=0;
    }
    if(count==0){
        root.style.setProperty("--bg-color", "#080808");
        root.style.setProperty("--second-bg-color", "#001005");
        root.style.setProperty("--text-color", "white");
        root.style.setProperty("--main-color", "#00ff51");
        count++
    }
    else if(count===1){
        root.style.setProperty("--bg-color", "#080808;");
        root.style.setProperty("--second-bg-color", "#100010");
        root.style.setProperty("--text-color", "white");
        root.style.setProperty("--main-color", "#f200ff");
        count++
    }
    else if(count==2){
        root.style.setProperty("--bg-color", "#080808");
        root.style.setProperty("--second-bg-color", "#000b10");
        root.style.setProperty("--text-color", "white");
        root.style.setProperty("--main-color", "#00c3ff");
        count++
    }
    else if(count==3){
        root.style.setProperty("--bg-color", "#080808");
        root.style.setProperty("--second-bg-color", "#0d1000");
        root.style.setProperty("--text-color", "white");
        root.style.setProperty("--main-color", "#c3ff00");
        count++
    }
    else if(count==4){
        root.style.setProperty("--bg-color", "#080808");
        root.style.setProperty("--second-bg-color", "#020010");
        root.style.setProperty("--text-color", "white");
        root.style.setProperty("--main-color", "#0d00ff");
        count++
    }
}



themeBtn.addEventListener("click",function(){changeTheme();});

//responsive
const menuSlide= document.querySelector(".menuSlide");
let isVisible=true;

function showMenu(){
    if(isVisible){
        menuSlide.style.right="1%";
        isVisible=false;
    }
    else{
        menuSlide.style.right="101%";
        isVisible=true;
    }
}