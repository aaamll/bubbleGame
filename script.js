var timer = 60;
var score = 0;
var hitrn = 0;

function makeBubble() {
    var clutter = "";
    for (var i = 1; i <= 100; i++) {
        var rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = clutter;
}

function newHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitrn;
}
function increaseScore() {
    score += 1;
    document.querySelector("#scoreval").textContent = score;
}
function runTimer() {
    var timeInt = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timeval").textContent = timer;
        } else {
            clearInterval(timeInt);
            document.querySelector("#pbtm").innerHtml = " ";
            alert("GAME close !")
        }
    }, 1000);
}

document.querySelector("#pbtm").addEventListener("click", function (dets) {
    var clickedNum = (Number(dets.target.textContent));
    if (clickedNum === hitrn) {
        increaseScore();
        makeBubble();
        newHit();
    }

});

newHit()
runTimer()
makeBubble()
increaseScore()

//Theme changing using DOM
let themeBtn = document.querySelector("#themeChange");
let bg = document.querySelector("#main");
let bubbleColor = document.querySelectorAll(".bubble");
let topBg = document.getElementById("top");

themeBtn.addEventListener("click", function () {
    // First click
    if (themeBtn.dataset.theme === "1") {
        themeBtn.style.backgroundColor = "white";
        themeBtn.style.color = "black";
       topBg.style.backgroundColor = " brown"
        bg.style.backgroundColor = "darkblue";
        bubbleColor.forEach(bubble => {
            bubble.style.backgroundColor = "red";
            bubble.style.color = "white";
        });
        themeBtn.dataset.theme = "2";
    }
    // Second click
    else if (themeBtn.dataset.theme === "2") {
        themeBtn.style.backgroundColor = "yellow";
        themeBtn.style.color = "blue";
        topBg.style.backgroundColor = " orange"
        bg.style.backgroundColor = "lightgreen";
        bubbleColor.forEach(bubble => {
            bubble.style.backgroundColor = "blue";
            bubble.style.color = "white";
        });
        themeBtn.dataset.theme = "3";
    }
    // Third click
    else {
        themeBtn.style.backgroundColor = "black";
        themeBtn.style.color = "white";
        topBg.style.backgroundColor = " purple"
        bg.style.backgroundColor = "pink";
        bubbleColor.forEach(bubble => {
            bubble.style.backgroundColor = "green";
            bubble.style.color = "black";
        });
        themeBtn.dataset.theme = "1";
    }
});
