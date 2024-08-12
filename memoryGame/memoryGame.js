let imgArr= [
    {
        name:"cat1",
        image:"cat1.webp",
    },
    {
        name:"cat2",
        image:"cat2.webp",
    },
    {
        name:"cat3",
        image:"cat3.webp",
    },
    {
        name:"cat4",
        image:"cat4.webp",
    },
    {
        name:"cat5",
        image:"cat5.webp",
    },
    {
        name:"cat6",
        image:"cat6.webp",
    },
    {
        name:"cat1",
        image:"cat1.webp",
    },
    {
        name:"cat2",
        image:"cat2.webp",
    },
    {
        name:"cat3",
        image:"cat3.webp",
    },
    {
        name:"cat4",
        image:"cat4.webp",
    },
    {
        name:"cat5",
        image:"cat5.webp",
    },
    {
        name:"cat6",
        image:"cat6.webp",
    }
];

//randomly changing the index elements
for(let i=(imgArr.length-1); i>=0; i--){
    //lets swap i with and random j
    //generating random number j
    let j=Math.floor(Math.random()*(i+1));
    //swapping
    let temp=imgArr[i];
    imgArr[i]=imgArr[j];
    imgArr[j]=temp;
}


const mainUl=document.querySelector(".myCards")
for(let i=0; i<imgArr.length; i++){
    const h2=document.createElement("h2");
    h2.innerText="Meow"
    const li= document.createElement("li");
    li.append(h2);
    const img= document.createElement("img");
    img.src=imgArr[i].image;
    img.className=imgArr[i].name;
    img.style.display = "none";
    li.append(img);
    mainUl.append(li);
}
const movesElement=document.getElementById("valueMoves");
let moves=0;
let count=0;
let arr=[];
function reset(){
    count=0;
    arr=[]
}
mainUl.addEventListener("click",function(event){
    const ul=event.target.closest("li");
    if(ul.tagName=="LI" && count<2){
        const img=ul.querySelector("img");
        if(img.tagName=="IMG"){
            img.style.display="block";
            count++;
            moves++;
            movesElement.innerText=moves;
            //lets store id of img in arr
            arr.push(img.className);
            if(count==2){
                if(arr[0]==arr[1]){
                    matched();
                }
                else{
                    unmatched();
                }
            }
        }
    }
});

const guessed= document.querySelector(".valueGuess");
let noOfGuessed=1;
function matched(){
    guessed.innerText=noOfGuessed;
    noOfGuessed++;
    reset();
    refreshPage();
}

function unmatched(){
    const img1=document.querySelectorAll(`.${arr[0]}`);
    const img2=document.querySelectorAll(`.${arr[1]}`);
    
  setTimeout(function()
    { 
        console.log(img1);
        console.log(img2);
       img1.forEach(element => {
        element.style.display="none";
        });
       img2.forEach(element => {
        element.style.display="none";
        });
        reset();
    },500)
}

function refresh(){
    location.reload();
}

function refreshPage(){
    if(noOfGuessed===7){
        const wonDiv=document.querySelector(".won");
        wonDiv.style.display="flex";
    }
}

//color change 
const root= document.querySelector(":root");
let countColor=1;
function changeTheme(){
    if(countColor==4){
        countColor=0;
    }
    if(countColor==0){
        root.style.setProperty("--bg-color", "#080808");
        root.style.setProperty("--second-bg-color", "#001005");
        root.style.setProperty("--text-color", "white");
        root.style.setProperty("--main-color", "#00ff51");
    }
    else if(countColor===1){
        root.style.setProperty("--bg-color", "#080808;");
        root.style.setProperty("--second-bg-color", "#100010");
        root.style.setProperty("--text-color", "white");
        root.style.setProperty("--main-color", "#f200ff");
    }
    else if(countColor==2){
        root.style.setProperty("--bg-color", "#080808");
        root.style.setProperty("--second-bg-color", "#000b10");
        root.style.setProperty("--text-color", "white");
        root.style.setProperty("--main-color", "#00c3ff");
    }
    else if(countColor==3){
        root.style.setProperty("--bg-color", "#080808");
        root.style.setProperty("--second-bg-color", "#0d1000");
        root.style.setProperty("--text-color", "white");
        root.style.setProperty("--main-color", "#c3ff00");
    }
    else if(countColor==4){
        root.style.setProperty("--bg-color", "#080808");
        root.style.setProperty("--second-bg-color", "#020010");
        root.style.setProperty("--text-color", "white");
        root.style.setProperty("--main-color", "#0d00ff");
    }
    countColor++;
}


//javascipt for responsive

const linksDiv= document.querySelector(".linksDiv");
function showMenu(){
    linksDiv.style.right="1%";
}
function hideMenu(){
    linksDiv.style.right="101%";
}