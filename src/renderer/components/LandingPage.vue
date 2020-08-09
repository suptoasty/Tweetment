<template>
	<div class="container-fluid" id="wrapper">
		<div class="input-group mb-3">
			<div class="input-group-prepend">
				<span class="input-group-text">Search Term</span>
			</div>
			<input type="text" class="input" id="search-term"></input>
			<div class="input-group-append">
				<button @click="search" type="button" class="btn btn-outline-primary" id="search-button">Search</button>
			</div>
		</div>
		<div class="input-group mb-3">
			<div class="input-group-prepend">
				<span class="input-group-text">Consumer Key</span>
			</div>
			<input type="text" id="consumer-key"></input>
		</div>
		<div class="input-group mb-3">
			<div class="input-group-prepend">
				<span class="input-group-text">Consumer Secret</span>
			</div>
			<input type="text" id="api-key"></input>
		</div>
	</div>
</template>

<script>
	import Twitter from 'twitter-lite'
	const search = require('../services/search.js').search

	export default {
		name: 'landing-page',
		components: { 
			// SystemInformation 
		},
		methods: {
			open (link) {
				this.$electron.shell.openExternal(link)
			},
			search: async (event) => {
				let results = await search(
					document.getElementById('search-term').value,
					new Twitter({
						consumer_key: document.getElementById('consumer-key').value,
						consumer_secret: document.getElementById('api-key').value
					})
				)
			}
		}
	}
</script>

<style>
	@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

</style>
