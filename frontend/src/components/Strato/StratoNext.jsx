import React from 'react';
import { Link } from 'react-router-dom';

const StratoNext = () => {
  return (
    <div className="bg-lightblue dark:bg-gray-900 min-h-screen flex flex-col items-center justify-start py-10">
      {/* Logo and Header Section */}
      <header className="w-full text-center mb-8 pt-8">
        <div className="flex flex-col items-center mb-6">
          <img 
            src="https://ik.imagekit.io/srnqfhgj9e/Strato/3.png" // Replace with StratoNext's logo
            alt="StratoNext Logo"
            className="w-300 h-300 md:w-56 md:h-56" // Adjusted size for better responsiveness
          />
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-600 dark:text-blue-300 font-pacifico mt-4 pb-10">
            Welcome to StratoNext!
          </h1>
        </div>
        <p className="mt-4 text-lg md:text-xl text-gray-700 dark:text-gray-300 font-montserrat">
          A cutting-edge learning platform for high school students with special needs, including Dyslexia, Autism, and Autism Spectrum Disorder (ASD), preparing for their final examinations from grades 9 to 12.
        </p>
      </header>

      {/* Introduction Section */}
      <section className="w-[90%] md:w-[70%] text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-blue-600 dark:text-blue-300 mb-6 font-dancing">
          What is StratoNext?
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 font-montserrat">
          StratoNext is a platform tailored for high school students with Dyslexia, Autism, and Autism Spectrum Disorder (ASD) who are preparing for their final exams. StratoNext adapts to the needs of each student, offering specialized learning resources, personalized study plans, and support tools to help them succeed in their high school journey. Whether it's visual aids, simplified text, or interactive learning paths, StratoNext is here to guide students through their most important academic years.
        </p>
      </section>

      {/* Interactive Sections for Key Features */}
      <section className="w-[90%] md:w-[80%] text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-blue-600 dark:text-blue-300 mb-6 font-dancing">
          Key Features of StratoNext
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Card 1: Exam-Focused Study Plans */}
          <div className="max-w-sm p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
            <img 
              src="https://ik.imagekit.io/srnqfhgj9e/Strato/ioio.jpg" 
              alt="Exam-Focused Study Plans"
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-xl font-bold text-blue-600 dark:text-blue-300 mb-4 font-montserrat">Exam-Focused Study Plans</h3>
            <p className="text-gray-700 dark:text-gray-300 font-montserrat">
              StratoNext provides personalized, exam-focused study plans to help students manage their time and prioritize subjects based on their strengths and weaknesses. These plans are designed to break down large topics into manageable chunks, ensuring that students have the support they need leading up to their final exams.
            </p>
          </div>

          {/* Card 2: Mock Exams and Practice Tests */}
          <div className="max-w-sm p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
            <img 
              src="https://ik.imagekit.io/srnqfhgj9e/Strato/5.jpg" 
              alt="Mock Exams and Practice Tests"
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-xl font-bold text-blue-600 dark:text-blue-300 mb-4 font-montserrat">Mock Exams and Practice Tests</h3>
            <p className="text-gray-700 dark:text-gray-300 font-montserrat">
              With StratoNext, students can take mock exams and practice tests that mimic the real exam environment. This allows students to get familiar with the exam format, manage their time effectively, and reduce anxiety before the actual test.
            </p>
          </div>

          {/* Card 3: Personalized Learning Tools */}
          <div className="max-w-sm p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
            <img 
              src="https://ik.imagekit.io/srnqfhgj9e/Strato/6.jpg" 
              alt="Personalized Learning Tools"
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-xl font-bold text-blue-600 dark:text-blue-300 mb-4 font-montserrat">Personalized Learning Tools</h3>
            <p className="text-gray-700 dark:text-gray-300 font-montserrat">
              StratoNext offers personalized learning tools that adapt to each student's pace and learning style. From interactive visuals and simplified texts to text-to-speech features and auditory learning aids, students have access to a variety of resources to help them retain and apply information more effectively.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-[90%] md:w-[70%] mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-blue-600 dark:text-blue-300 mb-6 font-dancing">
          Why Choose StratoNext?
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 font-montserrat">
          StratoNext is designed specifically for high school students with Dyslexia, Autism, and Autism Spectrum Disorder. It ensures that each student has the tools they need to succeed during their most challenging years of education. Here's how StratoNext can benefit students:
        </p>
        <ul className="list-disc text-lg text-gray-700 dark:text-gray-300 space-y-2 mx-auto max-w-xl font-montserrat">
          <li>Custom study plans that adapt to each student’s individual needs, ensuring efficient and manageable study sessions.</li>
          <li>Mock exams and practice tests that help students prepare mentally and academically for their final examinations.</li>
          <li>Interactive learning tools that support a variety of learning styles, including visual, auditory, and kinesthetic methods.</li>
          <li>Real-time feedback and progress tracking to keep students motivated and on the right path.</li>
          <li>Strategies for reducing test anxiety, helping students approach their exams with confidence.</li>
        </ul>
      </section>

      {/* How It Works Section */}
      <section className="w-[90%] md:w-[70%] text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-blue-600 dark:text-blue-300 mb-6 font-dancing">
          How Does StratoNext Work?
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 font-montserrat">
          StratoNext offers a comprehensive, adaptable learning environment for high school students with special needs. The platform provides a personalized study experience with tools like visual aids, text-to-speech, and simplified learning paths. Mock exams and practice tests allow students to assess their readiness for final exams. StratoNext focuses on minimizing academic stress by making the learning process engaging and manageable, ensuring students are prepared for success.
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
        <p className="text-lg font-pacifico">StratoNext - Empowering Future Leaders!</p>
        <p className="text-sm font-montserrat">Contact us: info@stratonext.com</p>
      </footer>
    </div>
  );
};

export default StratoNext;
