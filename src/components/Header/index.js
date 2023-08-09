import React, { useState } from 'react'
import { Navlinks } from '../../assets/data'
import { useLocation } from 'react-router-dom';
import ClearIcon from '@mui/icons-material/Clear';

function Header() {
    const [openMenuSmall, setOpenMenuSmall] = useState(false)
    const [showSideBar, setShowSideBar] = useState(false)
    const {pathname} = useLocation();


    const openMenuSmallFun = () => {
        setOpenMenuSmall(true)
    }


  return (
    <div>
        {/* Start Preloader Area */}
        <div className="preloader">
        <div className="lds-ripple">
          <div className="pl-flip-1 pl-flip-2" />
        </div>
      </div>
      {/* End Preloader Area */}
    <header className={pathname === '/' ? "header-area header-area-style-three fixed-top" : "header-area" }>
    {/* Start Top Header */}
    <div className={pathname === '/' ? "top-header top-header-style-three black-bg-color" : "top-header top-header-style-two black-bg-color"}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6">
            <ul className="header-left-content">
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
          <div className="col-lg-6 col-md-6">
            <div className="header-right-content">
              <div className="cart-icon">
                <a>
                  <i className="ri-shopping-cart-line" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Start Top Header */}
    {/* Start Navbar Area */} 
    <div className={pathname === '/' ? "navbar-area navbar-area-style-three" : "navbar-area navbar-area-style-two" }>
    <div className="mobile-responsive-nav">
    <div className="container">
      <div className="mobile-responsive-menu mean-container">
      <div className="mean-bar">
      {openMenuSmall &&(
        <nav className="mean-nav">
        <ul className="navbar-nav">
        {Navlinks.map((link) => 
          <li className="nav-item">
          {pathname === link.href ?(
              <a href={link.href} className="nav-link active">
              {link.name} 
            </a> 
          ):(
              <a href={link.href} className="nav-link">
              {link.name} 
            </a> 
          )}
          </li>               
          )}
        </ul>
        <div className="others-options">
          <ul >
            <li>
              <button type="button" className="search-btn" data-bs-toggle="modal" data-bs-target="#exampleModalsrc">
                <i className="ri-search-line" />
              </button>
            </li>
            <li className="mean-last">
              <span className="burger-menu">
                <i className="ri-menu-line" />
              </span>
            </li>
          </ul>
        </div>
      </nav>
      )}
          </div>
        <div className="logo">
          <a href="/">
            <img src="/media/images/logos/main-logo.jpg" alt="logo" />
          </a>
        </div>
        <div className="others-options-for-mobile-devices">
          <ul style={{display:'flex',alignItems:'center'}}>
            <li>
              <button type="button" className="search-btn" data-bs-toggle="modal" data-bs-target="#exampleModalsrc">
                <i className="ri-search-line" />
              </button>
            </li>
            <li>
            {openMenuSmall === true ?(
                <span style={{marginTop:-5}} onClick={() => setOpenMenuSmall(false)} className="burger-menu">
                <ClearIcon style={{color:'#fff'}}/>
              </span>
              ):(
                <span onClick={openMenuSmallFun} className="burger-menu">
                <i className="ri-menu-line" />
              </span>
              )}

            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
      <div className="desktop-nav">
        <div className="container">
          <nav className="navbar navbar-expand-md navbar-light">
            <a className="navbar-brand navbar-brand-style-two" href="/">
              <img src="/media/images/logos/main-logo-trans.png" style={{height:80}} alt="logo" />
            </a>
            <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
              <ul className="navbar-nav m-auto">
              {Navlinks.map((link) => 
                <li className="nav-item">
                {pathname === link.href ?(
                    <a href={link.href} className="nav-link active">
                    {link.name} 
                  </a> 
                ):(
                    <a href={link.href} className="nav-link">
                    {link.name} 
                  </a> 
                )}
                </li>               
                )}
              </ul>
              <div className="others-options">
                <ul>
                  <li>
                    <button type="button" className="search-btn" data-bs-toggle="modal" data-bs-target="#exampleModalsrc">
                      <i className="ri-search-line" />
                    </button>
                  </li>
                  <li>
                    <span onClick={() => setShowSideBar(true)} className="burger-menu">
                      <i className="ri-menu-line" />
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
    {/* End Navbar Area */}
  </header>


      {/* Search Modal */}
      <div className="modal fade search-modal-area" id="exampleModalsrc">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <button type="button" data-bs-dismiss="modal" className="closer-btn">
            <i className="ri-close-line" />
          </button>
          <div className="modal-body">
            <form className="search-box">
              <div className="search-input">
                <input type="text" name="Search" placeholder="Search for..." className="form-control" />
                <button type="submit" className="search-btn">
                  <i className="ri-search-line" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    {/* Search Modal */}
    {/* Start Sidebar Modal */}
    {showSideBar &&(
        <div className="sidebar-modal active">
        <div className="sidebar-modal-inner">
          <div className="sidebar-header">
            <div className="sidebar-logo">
              <img src="/media/images/logos/main-logo-trans.png" style={{height:80,marginTop:-20}} alt="Image" />
            </div>
            <span onClick={() => setShowSideBar(false)} className="close-btn sidebar-modal-close-btn">
              <i className="ri-close-line" />
            </span>
          </div>
          <div className="contact-us">
            <h3>Get in touch</h3>
            <ul>
              <li>
                <i className="ri-map-pin-fill" />
                <span>Address</span>
                University way, Nairobi Kenya
              </li>
              <li>
                <span>Email</span>
                <i className="ri-mail-fill" />
                <a href='mailto: jessy.bandya5@gmail.com'><span>jessy.bandya5@gmail.com</span></a>
              </li>
              <li>
                <span>Phone</span>
                <i className="ri-phone-fill" />
                <a href="tel:+254746749307">+254 (7)46749307</a>
              </li>
            </ul>
          </div>
          <div className="recent-product">
            <h3>Our gallery</h3>
          </div>
        </div>
      </div>
    )}

    {/* End Sidebar Modal */}
    </div>
  )
}

export default Header