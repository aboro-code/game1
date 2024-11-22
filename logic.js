let cnum = Math.floor(Math.random() * 100) + 1;
let score1 = 0;
let score2=0;
let submitBtn1 = document.getElementById("submit1");
let submitBtn2 = document.getElementById("submit2");
let resBtn = document.getElementById("restart");
let message = document.getElementById("msg");
let message2 = document.getElementById("msg2");
let attempt = document.getElementById("attempts");
let attempt2 = document.getElementById("attempts2");
let startplayer1 = document.getElementById("start1");
let player1name = document.getElementById("name1");
let player1div = document.getElementById("player1");
let player2div = document.getElementById("player2");
let startMainGame = document.getElementById("toMainGame");
let mainGame1Div = document.getElementById("maingamePlayer1");
let mainGame2Div = document.getElementById("maingamePlayer2");
let player2name = document.getElementById("name2");
let displayname1 = document.getElementById("displayname1");
let displayname2 = document.getElementById("displayname2");
let next = document.getElementById("next");
let a1 = document.getElementById("a1");
let a2 = document.getElementById("a2");
let resultbtn = document.getElementById("resultbtn");
let resultText = document.getElementById("resultText");
let resultdiv = document.getElementById("result");
let correctmsg1 = document.getElementById("correctmsg1");
let correctmsg2 = document.getElementById("correctmsg2");
let correct1 = document.getElementById("correct1");
let correct2 = document.getElementById("correct2");

function player1() {
    player1div.style.display = "none";
    player2div.style.display = "block";
}

startplayer1.addEventListener("click", player1);

function mainGame() {
    player2div.style.display = "none";
    mainGame1Div.style.display = "block";
    displayname1.innerHTML = player1name.value;
}

startMainGame.addEventListener("click", mainGame);

function check1() {
    //alert(cnum);
    mainGame1Div.style.display = "block";
    mainGame2Div.style.display = "none";
    //resBtn.style.display = "block";
    

    let usernum = parseInt(document.getElementById("guess").value);
    if (usernum === cnum) {
        message.innerHTML = "You guessed right!";
        message.style.color = "green";
        //clearInterval(timer);
        next.style.display = "block";
        submitBtn1.style.display = "none";
        a1.style.display = "none";
        guess.style.display = "none";
        correctmsg1.style.display = "block";
        correct1.innerHTML = score1;
    } else if (usernum > cnum) {
        message.innerHTML = "Too high! Try again";
        message.style.color = "red";
    } else {
        message.innerHTML = "Too low! Try again";
        message.style.color = "red";
    }
    score1++;
    attempt.innerHTML = score1;
    setTimeout(() => {
        document.getElementById("guess").value = "";
        //message.innerHTML = "";
    }, 1500);
}
function nextTurn() {
    mainGame1Div.style.display = "none";
    mainGame2Div.style.display = "block";
    displayname2.innerHTML = player2name.value;
    cnum= Math.floor(Math.random() * 100) + 1;
}
function check2() {
    //alert(cnum);

    player1div.style.display = "none";
    player2div.style.display = "none";
    mainGame1Div.style.display = "none";
    mainGame2Div.style.display = "block";
    //resBtn.style.display = "block";
    displayname1.innerHTML = player1name.value;
    //resultbtn.style.display = "block";

    let usernum2 = parseInt(document.getElementById("guess2").value);
    if (usernum2 === cnum) {
        message2.innerHTML = "You guessed right!";
        message2.style.color = "green";
        //clearInterval(timer);
        //resBtn.style.display = "block";
        submitBtn2.style.display = "none";
        next.style.display = "none";
        guess2.style.display = "none";
        a2.style.display = "none";
        resultbtn.style.display = "block";
        correctmsg2.style.display = "block";
        correct2.innerHTML = score2;

    } else if (usernum2 > cnum) {
        message2.innerHTML = "Too high! Try again";
        message2.style.color = "red";
    } else {
        message2.innerHTML = "Too low! Try again";
        message2.style.color = "red";
    }
    score2++;
    attempt2.innerHTML = score2;
    setTimeout(() => {
        document.getElementById("guess2").value = "";
        //message2.innerHTML = "";
    }, 1500);
}

function result() {
    resultdiv.style.display = "block";
    mainGame2Div.style.display = "none";
    resultbtn.style.display = "none";
    resBtn.style.display = "block";
    resultText.style.display = "block";
    if (score1 < score2) {
        resultText.innerHTML = `${player1name.value} wins`;
        resultText.style.color = "green";
}
    else if (score1 > score2) {
        resultText.innerHTML = `${player2name.value} wins`;
        resultText.style.color = "green";
    }
    else {
        resultText.innerHTML = "Draw";
        resultText.style.color = "green";
    }
}

function restart() {
    window.location.reload();
}

submitBtn1.addEventListener("click", check1);
next.addEventListener("click", nextTurn);
submitBtn2.addEventListener("click", check2);
resultbtn.addEventListener("click", result);
resBtn.addEventListener("click", restart);


