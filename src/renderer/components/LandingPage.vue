<template>
	<v-container class="container-fluid" id="wrapper">
		<div class="input-group mb-3">
			<div class="input-group-prepend">
				<span class="input-group-text">Search Term</span>
			</div>
			<v-text-field type="text" class="input" id="search-term"></v-text-field>
			<div class="input-group-append">
				<v-btn @click="search" outlined type="button" class="btn btn-outline-primary" id="search-button">
					<transition name="fade">
						<span v-if="showProgress" class="spinner-border spinner-border-sm"></span>
					</transition>
					Search
				</v-btn>
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

		<button @click="showProgress = !showProgress">Toggle</button>

		<ul class="container overflow-auto">
			<li v-for="tweet in tweets">
				{{tweet}}
			</li>
		</ul>
	</v-container>
</template>

<script>
	import Sentiment from './Sentiment.vue'
	import Twitter from 'twitter-lite'
	const search = require('../services/search.js').search

	export default {
		name: 'landing-page',
		components: { 
			Sentiment
		},
		data: () => {
			return {
				tweets: [],
				showProgress: false
			}
		},
		methods: {
			open (link) {
				this.$electron.shell.openExternal(link)
			},
			search: async function (event) {
				this.showProgress = true
				let results = await search(
					document.getElementById('search-term').value,
					new Twitter({
						consumer_key: document.getElementById('consumer-key').value,
						consumer_secret: document.getElementById('api-key').value
					})
				)

				this.tweets.push("TEST")
				this.showProgress = false
			},
		}
	}
</script>

<style>
	@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');
	
	.fade-enter{
        opacity: 0;
    }
    .fade-enter-active{
        transition: opacity 1s;
    }
    .fade-leave{
        /* opacity: 1; */
    }
    .fade-leave-active{
        transition: opacity 1s;
        opacity: 0;
    }
</style>
