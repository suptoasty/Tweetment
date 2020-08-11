<template>
	<v-container id="wrapper">
		<v-row>
			<v-text-field id="consumer-key"
				label="Consumer Key" 
				hide-details="auto"
				outlined
			></v-text-field>
		</v-row>
		<br>
		<v-row>
			<v-text-field id="api-key"
				label="Consumer Secret" 
				hide-details="auto"
				outlined
			></v-text-field>
		</v-row>
		<br>
		<v-row>
			<v-input>
				<v-text-field id="search-term"
					label="Search Term" 
					hide-details="auto"
					outlined
					style="margin-right: 15px;"
				></v-text-field>
				<v-btn @click="search" id="search-button"
					:loading="showProgress"
					outlined
					x-large
				>
					<!-- <transition name="fade">
						<v-progress-circular v-if="showProgress"
							indeterminate="indeterminate"
						></v-progress-circular>
					</transition> -->
					Search
				</v-btn>
			</v-input>
		</v-row>

		<v-container v-for="response in responses">
			<v-card
				class="mx-auto"
				color="#26c6da"
				dark
				max-width="400"
			>
				<v-card-title>
					<v-icon
						large
						left
					>
						mdi-twitter
					</v-icon>
					<span class="title font-weight-light">Twitter</span>
				</v-card-title>

				<v-card-text class="headline font-weight-bold">
					{{response.tweet}}
				</v-card-text>

				<v-card-actions>
					<v-list-item class="grow">
						<!-- <v-list-item-content>
							Hastags:
							<span v-for="hastag in response.hastags">
								{{hastag}}
							</span>
							<br>
							<span>
								Favorites: {{response.likes}}
							</span>
						</v-list-item-content> -->
						<!-- <v-list-item-content>
							<span class="subheading mr-2">
								Retweets: {{response.retweets}}
							</span>
						</v-list-item-content> -->
						<v-row
							align="center"
							justify="end"
						>
							<v-icon class="mr-1">mdi-heart</v-icon>
							<span class="subheading mr-2">{{response.sentiment}}</span>
						</v-row>
					</v-list-item>
				</v-card-actions>
			</v-card>
		</v-container>
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
				responses: [],
				showProgress: false
			}
		},
		methods: {
			open (link) {
				this.$electron.shell.openExternal(link)
			},
			search: async function (event) {
				this.showProgress = true
				this.responses = await search(
					document.getElementById('search-term').value,
					new Twitter({
						consumer_key: document.getElementById('consumer-key').value,
						consumer_secret: document.getElementById('api-key').value
					})
				)

				this.showProgress = false
			},
		}
	}
</script>

<style>
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
