import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

function Services() {
  return (
    <div>
    <Header />
    <div class="page-title-area bg-8">
        <div class="container">
            <div class="page-title-content">
                <h2>Services</h2>

                <ul>
                    <li>
                        <a href="/">
                            Home 
                        </a>
                    </li>

                    <li class="active">Services</li>
                </ul>
            </div>
        </div>
    </div>
          {/* Start Professional Services Area */}
          <section style={{marginBottom:-50}} className="professional-services-area professional-services-area-style-two ptb-100">
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
    <Footer />
    </div>
  )
}

export default Services