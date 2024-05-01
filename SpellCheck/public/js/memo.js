function updateFlashMemo(spell, flashOwner) {
	var memoSpace = document.getElementById("memo");
	var comment = memoSpace.value;
	var commentListByPosition = comment.split('\n');
	var newComment = "";

	if (spell.id == 3) { // 점멸일 경우에만 메모 계산			
		var min = Math.floor((uptime + 300) / 60);
		var sec = (uptime + 300) % 60;

		var positionIndex = CLICK_LOCATION_TO_POSITION_INDEX[flashOwner];
		commentListByPosition[positionIndex] = POSITION_INDEX_TO_LANE[positionIndex] + min + " " + sec;

		for (var i = 0; i < commentListByPosition.length; i++) {
			newComment += commentListByPosition[i] + "\n";
		}

		memoSpace.value = newComment;
	}
}

function resetFlashMemo(spell, flashOwner) {
	var memoSpace = document.getElementById("memo");
	var comment = memoSpace.value;
	var commentListByPosition = comment.split('\n');
	var newComment = "";

	if (spell.id == 3) { // 점멸일 경우에만 메모 계산

		var positionIndex = CLICK_LOCATION_TO_POSITION_INDEX[flashOwner];

		commentListByPosition[positionIndex] = POSITION_INDEX_TO_LANE[positionIndex] + " ";

		for (var i = 0; i < commentListByPosition.length; i++) {
			newComment += commentListByPosition[i] + "\n";
		}

		memoSpace.value = newComment;
	}
}

function cleanFlashMemo() {
	document.getElementById("memo").value = "top\njg\nmid\nad\nsup\n"
}