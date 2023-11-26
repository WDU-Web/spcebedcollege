class Subscriber extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <div class="subscribe-area">
      <div class="container">
          <div class="subscribe-box">
              <div class="row">
                  <div class="col-xl-10 offset-xl-1 col-lg-10 offset-lg-1 col-md-12">
                      <div class="row justify-content-between">
                          <div class="col-xl-6 col-lg-7 col-md-8">
                              <div class="subscribe-text">
                                  <h4><b>Have Any Questions About Admission </b></h4>
                                  <span> Your are right place. Any information about B.Ed Admission, please enter your email</span>
                              </div>
                          </div>
                          <div class="col-xl-4 col-lg-5 col-md-4 justify-content-end">
                              <div class="email-submit-form">
                                  <div class="subscribe-form">
                                      <form action="#">
                                          <input placeholder="Enter your email" type="email">
                                          <i class="fas fa-long-arrow-alt-right"></i>
                                      </form>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
      `;
    }
  }
  
  customElements.define('subscriber-component', Subscriber);