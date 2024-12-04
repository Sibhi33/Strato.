import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AffiliateProgram = () => {
  const [formData, setFormData] = useState({
    organizationName: '',
    contactPerson: '',
    email: '',
    phone: '',
    message: '',
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const elements = document.querySelectorAll('.interactive-element');
      elements.forEach((el) => {
        const speed = el.getAttribute('data-speed');
        const x = (e.clientX * speed) / 100;
        const y = (e.clientY * speed) / 100;
        el.style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted', formData);
  };

  // Generate random positions and sizes for background elements
  const generateBackgroundElements = () => {
    const elements = [];
    const colors = ['#FF5733', '#33FF57', '#5733FF', '#FF33A6', '#33FFFC', '#FFC300'];
    for (let i = 0; i < 60; i++) {
      const size = Math.random() * 50 + 30;
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const shapeType = Math.random() < 0.5 ? 'circle' : 'polygon';
      elements.push(
        <motion.svg
          key={i}
          className="interactive-element absolute"
          style={{
            top: `${y}%`,
            left: `${x}%`,
            width: `${size}px`,
            height: `${size}px`,
            fill: color,
          }}
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          data-speed={Math.random() * 5}
        >
          {shapeType === 'circle' ? (
            <circle cx="50" cy="50" r="50" />
          ) : (
            <polygon points="10,10 90,10 90,90 10,90" />
          )}
        </motion.svg>
      );
    }
    return elements;
  };

  return (
    <div className="flex flex-col min-h-screen overflow-hidden relative">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        {generateBackgroundElements()}
      </div>

      <main className="flex-grow container mx-auto py-16 px-4 mt-16 relative">
        {/* Header Section */}
        <section className="text-center mb-16">
          <motion.h1
            className="text-6xl font-bold bg-clip-text bg-transparent font-sans"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Partner with Imagica to Transform Education
          </motion.h1>
          <motion.p
            className="text-lg mt-4 font-sans"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Join our affiliate program to integrate Imagica’s innovative educational content with your curriculum. Empower your students with engaging stories, interactive lessons, and personalized learning experiences.
          </motion.p>
        </section>

        {/* Benefits Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            { title: 'Access to Premium Content', description: 'Get access to exclusive content tailored to enhance learning experiences for your students.' },
            { title: 'Customized Learning Paths', description: 'Create personalized learning journeys that align with your curriculum and student needs.' },
            { title: 'Dedicated Support', description: 'Enjoy dedicated support from our team to help you get the most out of Imagica.' },
            { title: 'Collaborative Projects', description: 'Engage your students in collaborative projects with other schools and educators globally.' },
            { title: 'Analytics & Reports', description: 'Track student progress with detailed analytics and reports to make informed decisions.' },
            { title: 'Exclusive Webinars', description: 'Participate in exclusive webinars hosted by experts in education and child development.' },
          ].map((benefit, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white shadow-lg rounded-lg border border-gray-200"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.h2
                className="text-2xl font-semibold text-black mb-4 font-sans"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                {benefit.title}
              </motion.h2>
              <motion.p
                className="text-gray-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {benefit.description}
              </motion.p>
            </motion.div>
          ))}
        </section>

        {/* Call-to-Action Section */}
        <section className="text-center mt-12">
          <motion.h2
            className="text-4xl font-semibold mb-6 font-sans"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p
            className="text-lg mb-6 font-sans"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Fill out the form below to join our affiliate program and start transforming education with Imagica.
          </motion.p>
          <form 
            onSubmit={handleSubmit} 
            className="max-w-2xl mx-auto bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg p-8 shadow-lg rounded-lg border border-gray-200"
          >
            <div className="mb-4">
              <label htmlFor="organizationName" className="block font-semibold mb-2">Organization Name</label>
              <input
                type="text"
                id="organizationName"
                name="organizationName"
                value={formData.organizationName}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg py-2 px-4"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="contactPerson" className="block font-semibold mb-2">Contact Person</label>
              <input
                type="text"
                id="contactPerson"
                name="contactPerson"
                value={formData.contactPerson}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg py-2 px-4"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block font-semibold mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg py-2 px-4"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="phone" className="block font-semibold mb-2">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg py-2 px-4"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block font-semibold mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg py-2 px-4"
                rows="5"
                required
              ></textarea>
            </div>

            <motion.button
              type="submit"
              className="w-full py-3 px-6 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Affiliate Program
            </motion.button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default AffiliateProgram;
