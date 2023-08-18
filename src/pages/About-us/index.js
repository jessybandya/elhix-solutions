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
                <h2>With more than 3 years of experience, We Design, Supply and Install Lifeline Systems & Construction Services</h2>

                <ul>
                  <li>
                    <i className="ri-check-line" />
                    <b>Lifeline Specialists: Design, supply, and install lifeline systems.</b>
                    Our team of dedicated lifeline specialists is at the forefront of creating, delivering, and implementing lifeline systems that prioritize safety and security. From meticulously designing lifeline solutions to sourcing top-quality materials, and ensuring precise installation, we are your partners in safeguarding lives and environments.
                    </li>
                  <li>
                    <i className="ri-check-line" />
                    <b>Construction Pros: Expertise in seamless construction services.</b>

With a wealth of experience in the construction industry, our team of seasoned professionals brings unparalleled expertise to every project. We handle construction services seamlessly, ensuring efficient planning, execution, and completion. From groundbreaking to finishing touches, we ensure the highest standards of craftsmanship.
                  </li>
                  <li>
                    <i className="ri-check-line" />
                    <b>Tailored Integration: Lifelines and construction combined for tailored solutions.</b>

                    Our unique approach integrates the realms of lifeline systems and construction, resulting in tailor-made solutions that perfectly match your requirements. We understand that each project is unique, and our ability to harmoniously integrate lifelines with construction ensures a unified and efficient outcome that addresses your specific needs.                  </li>
                  <li>
                    <i className="ri-check-line" />
                    We source and use only high-quality roofing materials and tiles, ensuring durability and longevity. 
                  </li>
                  <li>
                    <i className="ri-check-line" />
                    <b>Trusted Track Record: Proven success in lifelines and construction projects.</b>

                    Our track record speaks volumes about our commitment to excellence. We've successfully executed numerous lifeline and construction projects, earning the trust of our clients. Our history of delivering on promises, meeting deadlines, and exceeding expectations sets us apart as a trusted partner in your ventures.                  </li>
                  <li>
                    <i className="ri-check-line" />
                    <b>Total Peace of Mind: Holistic services for utmost peace of mind.</b> 

                    We provide more than just services – we offer a complete peace-of-mind package. By combining lifeline systems and construction services, we ensure that every aspect of your project is handled seamlessly and comprehensively. Rest easy knowing that your project is in the hands of experienced professionals who prioritize safety, quality, and your peace of mind.                  </li>
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