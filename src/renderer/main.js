import Vue from 'vue'
import axios from 'axios'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
Vue.use(Vuetify)

let $ = require('jquery')
import 'popper.js'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App'
import router from './router'
import store from './store'

import { remote } from 'electron'
const currentWindow = remote.getCurrentWindow()
currentWindow.openDevTools()

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  vuetify: new Vuetify({
		theme: {
		  dark: true,
		  themes: {
			dark: {
			  primary: '#00F195',
			  accent: '#F2BF68',
			  secondary: '#ffe18d',
			  success: '#4CAF50',
			  info: '#2196F3',
			  warning: '#FB8C00',
			  error: '#FF5252'
			},
			light: {
			  primary: '#02CB7F',
			  accent: '#e91e63',
			  secondary: '#30b1dc',
			  success: '#4CAF50',
			  info: '#2196F3',
			  warning: '#FB8C00',
			  error: '#FF5252'
			}
		  }
		}
  }),
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
