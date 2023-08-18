import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { db } from '../../auth/firebase';
import Post from './Post';

function Services() {
  const [posts, setPosts] = React.useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [prevPage, setPrevPage] = useState(1);
  const pageSize = 10; // Number of posts per page

   React.useEffect(() => {
       db.collection('services').orderBy("timestamp","desc").onSnapshot(snapshot => {
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
            </div>
          </div>
        </section>
        {/* End Professional Services Area */}
    <Footer />
    </div>
  )
}

export default Services