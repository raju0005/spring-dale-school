import React from 'react'
import PhotoGallery from '../components/PhotoGallery'
import VideoGallery from '../components/VideoGallery'

const Gallery = () => {
  return (
    <div className='w-screen flex flex-col justify-around items-center gap-3 py-3'>
        <PhotoGallery/>
        <VideoGallery/>
    </div>
  )
}

export default Gallery