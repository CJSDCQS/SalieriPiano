<template>
	<view id="app">
		<Score id="score"></Score>
		<ShowStave id="showStave"></ShowStave>
		<KeyboardComponent id="keyboard"></KeyboardComponent>
	</view>
</template>

<script>
	import Score from "../../../components/Score/Score.vue"
	import ShowStave from "../../../components/ShowStave/ShowStave.vue"
	import KeyboardComponent from "../../../components/KeyboardComponent/KeyboardComponent.vue"

	export default {
		components: {
			KeyboardComponent,
			ShowStave,
			Score
		},
		data() {
			return {
				
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

	#score {
		position: absolute;
		top: 5vh;
		width: 100vw;
		height: 20vh;
	}

	#showStave {
		position: absolute;
		top: 21vh;
		width: 100vw;
		height: 44vh;
		text-align: center;
	}

	#keyboard {
		position: absolute;
		bottom: 0;
		height: 25vh;
		width: 60vw;
		left: 20vw;
	}
</style>
