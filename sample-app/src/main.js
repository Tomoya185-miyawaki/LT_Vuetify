import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import firebase from 'firebase';
import router from './router'

Vue.config.productionTip = false

const config = {
	apiKey: "AIzaSyCri47ig0C-anqE4Eyv7HwehX8S8yCFxM0",
	authDomain: "vuetify-crud-ffa57.firebaseapp.com",
	databaseURL: "https://vuetify-crud-ffa57.firebaseio.com",
	projectId: "vuetify-crud-ffa57",
	storageBucket: "vuetify-crud-ffa57.appspot.com",
	messagingSenderId: "793416848232"
};
firebase.initializeApp(config);

new Vue({
	render: h => h(App),
	router,
}).$mount('#app')
