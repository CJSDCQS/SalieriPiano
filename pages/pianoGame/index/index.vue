<template>
	<view id="app">
		<ShowStave id="showStave"></ShowStave>
		<KeyboardComponent id="keyboard"></KeyboardComponent>
	</view>
</template>

<script>
	import ShowStave from "../../../components/ShowStave/ShowStave.vue"
	import KeyboardComponent from "../../../components/KeyboardComponent/KeyboardComponent.vue"

	export default {
		components: {
			KeyboardComponent,
			ShowStave
		},
		data() {
			return {
				score: 0, // 得分: 答对一个加一分
			}
		},
		methods: {

		}
	}
</script>

<style>
	body {
		margin: 0;
		padding: 0;
	}

	#app {
		height: 100vh;
		width: 100vw;
	}

	#showStave {
		position: absolute;
		top: 25%;
		width: 100%;
		height: 40%;
		text-align: center;
	}

	#keyboard {
		position: absolute;
		bottom: 0;
		height: 25%;
		width: 60%;
		left: 20%;
	}
</style>
