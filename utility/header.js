class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <header id="home">
        <div class="header-area">
            <!-- header-top -->
            <div class="header-top primary-bg">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-6 col-lg-6 col-md-6 col-12">
                            <div class="header-contact-info d-flex">
                                <div class="header-contact header-contact-phone">
                                    <span class="ti-headphone"></span>
                                    <p class="phone-number">+91-8073992659</p>
                                </div>
                                <div class="header-contact header-contact-email">
                                    <span class="ti-email"></span>
                                    <p class="email-name">spcebedcollge@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div class="header-social-icon-list">
                                <ul>
                                    <li><a href="#"><span class="ti-facebook"></span></a></li>
                                    <li><a href="#"><span class="ti-twitter-alt"></span></a></li>
                                    <li><a href="#"><span class="ti-dribbble"></span></a></li>
                                    <li><a href="#"><span class="ti-google"></span></a></li>
                                    <li><a href="#"><span class="ti-pinterest"></span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /end header-top -->
            <!-- header-bottom -->
            <div class="header-bottom-area header-sticky" style="transition: .6s;">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-xl-2 col-lg-2 col-md-6 col-6">
                            <div class="logo">
                                <!-- <a href="index.html">
                                 <img src="img/logo/logo.png" alt="">

                                </a> -->
                                <b>Sri Parshwanth College of Education </b>
                            </div>
                        </div>
                        <div class="col-xl-10 col-lg-10 col-md-6 col-6">
                            <div class="header-bottom-icon f-right">

                            </div>
                            <div class="main-menu f-right">
                                <nav id="mobile-menu" style="display: block;">
                                    <ul>
                                        <li>
                                            <a href="index.html">Home</a>
                                           
                                        </li>
                                        <li>
                                            <a href="about_us.html">About</a>
                                           
                                        </li>
                                        <li>
                                            <a href="index.html">B.Ed.course</a>
                                           
                                        </li>
                                    
                                        
                                        <li>
                                            <a href="index.html">Admission</a>
                                           
                                        </li>

                                        <li>
                                            <a href="index.html">Gallary</a>
                                           
                                        </li>
                                         <li>
                                            <a href="#">College Details</a>
                                            <ul class="submenu">
                                                <li>
                                                    <a href="index.html">Infrastructure</a>
                                                </li>
                                                <li>
                                                    <a href="index.html">Events</a>
                                                </li>
                                                <li>
                                                    <a href="index.html">facilities</a>
                                                </li>
                                              
                                            </ul>
                                        </li> 
                                        <li>
                                            <a href="contact_us.html">CONTACT</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="mobile-menu"></div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /end header-bottom -->
        </div>
    </header>
      `;
    }
  }
  
  customElements.define('header-component', Header);