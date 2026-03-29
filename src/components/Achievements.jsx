import { Award, Star, Trophy, Zap } from 'lucide-react'

export default function Achievements() {
  const achievements = [
    {
      icon: Trophy,
      title: 'Runner-up - Thinkathon\'26',
      issuer: 'AI Coding Club',
      year: '2026',
      description: 'Recognized for innovative AI solution and technical excellence in hackathon competition',
      type: 'achievement'
    },
    {
      icon: Star,
      title: 'SIH Finale Waiting List',
      issuer: 'Smart India Hackathon 2025',
      year: '2025',
      description: 'Shortlisted for Smart India Hackathon finals with gamified learning platform project',
      type: 'achievement'
    },
    {
      icon: Award,
      title: 'IBM Certified Generative AI',
      issuer: 'IBM',
      year: '2024-2025',
      description: 'Professional certification demonstrating expertise in generative AI and LLM applications',
      type: 'certification'
    },
    {
      icon: Zap,
      title: 'NASSCOM Data Processing & Visualization',
      issuer: 'NASSCOM',
      year: '2024-2025',
      description: 'Certification for proficiency in data processing techniques and data visualization',
      type: 'certification'
    },
    {
      icon: Star,
      title: 'Infosys JavaScript Certification',
      issuer: 'Infosys',
      year: '2024-2025',
      description: 'Professional certification validating expertise in JavaScript and web development',
      type: 'certification'
    }
  ]

  const achievementsList = achievements.filter(a => a.type === 'achievement')
  const certificationsList = achievements.filter(a => a.type === 'certification')

  return (
    <section id="achievements" className="relative py-24 px-4 md:px-8 overflow-hidden scroll-mt-16">
      {/* Background decoration */}
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 text-center animate-fadeInUp">
          Achievements & <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Certifications</span>
        </h2>
        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto text-base md:text-lg animate-fadeInUp" style={{ animationDelay: '100ms' }}>
          Recognitions, awards, and professional certifications
        </p>

        {/* Achievements */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <Trophy className="text-orange-500" size={32} />
            Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {achievementsList.map((achievement, idx) => {
              const IconComponent = achievement.icon
              return (
                <div 
                  key={idx}
                  className="group bg-gradient-to-br from-gray-900/50 to-gray-800/20 rounded-2xl p-6 md:p-8 backdrop-blur-md hover:from-gray-900/80 hover:to-gray-800/40 border border-gray-800/50 hover:border-orange-500/30 transition-all duration-300 animate-fadeInUp"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500/30 to-orange-600/20 rounded-xl flex items-center justify-center group-hover:from-orange-500/50 group-hover:to-orange-600/30 transition-all duration-300 border border-orange-500/30 group-hover:border-orange-500/60">
                      <IconComponent className="text-orange-500 group-hover:text-orange-400 transition-colors" size={24} />
                    </div>
                    <span className="text-sm font-semibold text-orange-500 px-3 py-1 bg-gradient-to-r from-orange-500/20 to-orange-600/10 rounded-full border border-orange-500/30">
                      {achievement.year}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">{achievement.title}</h3>
                  <p className="text-orange-500 group-hover:text-orange-400 font-medium text-sm mb-3 transition-colors">{achievement.issuer}</p>
                  <p className="text-gray-400 group-hover:text-gray-300 text-sm leading-relaxed transition-colors">
                    {achievement.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <Award className="text-orange-500" size={32} />
            Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {certificationsList.map((cert, idx) => {
              const IconComponent = cert.icon
              return (
                <div 
                  key={idx}
                  className="group bg-gradient-to-br from-gray-900/50 to-gray-800/20 rounded-2xl p-6 md:p-8 backdrop-blur-md hover:from-gray-900/80 hover:to-gray-800/40 border border-gray-800/50 hover:border-orange-500/30 transition-all duration-300 animate-fadeInUp"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500/30 to-orange-600/20 rounded-xl flex items-center justify-center group-hover:from-orange-500/50 group-hover:to-orange-600/30 transition-all duration-300 border border-orange-500/30 group-hover:border-orange-500/60">
                      <IconComponent className="text-orange-500 group-hover:text-orange-400 transition-colors" size={24} />
                    </div>
                    <span className="text-sm font-semibold text-orange-500 px-3 py-1 bg-gradient-to-r from-orange-500/20 to-orange-600/10 rounded-full border border-orange-500/30">
                      {cert.year}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">{cert.title}</h3>
                  <p className="text-orange-500 group-hover:text-orange-400 font-medium text-sm mb-3 transition-colors">{cert.issuer}</p>
                  <p className="text-gray-400 group-hover:text-gray-300 text-sm leading-relaxed transition-colors">
                    {cert.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
