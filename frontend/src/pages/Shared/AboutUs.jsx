// import React from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";

// const AboutUs = () => {
//   return (
//     <div className=" py-16 px-8">
//       <div className="max-w-screen-lg mx-auto">
//         <h1 className="text-4xl font-extrabold mb-6 mt-16">About Us</h1>

//         <p className="mb-6 text-lg">
//           Welcome to <span className="font-bold">Strato</span>, where the magic of stories and the excitement of learning collide! We are a passionate team of educators, developers, and storytellers dedicated to creating an engaging and immersive educational experience for children. Our mission is to inspire a lifelong love of reading and learning by transforming the way children interact with stories.
//         </p>

//         {/* Image Carousel */}
//         <Carousel showThumbs={false} autoPlay infiniteLoop showStatus={false}>
//           <div>
//             <img src="https://ik.imagekit.io/SIBHI/Imagica/iStock-1417486686.jpg" alt="Image 1" />
            
//           </div>
//           <div>
//             <img src="https://ik.imagekit.io/SIBHI/Imagica/word-image4.jpeg" alt="Image 2" />
           
//           </div>
//           <div>
//             <img src="https://ik.imagekit.io/SIBHI/Imagica/family-reading-bedtime-2021-04-02-18-49-19-utc.jpg" alt="Image 3" />
          
//           </div>
//         </Carousel>
        
//         <h2 className="text-3xl font-bold mb-4 mt-10">Our Vision</h2>
//         <p className="mb-6 text-lg">
//           At Strato, we envision a world where every child has access to innovative and interactive learning tools that make education fun and exciting. We believe that stories have the power to spark imagination, creativity, and critical thinking skills. Our goal is to harness this power by integrating state-of-the-art technology with classic storytelling to create an unparalleled educational platform.
//         </p>
//         <h2 className="text-3xl font-bold mb-4">What We Offer</h2>
//         <ul className="list-disc list-inside mb-6 text-lg">
//           <li><strong>Interactive Stories:</strong> Our stories come to life with interactive elements that encourage children to engage with the narrative, make decisions, and explore different outcomes.</li>
//           <li><strong>Educational Games:</strong> Fun and educational games are integrated into our platform to reinforce learning objectives in a playful and enjoyable way.</li>
//           <li><strong>Reading Materials:</strong> A rich library of reading materials, ranging from classic tales to new adventures, is available to cater to various reading levels and interests.</li>
//           <li><strong>Creative Activities:</strong> We offer a variety of creative activities, such as drawing, crafting, and writing, to foster artistic expression and creativity in children.</li>
//         </ul>
//         <h2 className="text-3xl font-bold mb-4">Our Innovative Approach</h2>
//         <p className="mb-6 text-lg">
//           Strato is built on a foundation of cutting-edge technology and innovative educational principles. Our platform utilizes the latest advancements in artificial intelligence, augmented reality, and gamification to create an immersive learning environment. Here’s how we stand out:
//         </p>
//         <ul className="list-disc list-inside mb-6 text-lg">
//           <li><strong>Artificial Intelligence:</strong> Personalized learning paths and recommendations tailored to each child's unique needs and interests.</li>
//           <li><strong>Augmented Reality:</strong> Bringing stories and educational content to life with immersive AR experiences.</li>
//           <li><strong>Gamification:</strong> Integrating game mechanics to motivate and engage children in their learning journey.</li>
//         </ul>
//         <h2 className="text-3xl font-bold mb-4">"Have control over the Data over what your children consume"</h2>
//         <p className="mb-6 text-lg">
//           We invite you to join us on our mission to revolutionize children's education through the power of storytelling and technology. Together, we can create a future where learning is an adventure that every child looks forward to.
//         </p>
//         <p className="text-lg">
//           Thank you for being a part of the Strato community. Let’s embark on this magical journey of learning and discovery together!
//         </p>
//       </div>
//       {/* accordian
//       <Accordion type="single" collapsible className="w-full">
//       <AccordionItem value="item-1">
//         <AccordionTrigger>Is it accessible?</AccordionTrigger>
//         <AccordionContent>
//           Yes. It adheres to the WAI-ARIA design pattern.
//         </AccordionContent>
//       </AccordionItem>
//       <AccordionItem value="item-2">
//         <AccordionTrigger>Is it styled?</AccordionTrigger>
//         <AccordionContent>
//           Yes. It comes with default styles that matches the other
//           components&apos; aesthetic.
//         </AccordionContent>
//       </AccordionItem>
//       <AccordionItem value="item-3">
//         <AccordionTrigger>Is it animated?</AccordionTrigger>
//         <AccordionContent>
//           Yes. It&apos;s animated by default, but you can disable it if you
//           prefer.
//         </AccordionContent>
//       </AccordionItem>
//     </Accordion> */}
//     </div>
//   );
// }

// export default AboutUs;
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const AboutUs = () => {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate('/register');
  };

  const handleExploreClick = () => {
    navigate('/story');
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-96 overflow-hidden" style={{ backgroundImage: 'url("https://ik.imagekit.io/SIBHI/Strato/hero-image.jpg")' }}>
        <div className="absolute inset-0 bg-gradient-to-t opacity-60"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
          <motion.h1
            className="text-5xl font-extrabold mb-4 pt-60"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            Where Learning Meets Imagination
          </motion.h1>
          <motion.p
            className="text-xl mb-6 font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
          >
            Discover, Learn & Grow with Strato – Tailored for Every Learner
          </motion.p>
          <motion.button
            className="bg-blue-600 hover:bg-blue-800 text-white font-mono py-3 px-6 rounded-lg shadow-lg transition-transform duration-300"
            onClick={handleExploreClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
          >
            Explore Our Stories
          </motion.button>
        </div>
      </div>

      <div className="py-16 px-8 sm:px-4">
        <div className="max-w-screen-lg mx-auto">
          <motion.h1
            className="text-4xl font-extrabold mb-6 mt-16 text-center sm:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            About Us
          </motion.h1>

          <motion.p
            className="mb-6 text-lg text-justify sm:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
          >
            Welcome to <span className="font-bold">Strato</span>, where the magic of stories and the excitement of learning collide! We are a passionate team of educators, developers, and storytellers dedicated to creating an engaging, inclusive, and immersive educational experience. Strato is designed with every learner in mind, from children with autism to those with dyslexia, ensuring that our platform meets the unique needs of every child.
          </motion.p>

          {/* Image Carousel */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
          >
            <Carousel showThumbs={false} autoPlay infiniteLoop showStatus={false}>
              <div>
                <img src="https://ik.imagekit.io/SIBHI/Imagica/iStock-1417486686.jpg" alt="Interactive Learning" />
                <p className="legend">Interactive Learning</p>
              </div>
              <div>
                <img src="https://ik.imagekit.io/SIBHI/Imagica/word-image4.jpeg" alt="Creative Stories" />
                <p className="legend">Creative Stories</p>
              </div>
              <div>
                <img src="https://ik.imagekit.io/SIBHI/Imagica/family-reading-bedtime-2021-04-02-18-49-19-utc.jpg" alt="Family Fun" />
                <p className="legend">Family Fun</p>
              </div>
            </Carousel>
          </motion.div>

          {/* Vision Section */}
          <motion.h2
            className="text-3xl font-bold mb-4 mt-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            Our Vision
          </motion.h2>
          <motion.p
            className="mb-6 text-lg text-justify sm:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
          >
            At Strato, we envision a world where every child has access to innovative, adaptive, and inclusive learning tools that make education fun and exciting. Our interactive stories, games, and creative activities empower children to learn at their own pace, nurturing their unique abilities and fostering a lifelong love of learning.
          </motion.p>

          {/* What We Offer Section */}
          <motion.h2
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            What We Offer
          </motion.h2>
          <motion.ul
            className="list-disc list-inside mb-6 text-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
          >
            <li>
              <strong>Interactive Stories:</strong> Our stories come to life with elements that encourage children to make decisions, explore narratives, and engage in immersive learning.
            </li>
            <li>
              <strong>Adaptive Learning Paths:</strong> Personalized learning paths designed to meet the needs of children with diverse abilities, including those with learning disabilities like dyslexia and autism.
            </li>
            <li>
              <strong>Inclusive Games and Activities:</strong> Fun games and creative activities that reinforce learning in a way that’s accessible and enjoyable for all children.
            </li>
          </motion.ul>

          {/* Team Section */}
          <motion.h2
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            Meet Our Team
          </motion.h2>
          <Accordion type="single" collapsible>
            {/* Repeat for other team members */}
            <AccordionItem value="item-1">
              <AccordionTrigger>Rajith - Founder</AccordionTrigger>
              <AccordionContent>
                <motion.p
                  className="text-base"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  Rajith is the founder of Strato and is passionate about making learning accessible for children with special needs. With years of experience in education and technology, he leads the team with a vision for inclusivity.
                </motion.p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* Call to Action */}
          <div className="text-center mt-10">
            <motion.button
              className="bg-green-600 hover:bg-green-800 text-white font-mono py-3 px-6 rounded-lg shadow-lg transition-transform duration-300"
              onClick={handleSignUpClick}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Strato Now
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
