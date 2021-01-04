<template>
  <!-- wpo-case-area start -->
  <div id="causes" class="wpo-case-area section-padding">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="wpo-section-title">
            <span>Our Causes</span>
            <h2>Popular Causes What You Should Know</h2>
          </div>
        </div>
      </div>
      <div class="wpo-case-wrap">
        <div class="row">
          <div class="wpo-case-single col-md-4"
          v-for="(items, index) in causes" :key="index"
          >
            <div class="wpo-case-item"  >
              <div class="wpo-case-img">
                <img :src= "items.imagefile" alt="" :style="{ 'max-height': '200px' }"/>
              </div>
              <div class="wpo-case-content">
                <div class="wpo-case-text-top">
                  <h2>{{ items.title }}</h2>
                  <div class="progress-section">
                    <div class="process">
                      <div class="progress">
                        <div class="progress-bar">
                          <div class="progress-value"><span>65.5</span>%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ul>
                    <li><span>Raised:</span> $7,000.00</li>
                    <li><span>Goal:</span> ₹{{ items.goal }}</li>
                  </ul>
                </div>
                <div class="case-btn">
                  <ul>
                    <li><router-link :to="{ name: 'learnmore', params: {id:items.title}}" >Learnmore</router-link></li>
                    <li><router-link :to="{ name: 'learnmore', params: {id:items.title}}" >DonateNow</router-link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- wpo-case-area end -->
</template>

<script>
export default {
  props: {
    causes: Array,
    totalDonations: Array
  },
  data () {
    return {
      newTitle: [],
      newAmount: []
    }
  }
}
</script>
