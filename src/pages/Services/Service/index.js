import React from 'react'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import { useParams } from 'react-router-dom';
import { db } from '../../../auth/firebase';
import Gallery from './Gallery';

function Service() {
    const { id } = useParams();
    const [posts, setPosts] = React.useState([])

    React.useEffect(() => {
        db.collection('services').doc(id).get().then(snapshot => {
            setPosts(snapshot.data())
        })
    },[]);


    const paragraphStyle = {
        marginBottom: '1.5em' // Adjust the spacing as needed
      };
    
      const paragraphs = posts?.descriptions?.split('\n').map((paragraph, index) => (
        <p key={index} style={paragraphStyle}>{paragraph}</p>
      ));

  return (
    <>
    <Header />
    <div className="page-title-area bg-9">
      <div className="container">
        <div className="page-title-content">
          <h2>Services details</h2>
          <ul>
            <li>
              <a href="index.html">
                Home 
              </a>
            </li>
            <li className="active">Service details</li>
          </ul>
        </div>
      </div>
    </div>
    {/* End Page Title Area */}
    {/* Start Services Details Area */}
    <section className="services-details-area ptb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="main-content-text mr-15">
              <h3>{posts?.title}</h3>
              <p>{paragraphs}</p>
              <div className="gap-20" />
              {posts?.images?.length > 0 ?(
                <img src={posts?.images[0]?.url} alt="Image" />
              ):(
                <img src="/media/images/logos/main-logo.jpg" alt="Image" />
              )}
              
              <div className="gap-20" />
              {posts?.images?.length > 0 &&(
               <>
               <h3>Gallery </h3>
               <Gallery images={posts?.images} serviceID={id}/>
               </>
              )}
             

            </div>
          </div>
          <div className="col-lg-4">
            <form className="choose-us-from-bg ml-15">
              <h3>Request Callback</h3>
              <div  className="form-group">
                <i className="ri-user-fill" />
                <input style={{backgroundColor:'#d00000'}} className="form-control" type="text" placeholder="Name" />
              </div>
              <div className="form-group">
                <i className="ri-mail-line" />
                <input style={{backgroundColor:'#d00000'}} className="form-control" type="email" placeholder="Email" />
              </div>
              <div className="form-group">
                <i className="ri-map-pin-2-fill" />
                <input style={{backgroundColor:'#d00000'}} className="form-control" type="text" placeholder="Address" />
              </div>
              <div className="form-group date" id="datetimepicker">
                <input style={{backgroundColor:'#d00000'}} type="text" className="form-control" id="Date" placeholder="Inspection date" />
                <span className="input-group-addon" />
                <i className="ri-calendar-line" />
              </div>
              <div className="form-group">
                <i className="ri-time-line" />
                <input style={{backgroundColor:'#d00000'}} className="form-control" type="text" placeholder="Comfortable time" />
              </div>
              <a href='/contact-us' >
              <button type="submit" className="default-btn">
              Get free quate
            </button>
              </a>
            </form>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </>
  )
}

export default Service