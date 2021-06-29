<template>
	<view id="pianoBoard">
		<view id="normal">
			<view class="keyDown keyC" data-type="C" hover-class="normalKeyHover" v-on:touchstart="mouseStartClick($event)" v-on:touchend="mouseEndClick($event)"><text class="keyDownName">C</text>
			</view>
			<view class="keyDown keyD" data-type="D" hover-class="normalKeyHover" v-on:touchstart="mouseStartClick($event)" v-on:touchend="mouseEndClick($event)"><text class="keyDownName">D</text>
			</view>
			<view class="keyDown keyE" data-type="E" hover-class="normalKeyHover" v-on:touchstart="mouseStartClick($event)" v-on:touchend="mouseEndClick($event)"><text class="keyDownName">E</text>
			</view>
			<view class="keyDown keyF" data-type="F" hover-class="normalKeyHover" v-on:touchstart="mouseStartClick($event)" v-on:touchend="mouseEndClick($event)"><text class="keyDownName">F</text>
			</view>
			<view class="keyDown keyG" data-type="G" hover-class="normalKeyHover" v-on:touchstart="mouseStartClick($event)" v-on:touchend="mouseEndClick($event)"><text class="keyDownName">G</text>
			</view>
			<view class="keyDown keyA" data-type="A" hover-class="normalKeyHover" v-on:touchstart="mouseStartClick($event)" v-on:touchend="mouseEndClick($event)"><text class="keyDownName">A</text>
			</view>
			<view class="keyDown keyB" data-type="B" hover-class="normalKeyHover" v-on:touchstart="mouseStartClick($event)" v-on:touchend="mouseEndClick($event)"><text class="keyDownName">B</text>
			</view>
		</view>
		<view id="higher">
			<view class="keyUp keyUpC" data-type="UpC" hover-class="higherKeyHover" v-on:touchstart="mouseStartClick($event)" v-on:touchend="mouseEndClick($event)"><text class="keyUpName"></text>
			</view>
			<view class="keyUp keyUpD" data-type="UpD" hover-class="higherKeyHover" v-on:touchstart="mouseStartClick($event)" v-on:touchend="mouseEndClick($event)"><text class="keyUpName"></text>
			</view>
			<view class="keyUp keyUpF" data-type="UpF" hover-class="higherKeyHover" v-on:touchstart="mouseStartClick($event)" v-on:touchend="mouseEndClick($event)"><text class="keyUpName"></text>
			</view>
			<view class="keyUp keyUpG" data-type="UpG" hover-class="higherKeyHover" v-on:touchstart="mouseStartClick($event)" v-on:touchend="mouseEndClick($event)"><text class="keyUpName"></text>
			</view>
			<view class="keyUp keyUpA" data-type="UpA" hover-class="higherKeyHover" v-on:touchstart="mouseStartClick($event)" v-on:touchend="mouseEndClick($event)"><text class="keyUpName"></text>
			</view>
		</view>
	</view>
</template>

<script>
	import { EventBus } from "../../pages/pianoGame/event-bus.js"
	import KeyBoardConfig from "../../config/KeyBoardConfig.js"
	import getNoteOgg from "../../config/NoteOggConfig.js"

	export default {
		name: "KeyboardComponent",
		props: KeyBoardConfig.getKeyboardConfig(),
		data() {
			return {
				notes: {},
			};
		},
		mounted() {
			this.notes = getNoteOgg()
		},
		methods: {
			mouseStartClick(e) {
				let toneType = e.currentTarget.dataset.type
				console.log("下标", toneType)
				EventBus.$emit("keyboardTouch", toneType)
				let src = this.notes[toneType]
				const Audio = uni.createInnerAudioContext()
				Audio.autoplay = true
				Audio.src = src //音频地址
				Audio.volume = 1//音量
				Audio.play() //执行播放
				Audio.onError(function(res) {
					console.log(res)
				})
				Audio.onPause(function() {
					console.log('end')
					Audio.destroy()
				})
			},
			mouseEndClick(e) {
				let toneType = e.currentTarget.dataset.type
			},
		}
	}
</script>

<style>
	@import "KeyboardComponent.css";
</style>
