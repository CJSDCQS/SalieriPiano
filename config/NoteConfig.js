const rightNotes = [
	{step: 2, do: "C", file: "C6", poi: "-2.8%", pitchName: "do"},
	{step: 1, do: "B", file: "B5", poi: "0%", pitchName: "si"},
	{step: 1, do: "A", file: "A5", poi: "2.8%", pitchName: "la"},
	{step: 1, do: "G", file: "G5", poi: "5.6%", pitchName: "sol"},
	{step: 1, do: "F", file: "F5", poi: "8.4%", pitchName: "fa"},
	{step: 1, do: "E", file: "E5", poi: "11.1%", pitchName: "mi"},
	{step: 1, do: "D", file: "D5", poi: "13.9%", pitchName: "re"},
	{step: 1, do: "C", file: "C5", poi: "16.7%", pitchName: "do"},
	{step: 0, do: "B", file: "B4", poi: "19.6%", pitchName: "si"},
	{step: 0, do: "A", file: "A4", poi: "22.2%", pitchName: "la"},
	{step: 0, do: "G", file: "G4", poi: "25.0%", pitchName: "sol"},
	{step: 0, do: "F", file: "F4", poi: "27.8%", pitchName: "fa"},
	{step: 0, do: "E", file: "E4", poi: "30.5%", pitchName: "mi"},
	{step: 0, do: "D", file: "D4", poi: "33.3%", pitchName: "re"},
	{step: 0, do: "C", file: "C4", poi: "36.0%", pitchName: "do"},
	{step: -1, do: "B", file: "B3", poi: "38.8%", pitchName: "si"},
	{step: -1, do: "A", file: "A3", poi: "41.6%", pitchName: "la"}
]

const leftNotes = [
	{step: 0, do: "E", file: "E4", poi: "52.8%", pitchName: "mi"},
	{step: 0, do: "D", file: "D4", poi: "55.6%", pitchName: "re"},
	{step: 0, do: "C", file: "C4", poi: "58.4%", pitchName: "do"},
	{step: -1, do: "B", file: "B3", poi: "61.1%", pitchName: "si"},
	{step: -1, do: "A", file: "A3", poi: "63.9%", pitchName: "la"},
	{step: -1, do: "G", file: "G3", poi: "66.7%", pitchName: "sol"},
	{step: -1, do: "F", file: "F3", poi: "69.5%", pitchName: "fa"},
	{step: -1, do: "E", file: "E3", poi: "72.2%", pitchName: "mi"},
	{step: -1, do: "D", file: "D3", poi: "75.0%", pitchName: "re"},
	{step: -1, do: "C", file: "C3", poi: "77.8%", pitchName: "do"},
	{step: -2, do: "B", file: "B2", poi: "80.6%", pitchName: "si"},
	{step: -2, do: "A", file: "A2", poi: "83.3%", pitchName: "la"},
	{step: -2, do: "G", file: "G2", poi: "86.1%", pitchName: "sol"},
	{step: -2, do: "F", file: "F2", poi: "88.9%", pitchName: "fa"},
	{step: -2, do: "E", file: "E2", poi: "91.7%", pitchName: "mi"},
	{step: -2, do: "D", file: "D2", poi: "94.4%", pitchName: "re"},
	{step: -2, do: "C", file: "C2", poi: "97.2%", pitchName: "do"}
]

const getTop = function(index) {
	if (Math.random() > 0.5) {
		// 右手
		let top = -2.8 + 2.8 * index
		return top.toString() + "%"
	} else {
		// 左手
		let top = 53.2 + 2.8 * index
		return top.toString() + "%"
	}
}

const getRandomNoteItem = function() {
	var length = rightNotes.length
	var index = Math.floor(Math.random() * length)
	if (Math.random() > 0.5) {
		// 右手
		return rightNotes[index]
	} else {
		// 左手
		return leftNotes[index]
	}
}

export default {
	getRandomNoteItem,
	leftNotes,
	rightNotes
}