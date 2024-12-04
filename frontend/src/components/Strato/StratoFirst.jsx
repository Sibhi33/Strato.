import React from 'react';
import { Link } from 'react-router-dom';

const StratoFirst = () => {
  return (
    <div className="bg-lightyellow dark:bg-gray-900 min-h-screen flex flex-col items-center justify-start py-10">
      {/* Logo and Header Section */}
      <header className="w-full text-center mb-8 pt-8">
        <div className="flex flex-col items-center mb-6">
          <img 
            src="https://ik.imagekit.io/srnqfhgj9e/Strato/1.png" // Add your logo URL here
            alt="StratoFirst Logo"
            className="w-375 h-375 md:w-56 md:h-56" // Adjust the size for responsiveness
          />
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-600 dark:text-blue-300 font-pacifico mt-4 pb-15">Welcome to StratoFirst!</h1>
        </div>
        <p className="mt-4 text-lg md:text-xl text-gray-700 dark:text-gray-300 font-montserrat">
          An engaging learning platform designed to inspire and empower unique minds.
        </p>
      </header>

      {/* Introduction Section */}
      <section className="w-[90%] md:w-[70%] text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-blue-600 dark:text-blue-300 mb-6 font-dancing">What is StratoFirst?</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 font-montserrat">
          StratoFirst is a platform designed specifically for unique minds. With a focus on fun and interactive learning, StratoFirst introduces children to fundamental concepts such as shapes, colors, numbers, and basic words. Through engaging games and activities, we encourage creativity, critical thinking, and personal growth. Our goal is to provide a space where every child can thrive and develop at their own pace.
        </p>
      </section>

      {/* Cards Section for Key Features */}
      <section className="w-[90%] md:w-[80%] text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-blue-600 dark:text-blue-300 mb-6 font-dancing">Key Features of StratoFirst</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Card 1 */}
          <div className="max-w-sm p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
            <img 
              src="https://ik.imagekit.io/srnqfhgj9e/Strato/Untitled%20design/1.jpg" 
              alt="Interactive Games"
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-xl font-bold text-blue-600 dark:text-blue-300 mb-4 font-montserrat">Interactive Games</h3>
            <p className="text-gray-700 dark:text-gray-300 font-montserrat">
              Fun and engaging games designed to stimulate creativity, critical thinking, and problem-solving. The games are interactive and keep children excited about learning.
            </p>
          </div>

          {/* Card 2 */}
          <div className="max-w-sm p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
            <img 
              src="https://ik.imagekit.io/srnqfhgj9e/Strato/Untitled%20design/2.jpg" 
              alt="Skill Development"
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-xl font-bold text-blue-600 dark:text-blue-300 mb-4 font-montserrat">Early Skill Development</h3>
            <p className="text-gray-700 dark:text-gray-300 font-montserrat">
              Activities to help develop early cognitive skills, such as recognition and memory, that lay the foundation for lifelong learning.
            </p>
          </div>

          {/* Card 3 */}
          <div className="max-w-sm p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
            <img 
              src="https://ik.imagekit.io/srnqfhgj9e/Strato/Untitled%20design/3.jpg" 
              alt="Motor Skills"
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-xl font-bold text-blue-600 dark:text-blue-300 mb-4 font-montserrat">Motor Skills Activities</h3>
            <p className="text-gray-700 dark:text-gray-300 font-montserrat">
              Activities that promote fine motor skills and hand-eye coordination, empowering children to express themselves with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-[90%] md:w-[70%] mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-blue-600 dark:text-blue-300 mb-6 font-dancing">Why StratoFirst?</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 font-montserrat">
          StratoFirst is a space where unique minds can flourish. Here’s how our platform helps children excel:
        </p>
        <ul className="list-disc text-lg text-gray-700 dark:text-gray-300 space-y-2 mx-auto max-w-xl font-montserrat">
          <li>Fosters creativity and imagination through interactive play.</li>
          <li>Supports social and emotional growth in a positive, engaging environment.</li>
          <li>Encourages hands-on learning, allowing children to explore concepts at their own pace.</li>
          <li>Focuses on each child’s unique strengths, building confidence and self-awareness.</li>
          <li>Provides a safe and nurturing space for children to express themselves freely.</li>
        </ul>
      </section>

      {/* How It Works Section */}
      <section className="w-[90%] md:w-[70%] text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-blue-600 dark:text-blue-300 mb-6 font-dancing">How Does StratoFirst Work?</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 font-montserrat">
          StratoFirst is designed to be intuitive, fun, and educational for every child. Each activity is simple, interactive, and offers immediate feedback to keep children engaged. The platform is flexible and adapts to the child’s needs, making learning an enjoyable experience tailored to their pace and style.
        </p>
      </section>

      {/* Contact Us Button */}
      <section className="w-[90%] md:w-[70%] text-center mb-16">
        <Link 
          to="/conta" // Ensure the route is correct for your contact page
          className="inline-block px-6 py-3 bg-blue-500 text-white text-xl font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 transform hover:scale-105 font-montserrat"
        >
          Contact Us
        </Link>
      </section>

      {/* Footer Section */}
      <footer className="w-full text-center py-4 bg-blue-500 text-white">
        <p className="text-lg font-pacifico">StratoFirst - Where Learning Meets Fun!</p>
        <p className="text-sm font-montserrat">Contact us: info@strato.com</p>
      </footer>
    </div>
  );
};

export default StratoFirst;
