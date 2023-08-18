import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Typewriter from 'typewriter-effect';
import Swal from 'sweetalert2';
import CountUp from 'react-countup';
import { db } from '../../auth/firebase';
import Post from '../Services/Post';

function Home() {
  const [posts, setPosts] = React.useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [prevPage, setPrevPage] = useState(1);
  const pageSize = 10; // Number of posts per page

   React.useEffect(() => {
       db.collection('services').limit(3).orderBy("timestamp","desc").onSnapshot(snapshot => {
           setPosts(snapshot.docs.map(doc => ({
               id: doc.id,
               post: doc.data(),
           })));
       })
   }, []);

// Calculate the total number of pages based on the posts array length and page size
const totalPages = Math.ceil(posts.length / pageSize);

// Handle page change
const handlePageChange = (event, page) => {
  setCurrentPage(page);
};

// Get the posts for the current page
const getCurrentPosts = () => {
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  return posts.slice(startIndex, endIndex);
};

useEffect(() => {
  // Save the current page before updating the data
  setPrevPage(currentPage);
}, [posts]);

useEffect(() => {
  // Set the current page back to its previous value after data update
  setCurrentPage(prevPage);
}, [prevPage]);
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
                <h2 style={{color:'#fff'}}>We Design, Supply and Install Lifeline Systems & Construction Services</h2>
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
      <section className="about-area about-area-style-three pt-100 pb-70 my-home-class">
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
                    Lifeline Specialists: Design, supply, and install lifeline systems.
                  </li>
                  <li>
                    <i className="ri-check-line" />
                    Construction Pros: Expertise in seamless construction services.
                  </li>
                  <li>
                    <i className="ri-check-line" />
                    Tailored Integration: Lifelines and construction combined for tailored solutions.
                  </li>
                  <li>
                    <i className="ri-check-line" />
                    Trusted Track Record: Proven success in lifelines and construction projects. 
                  </li>
                  <li>
                    <i className="ri-check-line" />
                    Total Peace of Mind: Holistic services for utmost peace of mind.
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
                    <CountUp delay={5} end={120000} />
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
                    <CountUp delay={5} end={100} /> 
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
                    <CountUp delay={5} end={2} />
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
                    <CountUp delay={5} end={15} /> 
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
            <h2>We offer all kinds of professional modern Supply and Install Lifeline Systems & Construction Services</h2>
            <p>
            "Your one-stop destination for comprehensive modern Supply and Install Lifeline Systems & Construction Services, covering a diverse range of professional needs."
            </p>
          </div>
          <div className="row">
          {            posts?.length > 0 ? (
            getCurrentPosts().map(({id, post}) => (
              <Post
              key={id} 
              title={post?.title}
              description={post?.description}
              serviceID={id}
              images={post?.images}
              timestamp={post?.timestamp}
              />
            ))
          ) : (
            <div style={{ display: 'table', margin: 'auto', fontSize: 18, fontWeight: 'bold' }}>Loading...</div>
          )}
          <center>
          <a href='/services' >
          <button type="submit" className="default-btn">
          Find More
        </button>
          </a>  
          </center>
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
              <div className="choose-us-from-bg ml-15">
                <h2>Request Quote</h2>
                <div className="form-group">
                  <i className="ri-user-fill" />
                  <input style={{backgroundColor:'#343a40'}} className="form-control" type="text" placeholder="Name" />
                </div>
                <div className="form-group">
                  <i className="ri-mail-line" />
                  <input style={{backgroundColor:'#343a40'}} className="form-control" type="email" placeholder="Email" />
                </div>
                <div className="form-group">
                  <i className="ri-map-pin-2-fill" />
                  <input style={{backgroundColor:'#343a40'}} className="form-control" type="text" placeholder="Address" />
                </div>
                <div className="form-group date" id="datetimepicker">
                  <input style={{backgroundColor:'#343a40'}} type="text" className="form-control" id="Date" placeholder="Inspection date" />
                  <span className="input-group-addon" />
                  <i className="ri-calendar-line" />
                </div>
                <div className="form-group">
                  <i className="ri-time-line" />
                  <input style={{backgroundColor:'#343a40'}} className="form-control" type="text" placeholder="Comfortable time" />
                </div>
                <a href="/contact-us">
                <button type="submit" className="default-btn">
                Get free quote
              </button>
                </a>
              </div>
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
      {/* Start Footer Area */}

      <Footer />
    </div>
  )
}

export default Home