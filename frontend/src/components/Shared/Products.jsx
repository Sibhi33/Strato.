import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';

const Products = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();

  const buttonStyle = `w-full bg-blue-400 text-black font-mono rounded hover:from-blue-500 hover:to-purple-400 transition duration-150 ${
    theme === 'dark' ? 'bg-blue-600' : ''
  }`;

  const handleNavigation = (path) => navigate(path);

  const images = [
    {
      src: 'https://ik.imagekit.io/srnqfhgj9e/Strato/1.jpg',
      description: 'Helps your kids learn in a flash!',
      redirectTo: '/fla', // Define the page to redirect to
    },
    {
      src: 'https://ik.imagekit.io/srnqfhgj9e/Strato/2.jpg',
      description: 'Make your kids experience stories',
      redirectTo: '/story', // Define the page to redirect to
    },
    {
      src: 'https://ik.imagekit.io/srnqfhgj9e/Strato/3.jpg',
      description: 'Gamified learning!',
      redirectTo: '/game', // Define the page to redirect to
    },
    {
      src: 'https://ik.imagekit.io/srnqfhgj9e/Strato/4.jpg',
      description: 'Engaging kids with creativity',
      redirectTo: '/crea', // Define the page to redirect to
    },
  ];

  const carouselItems = [
    {
      title: 'Read Stories',
      description: 'Dive into a world of imagination and adventure with our vast collection of stories.',
      buttonText: 'Start Reading',
      path: '/story',
    },
    {
      title: 'Write Stories',
      description: 'Share your creativity and become an author in our community.',
      buttonText: 'Start Writing',
      path: '/write-stories',
    },
    {
      title: 'Enroll Organization',
      description: 'Join our educational platform to provide immersive learning experiences.',
      buttonText: 'Enroll Now',
      path: '/register',
    },
  ];

  return (
    <div className="min-h-screen py-10">
      <div className="max-w-screen-lg mx-auto px-4">
        {/* Carousel Section */}
        <div className="mb-16 pt-16">
          <Carousel
            showThumbs={false}
            infiniteLoop
            useKeyboardArrows
            autoPlay
            interval={5000}
            showArrows={false}
            showStatus={false}
            renderIndicator={(onClickHandler, isSelected) => (
              <div
                onClick={onClickHandler}
                style={{
                  borderRadius: '50%',
                  width: '10px',
                  height: '10px',
                  margin: '0 4px',
                  display: 'inline-block',
                  cursor: 'pointer',
                  backgroundColor: isSelected ? '#666' : '#ccc',
                }}
              />
            )}
          >
            {carouselItems.map((item, index) => (
              <div key={index} className="p-4">
                <div className="rounded-lg shadow-lg p-6 text-center">
                  <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
                  <p className="mb-4">{item.description}</p>
                  <Button
                    onClick={() => handleNavigation(item.path)}
                    className={buttonStyle}
                  >
                    {item.buttonText}
                  </Button>
                </div>
              </div>
            ))}
          </Carousel>
        </div>

        {/* Image Grid Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6"
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative rounded-lg overflow-hidden shadow-lg group"
            >
              <button
                onClick={() => handleNavigation(image.redirectTo)} // Redirect on click
                className="w-full h-64 relative"
              >
                <img
                  src={image.src}
                  alt={image.description}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white font-mono text-center py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.description}
                </div>
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
