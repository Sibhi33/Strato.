import React from 'react';
import { Link } from 'react-router-dom';

const StratoSphere = () => {
  return (
    <div className="bg-lightblue dark:bg-gray-900 min-h-screen flex flex-col items-center justify-start py-10">
      {/* Logo and Header Section */}
      <header className="w-full text-center mb-8 pt-8">
        <div className="flex flex-col items-center mb-6">
          <img 
            src="https://ik.imagekit.io/srnqfhgj9e/Strato/4.png?updatedAt=1733284480917" // Replace with StratoSphere's logo
            alt="StratoSphere Logo"
            className="w-300 h-300 md:w-56 md:h-56" // Adjusted size for better responsiveness
          />
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-600 dark:text-blue-300 font-pacifico mt-4 pb-10">
            Welcome to StratoSphere!
          </h1>
        </div>
        <p className="mt-4 text-lg md:text-xl text-gray-700 dark:text-gray-300 font-montserrat">
          A dynamic platform designed to support individuals with Dyslexia, Autism, and Autism Spectrum Disorder (ASD) who are preparing for competitive exams, offering personalized study tools and strategies.
        </p>
      </header>

      {/* Introduction Section */}
      <section className="w-[90%] md:w-[70%] text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-blue-600 dark:text-blue-300 mb-6 font-dancing">
          What is StratoSphere?
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 font-montserrat">
          StratoSphere is a comprehensive platform designed to help individuals with Dyslexia, Autism, and Autism Spectrum Disorder (ASD) prepare for competitive exams. It provides a variety of personalized learning tools, practice exams, time management strategies, and support tailored to the unique learning needs of each individual. Whether preparing for college entrance exams, professional certifications, or other competitive tests, StratoSphere offers a dynamic and supportive environment to help students achieve success.
        </p>
      </section>

      {/* Interactive Sections for Key Features */}
      <section className="w-[90%] md:w-[80%] text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-blue-600 dark:text-blue-300 mb-6 font-dancing">
          Key Features of StratoSphere
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Card 1: Personalized Study Paths */}
          <div className="max-w-sm p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
            <img 
              src="https://ik.imagekit.io/srnqfhgj9e/Strato/7.png" 
              alt="Personalized Study Paths"
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-xl font-bold text-blue-600 dark:text-blue-300 mb-4 font-montserrat">Personalized Study Paths</h3>
            <p className="text-gray-700 dark:text-gray-300 font-montserrat">
              StratoSphere offers personalized study paths tailored to the learning needs and pace of each student. Whether it's focusing on weak areas, enhancing strengths, or adapting learning styles, our platform provides the flexibility to create study plans that suit every individual’s needs.
            </p>
          </div>

          {/* Card 2: Timed Practice Exams */}
          <div className="max-w-sm p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
            <img 
              src="https://ik.imagekit.io/srnqfhgj9e/Strato/6.png" 
              alt="Timed Practice Exams"
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-xl font-bold text-blue-600 dark:text-blue-300 mb-4 font-montserrat">Timed Practice Exams</h3>
            <p className="text-gray-700 dark:text-gray-300 font-montserrat">
              StratoSphere includes timed practice exams designed to simulate the real exam environment. These exams help students build endurance, manage time effectively, and reduce anxiety by practicing under timed conditions, boosting their readiness for competitive tests.
            </p>
          </div>

          {/* Card 3: Exam Strategy and Tips */}
          <div className="max-w-sm p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
            <img 
              src="https://ik.imagekit.io/srnqfhgj9e/Strato/5.png" 
              alt="Exam Strategy and Tips"
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-xl font-bold text-blue-600 dark:text-blue-300 mb-4 font-montserrat">Exam Strategy and Tips</h3>
            <p className="text-gray-700 dark:text-gray-300 font-montserrat">
              StratoSphere provides expert strategies and tips to help students approach competitive exams with confidence. From time management techniques to handling anxiety and managing exam stress, our platform offers actionable advice to ensure success.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-[90%] md:w-[70%] mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-blue-600 dark:text-blue-300 mb-6 font-dancing">
          Why Choose StratoSphere?
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 font-montserrat">
          StratoSphere is dedicated to helping individuals with Dyslexia, Autism, and Autism Spectrum Disorder (ASD) succeed in their competitive exams. Here’s how StratoSphere can benefit you:
        </p>
        <ul className="list-disc text-lg text-gray-700 dark:text-gray-300 space-y-2 mx-auto max-w-xl font-montserrat">
          <li>Personalized study plans that cater to different learning needs, making exam preparation efficient and stress-free.</li>
          <li>Timed practice exams that help simulate real exam conditions, building endurance and confidence.</li>
          <li>Expert strategies and tips for effective time management and reducing exam stress.</li>
          <li>Interactive learning resources that support various learning styles including visual, auditory, and kinesthetic approaches.</li>
          <li>Support for students with sensory processing issues, offering customizable interaction modes to suit different learning preferences.</li>
        </ul>
      </section>

      {/* How It Works Section */}
      <section className="w-[90%] md:w-[70%] text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-blue-600 dark:text-blue-300 mb-6 font-dancing">
          How Does StratoSphere Work?
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 font-montserrat">
          StratoSphere is designed with accessibility in mind, ensuring that every student has the tools and support they need to succeed. With personalized study paths, interactive practice exams, and expert strategies, StratoSphere adapts to each learner’s individual needs. The platform incorporates sensory-friendly features like visual aids, text-to-speech, and auditory tools to ensure an inclusive experience, helping students with ASD, Dyslexia, and other challenges prepare for their competitive exams with confidence.
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
        <p className="text-lg font-pacifico">StratoSphere - Achieving Success Together!</p>
        <p className="text-sm font-montserrat">Contact us: info@stratosphere.com</p>
      </footer>
    </div>
  );
};

export default StratoSphere;
