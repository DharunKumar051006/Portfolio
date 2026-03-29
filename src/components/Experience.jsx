import { Briefcase, Calendar, Zap } from 'lucide-react'

export default function Experience() {
  const experiences = [
    {
      company: 'DeepMind India',
      position: 'Smart India Hackathon Participant',
      duration: 'Sept 2025 – Nov 2025',
      description: 'Developed an offline-first gamified learning platform for rural students with JS-based games and SVG animations, optimized for low-spec devices and poor connectivity, ensuring smooth performance, enhanced user engagement, and scalable content delivery.',
      achievements: [
        'Offline-first architecture',
        'JS-based games & SVG animations',
        'Low-spec device optimization'
      ]
    }
  ]

  return (
    <section id="experience" className="relative py-24 px-4 md:px-8 overflow-hidden scroll-mt-16">
      {/* Background decoration */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 text-center animate-fadeInUp">
          <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Experience</span>
        </h2>
        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto text-base md:text-lg animate-fadeInUp" style={{ animationDelay: '100ms' }}>
          My professional journey and hands-on project experience
        </p>

        <div className="space-y-6 md:space-y-8">
          {experiences.map((exp, idx) => (
            <div 
              key={idx}
              className="group bg-gradient-to-br from-gray-900/50 to-gray-800/20 rounded-2xl p-6 md:p-8 backdrop-blur-md hover:from-gray-900/80 hover:to-gray-800/40 border border-gray-800/50 hover:border-orange-500/20 transition-all duration-300 animate-fadeInUp hover:shadow-lg hover:shadow-orange-500/10"
              style={{ animationDelay: `${200 + idx * 100}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex-1">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-500/30 to-orange-600/20 rounded-xl flex items-center justify-center group-hover:from-orange-500/50 group-hover:to-orange-600/30 transition-all duration-300 border border-orange-500/30 group-hover:border-orange-500/60 flex-shrink-0">
                      <Briefcase className="text-orange-500 group-hover:text-orange-400 transition-colors" size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-orange-400 transition-colors mb-1">{exp.position}</h3>
                      <p className="text-orange-500 group-hover:text-orange-400 font-semibold transition-colors text-lg">{exp.company}</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-400 group-hover:text-orange-400 transition-colors whitespace-nowrap">
                  <Calendar size={20} />
                  <span className="font-semibold">{exp.duration}</span>
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.achievements.map((achievement, aidx) => (
                  <span key={aidx} className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500/20 to-orange-600/10 text-orange-300 rounded-full text-sm font-medium border border-orange-500/30 group-hover:from-orange-500/40 group-hover:to-orange-600/20 group-hover:border-orange-500/60 transition-all">
                    <Zap size={14} />
                    {achievement}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
