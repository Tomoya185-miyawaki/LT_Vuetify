<template>
  <v-content>
    <Member/>
  </v-content>
</template>

<script>
import Member from './components/member_form'

export default {
  name: 'App',
  components: {
    Member
  },
  data () {
    return {
      //
    }
  }
}
</script>
