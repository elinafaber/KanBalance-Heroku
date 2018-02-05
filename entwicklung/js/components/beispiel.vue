<template>
    <div>
        <h2>Hallo Welt, ich bin eine {{Katze}}</h2>
        <hello></hello>
        <div>{{this.$store.state.count}}</div>
        <button @click="countButtonClick(1)">Count Up</button>
    </div>
</template>

<script>
import Hello from './hello.vue';

export default {
  props: ['Katze'],
  data(){
      return{
          message: 'Hello World',
      }
  },
  mounted() {
      console.log('Beispiel Component Geladen');
      console.log(this.$store);

  }
  ,components: {
      Hello,
  },
  methods:{
    countButtonClick(amount){
        this.$store.commit('countUp', amount);
        console.log('qrStore', this.$store.state.qrCodes)
    },

    sendAPI(){
        var postInfo = {
            url: "http://localhost/newUser?name=Dasist&nachname=Shit&Lieblingszahl=103",
        }
        this.$store.commit('sendToAPI', postInfo);
    }
  }
}
</script>

<style scoped>

</style>
