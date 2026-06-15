import { Github as GithubIcon, Zap, Code2 } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: 'Smart AI Notes Summarizer',
      description:
        'Developed an AI-powered notes generator supporting text, speech, PDF, and image inputs, with multilingual capability across 18 languages. Features key point extraction and intelligent summarization powered by LLMs and MongoDB for data persistence.',
      image: '/summarizer.jpg',
      tags: ['Python', 'React', 'LLM', 'MongoDB'],
      links: {
        live: 'https://github.com/Dharunkumar0/AI-Notes-Generator',
        github: 'https://github.com/Dharunkumar0/AI-Notes-Generator',
      },
      featured: true,
      features: [
        'Supports Text, Speech, PDF and Image inputs',
        'Multilingual support across 18 languages',
        'LLM-powered intelligent summarization',
        'MongoDB-based storage and retrieval',
      ],
    },

    {
      title: 'Gamified Learning Platform',
      description:
        'Built a lightweight, gamified STEM learning platform for rural users with offline access. Features interactive videos, games, quizzes, and includes a comprehensive teacher dashboard for course management and student tracking.',
      image: '/gamified.png',
      tags: ['Flutter', 'HTML', 'CSS', 'JavaScript'],
      links: {
        live: 'https://github.com/Dharunkumar0/Aurraa',
        github: 'https://github.com/Dharunkumar0/Aurraa',
      },
    },

    {
      title: 'RAG Based AI Tutor',
      description:
        'Developed a voice-enabled conversational AI chatbot specifically designed for Tamil language support. Integrated NLP processing, cultural awareness with Tamil calendar integration, and context-aware responses for natural interactions.',
      image: '/tamil-chatbot.png',
      tags: ['VectorDB', 'LLM', 'React', 'Python'],
      links: {
        live: 'https://github.com/Dharunkumar0/vanakkam-tamil',
        github: 'https://github.com/Dharunkumar0/vanakkam-tamil',
      },
    },
  ]

  const featuredProject = projects[0]
  const sideProjects = projects.slice(1)

  return (
    <section
      id="projects"
      className="relative py-24 px-4 md:px-8 overflow-hidden scroll-mt-16"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white">
            Featured{' '}
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
            Building intelligent solutions with modern technologies and AI/ML
            expertise
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-[1.7fr_1fr] gap-6">
          {/* Featured Project */}
          <div
            className="relative rounded-[30px] border border-orange-500/30 overflow-hidden
            bg-gradient-to-br from-slate-900/50 to-slate-800/20
            backdrop-blur-xl animate-fadeInUp"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/20 to-red-500/20" />

            <div className="relative p-8 md:p-10 h-full flex flex-col">
              <div className="flex items-center gap-2 text-orange-400 text-xs font-bold uppercase mb-6">
                <Zap size={14} />
                Featured
              </div>

              <h3 className="text-3xl md:text-5xl font-black text-white max-w-lg mb-6">
                {featuredProject.title}
              </h3>

              <p className="text-gray-300 max-w-lg leading-relaxed mb-10">
                {featuredProject.description}
              </p>

              <div className="space-y-4 mb-12">
                {featuredProject.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-3 text-sm text-gray-400"
                  >
                    <span className="text-orange-400 mt-1">—</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto">
                <p className="text-xs font-bold uppercase text-orange-400 mb-3">
                  Tech Stack
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-md text-xs border border-orange-500/40
                      text-orange-300 flex items-center gap-1"
                    >
                      <Code2 size={11} />
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={featuredProject.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg
                  border border-orange-500/50 text-orange-300
                  hover:bg-orange-500/10 transition-all duration-300"
                >
                  <GithubIcon size={15} />
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Right Side Cards */}
          <div className="flex flex-col gap-6">
            {sideProjects.map((project, idx) => (
              <div
                key={idx}
                className="rounded-[30px] border border-orange-500/30
                bg-gradient-to-br from-slate-900/50 to-slate-800/20
                backdrop-blur-xl p-6 md:p-7
                hover:border-orange-400/50
                transition-all duration-300
                animate-fadeInUp"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <h3 className="text-2xl font-bold text-white mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="border-t border-orange-500/20 pt-4">
                  <p className="text-xs font-bold uppercase text-orange-400 mb-3">
                    Tech Stack
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2.5 py-1 text-xs rounded-md
                        border border-orange-500/40 text-orange-300
                        flex items-center gap-1"
                      >
                        <Code2 size={10} />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg
                    border border-orange-500/50 text-orange-300
                    hover:bg-orange-500/10 transition-all duration-300"
                  >
                    <GithubIcon size={15} />
                    GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
