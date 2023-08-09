import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

function Error() {
  return (
    <div>
    <Header />
        {/* Start Page Title Area */}
        <div className="page-title-area bg-17">
          <div className="container">
            <div className="page-title-content">
              <h2>404</h2>
              <ul>
                <li>
                  <a href="index.html">
                    Home 
                  </a>
                </li>
                <li className="active">404</li>
              </ul>
            </div>
          </div>
        </div>
        {/* End Page Title Area */}
        {/* Start 404 Error */}
        <div className="error-area ptb-100">
          <div className="d-table">
            <div className="d-table-cell">
              <div className="error-content">
                <h1>4 <span>0</span> 4</h1>
                <h3>Oops! Page Not Found</h3>
                <p>The page you were looking for could not be found.</p>
                <a href="/" className="default-btn two">
                  Return To Home Page
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* End 404 Error */}
        <Footer />
      </div>
  )
}

export default Error