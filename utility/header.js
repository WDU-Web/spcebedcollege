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

                <div class="header-top">
                <div class="row">
                <div class="col-sm">
                <center>
                <br>&nbsp;
                <h4 style="color:white"> <b> Sri Parshwanth College of Education</b></h4>
                </center> 
                </div>
              
                  <div class="col-sm">
                  <center>
                  <img src="img/logo/logo.jpg" alt="bedCollegeLogo">
                  </center>  
              
                      </div>
                      <div class="col-sm">
                      <center>
                      <br>&nbsp;
                    <h5 style="color:white"> <b>Sri Venkat Women’s Educational </b></h5>
                    <h6 style="color:white">Rural Urban Development</h6>
                    <h6 style="color:white"> Society, Chitradurga</h6>

                </center>  
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