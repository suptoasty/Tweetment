<template>
	<div id="app">
		<!-- <router-view></router-view> -->
		<v-app>
			<router-view></router-view>
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
