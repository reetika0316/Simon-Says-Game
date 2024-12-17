let gameSeq=[];
let userSeq=[];
let h2=document.querySelector("h2");
let p=document.querySelector("p");
let score=document.querySelector(".highScore");
let btns=["red","green","blue","yellow"];
let start= false;
let level=0;
document.addEventListener("keypress", ()=>{
    if(start==false){
        start=true;

        levelUp();
        
    }
});


//When game start
function levelUp(){
    userSeq=[];
    level++;
    p.innerText=level-1;
    h2.innerText=`Level ${level}`;
    h2.style.fontWeight="800";

    let randomIdx=Math.floor(Math.random()*3);
    let randomColor=btns[randomIdx];
    let randomBtn=document.querySelector(`.${randomColor}`);
    gameSeq.push(randomColor);
    console.log(gameSeq);
    gameFlash(randomBtn);
}
function gameFlash(btn){
    btn.classList.add("flash");

    setTimeout(()=>{
        btn.classList.remove("flash");
    },250);
}

//when user press button
function userFlash(btn){
    btn.classList.add("userflash");

    setTimeout(()=>{
        btn.classList.remove("userflash");
    },250);
}

function btnPress(){
    let btn=this;
    userFlash(btn);
    let userColor= btn.getAttribute("id");
    userSeq.push(userColor);
    
    check(userSeq.length-1); 
}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnPress);
}
let curr=score.innerText;
let gain=p.innerText;
let highestScore=0; 
//CHECK
function check(idx){
    if(gameSeq[idx]===userSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,500);
        }
    }
    else{
        h2.innerHTML=`Game Over! Your Score is ${p.innerText }. Press Any key to start again.`
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="rgb(77, 115, 218)"
        },300);
        highestScore=Math.max(p.innerText,highestScore);
        score.innerText=`High Score : ${highestScore}`;
        reset();
    }
}

//RESET
function reset(){
    start=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}