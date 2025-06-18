import Hero from "./components/Hero"
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12 sm:py-20 sm:px-10 gap-12">
      {/* Header */}
      <Hero />
      <Projects />
      <Contact />
      <header className="text-center">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">Daniel Vargas</h1>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">
          Robotics, Computer Vision, & Control Systems Researcher | PhD Student
        </p>
      </header>

      {/* About Me */}
      <section className="max-w-2xl text-center">
        <h2 className="text-2xl font-semibold mb-2">About Me</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Hi! I’m Daniel, a PhD candidate specializing in search & rescue robotics, multi-agent control systems, and autonomous UAV-UGV platforms. I love blending real-time control with machine learning to solve tough real-world problems.
        </p>
      </section>

      {/* Projects */}
      <section className="max-w-2xl w-full">
        <h2 className="text-2xl font-semibold mb-4 text-center">Projects</h2>
        <div className="space-y-4">
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h3 className="text-xl font-medium">Multi-Robot Control Framework</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Real-time decentralized control system for UAV-UGV collaboration in GPS-denied environments.
            </p>
            <a
              href="https://github.com/dannyboy849/my-robot-project"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              View on GitHub →
            </a>
          </div>

          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h3 className="text-xl font-medium">Bird Behavior Tracking</h3>
            <p className="text-gray-600 dark:text-gray-400">
              CNN and transformer-based model for tracking bird behavior in occluded outdoor environments.
            </p>
            <a
              href="https://github.com/dannyboy849/bird-tracking"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              View on GitHub →
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <footer className="text-center">
        <h2 className="text-2xl font-semibold mb-2">Contact</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Email: <a href="mailto:dvarg88@gmail.com" className="underline">dvarg88@gmail.com</a>
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          LinkedIn: <a href="https://www.linkedin.com/in/daniel-vargas-slydly/" className="underline">daniel-vargas</a>
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          GitHub: <a href="https://github.com/dannyboy849" className="underline">dannyboy849</a>
        </p>
      </footer>
    </div>
  );
}