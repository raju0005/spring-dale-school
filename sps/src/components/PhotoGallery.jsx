import React from 'react';

const photos = [
  {
    src: 'https://placehold.co/300x200/grey/grey?text=',
    alt: 'Students participating in various sports events.',
    caption: 'Students participating in various sports events.'
  },
  {
    src: 'https://placehold.co/300x200/grey/grey?text=',
    alt: 'Students presenting their science projects.',
    caption: 'Students presenting their science projects.'
  },
  {
    src: 'https://placehold.co/300x200/grey/grey?text=',
    alt: 'Students performing in the cultural fest.',
    caption: 'Students performing in the cultural fest.'
  },
  {
    src: 'https://placehold.co/300x200/grey/grey?text=',
    alt: 'A glimpse of our interactive classrooms.',
    caption: 'A glimpse of our interactive classrooms.'
  },
  {
    src: 'https://placehold.co/300x200/grey/grey?text=',
    alt: 'Students reading and studying in the school library.',
    caption: 'Students reading and studying in the school library.'
  },
];

const PhotoGallery = () => {
  return (  
    <div className="reveal w-full flex flex-col justify-around items-center gap-5 bg-white text-green-600 p-5">
      <h2 className="text-3xl font-bold text-center mb-5 uppercase ">Photo Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {photos.map((photo, index) => (
          <div key={index} className="reveal">
            <img
              src={photo.src}
              alt={photo.alt}
              className="object-cover w-full h-64 rounded-xl animate__animated animated__fadeIn"
            />
            <p className="mt-2 text-center">{photo.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
