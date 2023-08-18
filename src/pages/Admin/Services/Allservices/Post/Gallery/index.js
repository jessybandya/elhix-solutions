import React, { useEffect, useState } from 'react'
import { db } from '../../../../../../auth/firebase';
import Post from './Post';
import axios from 'axios'

function Gallery({serviceID, images}) {


  return (
    <div>
         <Post
         images={images}
         electronicID={serviceID}
         />
    </div>
  )
}

export default Gallery