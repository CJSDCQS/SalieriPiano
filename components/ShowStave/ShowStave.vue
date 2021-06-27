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
				if (value == that.status['do']) {
					// 加分
					console.log("加分")
				} else if (that.status.length == 0) {
					console.log("无效按键")
				} else {
					// 错误
					console.log("错误")
				}
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
				let item = NoteConfig.getRandomNoteItem()
				this.setTop(item['pos'])
				this.showNote()
				this.status = item
				console.log("getRandomTop", item)
			},
		}
	}
</script>

<style>
	@import "ShowStave.css";
	@import "LeftHand.css";
	@import "RightHand.css";
</style>
