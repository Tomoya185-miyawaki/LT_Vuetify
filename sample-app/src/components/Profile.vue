<template>
  <v-container>
		<div class="text-md-center" v-if="!user" key="login">
			<router-link to="/signin"><v-btn class="blue accent-1">サインインページへ</v-btn></router-link>
		</div>
    <v-card class="pa-4" v-else key="logout">
			<div class="d-flex">
				<v-card-title class="font-weight-bold">登録データ</v-card-title>
				<span class="text-md-right"><v-btn @click="logout">ログアウト</v-btn></span>
			</div>
      <v-card-title>稼働する条件や、空き状況</v-card-title>
			<v-text-field v-model="price" readonly :counter="100" label="Price"></v-text-field>
      <v-card-title>週に何日稼働できそうですか？</v-card-title>
			<v-text-field v-model="day" readonly :counter="100" label="Day"></v-text-field>
      <v-card-title>働き方の条件を教えてください</v-card-title>
			<v-text-field v-model="work" readonly :counter="100" label="Work"></v-text-field>
      <v-card-title>出勤（打ち合わせ）可能エリアを選択してください</v-card-title>
			<v-text-field v-model="area" readonly :counter="100" label="Area"></v-text-field>
      <v-card-title>職歴について教えてください</v-card-title>
      <v-text-field v-model="job" readonly :counter="100" label="Job"></v-text-field>
      <v-card-title>実務可能な技術を教えてください</v-card-title>
      <v-text-field v-model="skill" readonly :counter="100" label="Skill"></v-text-field>
      <v-card-title>簡単にアピールポイント教えてください。</v-card-title>
      <v-textarea solo readonly v-model="appeal"></v-textarea>
			<div class="text-md-right">
				<span><v-btn round class="white" @click="remove">削除する</v-btn></span>
				<v-btn round class="white"><router-link to="/edit">編集する</router-link></v-btn>
			</div>
    </v-card>
  </v-container>
</template>

<script>
import firebase from 'firebase';

export default {
  name: "Profile",
  data() {
    return {
			user: "",
			col: firebase.firestore().collection("user"),
      price: "",
      day: "",
      work: "",
      area: "",
      job: "",
      skill: "",
			appeal: "",
    };
	},
	created() {
    firebase.auth().onAuthStateChanged(user => {
      // ログイン状態かどうかを判定
			this.user = user;
			const uid = firebase.auth().currentUser.uid;
			const docRef = this.col.doc(uid);
			docRef.get().then(doc => {
				this.price = doc.data().price
				this.day = doc.data().day
				this.work = doc.data().work
				this.area = doc.data().area
				this.job = doc.data().job
				this.skill = doc.data().skill
				this.appeal = doc.data().appeal
			});
		});
	},
	methods: {
		remove() {
			const uid = firebase.auth().currentUser.uid;
			const alert = confirm("本当に削除しますか");
			if (alert == true) {
				this.col.doc(uid).delete()
				this.$router.push('/')
			} else {
				return ""
			}
		},
		logout: function() {
      firebase.auth().signOut();
      this.$router.push("/signin");
    },
	}
};
</script>

<style scoped>
a {
	text-decoration: none;
	color: #000;
}
</style>
