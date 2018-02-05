<template>
<div>
     <div class = "logo">
  
<img src="/src/img/Log_small.png">
<img src="/src/img/KB_small.png">
</div>

    <div class = "vertical-menu">
    <a href="#" class="active">Übersicht</a>
   <a href="#">Kalender</a>
  <a href="#">Fortschritt</a>
  <a href="#">Archiv</a>
  <div class = "searchbar"><input type="text" placeholder="Suche nach..."></div>


  
</div>


</div>

</template>

<script>

export default {
  props: [],
  
  data(){
      return{

      }
  },

  mounted() {
      console.log('Menu Component Geladen');
      
  },
  components: {
   
  },
 
    
  
}
</script>

<style scoped>
div {

    background:#eee;;
}

a {
    font-family: "Quicksand-Regular";
}

.searchbar input[type=text] {
   
    padding: 6px;
    border: none;
    margin-top: 8px;
    margin-right: 16px;
    font-size: 15px;
    font-family: "Quicksand-Regular";
    width: 238px; 
    height: 30px;
}

/* styling for logo div */

.logo {
    padding-top: 10px; /* Add padding top */
    padding-bottom: 30px;
    padding-left: 30px;
    background:#eee;
    width: 200px; /* Set a width  */
}


/* styling for menu div */

.vertical-menu {
    width: 250px; /* Set a width */
    height: 300vh;
    background:#eee;
    text-align: center;
}

.vertical-menu a {
    background-color: #eee; /* Grey background color */
    color: black; /* Black text color */
    display: block; /* Make the links appear below each other */
    padding: 12px; /* Add some padding */
    text-decoration: none; /* Remove underline from links */
}

.vertical-menu a:hover {
    background-color: #ccc; /* Dark grey background on mouse-over */
    font-family: "Quicksand-Bold";
}

.vertical-menu a.active {
    background-color: #f7ebbd; /* Add a yellow color to the "active/current" link */
    color: black;
    font-family: "Quicksand-Bold";
}





</style>
