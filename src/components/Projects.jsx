import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Todo App",
    description: "A fully responsive Todo App.",
    image: null,
    category: "web",
    tags: ["HTML", "CSS", "javaScript"],
    liveUrl: "https://todo-app-taupe-zeta-62.vercel.app/",
    githubUrl: "https://github.com/hamzaminhal/todo-app",
    gradient: "from-violet-600 to-indigo-600",
  },
  {
    id: 2,
    title: "Currency Converter",
    description: "Fully functional currency converter having live conversions.",
    image: null,
    category: "web",
    tags: ["React.js", "Vite"],
    liveUrl: "https://currency-converter-iota-taupe.vercel.app/",
    githubUrl: "https://github.com/hamzaminhal/currency-converter",
    gradient: "from-cyan-600 to-blue-600",
  },
  {
    id: 3,
    title: "Login/ Signup Authentication",
    description: "Simple Login Sign up Authentication using firebase.",
    image: null,
    category: "web",
    tags: ["React", "TailwindCSS"],
    liveUrl: "https://signup-iota-liard.vercel.app/",
    githubUrl: "https://github.com/hamzaminhal/signup",
    gradient: "from-emerald-600 to-teal-600",
  },
  {
    id: 4,
    title: "Facebook clone",
    description:
      "Feature-rich social platform with posts, stories using local storage",
    image: null,
    category: "web",
    tags: ["HTML", "CSS", "javaScript"],
    liveUrl: "https://coding-night-task.vercel.app/",
    githubUrl: "https://github.com/hamzaminhal/codingNightTask",
    gradient: "from-pink-600 to-rose-600",
  },
  {
    id: 5,
    title: "Quiz App",
    description: "Quiz Application having questions from api.",
    image: null,
    category: "web",
    tags: ["React"],
    liveUrl: "https://react-quiz-app-pi-dun.vercel.app/",
    githubUrl: "https://github.com/hamzaminhal/react-quiz-app",
    gradient: "from-orange-600 to-amber-600",
  },
  // {
  //   id: 6,
  //   title: "Portfolio Template",
  //   description:
  //     "Modern portfolio template with dark theme, animations, and fully responsive design.",
  //   image: null,
  //   category: "design",
  //   tags: ["Figma", "React", "Framer Motion", "CSS"],
  //   liveUrl: "#",
  //   githubUrl: "#",
  //   gradient: "from-purple-600 to-violet-600",
  // },
];

const categories = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Web Apps" },
  { id: "mobile", label: "Mobile" },
  { id: "design", label: "Design" },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="relative py-24 md:py-32">
      {/* Background Decoration */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-violet-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-cyan-600/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-violet-400 font-medium mb-4">My Work</p>
          <h2 className="text-3xl md:text-5xl font-bold font-['Space_Grotesk'] text-white mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 mx-auto rounded-full" />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-violet-600 to-cyan-600 text-white shadow-lg shadow-violet-500/25"
                  : "glass text-gray-400 hover:text-white hover:border-violet-500/50"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative glass rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-500/10"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image/Placeholder */}
              <div
                className={`relative h-48 bg-gradient-to-br ${project.gradient} overflow-hidden`}
              >
                <div className="absolute inset-0 bg-black/20" />

                {/* Placeholder Content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white/80">
                    <svg
                      className="w-12 h-12 mx-auto mb-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <p className="text-sm">Project Preview</p>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div
                  className={`absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center gap-4 transition-all duration-300 ${
                    hoveredProject === project.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <a
                    href={project.liveUrl}
                    className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                    title="Live Demo"
                  >
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                  <a
                    href={project.githubUrl}
                    className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                    title="Source Code"
                  >
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:gradient-text transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="px-2.5 py-1 bg-gray-800 text-gray-400 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2.5 py-1 bg-gray-800 text-gray-400 text-xs rounded-full">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        {/* <div className="text-center mt-12">
          <button className="px-8 py-4 glass rounded-full text-white font-medium transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 flex items-center gap-2 mx-auto">
            View All Projects
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div> */}
      </div>
    </section>
  );
}
