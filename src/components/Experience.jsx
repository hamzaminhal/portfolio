const experiences = [
  {
    id: 1,
    role: "Junior Frontend Developer",
    company: "Tech Innovations Inc.",
    duration: "2022 - Present",
    description:
      "Leading development of enterprise-scale applications using React, Node.js, and cloud technologies. Mentoring junior developers and implementing best practices.",
    technologies: ["React", "Node.js", "AWS", "PostgreSQL"],
    type: "work",
  },
  {
    id: 2,
    role: "Frontend Developer",
    company: "Digital Agency Co.",
    duration: "2020 - 2022",
    description:
      "Built responsive web applications and landing pages for diverse clients. Collaborated with designers to implement pixel-perfect interfaces.",
    technologies: ["React", "Vue.js", "TailwindCSS", "Figma"],
    type: "work",
  },
  {
    id: 3,
    role: "Junior Developer",
    company: "StartUp Hub",
    duration: "2019 - 2020",
    description:
      "Developed and maintained web applications using modern JavaScript frameworks. Participated in agile development processes.",
    technologies: ["JavaScript", "React", "Node.js", "MongoDB"],
    type: "work",
  },
  {
    id: 4,
    role: "B.S. Computer Science",
    company: "University of Technology",
    duration: "2015 - 2019",
    description:
      "Graduated with honors. Focus on software engineering, algorithms, and web technologies. Active in coding clubs and hackathons.",
    technologies: ["Algorithms", "Data Structures", "Web Dev", "AI/ML"],
    type: "education",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-violet-400 font-medium mb-4">My Journey</p>
          <h2 className="text-3xl md:text-5xl font-bold font-['Space_Grotesk'] text-white mb-6">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 mx-auto rounded-full" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500 via-cyan-500 to-emerald-500 transform md:-translate-x-1/2" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full transform -translate-x-1/2 md:-translate-x-1/2 mt-6 md:mt-8">
                  <div className="absolute inset-0 rounded-full animate-ping bg-violet-500/50" />
                </div>

                {/* Content */}
                <div
                  className={`md:w-1/2 pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}
                >
                  <div className="glass rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/10">
                    {/* Badge */}
                    <div
                      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-4 ${
                        exp.type === "work"
                          ? "bg-violet-500/20 text-violet-300"
                          : "bg-cyan-500/20 text-cyan-300"
                      }`}
                    >
                      {exp.type === "work" ? (
                        <>
                          <svg
                            className="w-3 h-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                          Work
                        </>
                      ) : (
                        <>
                          <svg
                            className="w-3 h-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 14l9-5-9-5-9 5 9 5z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 14l9-5-9-5-9 5 9 5zm0 0v6"
                            />
                          </svg>
                          Education
                        </>
                      )}
                    </div>

                    {/* Date */}
                    <p className="text-gray-500 text-sm mb-2">{exp.duration}</p>

                    {/* Role & Company */}
                    <h3 className="text-xl font-bold text-white mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-violet-400 font-medium mb-3">
                      {exp.company}
                    </p>

                    {/* Description */}
                    <p className="text-gray-400 text-sm mb-4">
                      {exp.description}
                    </p>

                    {/* Technologies */}
                    <div
                      className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}
                    >
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 bg-gray-800 text-gray-400 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
