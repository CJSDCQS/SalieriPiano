<template>
	<view style="height: 44vh;">
		<image style="height: 44vh;" src="../../static/img/stave.jpg" mode="heightFix"></image>
		<image style="position: absolute;height: 9.678vh;-webkit-transition: 0.2s;left: 50vw;" :style="{top: noteTop}" src="../../static/img/note.gif" mode="heightFix"></image>
	</view>
</template>

<script>
	import NoteConfig from "../../config/NoteConfig.js"
	import { EventBus } from "../../pages/pianoGame/event-bus.js"
	
	export default {
		name: "ShowStave",
		data() {
			return {
				status: "",
				noteTop: "0%",
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
					EventBus.$emit("addScore", 1)
				} else if (that.status.length == 0) {
					console.log("无效按键")
				} else {
					// 错误
					console.log("错误")
					EventBus.$emit("reduceScore", 1)
				}
			})
			EventBus.$on("changeNote", (value) => {
				that.getRandomTop()
			})
		},
		methods: {
			getRandomTop() {	// 设置随机 class
				let item = NoteConfig.getRandomNoteItem()
				this.noteTop = item['pos']
				this.status = item
				console.log("getRandomTop", item)
			},
		}
	}
</script>

<style scoped>
	@import "RightHand.css";
</style>
