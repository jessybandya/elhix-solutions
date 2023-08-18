import React from 'react'

function Footer() {
  return (
    <div>
          {/* Start Subscribe Area */}
          <section className="subscribe-area bg-color-f9fbfe ptb-100">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="subscribe-content">
                  <h2>Stay up to date!</h2>
                  <p>Sign up for the latest Roose news.</p>
                </div>
              </div>
              <div className="col-lg-6">
                <form className="newsletter-form" data-toggle="validator">
                  <input type="email" className="form-control" placeholder="Your email address" name="EMAIL" required autoComplete="off" />
                  <button className="default-btn" type="submit">
                    Subscribe
                  </button>
                  <div id="validator-newsletter" className="form-result" />
                  <div className="form-group checkboxs">
                    <input type="checkbox" id="chb2" />
                    <p>I have read and agree to the <a href="privacy-policy.html">Privacy Policy</a></p>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="shape subscribe-shape-1">
            <img src="assets/images/subscribe-shape-1.png" alt="Image" />
          </div>
          <div className="shape subscribe-shape-2">
            <img src="assets/images/subscribe-shape-2.png" alt="Image" />
          </div>
        </section>
        {/* End Subscribe Area */}
    <footer className="footer-area black-bg-color pt-100 pb-70">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <div className="single-footer-widget">
            <a href="/" className="logo">
              <img src="/media/images/logos/main-logo-trans.png" alt="Image" />
            </a>
            <p>"Your trusted roofing/tiling partner. Excellence in roofing solutions. Quality craftsmanship, innovative designs. Elevate your space's aesthetics and protection with us."</p>
            <ul className="social-icon">
              <li>
                <span>Follow us:</span>
              </li>
              <li>
                <a href="https://www.facebook.com/" target="_blank">
                  <i className="ri-facebook-fill" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/" target="_blank">
                  <i className="ri-instagram-line" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/" target="_blank">
                  <i className="ri-linkedin-fill" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/" target="_blank">
                  <i className="ri-twitter-fill" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="single-footer-widget">
            <h3>Contact Us</h3>
            <ul className="address">
              <li className="location">
                <i className="ri-map-pin-line" />
                <span>Address</span>
                Wisdom House, Off Biason Street, Nairobi Kenya 
              </li>
              <li>
                <i className="ri-mail-line" />
                <span>Email</span>
                <a href="mailto:jessy.bandya5@gmail.com"><span>jessy.bandya5@gmail.com</span></a>
              </li>
              <li>
                <i className="ri-phone-line" />
                <span>Phone</span>
                <span style={{display:'flex',alignItems:'center'}}>
                <a href="tel:+254746749307">+254746749307</a>
                <a style={{marginLeft:6}} href="tel:+254717889264">+254717889264</a>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="single-footer-widget">
            <h3>Useful link</h3>
            <ul className="import-link">
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Terms &amp; conditions</a>
              </li>
              <li>
                <a href="#">Privacy policy</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="single-footer-widget">
            <h3>Working hours</h3>
            <ul className="working-hours">
              <li>
                Mon – Thu
                <span>09.00 AM – 06.00 PM</span>
              </li>
              <li>
                Friday
                <span>09.00 AM – 06.00 PM</span>
              </li>
              <li>
                Saturday
                <span className="closed">Closed</span>
              </li>
              <li>
                Sunday
                <span className="closed">Closed</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/* End Footer Area */}
  {/* Start Copy Right Area */}
  <div className="copy-right-area">
    <div className="container">
      <p>
        Copyright <i className="ri-copyright-line" /> {new Date().getFullYear()} Roophix Solutions. Design &amp; Developed By 
        <a style={{marginLeft:5}} href="https://jessy-bandya.web.app/" target="_blank">Jessy Bandya</a>
      </p>
    </div>
  </div>
  {/* End Copy Right Area */}
  {/* Start Go Top Area */}
    </div>
  )
}

export default Footer