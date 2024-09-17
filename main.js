let bubbles = ""
let timer = 60
let score =0
let HitRandom = 0

function allBubbles() {
    bubbles = "";  // Clear existing bubbles
    for (let i = 1; i <= 210; i++) {
        let RandomNumber = Math.floor(Math.random() * 10);
        bubbles += `<div class="bubble">${RandomNumber}</div>`;
    }
    document.getElementById('main').innerHTML = bubbles;  // Set bubbles only once
}


function Timer (){
   let timerContainer =  setInterval(function () {
    if(timer>0){
      timer--
      document.getElementById('timerValue').textContent = timer
    }
    else{
        clearInterval(timerContainer)
        document.querySelector(".pbtm").innerHTML = `<h2>Game</h2>`
    }
    }, 1000);
}

function Hit(){
    

    HitRandom = Math.floor(Math.random() * 10);
    document.getElementById('hit').textContent = HitRandom;

}

function PointIncrease (){
 score +=10
 document.getElementById('scoreValue').textContent =score
}


document.querySelector(".pbtm").addEventListener("click",function (details) {
let numberClicked = parseInt(details.target.textContent)
if(HitRandom===numberClicked){
    PointIncrease()
    Hit()
    allBubbles()


}
    
})





// CALLING FUNCTION 
Timer()
Hit()
allBubbles()
// PointIncrease()
