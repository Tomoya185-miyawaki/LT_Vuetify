<template>
  <v-container>
		<div class="text-md-right">
			<v-btn><router-link to="/signup">サインアップページへ</router-link></v-btn>
		</div>
		<v-card class="pa-4 text-md-center">
			<v-text-field v-model="email" :counter="50" label="E-mail" required></v-text-field>
			<v-text-field :type="show ? 'text' : 'password'" v-model="password" :counter="50" label="Password" required></v-text-field>
			<v-btn @click="signin">サインイン</v-btn>			
		</v-card>
  </v-container>
</template>

<script>
import firebase from 'firebase';

export default {
  name: "Signin",
  data() {
    return {
			show: false,
			email: "",
			password: "",
    }
	},
	methods: {
		signin: function() {
			firebase.auth().signInWithEmailAndPassword(this.email, this.password)
			.then(this.$router.push('/'))
			.catch(error => {
				alert(error.messege)
			})
		}
	}
};
</script>

<style scoped>
a {
	text-decoration: none;
	color: #000;
}
</style>
