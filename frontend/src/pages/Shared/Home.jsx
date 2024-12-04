import React from "react";
import { useNavigate } from "react-router-dom";
import BlurIn from "@/components/magicui/blur-in";
import SparklesText from "@/components/magicui/sparkles-text";
import PulsatingButton from "@/components/ui/pulsating-button";
import TypingAnimation from "@/components/ui/typing-animation";
import {
  Book,
  Brain,
  VideoIcon,
  ChartLine,
  Lightbulb,
  User,
  Globe,
  Star,
} from "lucide-react";
import { CoolMode } from "@/components/ui/cool-mode";


const Home = () => {
  const navigate = useNavigate();

  const handleLearningDashboard = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex flex-col justify-between items-center bg-gradient-to-br from-blue-50 to-purple-100 dark:from-gray-900 dark:to-gray-800">
      <main
        className="flex-grow flex flex-col justify-center items-center text-center p-4 max-w-6xl mx-auto"
        style={{ paddingTop: "25vh" }}
      >
         <TypingAnimation
      className="text-4xl font-thin text-black dark:text-white"
      text="leverage in learning for all the"
    />
        
        <SparklesText text="𝘜 𝘯 𝘪 𝘲 𝘶 𝘦  - 𝘔 𝘪 𝘯 𝘥 𝘴" />
        <br/>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-xl">
          A personalized learning platform designed to support students with
          special needs, providing tailored educational experiences that
          celebrate individual learning styles.
        </p>
          <CoolMode> 
        <PulsatingButton
          className="bg-gradient-to-r from-blue-700 to-purple-600 mt-8 mb-12"
          onClick={handleLearningDashboard}
        >
          <p className="text-white font-mono">Start Learning Journey ⫸⫸ </p>
        </PulsatingButton>
        </CoolMode>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 max-w-full">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
            <Book className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Customized Study Plans
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Adaptive learning paths tailored to individual cognitive strengths
              and challenges.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
            <Brain className="w-12 h-12 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Progress Tracking</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Comprehensive analytics to help parents and educators understand
              learning progression.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
            <VideoIcon className="w-12 h-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Multimedia Learning</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Personalized video recommendations and interactive learning
              resources.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
            <ChartLine className="w-12 h-12 text-red-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Detailed Assessments</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Adaptive quizzes and assessments to continuously evaluate and
              support learning.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
            <Lightbulb className="w-12 h-12 text-yellow-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Creative Learning</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Activities designed to spark creativity and out-of-the-box
              thinking.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
            <User className="w-12 h-12 text-teal-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Community Support</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Connect with educators, parents, and peers for collaborative
              learning.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
            <Globe className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Global Exposure</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Learn from content and peers across the globe, widening
              perspectives.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
            <Star className="w-12 h-12 text-indigo-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Gamified Learning</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Engaging learning experiences through gamification and rewards.
            </p>
          </div>
        </div>
      </main>

      <footer className="w-full bg-gray-800 text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <p>&copy; 2024 Strato. All rights reserved.</p>
          <div className="space-x-4">
            <a
              href="#"
              className="text-white hover:text-gray-300 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-300 transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
