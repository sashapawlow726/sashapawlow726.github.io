// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Uimini from 'uimini/dist/css/uimini.css'
import Vuelidate from 'vuelidate'

import store from './store'

import firebase from 'firebase/app'

import 'firebase/auth'
import 'firebase/database'
import 'firebase/messaging'
import 'firebase/storage'

Vue.use(Uimini)

Vue.use(Vuelidate)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created() {
  	var firebaseConfig = {
	    apiKey: 'AIzaSyCtylsxneRCv1z0ybAJpWjWvHwGT_uA5Wk',
	    authDomain: 'time-library-f9396.firebaseapp.com',
	    databaseURL: 'https://time-library-f9396.firebaseio.com',
	    projectId: 'time-library-f9396',
	    storageBucket: 'time-library-f9396.appspot.com',
	    messagingSenderId: '432022128496',
	    appId: '1:432022128496:web:87fd00e3b1b327a8edb1b5'
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  firebase.auth().onAuthStateChanged(user => {
	  if(user) {
	  	this.$store.dispatch('loggedUser', user)
	  }

	  this.$store.dispatch('loadTasks')
  })

  }
})
