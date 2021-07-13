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
			}
		},
		mounted() {
			let that = this
			EventBus.$on("keyboardTouch", (value) => {
				if (value == that.status['do']) {
					// console.log("加分")
					EventBus.$emit("addScore", 1)	// 告诉分数组件按键正确
				} else if (that.status.length == 0) {
					// console.log("无效按键")
				} else {
					// console.log("错误")
					EventBus.$emit("reduceScore", 1)	// 告诉分数组件按键错误
				}
			})
			EventBus.$on("changeNote", (value) => {
				that.getRandomTop()
			})
			setTimeout(that.getRandomTop(), 3000)
		},
		methods: {
			getRandomTop() {	// 设置随机 class
				let item = NoteConfig.getRandomNoteItem()
				this.noteTop = item['pos']
				this.status = item
				// console.log("getRandomTop", item)
				EventBus.$emit("currentStep", item['step'])	// 告诉键盘组件当前调号
			},
		}
	}
</script>

<style scoped>
	@import "ShowStave.css";
</style>
