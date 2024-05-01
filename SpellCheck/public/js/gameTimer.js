var timer;	
var uptime = 0;

function gameStart() {
	timer = setInterval(updateTimer, 1000);

	document.getElementById("start").disabled = true;
	document.getElementById("stop").disabled = false;
}

function updateTimer() {
	uptime++;
}

function gameEnd() {
	clearInterval(timer);

	document.getElementById("start").disabled = false;
	document.getElementById("stop").disabled = true;

	cleanFlashMemo

	location.reload();
}	