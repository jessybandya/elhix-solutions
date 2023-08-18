import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import { Avatar, Tooltip, Typography } from '@mui/material';
import moment from 'moment';
// import Options from './Post/Options';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { useEffect, useState } from 'react';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}


function Gallery({ images, serviceID }) {
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);
  return (
    <div>
    <ImageList variant="quilted" cols={4} rowHeight={200} 
    >
      {images?.map((image, index) => (
        <ImageListItem
          cols={
            pattern[
              index - Math.floor(index / pattern.length) * pattern.length
            ].cols
          }
          rows={
            pattern[
              index - Math.floor(index / pattern.length) * pattern.length
            ].rows
          }
          sx={{
            // opacity: '.7',
            transition: 'opacity .3s linear',
            cursor: 'pointer',
            // '&:hover': { opacity: 1 },
          }}
        >
          <img
            {...srcset(
              image?.url,
              200,
              pattern[
                index - Math.floor(index / pattern.length) * pattern.length
              ].rows,
              pattern[
                index - Math.floor(index / pattern.length) * pattern.length
              ].cols
            )}
            alt="Jessy"
            loading="lazy"
            onClick={() => {
              setPhotoIndex(index);
              setIsOpen(true);
            }}
          />
          <Typography
            variant="body2"
            component="span"
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              color: '#fff',
              background: 'rgba(0,0,0, .3)',
              p: '5px',
              borderTopRightRadius: 8,
            }}
          >
          Roophix Solutions
          </Typography>
        </ImageListItem>
      ))}
    </ImageList>
    {isOpen && (
      <Lightbox
      style={{zIndex:2000}}
        mainSrc={images[photoIndex]?.url}
        nextSrc={
          images[(photoIndex + 1) % images.length]?.url
        }
        prevSrc={
          images[(photoIndex + images.length - 1) % images.length]
            ?.url
        }
        onCloseRequest={() => setIsOpen(false)}
        onMoveNextRequest={() =>
          setPhotoIndex((photoIndex + 1) % images.length)
        }
        onMovePrevRequest={() =>
          setPhotoIndex(
            (photoIndex + images.length - 1) % images.length
          )
        }
        // imageTitle={`Uploaded by Ebesa Admin`}
        imageCaption={images[photoIndex]?.comment}
      />
    )}
    </div>
  )
}

export default Gallery

const pattern = [
    {
      rows: 1,
      cols: 1,
    },
    {
      rows: 1,
      cols: 1,
    },
    {
      rows: 1,
      cols: 1,
    },
    {
      rows: 1,
      cols: 1,
    },
    {
      rows: 1,
      cols: 1,
    },
    {
      rows: 1,
      cols: 1,
    },
    {
      rows: 1,
      cols: 1,
    },
    {
      rows: 1,
      cols: 1,
    },
  ];