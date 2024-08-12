const mainNode= document.querySelector(".tasks");


//function to add element
function addTask(){
    
const li= document.createElement("li");
const p=document.createElement("p");

const iconChecked=document.createElement("i");
iconChecked.className="bx bxs-check-circle";

const iconUnChecked= document.createElement("i");
iconUnChecked.className="bx bx-circle";

const iconTrash= document.createElement("i");
iconTrash.className="bx bxs-trash";

const span= document.createElement("span");

const input= document.querySelector(".myValue");

    if(input.value.trim()==""){
        alert("please add your task");
    }
    else{
        let taskText=document.createTextNode(input.value);
        li.appendChild(p);
        p.appendChild(iconUnChecked);
        p.appendChild(taskText);
        li.appendChild(iconTrash);
        mainNode.appendChild(li);
        saveData();
        input.value="";
    }
}

//function to remove check and unchecked element
mainNode.addEventListener("click", function (event) {
    const target = event.target;
    if (target.classList.contains("bxs-trash")) {
        target.closest("li").remove();
        saveData();
    } else if (target.classList.contains("bx-circle")) {
        target.classList.toggle("bx-circle");
        target.classList.toggle("bxs-check-circle");
        target.parentElement.classList.toggle("delCss");
        saveData();
    } else if (target.classList.contains("bxs-check-circle")) {
        target.classList.toggle("bxs-check-circle");
        target.classList.toggle("bx-circle");
        target.parentElement.classList.toggle("delCss");
        saveData();
    }
});


function saveData(){
    localStorage.setItem("data",mainNode.innerHTML)
}

function showData(){
mainNode.innerHTML=localStorage.getItem("data");

}
showData()


//COLOR CHANGE
const root= document.querySelector(":root");
let count=1;
function changeTheme(){
    if(count==4){
        count=0;
    }
    if(count==0){
        root.style.setProperty("--bg-color", "#080808");
        root.style.setProperty("--second-bg-color", "#001005");
        root.style.setProperty("--text-color", "white");
        root.style.setProperty("--main-color", "#00ff51");
    }
    else if(count===1){
        root.style.setProperty("--bg-color", "#080808;");
        root.style.setProperty("--second-bg-color", "#100010");
        root.style.setProperty("--text-color", "white");
        root.style.setProperty("--main-color", "#f200ff");
    }
    else if(count==2){
        root.style.setProperty("--bg-color", "#080808");
        root.style.setProperty("--second-bg-color", "#000b10");
        root.style.setProperty("--text-color", "white");
        root.style.setProperty("--main-color", "#00c3ff");
    }
    else if(count==3){
        root.style.setProperty("--bg-color", "#080808");
        root.style.setProperty("--second-bg-color", "#0d1000");
        root.style.setProperty("--text-color", "white");
        root.style.setProperty("--main-color", "#c3ff00");
    }
    else if(count==4){
        root.style.setProperty("--bg-color", "#080808");
        root.style.setProperty("--second-bg-color", "#020010");
        root.style.setProperty("--text-color", "white");
        root.style.setProperty("--main-color", "#0d00ff");
    }
    count++;
}
