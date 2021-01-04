<template>
  <!-- Start header -->
  <header id="header" class="wpo-site-header wpo-header-style-3">
    <!-- <div class="topbar">
      <div class="container">
        <div class="row">
          <div class="col col-md-6 col-sm-7 col-12">
            <div class="contact-intro">
              <ul>
                <li><i class="fi flaticon-call"></i>+000123456789</li>
                <li><i class="fi flaticon-envelope"></i> nasarna@gmail.com</li>
              </ul>
            </div>
          </div>
          <div class="col col-md-6 col-sm-5 col-12">
            <div class="contact-info">
              <ul>
                <li><a class="theme-btn" href="#causes">Donate Now</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div> -->
    <!-- end topbar -->
    <nav class="navigation navbar navbar-default">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="open-btn">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="index.html"
            ><img src="../assets/img/logo-2.png" alt="logo"
          /></a>
        </div>
        <div id="navbar" class="navbar-collapse collapse navbar-right navigation-holder">
          <button class="close-navbar"><i class="ti-close"></i></button>
          <ul class="nav navbar-nav">
            <li class="menu-item-has-children">
              <router-link to="/">Home</router-link>
            </li>
            <li><a href="/#Aboutus">About</a></li>
            <li><router-link to="/contact">Contact</router-link></li>
            <li><router-link to="/volunteer">Volunteer</router-link></li>
            <li><a class="theme-btn" href="/#causes">Donate Now</a></li>
          </ul>
        </div>
        <!-- end of nav-collapse -->
      </div>
      <!-- end of container -->
    </nav>
  </header>
  <!-- end of header -->
</template>
