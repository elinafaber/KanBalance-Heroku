<template>
    <div>
        <h2 @click="hallo()">Hello 2. Component {{this.$store.state.messages}}</h2>
    </div>
</template>

<script>

export default {
  props: [],
  data(){
      return{
          message: 'Hello World',
      }
  },
  mounted() {
      console.log('Hello Component Geladen');
  }
  ,components: {

  },
  methods:{
      hallo(){
          console.log('Hallo Geklicked');
      },
  }
}
</script>

<style scoped>
    h2{
        color: #3be547;
    }
</style>
