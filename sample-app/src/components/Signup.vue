<template>
  <v-container>
		<div class="text-md-right">
			<v-btn><router-link to="/signin">サインインページへ</router-link></v-btn>
		</div>
		<v-card class="pa-4 text-md-center">
			<v-text-field v-model="email" :counter="50" label="E-mail" required></v-text-field>
			<v-text-field :type="show ? 'text' : 'password'" v-model="password" :counter="50" label="Password" required></v-text-field>
			<v-btn @click="signup">サインアップ</v-btn>			
		</v-card>
  </v-container>
</template>

<script>
import firebase from 'firebase';

export default {
  name: "Signup",
  data() {
    return {
			show: false,
			email: "",
			password: "",
    }
	},
	methods: {
		signup: function() {
			const db = firebase.firestore()
      const uid = firebase.auth().currentUser.uid
			firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
			db.collection('user').doc(uid).set({
        email: this.email
      })
			.then(user => {
				console.log(user)
				this.$router.push('/')
			})
			.catch(error => {
				alert(error.messege)
			})
		}
	}
};
</script>

