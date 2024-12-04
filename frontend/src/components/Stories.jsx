import React from 'react';
// import { motion } from 'framer-motion';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useTheme } from 'next-themes'; // Assuming you're using next-themes for theme management

// const storySets = [
//   [
//     {
//       imgLink: 'https://ik.imagekit.io/SIBHI/Imagica/Screenshot%202024-08-01%20at%2010.47.57%E2%80%AFPM.png',
//       link: 'https://online.fliphtml5.com/znjlk/mgud/#p=1'
//     },
//     {
//       imgLink: 'https://ik.imagekit.io/SIBHI/Imagica/Screenshot%202024-08-02%20at%202.14.19%E2%80%AFPM.png',
//       link: 'https://fliphtml5.com/agvcu/vlca/West_Rabbit_Children_Story/',
//     },
//     {
//       imgLink: 'https://ik.imagekit.io/SIBHI/Imagica/Screenshot%202024-08-02%20at%202.16.55%E2%80%AFPM.png',
//       link: 'https://fliphtml5.com/aydul/pfti/I_FOUND_A_FROG/',
//     },
//     {
//       imgLink: 'https://ik.imagekit.io/SIBHI/Imagica/Screenshot%202024-08-02%20at%202.29.01%E2%80%AFPM.png',
//       link: 'https://online.fliphtml5.com/rerhx/pqda/#p=1',
//     },
//     {
//       imgLink: 'https://ik.imagekit.io/SIBHI/Imagica/Screenshot%202024-08-02%20at%202.34.10%E2%80%AFPM.png',
//       link: 'https://online.fliphtml5.com/zphlf/nogp/',
//     },
//     {
//       imgLink: 'https://ik.imagekit.io/SIBHI/Imagica/Screenshot%202024-08-02%20at%203.17.25%E2%80%AFPM.png',
//       link: 'https://fliphtml5.com/cipiz/ywgx/The_Mouse_That_Was/',
//     },
//     {
//       imgLink: 'https://ik.imagekit.io/SIBHI/Imagica/Screenshot%202024-08-02%20at%203.20.04%E2%80%AFPM.png',
//       link: 'https://fliphtml5.com/aydul/kenl/Get_the_Hen%21/',
//     },
//   ],
//   // Add more arrays of stories as needed
// ];

const Stories = () => {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen py-10">
      <div className="max-w-screen-lg mx-auto px-4">
        <h1 className="text-4xl font-mono text-center mb-10 mt-36">Explore Our Bookshelf</h1> {/* Increased the top margin */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
          {storySets.flat().map((story, index) => (
            <a key={index} href={story.link} target="_blank" rel="noopener noreferrer">
              <motion.div
                className="relative rounded-lg shadow-lg overflow-hidden cursor-pointer"
                style={{
                  height: '200px', // Maintain the same height
                  width: '150px', // Maintain the same width
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={story.imgLink}
                  alt={`Story ${index + 1}`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-opacity-30 flex flex-col justify-end p-4 transition-opacity duration-300 hover:bg-opacity-50 rounded-lg">
                  <h2 className="text-xl font-bold text-white">{`Story ${index + 1}`}</h2>
                </div>
              </motion.div>
            </a>
          ))}
        </div> */}
        <div className="flex justify-center bg-opacity-95">
          <iframe
            src="https://anyflip.com/bookcase/xphku//silver"
            title="Bookshelf"
            style={{ width: '1800px', height: '825px' }}
            seamless
            scrolling="no"
            frameBorder="0"
            allowTransparency="true"
            allowFullScreen
          />
        </div>
        </div>
      </div>
  );
};

export default Stories;
