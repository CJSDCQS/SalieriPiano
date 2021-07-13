const rightNotes = [
	{step: 6, do: "C", file: "C6", pos: "-2.8%", pitchName: "do"},
	{step: 5, do: "B", file: "B5", pos: "0%", pitchName: "si"},
	{step: 5, do: "A", file: "A5", pos: "2.8%", pitchName: "la"},
	{step: 5, do: "G", file: "G5", pos: "5.6%", pitchName: "sol"},
	{step: 5, do: "F", file: "F5", pos: "8.4%", pitchName: "fa"},
	{step: 5, do: "E", file: "E5", pos: "11.1%", pitchName: "mi"},
	{step: 5, do: "D", file: "D5", pos: "13.9%", pitchName: "re"},
	{step: 5, do: "C", file: "C5", pos: "16.7%", pitchName: "do"},
	{step: 4, do: "B", file: "B4", pos: "19.6%", pitchName: "si"},
	{step: 4, do: "A", file: "A4", pos: "22.2%", pitchName: "la"},
	{step: 4, do: "G", file: "G4", pos: "25.0%", pitchName: "sol"},
	{step: 4, do: "F", file: "F4", pos: "27.8%", pitchName: "fa"},
	{step: 4, do: "E", file: "E4", pos: "30.5%", pitchName: "mi"},
	{step: 4, do: "D", file: "D4", pos: "33.3%", pitchName: "re"},
	{step: 4, do: "C", file: "C4", pos: "36.0%", pitchName: "do"},
	{step: 3, do: "B", file: "B3", pos: "38.8%", pitchName: "si"},
	{step: 3, do: "A", file: "A3", pos: "41.6%", pitchName: "la"}
]

const leftNotes = [
	{step: 4, do: "E", file: "E4", pos: "52.8%", pitchName: "mi"},
	{step: 4, do: "D", file: "D4", pos: "55.6%", pitchName: "re"},
	{step: 4, do: "C", file: "C4", pos: "58.4%", pitchName: "do"},
	{step: 3, do: "B", file: "B3", pos: "61.1%", pitchName: "si"},
	{step: 3, do: "A", file: "A3", pos: "63.9%", pitchName: "la"},
	{step: 3, do: "G", file: "G3", pos: "66.7%", pitchName: "sol"},
	{step: 3, do: "F", file: "F3", pos: "69.5%", pitchName: "fa"},
	{step: 3, do: "E", file: "E3", pos: "72.2%", pitchName: "mi"},
	{step: 3, do: "D", file: "D3", pos: "75.0%", pitchName: "re"},
	{step: 3, do: "C", file: "C3", pos: "77.8%", pitchName: "do"},
	{step: 2, do: "B", file: "B2", pos: "80.6%", pitchName: "si"},
	{step: 2, do: "A", file: "A2", pos: "83.3%", pitchName: "la"},
	{step: 2, do: "G", file: "G2", pos: "86.1%", pitchName: "sol"},
	{step: 2, do: "F", file: "F2", pos: "88.9%", pitchName: "fa"},
	{step: 2, do: "E", file: "E2", pos: "91.7%", pitchName: "mi"},
	{step: 2, do: "D", file: "D2", pos: "94.4%", pitchName: "re"},
	{step: 2, do: "C", file: "C2", pos: "97.2%", pitchName: "do"}
]

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