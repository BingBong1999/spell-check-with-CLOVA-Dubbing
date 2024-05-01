const CLICK_LOCATION_TO_POSITION_INDEX = {
	topSpell1: 0,
	topSpell2: 0,
	jgSpell1: 1,
	jgSpell2: 1,
	midSpell1: 2,
	midSpell2: 2,
	adSpell1: 3,
	adSpell2: 3,
	supSpell1: 4,
	supSpell2: 4
}

const CLICK_LOCATION_TO_WHOSE_VOICE = {
	top2Btn: 'audio/top.mp3',
	jg2Btn: 'audio/jg.mp3',
	mid2Btn: 'audio/mid.mp3',
	ad2Btn: 'audio/ad.mp3',
	sup2Btn: 'audio/sup.mp3'
}

const POSITION_INDEX_TO_LANE = {
	0: "top ",
	1: "jg ",
	2: "mid ",
	3: "ad ",
	4: "sup "
}

var imgUrl = ["image/barrier.webp", "image/cleanse.webp",
	"image/exhaust.webp", "image/flash.webp",
	"image/ghost.webp", "image/heal.webp",
	"image/ignite.webp", "image/smite.webp",
	"image/teleport.webp"];

var coolTime = [180000, 210000, 210000, 300000, 210000, 240000, 180000, 0, 240000];

var audioUrl = ["audio/barrier.mp3", "audio/cleanse.mp3",
	"audio/exhaust.mp3", "audio/flash.mp3",
	"audio/ghost.mp3", "audio/heal.mp3",
	"audio/ignite.mp3", "audio/smite.mp3",
	"audio/teleport.mp3"];