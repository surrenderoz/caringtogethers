<template>
    <Header/>
    <div class="wpo-breadcumb-area">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="wpo-breadcumb-wrap">
                            <h2>{{ this.$route.params.id }}</h2>
                            <!-- <ul>
                                <li><a href="/">Home</a></li>
                                <li><span>Causes</span></li>
                                <li><span>Ensure Education for every poor children</span></li>
                            </ul> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- .wpo-breadcumb-area end -->
        <!-- wpo-event-details-area start -->
        <div class="wpo-case-details-area section-padding">
            <div class="container">
                <div class="row" v-for="data in geted" :key="data.title">
                    <div class="col col-md-8">
                        <div class="wpo-case-details-wrap">
                            <div class="wpo-case-details-img">
                                <img :src="data.imagefile" alt="">
                            </div>
                            <div class="wpo-case-details-tab">
                                <ul class="nav nav-tabs">
                                    <li class="active"><a data-toggle="tab" href="#Description">Description</a></li>
                                    <li><a data-toggle="tab" href="#Donations">Donations</a></li>
                                    <li><a data-toggle="tab" href="#Comments">Comments</a></li>
                                </ul>
                            </div>
                            <div class="wpo-case-details-text">
                                <div class="tab-content">
                                    <div id="Description" class="tab-pane active">
                                        <div class="row">
                                            <div class="col-12">
                                                <div class="wpo-case-content"
                                                >
                                                    <div class="wpo-case-text-top">
                                                        <h2>{{data.title}}</h2>
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
                                                            <li><span>Goal:</span> ${{data.goal}}</li>
                                                            <li><span>Donar:</span> 380</li>
                                                        </ul>
                                                        <div  class="case-bb-text"  v-html="data.description">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="Comments" class="tab-pane wpo-blog-single-section">
                                        <div class="comments-area">
                                            <div class="comments-section">
                                                <h3 class="comments-title">Comments</h3>
                                                <ol class="comments">
                                                    <li class="comment even thread-even depth-1" id="comment-1"
                                                    v-for="(comment, index) in allComments" :key="index"
                                                    >
                                                            <div id="div-comment-1">
                                                                <div class="comment-main-area">
                                                                    <div class="comment-wrapper">
                                                                        <div class="comment-area">
                                                                            <p>{{comment.usercomment}} </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                    </li>
                                                </ol>
                                            </div> <!-- end comments-section -->
                                        </div> <!-- end comments-area -->
                                        <div class="comment-respond">
                                            <h3 class="comment-reply-title">Leave a Comment</h3>
                                            <form method="post" id="commentform" class="comment-form" @submit.prevent="onSubmit">
                                                <div class="form-inputs">
                                                    <input placeholder="Name" type="text" name="name" v-model="name" required>
                                                    <input placeholder="Email" type="email" name="email" v-model="email" required>
                                                </div>
                                                <div class="form-textarea">
                                                    <textarea id="comment" name="message" v-model="comment" placeholder="Write Your Thoughts..." required></textarea>
                                                </div>
                                                <div class="form-submit">
                                                    <input id="submit" value="Reply" type="submit">
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div id="Donations" class="tab-pane">
                                        <form action="" method='POST' @submit.prevent="onDonation">
                                            <div class="wpo-donations-amount ">
                                                <h2>Donate Packtes</h2>
                                                <input type="text" name="contribution" class="form-control"  id="inc"  v-model="Donate.contribution" placeholder="Donate Packtes" maxlength="100">
                                                <a class="theme-btn" style="margin-top: 2px; cursor: pointer;" @click="onIncrease">Add Packtes</a>
                                            </div>
                                            <div class="wpo-donations-details">
                                                <h2>Details</h2>
                                                <div class="row">
                                                    <div class="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                                        <input type="text" class="form-control" name="fname" v-model="Donate.fname" id="fname" placeholder="First Name" maxlength="10">
                                                    </div>
                                                    <div class="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                                        <input type="text" class="form-control" name="lname" v-model="Donate.lname" id="name" placeholder="Last Name" maxlength="10">
                                                    </div>
                                                    <div class="col-lg-6 col-md-6 col-sm-6 col-12 form-group clearfix">
                                                        <input type="email" class="form-control" name="email" id="email" v-model="Donate.email" placeholder="Email" maxlength="30">
                                                    </div>
                                                    <div class="col-lg-12 col-12 form-group">
                                                        <textarea class="form-control" name="message"  id="note" placeholder="Message" v-model="Donate.message" maxlength="60"></textarea>
                                                    </div>
                                                    <!-- <div class="col-md-4 form-group">
                                                        <label for="anon"> Make Me anonymous</label>
                                                        <input type="checkbox" aria-label="anonymous" class="form-control" name="anonymous"  id="anon"></input>
                                                    </div> -->
                                                </div>
                                            </div>
                                            <div class="submit-area">
                                                <button type="submit" class="theme-btn submit-btn" >Donate Now</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- wpo-event-details-area end -->
<router-view />
            <!-- end wpo-news-letter-section -->
</template>

<script>
import Header from '../components/Header'
import { db } from '../firebaseDatabase'

export default {
  name: 'Learnmore',
  components: {
    Header
  },
  data () {
    return {
      documentId: this.$route.params,
      geted: [],
      name: '',
      email: '',
      comment: '',
      allComments: [],
      Donate: {
        contribution: '',
        fname: '',
        lname: '',
        email: '',
        message: '',
        DonateTo: this.$route.params.id,
        time: new Date()
      }
    }
  },
  mounted () {
    db.collection('donation').get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (doc.data().title === this.documentId.id) {
          this.geted.push(doc.data())
        }
      })
    })
    db.collection('comments').get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (doc.data().commentTo === this.documentId.id) {
          this.allComments.push(doc.data())
          console.log(doc.data())
        }
      })
    })
  },
  methods: {
    onIncrease () {
      this.Donate.contribution++
    },
    onSubmit () {
      db.collection('comments').doc().set({
        username: this.name,
        useremail: this.email,
        usercomment: this.comment,
        commentTo: this.documentId.id
      })
        .then(function () {
          alert('Commented')
          window.location.reload()
        })
        .catch(function (error) {
          console.error('Error writing document: ', error)
        })
      this.name = ''
      this.email = ''
      this.comment = ''
    },
    onDonation () {
      db.collection('donations').doc().set(this.Donate)
        .then(function () {
          alert('Donation Succeed')
        })
        .catch(function (error) {
          console.error('Error writing document: ', error)
        })
    }
  }
}
</script>
