<template>
  <v-container>
    <v-card class="pa-4">
			<div class="d-flex">
				<v-card-title class="font-weight-bold">新規会員登録フォーム(3分で完了)</v-card-title>
				<span class="text-md-right"><v-btn @click="logout">ログアウト</v-btn></span>
			</div>
      <v-card-text>WINDIIキャリアに登録すると、スキルシートを簡単にPDFに出力したり、企業からのオファーが届くようになります！</v-card-text>
      <v-card-title>稼働する条件や、空き状況</v-card-title>
			<v-text-field v-model="price" :counter="100" label="Price" placeholder="月収10万~" required></v-text-field>
      <v-card-title>週に何日稼働できそうですか？</v-card-title>
			<v-text-field v-model="day" :counter="100" label="Day" placeholder="週4日~" required></v-text-field>
      <v-card-title>働き方の条件を教えてください</v-card-title>
			<v-text-field v-model="work" :counter="100" label="Work" placeholder="リモート可"></v-text-field>
      <v-card-title>出勤（打ち合わせ）可能エリアを選択してください</v-card-title>
			<v-text-field v-model="area" :counter="100" label="Area" placeholder="宮崎県" required></v-text-field>
      <v-card-title>職歴について教えてください</v-card-title>
      <v-text-field v-model="job" :counter="100" label="Job" placeholder="SEを一年間" required></v-text-field>
      <v-card-title>実務可能な技術を教えてください</v-card-title>
      <v-text-field v-model="skill" :counter="100" label="Skill" placeholder="Vue.js,Laravel" required></v-text-field>
      <v-card-title>簡単にアピールポイント教えてください。</v-card-title>
      <v-textarea solo placeholder="独学で勉強をしてきたので、詰まっても自己解決するのが得意です." v-model="appeal"></v-textarea>
			<div class="text-md-right"><v-btn round class="white" @click="create">送信する</v-btn></div>
    </v-card>
  </v-container>
</template>

<script>
import firebase from 'firebase';

export default {
  name: "Member",
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
			if(!user) this.$router.push("/signin");
		});
	},
	methods: {
		create() {
			const uid = firebase.auth().currentUser.uid;
			this.col.doc(uid).set({
				price: this.price,
				day: this.day,
				work: this.work,
				area: this.area,
				job: this.job,
				skill: this.skill,
				appeal: this.appeal,
			});
			this.$router.push("/profile");
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