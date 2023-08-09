import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

function Team() {
  return (
    <div>
    <Header/>
    <div class="page-title-area bg-5">
    <div class="container">
        <div class="page-title-content">
            <h2>Team member</h2>

            <ul>
                <li>
                    <a href="/">
                        Home 
                    </a>
                </li>

                <li class="active">Our Team</li>
            </ul>
        </div>
    </div>
</div>
          {/* Start Team Area */}
          <section className="team-area team-area-three pt-70 pb-70">
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col-lg-3 col-md-6">
                <div className="single-team-member">
                  <img src="assets/images/team/team-1.jpg" alt="Image" />
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
                  <img src="assets/images/team/team-2.jpg" alt="Image" />
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
    <Footer />
    </div>
  )
}

export default Team