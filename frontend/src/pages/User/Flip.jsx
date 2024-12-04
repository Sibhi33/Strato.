import React from 'react';

// Sample array of flipbook URLs
const flipbookURLs = [
  'https://online.anyflip.com/ouwvd/jelr/mobile/',
  // Add more URLs as needed
];

const FlipbookGallery = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-40">
      {flipbookURLs.map((url, index) => (
        <div key={index} className="relative w-full" style={{ paddingTop: '56.25%' /* 16:9 aspect ratio */ }}>
          <iframe
            src={url}
            title={`Flipbook ${index + 1}`}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '925',
              height: '100%',
              border: 'none',
            }}
            allowFullScreen
          />
        </div>
      ))}
    </div>

  );
};

export default FlipbookGallery;
