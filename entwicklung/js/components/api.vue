<template>
    <div>
        <div v-for="(item, index) in this.$store.state.APIantwort" :key="index">
            Die Lieblingszahl von {{item.Name}} {{item.Nachname}} ist {{item.Lieblingszahl}}
        </div>
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
  },
  methods:{

  }
}
</script>

<style scoped>

</style>
