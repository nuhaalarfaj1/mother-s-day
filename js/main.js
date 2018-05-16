function timerChange(){
    var now = new Date();

    now = now.getTime();

    var later = new Date ("May , 2018 00:00:00");

    later = later.getTime();

    var difference = later - now;

 var hourUntil =Math.floor((difference % (1000 * 60 * 60 * 24)) / ( 1000 * 60 * 60));

var minUntil = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60 ));

document.getElementById("timer").innerText = "Only" + hourUntil + " hours and " + minUntil +"minuts lift!";
setTimeout(timerChange , 60000);
}

timerChange();
setTimeout(function(){
    document.getElementById("popup").style.opacity = "1";
}, 3000)