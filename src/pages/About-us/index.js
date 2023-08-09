import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

function AboutUs() {
  return (
    <div>
    <Header/>
    <div>
        {/* Start Page Title Area */}
        <div className="page-title-area bg-1">
          <div className="container">
            <div className="page-title-content">
              <h2>About</h2>
              <ul>
                <li>
                  <a href="/">
                    Home 
                  </a>
                </li>
                <li className="active">About Us</li>
              </ul>
            </div>
          </div>
        </div>
        {/* End Page Title Area */}
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
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End About Area */}
      </div>
    <Footer />
    </div>
  )
}

export default AboutUs