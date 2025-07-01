import { Typewriter } from "react-simple-typewriter";
import Layout from "../layout/layout";

function HomePage() {
  return (
    <>
      <Layout>
      <div className="min-h-[85vh] flex bg-gradient-to-br from bg-emerald-50 to-teal-100 flex-col justify-center items-center px-4 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-800 mb-4">
          <Typewriter
            words={["Welcome to TaskNest!", "Your Smart Task Manager"]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={50}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-xl mb-8">
          Organize, prioritize, and conquer you daily tasks effortlessly. Track
          your projects, stay on top of deadlines, and boost your productivity.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-6 py-3 bg-teal-600 text-white rounded-full shadow hover:bg-teal-700 transition-all duration-300">
            Get Started
          </button>
          <button className="px-6 py-3 bg-white border border-teal-600 text-teal-600 rounded-full hover:bg-teal-50 transition duration-300">
            Learn More
          </button>
        </div>
      </div>
      </Layout>
    </>
  );
}

export default HomePage;
