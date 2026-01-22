import img from "../assets/profile.jpg";
const skills = [
  { name: "React", level: 85, color: "from-cyan-500 to-blue-500" },
  { name: "TypeScript", level: 70, color: "from-blue-500 to-indigo-500" },
  { name: "Node.js", level: 75, color: "from-green-500 to-emerald-500" },
  // { name: "Python", level: 80, color: "from-yellow-500 to-orange-500" },
  { name: "UI/UX Design", level: 88, color: "from-pink-500 to-rose-500" },
  // { name: "Database", level: 82, color: "from-violet-500 to-purple-500" },
];

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "50+", label: "Projects Completed" },
  { value: "30+", label: "Happy Clients" },
  { value: "100%", label: "Satisfaction" },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-violet-400 font-medium mb-4">Get To Know Me</p>
          <h2 className="text-3xl md:text-5xl font-bold font-['Space_Grotesk'] text-white mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image & Stats */}
          <div className="relative">
            {/* Profile Image Container */}
            <div className="relative w-80 h-80 mx-auto">
              {/* Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-cyan-500 to-emerald-500 rounded-3xl rotate-6 opacity-75 blur-sm" />
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-cyan-500 to-emerald-500 rounded-3xl rotate-3" />

              {/* Image Placeholder */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                <div className="text-center">
                  {/* <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-violet-500/30 to-cyan-500/30 flex items-center justify-center">
                    <svg
                      className="w-12 h-12 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div> */}
                  <img src={img} alt="" />
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 px-4 py-2 glass rounded-xl glow-purple">
                <p className="text-sm font-medium gradient-text">
                  Open to Work
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mt-12">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="p-6 glass rounded-2xl text-center hover:scale-105 transition-transform duration-300"
                >
                  <p className="text-3xl font-bold gradient-text mb-1">
                    {stat.value}
                  </p>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              A passionate developer crafting digital experiences
            </h3>

            <div className="space-y-4 text-gray-400 mb-8">
              <p>
                I'm a creative developer with a passion for building beautiful,
                functional, and user-centered digital experiences. With over 5
                years of experience in web development, I specialize in creating
                modern applications that solve real-world problems.
              </p>
              <p>
                My approach combines technical expertise with design thinking,
                ensuring every project not only works flawlessly but also
                delights users. I believe in writing clean, maintainable code
                and staying up-to-date with the latest technologies.
              </p>
            </div>

            {/* Skills */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white mb-4">
                My Skills
              </h4>
              {skills.map((skill, index) => (
                <div key={index} className="group">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300 group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                    <span className="text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Download CV Button */}
            <button className="mt-8 px-8 py-4 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-full text-white font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/25 hover:-translate-y-1 flex items-center gap-2">
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
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
