var timer;	
var uptime = 0;

function gameStart() {
	timer = setInterval(updateTimer, 1000);

	document.getElementById("start").disabled = true;
	document.getElementById("stop").disabled = false;
}

function updateTimer() {
	uptime++;
	updateUptimeTimer();
}

function updateUptimeTimer() {
	var uptimeView = document.getElementById("uptime_view");
	
	min = Math.floor(uptime / 60);
	sec = uptime % 60;
	var secString = sec < 10 ? "0" + sec : sec;
	
	var text = min + ":" + secString;
	uptimeView.textContent = text;
}

function gameEnd() {
	clearInterval(timer);

	document.getElementById("start").disabled = false;
	document.getElementById("stop").disabled = true;

	location.reload();
}	