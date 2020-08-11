<template>
	<div id="app">
		<v-app>
			<v-main>
				<v-container fluid>
					<vue-particles style="position: fixed; width: 100%; height: 100%;"
						color="#2A9D8F"
						:particleOpacity="0.7"
						:particlesNumber="80"
						shapeType="circle"
						:particleSize="4"
						linesColor="#264653"
						:linesWidth="1"
						:lineLinked="true"
						:lineOpacity="0.4"
						:linesDistance="150"
						:moveSpeed="3"
						:hoverEffect="true"
						hoverMode="grab"
						:clickEffect="true"
						clickMode="push"
					>
					</vue-particles>
					<router-view></router-view>
				</v-container>
			</v-main>
		</v-app>
	</div>
</template>

<script>
	export default {
		name: 'tweetment',
		data () {
			return {
				drawer: null
			}
		}
	}
</script>

<style>
	/* CSS */
</style>
