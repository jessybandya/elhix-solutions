import React from 'react';

function limitWords(text, limit) {
  const words = text.trim().split(/\s+/);
  const truncatedWords = words.slice(0, limit);
  return truncatedWords.join(' ');
}

function Post({ title, description, serviceID, images, timestamp }) {
  const maxWords = 15; // Set your desired word limit
  const truncatedDescription = limitWords(description || '', maxWords);

  return (
    <div className="col-lg-4 col-md-6">
      <div className="professional-services white-bg title-color">
        <a href={`/service/${serviceID}`}>
          {images.length > 0 ? (
            <img src={images[0]?.url} alt="Image" />
          ) : (
            <img src="/media/images/logos/main-logo.jpg" alt="Image" />
          )}
        </a>
        <div className="professional-services-content">
          <h3>
            <a href={`/service/${serviceID}`}>
              {title}
            </a>
          </h3>
            {description?.length > maxWords ? (
              <p>{truncatedDescription}<span style={{fontWeight:'bold'}}>...read more</span></p>
            ) : (
              <p>{description}</p>
            )}
          <a href={`/service/${serviceID}`} className="read-more">
            Discover more
            <i className="ri-arrow-right-line" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Post;
