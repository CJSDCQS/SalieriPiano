<template>
	<view id="showArea">
		<image id="stave" src="../../static/img/stave.jpg" mode="heightFix"></image>
		<image id="note" src="../../static/img/note.gif" mode="heightFix"></image>
	</view>
</template>

<script>
	import NoteConfig from "../../config/NoteConfig.js"
	import { EventBus } from "../../pages/pianoGame/event-bus.js"
	
	export default {
		name: "ShowStave",
		data() {
			return {
				status: ""
			};
		},
		mounted() {
			let that = this
			that.getRandomTop()
			EventBus.$on("keyboardTouch", (value) => {
				console.log("ShowStave.$on", value)
			})
		},
		methods: {
			showNote() {	// 显示音符
				document.getElementById("note").style.display = "block"
			},
			hideNote() {	// 隐藏音符
				document.getElementById("note").style.display = "none"
			},
			setTop(top) {	// 设置类名
				document.getElementById("note").style.top = top
				document.getElementById("note").style.position = "absolute"
			},
			getRandomTop() {	// 设置随机 class
				let index = NoteConfig.getRandomNoteIndex()
				let top = NoteConfig.getTop(index)
				this.setTop(top)
				this.showNote()
				this.status = index
				console.log("getRandomTop", index, top)
			},
		}
	}
</script>

<style>
	@import "ShowStave.css";
	@import "LeftHand.css";
	@import "RightHand.css";
</style>
