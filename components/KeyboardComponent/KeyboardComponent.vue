<template>
	<view id="pianoBoard">
		<view id="normal">
			<view class="keyDown keyC" data-type="C" hover-class="normalKeyHover"
				v-on:touchstart="mouseStartClick($event)" v-on:touchend="mouseEndClick($event)"><text
					class="keyDownName">C</text>
			</view>
			<view class="keyDown keyD" data-type="D" hover-class="normalKeyHover"
				v-on:touchstart="mouseStartClick($event)" v-on:touchend="mouseEndClick($event)"><text
					class="keyDownName">D</text>
			</view>
			<view class="keyDown keyE" data-type="E" hover-class="normalKeyHover"
				v-on:touchstart="mouseStartClick($event)" v-on:touchend="mouseEndClick($event)"><text
					class="keyDownName">E</text>
			</view>
			<view class="keyDown keyF" data-type="F" hover-class="normalKeyHover"
				v-on:touchstart="mouseStartClick($event)" v-on:touchend="mouseEndClick($event)"><text
					class="keyDownName">F</text>
			</view>
			<view class="keyDown keyG" data-type="G" hover-class="normalKeyHover"
				v-on:touchstart="mouseStartClick($event)" v-on:touchend="mouseEndClick($event)"><text
					class="keyDownName">G</text>
			</view>
			<view class="keyDown keyA" data-type="A" hover-class="normalKeyHover"
				v-on:touchstart="mouseStartClick($event)" v-on:touchend="mouseEndClick($event)"><text
					class="keyDownName">A</text>
			</view>
			<view class="keyDown keyB" data-type="B" hover-class="normalKeyHover"
				v-on:touchstart="mouseStartClick($event)" v-on:touchend="mouseEndClick($event)"><text
					class="keyDownName">B</text>
			</view>
		</view>
		<view id="higher">
			<view class="keyUp keyUpC" data-type="UpC" hover-class="higherKeyHover"
				v-on:touchstart="mouseStartClick($event)" v-on:touchend="mouseEndClick($event)"><text
					class="keyUpName"></text>
			</view>
			<view class="keyUp keyUpD" data-type="UpD" hover-class="higherKeyHover"
				v-on:touchstart="mouseStartClick($event)" v-on:touchend="mouseEndClick($event)"><text
					class="keyUpName"></text>
			</view>
			<view class="keyUp keyUpF" data-type="UpF" hover-class="higherKeyHover"
				v-on:touchstart="mouseStartClick($event)" v-on:touchend="mouseEndClick($event)"><text
					class="keyUpName"></text>
			</view>
			<view class="keyUp keyUpG" data-type="UpG" hover-class="higherKeyHover"
				v-on:touchstart="mouseStartClick($event)" v-on:touchend="mouseEndClick($event)"><text
					class="keyUpName"></text>
			</view>
			<view class="keyUp keyUpA" data-type="UpA" hover-class="higherKeyHover"
				v-on:touchstart="mouseStartClick($event)" v-on:touchend="mouseEndClick($event)"><text
					class="keyUpName"></text>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		EventBus
	} from "../../pages/pianoGame/event-bus.js"
	import KeyBoardConfig from "../../config/KeyBoardConfig.js"

	const Audio = uni.createInnerAudioContext()

	export default {
		name: "KeyboardComponent",
		props: KeyBoardConfig.getKeyboardConfig(),
		data() {
			return {
				step: 0, // 当前调号
				notes: {},	// 存储
			};
		},
		mounted() {
			// 显示初始化动画
			// 加载音频文件
			// 结束初始化动画
			EventBus.$on("currentStep", (step) => {
				console.log("音调", step)
				this.step = step
			})
		},
		methods: {
			mouseStartClick(e) {
				let toneType = e.currentTarget.dataset.type
				console.log("下标", toneType)
				EventBus.$emit("keyboardTouch", toneType)
				let src = "/static/media/" + toneType + this.step.toString() + ".mp3"
				Audio.autoplay = true
				Audio.src = src //音频地址
				Audio.volume = 1 //音量
				Audio.play() //执行播放
				Audio.onError(function(res) {
					console.log(res)
				})
				// Audio.onPause(function() {
				// 	console.log('end')
				// 	Audio.destroy()
				// })
			},
			mouseEndClick(e) {
				let toneType = e.currentTarget.dataset.type
				Audio.pause()
			},
		}
	}
</script>

<style>
	@import "KeyboardComponent.css";
</style>
