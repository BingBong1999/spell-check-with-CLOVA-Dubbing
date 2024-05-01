function clickSpellChoiceBtn(SpellChoiceBtnId, locationOfSpellChoiceBtn) {
	removeSpellChoiceBtn(SpellChoiceBtnId);
	createAllSpell(locationOfSpellChoiceBtn);
}

function removeSpellChoiceBtn(SpellChoiceBtnId) {
	var btn = document.getElementById(SpellChoiceBtnId);
	btn.style.display = "none";
}

function createAllSpell(locationOfSpellChoiceBtn) {
	var spellSpace = document.getElementById(locationOfSpellChoiceBtn);

	for (var i = 0; i < imgUrl.length; i++) {

		var spell = document.createElement("img");
		spell.src = imgUrl[i];
		spell.style.marginRight = "5px";
		spell.id = i;
		spell.onclick = function() {
			decideSpell(locationOfSpellChoiceBtn, this.id);
		};

		spellSpace.appendChild(spell);
	}
}

function decideSpell(locationOfSpells, spellId) {
	removeAllSpell(locationOfSpells);
	createSpell(spellId, locationOfSpells);
}

function removeAllSpell(locationOfSpells) {
	var spellsSpace = document.getElementById(locationOfSpells);

	while (spellsSpace.firstChild) {
		spellsSpace.removeChild(spellsSpace.firstChild);
	}
}

function createSpell(spellId, locationOfSpells) {
	var spellSpace = document.getElementById(locationOfSpells);
	var spell = document.createElement("img");

	spell.src = imgUrl[spellId];
	spell.id = spellId;
	spell.addEventListener("click", () => clickSpell(spell, spellSpace.id));

	spellSpace.appendChild(spell);
}