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

const getRandomNoteIndex = function() {
	var leftNotes = ['A_', 'B_', 'C', 'D', 'E', 'F', 'G', 'A', 'B', 'C-', 'D-', 'E-', 'F-', 'G-', 'A-', 'B-', 'C--']
	var rightNotes = ['C_', 'D_', 'E_', 'F_', 'G_', 'A_', 'B_', 'C', 'D', 'E', 'F', 'G', 'A', 'B', 'C-', 'D-', 'E-']
	var length = rightNotes.length
	var index = Math.floor(Math.random() * length)
	return index
}

export default {
	getRandomNoteIndex,
	getTop
}