import React from 'react';
import { Link } from 'react-router-dom';

const StratoMid = () => {
  return (
    <div className="bg-lightblue dark:bg-gray-900 min-h-screen flex flex-col items-center justify-start py-10">
      {/* Logo and Header Section */}
      <header className="w-full text-center mb-8 pt-8">
        <div className="flex flex-col items-center mb-6">
          <img 
            src="https://ik.imagekit.io/srnqfhgj9e/Strato/2.png" // Replace with StratoMid's logo
            alt="StratoMid Logo"
            className="w-300 h-300 md:w-56 md:h-56" // Adjusted size for better responsiveness
          />
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-600 dark:text-blue-300 font-pacifico mt-4 pb-10">
            Welcome to StratoMid!
          </h1>
        </div>
        <p className="mt-4 text-lg md:text-xl text-gray-700 dark:text-gray-300 font-montserrat">
          A dynamic learning platform designed to empower students with special needs, including Dyslexia, Autism, and Autism Spectrum Disorder (ASD),<br />from grades 4 to 8.
        </p>
      </header>

      {/* Introduction Section */}
      <section className="w-[90%] md:w-[70%] text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-blue-600 dark:text-blue-300 mb-6 font-dancing">
          What is StratoMid?
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 font-montserrat">
          StratoMid is specifically designed to support and uplift students with special needs, including those with Dyslexia, Autism, and Autism Spectrum Disorder (ASD). Through personalized, interactive learning experiences, we ensure that every student can access content in a way that suits their learning style. Whether through visual aids, simplified text, or interactive simulations, StratoMid creates an environment where all students can thrive and learn at their own pace.
        </p>
      </section>

      {/* Interactive Sections for Key Features */}
      <section className="w-[90%] md:w-[80%] text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-blue-600 dark:text-blue-300 mb-6 font-dancing">
          Key Features of StratoMid
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Card 1: Interactive Simulations */}
          <div className="max-w-sm p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
            <img 
              src="https://ik.imagekit.io/srnqfhgj9e/Strato/iii.jpg" 
              alt="Interactive Simulations"
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-xl font-bold text-blue-600 dark:text-blue-300 mb-4 font-montserrat">Interactive Simulations</h3>
            <p className="text-gray-700 dark:text-gray-300 font-montserrat">
              StratoMid offers interactive simulations to help students visualize complex concepts. These simulations are designed with sensory processing in mind, offering options for text-to-speech, visual supports, and step-by-step instructions to accommodate different learning needs.
            </p>
          </div>

          {/* Card 2: Gamified Learning Paths */}
          <div className="max-w-sm p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
            <img 
              src="https://ik.imagekit.io/srnqfhgj9e/Strato/2.jpg?updatedAt=1733277063082" 
              alt="Gamified Learning"
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-xl font-bold text-blue-600 dark:text-blue-300 mb-4 font-montserrat">Gamified Learning Paths</h3>
            <p className="text-gray-700 dark:text-gray-300 font-montserrat">
              With StratoMid, students are guided through personalized learning paths that adjust to their pace. Our gamified approach keeps students motivated with visual rewards, badges, and milestones, while also allowing them to revisit topics as needed, making learning a more manageable and fun experience.
            </p>
          </div>

          {/* Card 3: Collaboration Spaces */}
          <div className="max-w-sm p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
            <img 
              src="https://ik.imagekit.io/srnqfhgj9e/Strato/3.jpg?updatedAt=1733277062766" 
              alt="Collaboration"
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-xl font-bold text-blue-600 dark:text-blue-300 mb-4 font-montserrat">Real-Time Collaboration</h3>
            <p className="text-gray-700 dark:text-gray-300 font-montserrat">
              Students with special needs often benefit from social learning experiences. StratoMid includes real-time collaboration tools, allowing students to work on group projects and communicate with peers in a safe and structured environment. Visual aids, simplified language, and additional support tools help ensure everyone can participate confidently.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-[90%] md:w-[70%] mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-blue-600 dark:text-blue-300 mb-6 font-dancing">
          Why Choose StratoMid?
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 font-montserrat">
          StratoMid is designed with the unique needs of students with Dyslexia, Autism, and 
          Autism Spectrum Disorder in mind. Here's how StratoMid benefits students:
        </p>
        <ul className="list-disc text-lg text-gray-700 dark:text-gray-300 space-y-2 mx-auto max-w-xl font-montserrat">
          <li>Personalized learning paths that cater to different paces, helping students feel in control.</li>
          <li>Visual aids and interactive simulations that support diverse learning styles, making complex concepts easier to understand.</li>
          <li>Gamified learning to encourage engagement while minimizing frustration, with clear goals and rewards.</li>
          <li>Real-time collaboration spaces to practice teamwork and communication skills in a comfortable environment.</li>
          <li>Support for students with sensory processing issues, providing multiple modes of interaction (visual, auditory, text). </li>
        </ul>
      </section>

      {/* How It Works Section */}
      <section className="w-[90%] md:w-[70%] text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-blue-600 dark:text-blue-300 mb-6 font-dancing">
          How Does StratoMid Work?
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 font-montserrat">
          StratoMid is designed to make learning accessible for students with a variety of learning differences. The platform adapts to the individual needs of each student, offering features like simplified language, visual cues, text-to-speech, and flexible learning pathways. Whether it’s through interactive simulations, group collaborations, or personalized learning goals, StratoMid ensures that every student has the opportunity to succeed in a way that works best for them.
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
        <p className="text-lg font-pacifico">StratoMid - Elevating Minds for Tomorrow!</p>
        <p className="text-sm font-montserrat">Contact us: info@stratomid.com</p>
      </footer>
    </div>
  );
};

export default StratoMid;
