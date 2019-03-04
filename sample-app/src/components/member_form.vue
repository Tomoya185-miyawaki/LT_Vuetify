<template>
  <v-container>
    <v-card class="pa-4">
      <v-card-title class="font-weight-bold">新規会員登録フォーム(3分で完了)</v-card-title>
      <v-card-text>WINDIIキャリアに登録すると、スキルシートを簡単にPDFに出力したり、企業からのオファーが届くようになります！</v-card-text>
      <v-card-title>稼働する条件や、空き状況</v-card-title>
      <v-btn outline round class="lime" v-for="price in prices" :key="price">{{ price }}</v-btn>
      <v-card-title>稼働開始可能日時</v-card-title>
      <v-select solo type="date"></v-select>
      <v-card-title>週に何日稼働できそうですか？</v-card-title>
      <v-btn outline round class="lime" v-for="day in days" :key="`first-${day}`">{{ day }}</v-btn>
      <v-card-title>働き方の条件を教えてください</v-card-title>
      <v-btn outline round class="lime" v-for="work in works" :key="work">{{ work }}</v-btn>
      <v-card-title>出勤（打ち合わせ）可能エリアを選択してください</v-card-title>
      <v-btn outline round class="lime" v-for="area in areas" :key="area">{{ area }}</v-btn>
      <v-card-title>職歴について教えてください</v-card-title>
      <v-btn outline round class="lime" v-for="job in jobs" :key="`first-${job}`">{{ job }}</v-btn>
      <v-card-title>実務可能な技術を選択してください</v-card-title>
      <v-btn round outline class="lime" v-for="skill in skills" :key="skill">{{ skill }}</v-btn>
      <v-card-title>簡単にアピールポイント教えてください。</v-card-title>
      <v-textarea solo placeholder="独学で勉強をしてきたので、詰まっても自己解決するのが得意です."></v-textarea>      
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Member",
  data() {
    return {
      prices: ["2万~", "2.5万~", "3万~", "3.5万~", "4万~", "それ以上"],
      days: ["週2", "週3", "週4", "週5"],
      works: ["常駐", "一部常駐OK", "フルリモート"],
      areas: ["首都圏", "関西", "その他"],
      jobs: ["1年未満", "1年", "2年", "3~5年", "それ以上"],
      skills: [
        "JaVa",
        "PHP",
        "Python",
        "C#",
        "Ruby",
        "React.js",
        "Angular.js",
        "Vue.js",
        "AWS",
        "Docker",
        "Laravel"
      ]
    };
  }
};
</script>

