<template>
   <!-- start preloader -->
  <!-- <div class="preloader">
    <div class="sk-folding-cube">
      <div class="sk-cube1 sk-cube"></div>
      <div class="sk-cube2 sk-cube"></div>
      <div class="sk-cube4 sk-cube"></div>
      <div class="sk-cube3 sk-cube"></div>
    </div>
  </div> -->
  <!-- end preloader -->
  <div class="home">
    <Header/>
    <Slider/>
    <Causes
    v-if="geted.length"
    :causes='geted'
     />
    <Content  />
    <Footer  />

  </div>
  <router-view />
</template>

<script>
import { db } from '../firebaseDatabase'
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Causes from '@/components/Cause.vue'
import Slider from '@/components/Slider.vue'
import Content from '@/components/content.vue'
import Footer from '@/components/footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Slider,
    Causes,
    Content,
    Footer
  },
  data () {
    return {
      geted: []
    }
  },
  mounted () {
    db.collection('donation').get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.geted.push(doc.data())
      })
    })
    db.collection('donations').get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // console.log(doc.data().DonateTo)
      })
    })
  }
}
</script>
