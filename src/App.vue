<script >
import Navbar from './components/Navbar.vue'
import TheWelcome from './components/TheWelcome.vue'
import Later from './components/Footer.vue'


export default {
  name: 'App',
  components: { Navbar,TheWelcome,Later },
}



</script>

<template>
  
<div>
  <header>
    <Navbar/>
   
  </header>
  
  <main>
      <!--<TheWelcome />-->
  </main>

  <footer>
    <Later/>
  </footer>
  

</div>
</template>

<style scoped>



</style>
