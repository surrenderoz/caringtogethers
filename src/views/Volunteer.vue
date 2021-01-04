<template>
<Header/>
  <!-- .wpo-breadcumb-area start -->
  <div class="wpo-breadcumb-area">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="wpo-breadcumb-wrap">
            <h2>Become a Volunteer</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- .wpo-breadcumb-area end -->
  <!-- volunteer-area-start -->
  <div class="volunteer-area">
    <div class="volunteer-wrap">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="volunteer-item">
              <div class="volunteer-img-wrap">
                <div class="volunter-img">
                  <img src="../assets/volunteer.jpg" alt="">
                </div>
              </div>
            </div>
            <div class="volunteer-contact">
              <div class="volunteer-contact-form">
                <h2>Become a Volunteer</h2>
                <form method="post" class="contact-validation-active" id="contact-form" @submit.prevent="onSubmit">
                  <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                      <input type="text" class="form-control" v-model="Volunteer.fullName" name="name" id="name" placeholder="Full Name">
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 col-12 form-group clearfix">
                      <input type="email" class="form-control" v-model="Volunteer.email" name="email" id="email" placeholder="Email">
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                      <input type="text" class="form-control" v-model="Volunteer.subject" name="subject" id="subject" placeholder="Subject">
                    </div>
                    <div class="col-lg-12 col-12 form-group">
                      <textarea class="form-control" name="note" v-model="Volunteer.message" id="note" placeholder="Why you want to join?..."></textarea>
                    </div>
                    <div class="submit-area col-lg-12 col-12">
                      <button type="submit" class="theme-btn submit-btn">Send Message</button>
                      <div id="loader">
                        <i class="ti-reload"></i>
                      </div>
                    </div>
                  </div>
                  <div class="clearfix error-handling-messages">
                    <div id="success">Thank you</div>
                    <div id="error"> Error occurred while sending email. Please try again later. </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- volunteer-area-end -->
<Footer/>
</template>

<script>
import { db } from '../firebaseDatabase'

import Header from '../components/Header'
import Footer from '../components/footer'

export default {
  name: 'Volunteer',
  components: {
    Header,
    Footer
  },
  data () {
    return {
      Volunteer: {
        fullName: '',
        email: '',
        subject: '',
        message: '',
        time: new Date()
      }
    }
  },
  methods: {
    onSubmit () {
      db.collection('volunteers').doc().set(this.Volunteer)
        .then(function () {
          alert('THANKS')
        })
        .catch(function (error) {
          alert('Error writing document: ', error)
        })
      this.Volunteer = {}
    }
  }
}
</script>
