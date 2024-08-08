//javascipt for themebar

const themeBtn = document.querySelector(".fa-solid.fa-palette");
var themeBox= document.querySelector(".themeDiv");

function hideBar(){
    themeBox.style.right="-51vh";
}
function showBar(){
    themeBox.style.right="0";
}

themeBtn.addEventListener("click",function(){
    if(themeBox.style.right=="-51vh"){
        showBar();
    }
    else{
        hideBar();
    }
})

// its time to add theme 

const theme1= document.querySelector(".theme1");
const theme2= document.querySelector(".theme2");
const theme3= document.querySelector(".theme3");
const theme4= document.querySelector(".theme4");
const theme5= document.querySelector(".theme5");
const theme6= document.querySelector(".theme6");
const theme7= document.querySelector(".theme7");
const theme8= document.querySelector(".theme8");
const theme9= document.querySelector(".theme9");
const theme10= document.querySelector(".theme10");

const root= document.querySelector(":root");

theme1.addEventListener("click",function(){ changeTheme("theme1")});
theme2.addEventListener("click",function(){ changeTheme('theme2')});
theme3.addEventListener("click",function(){ changeTheme('theme3')});
theme4.addEventListener("click",function(){ changeTheme('theme4')});
theme5.addEventListener("click",function(){ changeTheme('theme5')});
theme6.addEventListener("click",function(){ changeTheme('theme6')});
theme7.addEventListener("click",function(){ changeTheme('theme7')});
theme8.addEventListener("click",function(){ changeTheme('theme8')});
theme9.addEventListener("click",function(){ changeTheme('theme9')});
theme10.addEventListener("click",function(){ changeTheme('theme10')});

function changeTheme(theme) {
    if (theme === "theme10") {
        root.style.setProperty("--bg-color", "#FF5733");
        root.style.setProperty("--second-bg-color", "#FFC300");
        root.style.setProperty("--text-color", "#1C1C1C");
        root.style.setProperty("--main-color", "#C70039");
    } else if (theme === "theme2") {
        root.style.setProperty("--bg-color", "#080808;");
        root.style.setProperty("--second-bg-color", "#100010");
        root.style.setProperty("--text-color", "white");
        root.style.setProperty("--main-color", "#f200ff");
    } else if (theme === "theme3") {
        root.style.setProperty("--bg-color", "#080808");
        root.style.setProperty("--second-bg-color", "#000b10");
        root.style.setProperty("--text-color", "white");
        root.style.setProperty("--main-color", "#00c3ff");
    } else if (theme === "theme4") {
        root.style.setProperty("--bg-color", "#34495E");
        root.style.setProperty("--second-bg-color", "#2C3E50");
        root.style.setProperty("--text-color", "#ECF0F1");
        root.style.setProperty("--main-color", "#E74C3C");
    } else if (theme === "theme5") {
        root.style.setProperty("--bg-color", "#2C3E50");
        root.style.setProperty("--second-bg-color", "#34495E");
        root.style.setProperty("--text-color", "#ECF0F1");
        root.style.setProperty("--main-color", "#1ABC9C");
    } else if (theme === "theme6") {
        root.style.setProperty("--bg-color", "#080808");
        root.style.setProperty("--second-bg-color", "#0d1000");
        root.style.setProperty("--text-color", "white");
        root.style.setProperty("--main-color", "#c3ff00");
    } else if (theme === "theme7") {
        root.style.setProperty("--bg-color", "#080808");
        root.style.setProperty("--second-bg-color", "#020010");
        root.style.setProperty("--text-color", "white");
        root.style.setProperty("--main-color", "#0d00ff");
    } else if (theme === "theme8") {
        root.style.setProperty("--bg-color", "#2ECC71");
        root.style.setProperty("--second-bg-color", "#27AE60");
        root.style.setProperty("--text-color", "#FFFFFF");
        root.style.setProperty("--main-color", "#E67E22");
    } else if (theme === "theme9") {
        root.style.setProperty("--bg-color", "#2980B9");
        root.style.setProperty("--second-bg-color", "#3498DB");
        root.style.setProperty("--text-color", "#FFFFFF");
        root.style.setProperty("--main-color", "#E74C3C");
    } else if (theme === "theme1") {
        root.style.setProperty("--bg-color", "#080808");
        root.style.setProperty("--second-bg-color", "#001005");
        root.style.setProperty("--text-color", "white");
        root.style.setProperty("--main-color", "#00ff51");
    }
}
