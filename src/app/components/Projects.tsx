export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
      <div className="grid gap-8 md:grid-cols-2">
        <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold mb-2">Multi-Robot Control</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Real-time decentralized UAV-UGV collaboration in GPS-denied environments.
          </p>
          <a
            href="https://github.com/dannyboy849/my-robot-project"
            target="_blank"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            View on GitHub →
          </a>
        </div>

        <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold mb-2">Bird Behavior Tracking</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            CNN and transformer-based tracking in occluded environments.
          </p>
          <a
            href="https://github.com/dannyboy849/bird-tracking"
            target="_blank"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            View on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}
