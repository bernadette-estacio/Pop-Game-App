/**
 * Created by Bernadette on 3/29/2016.
 */

// Copyright Year
var d = new Date(),
    n = d.getFullYear();
document.getElementById("year").innerHTML = n;

// Select Burst-All Bubble
var x = ["#bubble1", "#bubble10", "#bubble19", "#bubble28", "#bubble37", "#bubble46", "#bubble55", "#bubble64"];

// Randomly Select the Burst-all Bubble
    i = Math.floor(Math.random() * 7);

// 30 Sec Timer
function start() {
    var timeLeft = 30,
        elem = document.getElementById("countDown"),
        timerId = setInterval(countdown, 1000);

    // End Game
    function countdown() {
        if (timeLeft == -1) {
            clearTimeout(timerId);
            stop();
        } else {
            elem.innerHTML = timeLeft;
            timeLeft--;
        }
    }
}

// Show Bubble
function showVisibility(elemName) {
    $(elemName).css("visibility", "visible");
}

// Remove this Bubble
function hideVisibility() {
    $(this).css("visibility", "hidden");
}

// Show Clicked Bubbles
function appearBubble(clickedBubble, popbubbles){
    $(clickedBubble).click(function(){
        hideVisibility();
        showVisibility(popbubbles);
    });
}

// Burst All Bubbles
function burst() {
    var images = document.getElementsByTagName('img'),
        l = images.length;
    for (var i = 0; i < l; i++) {
        images[0].parentNode.removeChild(images[0]);}
}

// Game Over
function stop() {
    burst();
    document.getElementById("instruction").style.visibility="hidden";
    document.getElementById("timeUP").style.visibility="visible";
}

$(document).ready(function(){
    // Window height
    var windowHeight=$(window).height();
    $(window).height(windowHeight+"px");

    // Window width
    var windowWidth=$(window).width();
    //alert(windowWidth);

    // Start Game
    $(".startButton").click(function(){
        $(this).remove();
        // Show All Bubbles
        showVisibility('.pop');
    });

    // Remove this Bubble
    $("img").on('click', hideVisibility);

    // Select the burst all bubble
    $(x[i]).click(function(){
        burst();

        // Win Game
        myVar = setTimeout(time, 750);
        function time() {
            document.getElementById("instruction").style.visibility="hidden";
            document.getElementById("timeUP").style.display="none";
            document.getElementById("goodjob").style.visibility="visible";
        }
    });

});

//Body Not Selectable
window.onload = function() {
    document.body.onselectstart = function() {
        return false;
    }
};

//Call Appear Bubbles Function
appearBubble("#bubble6", ".popbubble6");
appearBubble("#bubble11", ".popbubble11");
appearBubble("#bubble24", ".popbubble24");
appearBubble("#bubble30", ".popbubble30");
appearBubble("#bubble43", ".popbubble43");
appearBubble("#bubble52", ".popbubble52");
appearBubble("#bubble59", ".popbubble59");
