function clickSpell(spell, flashOwner) {
	darkenSpell(spell);
	updateFlashMemo(spell, flashOwner);

	setTimeout(function() {
		handleAfterCoolExpired(flashOwner, spell)
		resetFlashMemo(spell, flashOwner);
		brightenSpell(spell);
	}, coolTime[spell.id]);

}

function darkenSpell(spell) {
	spell.style.transition = "brightness 1s";
	spell.style.filter = "brightness(0.5)";
}

function brightenSpell(spell) {
	spell.style.transition = "brightness 1s";
	spell.style.filter = "brightness(1)";
}

function handleAfterCoolExpired(flashOwner, spell) {

	var who = new Audio(CLICK_LOCATION_TO_WHOSE_VOICE[flashOwner]);

	var what = new Audio(audioUrl[spell.id]);

	var done = new Audio('audio/exist.mp3');

	who.play();

	setTimeout(function() {
		what.play();
	}, 700);

	setTimeout(function() {
		done.play();
	}, 1400);

}