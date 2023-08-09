import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Typewriter from 'typewriter-effect';
import Swal from 'sweetalert2';
import CountUp from 'react-countup';

function Home() {
  return (
    <div>
    <Header />
        {/* Start Banner Area */}
        <section className="banner-area banner-area-style-three">
        <video loop muted autoPlay poster="#" className="background-video">
          <source src="/assets/images/banner/banner-video.mp4" type="video/mp4" />
        </video>
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="banner-content">
              <span><img src="/media/images/logos/logo-trans.png" style={{height:50}} alt=""/></span>
                <h1>We provide advanced roofing & Tiling services</h1>
                <div className="banner-btn">
                  <a onClick={() => Swal.fire({
                    icon:'info',
                    title:'Work Status',
                    text:"Oop! Sorry we're currently working on this. Thanks for understanding..."
                  })} className="default-btn">
                    Get free quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Banner Area */}
      {/* Start About Area */}
      <section className="about-area about-area-style-three pt-100 pb-70">
        <div className="container">
          <div className="row align-items-center">
          <div className="col-lg-6">
          <div className="about-img">
            <img src="/media/images/img-1.jpg" alt="Image" />
            <img src="assets/images/about-img-2.jpg" alt="Image" className="about-img-2" />
          </div>
        </div>
            <div className="col-lg-6 i-p-l-w-100">
              <div className="about-content">
                <span>About company</span>
                <h2>With more than 3 years of experience, the roofing & tiling services company has become the largest roofing company in the country.</h2>
                <ul>
                  <li>
                    <i className="ri-check-line" />
                    With years of experience in the industry, we bring a wealth of expertise to every roofing and tiling project.
                  </li>
                  <li>
                    <i className="ri-check-line" />
                    We take pride in delivering top-notch craftsmanship in every project.
                  </li>
                  <li>
                    <i className="ri-check-line" />
                    From roof installations to repairs and tile replacements, we offer a comprehensive suite of services tailored to meet your specific needs.
                  </li>
                  <li>
                    <i className="ri-check-line" />
                    We source and use only high-quality roofing materials and tiles, ensuring durability and longevity. 
                  </li>
                  <li>
                    <i className="ri-check-line" />
                    Quality doesn't have to come with an exorbitant price tag.
                  </li>
                  <li>
                    <i className="ri-check-line" />
                    We are a licensed and insured company, giving you peace of mind knowing that your roofing and tiling project is in capable and reliable hands.
                  </li>
                </ul>
                <a href="/about-us" className="default-btn">
                  Discover more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End About Area */}
      {/* Start Counter Area */}
      <section className="counter-area counter-area-style-two counter-area-style-three">
        <div className="container">
          <div className="counter-bg pt-100 pb-70 jarallax" data-jarallax="{&quot;speed&quot;: 0.3}">
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="single-counter">
                  <div className="count-title">
                    <i className="flaticon-address" />
                    <h2>
                    <CountUp delay={15} end={120000} />
                    </h2>
                    <h4>People in the city</h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="single-counter">
                  <div className="count-title">
                    <i className="flaticon-consulting" />
                    <h2>
                    <CountUp delay={15} end={100} /> 
                    </h2>
                    <h4>Square of city</h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="single-counter">
                  <div className="count-title">
                    <i className="flaticon-project" />
                    <h2>
                    <CountUp delay={15} end={2} />
                    </h2>
                    <h4>Year of foundation</h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="single-counter">
                  <div className="count-title">
                    <i className="flaticon-quality" />
                    <h2>
                    <CountUp delay={15} end={15} /> 
                    </h2>
                    <h4>Successful programs</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Counter Area */}
      {/* Start Professional Services Area */}
      <section className="professional-services-area professional-services-area-style-two ptb-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>We offer all kinds of professional modern roofing & tiling services</h2>
            <p>
            we specialize in providing exceptional tiles and roofing solutions that redefine durability and style. With a commitment to craftsmanship and excellence, we offer a comprehensive range of services tailored to meet your architectural and functional needs.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="professional-services white-bg title-color">
                <a href="#">
                  <img src="assets/images/services/services-1.jpg" alt="Image" />
                </a>
                <div className="professional-services-content">
                  <h3>
                    <a href="#">
                      Flat roofing
                    </a>
                  </h3>
                  <p>Streamlined, modern flat roofing solutions. Expert craftsmanship, durability, and sleek design for contemporary spaces. Elevate your roof with us.</p>
                  <a href="#" className="read-more">
                    Discover more
                    <i className="ri-arrow-right-line" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="professional-services white-bg title-color">
                <a href="#">
                  <img src="media/images/image-2.jpg" alt="Image" />
                </a>
                <div className="professional-services-content">
                  <h3>
                    <a href="#">
                      Tile flooring
                    </a>
                  </h3>
                  <p>Timeless tile flooring. Beauty and durability in every step. Elevate your space with our stunning tile options for lasting elegance.</p>
                  <a href="#" className="read-more">
                    Discover more
                    <i className="ri-arrow-right-line" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="professional-services white-bg title-color">
                <a href="#">
                  <img src="assets/images/services/services-3.jpg" alt="Image" />
                </a>
                <div className="professional-services-content">
                  <h3>
                    <a href="#">
                      Metal roofing
                    </a>
                  </h3>
                  <p>Durable metal roofing solutions. Modern, reliable, and weather-resistant. Elevate your property's appeal and safeguard with our sleek metal roofs.</p>
                  <a href="#" className="read-more">
                    Discover more
                    <i className="ri-arrow-right-line" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Professional Services Area */}
      {/* Start Why choose Roose Area */}
      <section className="why-choose-us-area bg-color-f9fbfe pt-100 pb-70">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="choose-us-content choose-us-content-two mr-15">
                <span>Why choose Elhix Solutions</span>
                <h2>Anyone who sees the quality of our work and the type of work and experience is interested</h2>
                <ul>
                  <li>
                    <i className="flaticon-quality" />
                    <h3>Expertise and Experience</h3>
                    <p>
                    With years of experience in the industry, we bring a wealth of expertise to every roofing and tiling project. Our skilled team has successfully completed numerous installations, repairs, and renovations.
                    </p>
                  </li>
                  <li>
                    <i className="flaticon-user-experience" />
                    <h3>Environmental Considerations</h3>
                    <p>
                    We are mindful of environmental impact. We offer eco-friendly roofing and tiling solutions that prioritize sustainability while maintaining performance and aesthetics.
                    </p>
                  </li>
                  <li>
                    <i className="flaticon-reputation" />
                    <h3>Exceptional Customer Service</h3>
                    <p>Our customer-centric approach means you're always in the loop. We communicate transparently, answer your queries, and provide regular updates throughout the project's lifecycle.</p>
                  </li>
                  <li>
                    <i className="flaticon-address" />
                    <h3>Timely Project Delivery</h3>
                    <p>We value your time, which is why we prioritize efficient project management and adhere to schedules. Our goal is to complete projects on time without compromising on quality.</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <form className="choose-us-from-bg ml-15">
                <h2>Request Quote</h2>
                <div className="form-group">
                  <i className="ri-user-fill" />
                  <input className="form-control" type="text" placeholder="Name" />
                </div>
                <div className="form-group">
                  <i className="ri-mail-line" />
                  <input className="form-control" type="email" placeholder="Email" />
                </div>
                <div className="form-group">
                  <i className="ri-map-pin-2-fill" />
                  <input className="form-control" type="text" placeholder="Address" />
                </div>
                <div className="form-group date" id="datetimepicker">
                  <input type="text" className="form-control" id="Date" placeholder="Inspection date" />
                  <span className="input-group-addon" />
                  <i className="ri-calendar-line" />
                </div>
                <div className="form-group">
                  <i className="ri-time-line" />
                  <input className="form-control" type="text" placeholder="Comfortable time" />
                </div>
                <button type="submit" className="default-btn">
                  Get free quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* End Why choose Roose Area */}
      {/* Start Calling Area */}
      <section className="calling-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 col-md-8">
              <h2>If you require roofing/tiling services or roofing/tiling solutions? Please Call:</h2>
              <p>For roofing/tiling expertise, solutions, and service, call us. Your trusted source for reliable roofing solutions. Enhance protection and aesthetics. Your roof/tile, our priority</p>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="call-now">
                <a href="tel:+254746749307" className="default-btn">+254746749307</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Calling Area */}
      {/* Start Team Area */}
      <section className="team-area team-area-three pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Meet our exclusive team members</h2>
          </div>
          <div className="row justify-content-md-center">
            <div className="col-lg-3 col-md-6">
              <div className="single-team-member">
                <img src="/media/images/odero.jpg" alt="Image" />
                <div className="team-content">
                  <h3>Odero Phelix</h3>
                  <span>Founder & CEO</span>
                  <div className="team-social">
                    <span className="control">
                      <i className="ri-share-fill" />
                    </span>
                    <ul>
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
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-team-member">
                <img src="/media/images/jessy.png" alt="Image" />
                <div className="team-content">
                  <h3>Jessy Bandya</h3>
                  <span>Software Developer</span>
                  <div className="team-social">
                    <span className="control">
                      <i className="ri-share-fill" />
                    </span>
                    <ul>
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
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Team Area */}
      {/* Start Footer Area */}

      <Footer />
    </div>
  )
}

export default Home