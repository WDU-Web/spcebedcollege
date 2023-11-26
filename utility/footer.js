class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <footer id="Contact">
      <div class="footer-area primary-bg pt-150">
          <div class="container">
              <div class="footer-top pb-35">
                  <div class="row">
                      <div class="col-xl-3 col-lg-4 col-md-6">
                          <div class="footer-widget mb-30">
                              <div class="footer-logo">
                                  <!-- <img src="img/logo/logo_2.png" alt=""> -->
                              </div>
                              <div class="footer-para">
                                  <p><b>Sri Parshwanth College of Education</b> aims to be institution of excellence dedicated to producing leaders 
                                      of the future in educational fields. </p>
                              </div>
                              <div class="footer-socila-icon">
                                  <span>Follow Us</span>
                                  <div class="footer-social-icon-list">
                                      <ul>
                                          <li><a href="#"><span class="ti-facebook"></span></a></li>
                                          <li><a href="#"><span class="ti-twitter-alt"></span></a></li>
                                          <li><a href="#"><span class="ti-dribbble"></span></a></li>
                                          <li><a href="#"><span class="ti-google"></span></a></li>
                                          <li><a href="#"><span class="ti-pinterest"></span></a></li>
                                          <li><a href="#"><span class="ti-instagram"></span></a></li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="col-xl-3 col-lg-4 col-md-6">
                          <div class="footer-widget mb-30">Contact Us

                              <div class="footer-heading">
                                  <h1>Quick Links</h1>
                              </div>
                              <div class="footer-menu clearfix">
                                  <ul>
                                      <li><a href="index.html">HOME</a></li>
                                      <li><a href="about_us.html">ABOUT</a></li>
                                      <li><a href="bed_details.html">B.ED.COURSE </a></li>
                                      <li><a href="admission.html">ADMISSION</a></li>
                                      <li><a href="gallery.html">GALLERY</a></li>
                                      <li><a href="#">COLLEGE DETAILS</a></li>
                                      <li><a href="contact_us.html">CONTACT</a></li>
                                      <li><a href="infrastructure.html">INFRASTRUCTURE</a></li>
                                      <li><a href="events.html">EVENTS</a></li>
                                    <li><a href="facilities.html">FACILITY</a></li>
                                      
                                  </ul>
                              </div>
                          </div>
                      </div>
                      <div class="col-xl-3 col-lg-4 d-lg-none d-xl-block col-md-6">
                          <div class="footer-widget mb-30">
                              
                           
                          </div>
                      </div>
                      <div class="col-xl-3 col-lg-4  col-md-6">
                          <div class="footer-widget mb-30">
                              <div class="footer-heading">
                                  <h1>Contact Us</h1>
                              </div>
                              <div class="footer-contact-list">
                                  <div class="single-footer-contact-info">
                                      <span class="ti-headphone "></span>
                                      <span class="footer-contact-list-text">+91-8073992659</span>
                                  </div>
                                  <div class="single-footer-contact-info">
                                      <span class="ti-email "></span>
                                      <span class="footer-contact-list-text">spcebedcollge@gmail.com</span>
                                  </div>
                                  <div class="single-footer-contact-info">
                                      <span class="ti-location-pin"></span>
                                      <span class="footer-contact-list-text"><b>Sri Parshwanth College of Education </b>
                                        <br>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   VASAVI  VIDYALAYA Kote Road, </br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;         Shivamogga -577202</span>
                                  </div>
                              </div>
                              <div class="opening-time">
                                  
                                  <span class="opening-date">
                                      
                                  </span>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="footer-bottom pt-25 pb-25">
                  <div class="container">
                      <div class="row">
                          <div class="col-xl-12">
                              <div class="footer-copyright text-center">
                                  <span><a target="_blank" href="https://www.templateshub.net"></a></span>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </footer>
      `;
    }
  }
  
  customElements.define('footer-component', Footer);