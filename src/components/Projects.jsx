import { ExternalLink, Github as GithubIcon, Code2, Zap } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: 'Smart AI Notes Summarizer',
      description: 'Developed an AI-powered notes generator supporting text, speech, PDF, and image inputs, with multilingual capability across 18 languages. Features key point extraction and intelligent summarization powered by LLMs and MongoDB for data persistence.',
      image: '/summarizer.png',
      tags: ['Python', 'React', 'LLM', 'MongoDB'],
      links: {
        live: 'https://github.com/Dharunkumar0/AI-Notes-Generator',
        github: 'https://github.com/Dharunkumar0/AI-Notes-Generator'
      },
      featured: true
    },
    {
      title: 'Gamified Learning Platform',
      description: 'Built a lightweight, gamified STEM learning platform for rural users with offline access. Features interactive videos, games, quizzes, and includes a comprehensive teacher dashboard for course management and student tracking.',
      image: '/gamified.png',
      tags: ['Flutter', 'HTML', 'CSS', 'JavaScript'],
      links: {
        live: 'https://github.com/Dharunkumar0/Aurraa',
        github: 'https://github.com/Dharunkumar0/Aurraa'
      }
    },
    {
      title: 'AI Tamil Chatbot',
      description: 'Developed a voice-enabled conversational AI chatbot specifically designed for Tamil language support. Integrated NLP processing, cultural awareness with Tamil calendar integration, and context-aware responses for natural interactions.',
      image: '/tamil-chatbot.png',
      tags: ['HTML', 'CSS', 'JavaScript', 'Python'],
      links: {
        live: 'https://github.com/Dharunkumar0/vanakkam-tamil',
        github: 'https://github.com/Dharunkumar0/vanakkam-tamil'
      }
    }
  ]

  return (
    <section id="projects" className="relative py-24 px-4 md:px-8 overflow-hidden scroll-mt-16">
      {/* Background decoration */}
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 text-center animate-fadeInUp">
          Featured <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Projects</span>
        </h2>
        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto text-base md:text-lg animate-fadeInUp" style={{ animationDelay: '100ms' }}>
          Explore some of my recent work and the technologies I've used to build amazing digital solutions
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/20 rounded-2xl overflow-hidden backdrop-blur-md hover:from-gray-900/80 hover:to-gray-800/40 border border-gray-800/50 hover:border-orange-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10 animate-fadeInUp flex flex-col h-full"
              style={{ animationDelay: `${200 + idx * 100}ms` }}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 z-20 flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-bold rounded-full">
                  <Zap size={12} />
                  Featured
                </div>
              )}
              
              {/* Project Image */}
              <div className="relative h-40 md:h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent group-hover:from-black/60 transition-all duration-300"></div>
              </div>

              {/* Project Info */}
              <div className="p-6 md:p-8 flex-1 flex flex-col">
                <h3 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3 group-hover:text-gray-300 transition-colors flex-1 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tidx) => (
                    <span key={tidx} className="text-xs px-2.5 md:px-3 py-1 bg-gradient-to-r from-orange-500/20 to-orange-600/20 text-orange-300 rounded-full border border-orange-500/30 group-hover:bg-gradient-to-r group-hover:from-orange-500/30 group-hover:to-orange-600/30 group-hover:border-orange-500/50 transition-all flex items-center gap-1 whitespace-nowrap">
                      <Code2 size={12} />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a 
                    href={project.links.live}
                    className="flex-1 relative px-3 md:px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white rounded-lg font-semibold text-center transition-all duration-300 flex items-center justify-center gap-1 text-xs md:text-sm overflow-hidden group/link"
                  >
                    <ExternalLink size={14} className="flex-shrink-0" />
                    <span className="relative z-10">Live</span>
                  </a>
                  <a 
                    href={project.links.github}
                    className="flex-1 px-3 md:px-4 py-2 border-2 border-orange-500/50 text-orange-400 hover:border-orange-500 hover:bg-orange-500/10 hover:text-orange-300 rounded-lg font-semibold text-center transition-all duration-300 flex items-center justify-center gap-1 text-xs md:text-sm"
                  >
                    <GithubIcon size={14} className="flex-shrink-0" />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
