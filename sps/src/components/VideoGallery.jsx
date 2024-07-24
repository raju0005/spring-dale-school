import React from 'react';

const videos = [
  {
    src: 'path/to/school_tour.mp4',
    caption: 'Virtual tour of Springdale Public School.'
  },
  {
    src: 'path/to/annual_function.mp4',
    caption: 'Highlights from the Annual Function 2023.'
  },
];

const VideoGallery = () => {
  return (
    <section 
      className="reveal w-full flex flex-col justify-around items-center gap-5 bg-green-600 text-white p-5" 
      aria-labelledby="video-gallery-title"
    >
      <h2 
        id="video-gallery-title" 
        className="text-3xl font-bold text-center mb-5 uppercase"
      >
        Video Gallery
      </h2>
      <div 
        className="grid grid-cols-1 sm:grid-cols-2 gap-10" 
        role="list" 
        aria-label="Video Gallery"
      >
        {videos.map((video, index) => (
          <div key={index} className="reveal" role="listitem">
            <video 
              controls 
              className="w-full rounded-md" 
              aria-label={video.caption}
            >
              <source src={video.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="mt-2 text-center">{video.caption}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VideoGallery;
