<template>
<Header/>
  <!-- .wpo-breadcumb-area start -->
  <div class="wpo-breadcumb-area">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="wpo-breadcumb-wrap">
            <h2>Contact Us</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- .wpo-breadcumb-area end -->
  <!--start wpo-contact-form-map -->
  <section class="wpo-contact-form-map section-padding">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="row">
            <div class="col col-lg-6 col-md-6 col-sm-12 col-12">
              <div class="contact-form">
                <h2>Get In Touch</h2>
                <form class="contact-validation-active" id="contact-form" @submit.prevent="onSubmit">
                  <div>
                    <input type="text" class="form-control" name="name" v-model="Contact.Fname"  id="name" placeholder="First Name">
                  </div>
                  <div>
                    <input type="text" class="form-control" name="name2" v-model="Contact.Lname" id="name2" placeholder="Last Name">
                  </div>
                  <div class="clearfix">
                    <input type="email" class="form-control" name="email" v-model="Contact.email" id="email" placeholder="Email">
                  </div>
                  <div>
                    <input type="text" class="form-control" name="subject" v-model="Contact.Subject" id="subject" placeholder="Subject">
                  </div>
                  <div>
                    <textarea class="form-control" name="note" id="note" v-model="Contact.Description" placeholder="Case Description..."></textarea>
                  </div>
                  <input id="submit" type="submit" value="Send Message" class="theme-btn submit-btn">
                  <div class="submit-area">
                    <!-- <div id="loader">
                      <i class="ti-reload"></i>
                    </div>
                  </div>
                  <div class="clearfix error-handling-messages">
                    <div id="success">Thank you</div>
                    <div id="error"> Error occurred while sending email. Please try again later. </div> -->
                  </div>
                </form>
              </div>
            </div>
            <div class="col col-lg-6 col-md-6 col-sm-12 col-12">
              <div class="contact-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.9147703055!2d-74.11976314309273!3d40.69740344223377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sbd!4v1547528325671"
                  allowfullscreen></iframe>
              </div>
            </div>
          </div>
          <div class="wpo-contact-info">
            <div class="row">
              <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                <div class="info-item">
                  <h2>25 North Street,Dubai</h2>
                  <div class="info-wrap">
                    <div class="info-icon">
                      <i class="ti-world"></i>
                    </div>
                    <div class="info-text">
                      <span>Office Address</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                <div class="info-item">
                  <h2>info@nasarna.com</h2>
                  <div class="info-wrap">
                    <div class="info-icon-2">
                      <i class="fi flaticon-envelope"></i>
                    </div>
                    <div class="info-text">
                      <span>Official Mail</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                <div class="info-item">
                  <h2>+91 256-987-239</h2>
                  <div class="info-wrap">
                    <div class="info-icon-3">
                      <i class="ti-headphone-alt"></i>
                    </div>
                    <div class="info-text">
                      <span>Official Phone</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> <!-- end container -->
  </section>
  <!-- end wpo-contact-form-map -->
  <Footer/>
</template>

<script>
import { db } from '../firebaseDatabase'
import Header from '../components/Header'
import Footer from '../components/footer'
export default {
  name: 'Contact',
  components: {
    Header,
    Footer
  },
  data () {
    return {
      Contact: {
        Fname: '',
        Lname: '',
        email: '',
        Subject: '',
        Description: ''
      }
    }
  },
  methods: {
    onSubmit () {
      db.collection('contacts').doc().set(this.Contact)
        .then(function () {
          alert('Thanks Succeed')
        })
      this.Contact = {}
    }
  }
}
</script>
