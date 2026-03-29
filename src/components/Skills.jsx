import { Code, Palette, Zap, Database, Cpu, Wrench } from 'lucide-react'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: ['Python', 'Java', 'C'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Deep Learning Frameworks',
      icon: Cpu,
      skills: ['TensorFlow', 'PyTorch', 'Keras'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Web Development',
      icon: Palette,
      skills: ['JavaScript', 'React.js', 'Node.js', 'HTML', 'CSS'],
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      title: 'Databases',
      icon: Database,
      skills: ['MySQL', 'MongoDB'],
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Libraries & Tools',
      icon: Wrench,
      skills: ['NumPy', 'Pandas', 'Scikit-learn', 'OpenCV', 'Git', 'Docker'],
      color: 'from-red-500 to-red-600'
    }
  ]

  return (
    <section id="skills" className="relative py-24 px-4 md:px-8 overflow-hidden scroll-mt-16">
      {/* Background decoration */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 text-center animate-fadeInUp">
          My <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Skills</span>
        </h2>
        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto text-base md:text-lg animate-fadeInUp" style={{ animationDelay: '100ms' }}>
          A comprehensive overview of my technical expertise and tools I work with
        </p>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8 mb-16">
          {skillCategories.map((category, idx) => {
            const IconComponent = category.icon
            return (
              <div 
                key={idx} 
                className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/20 rounded-2xl p-6 md:p-8 backdrop-blur-md hover:from-gray-900/80 hover:to-gray-800/40 border border-gray-800/50 hover:border-orange-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10 animate-fadeInUp overflow-hidden h-full flex flex-col"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {/* Accent bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

                <div className={`w-12 h-12 bg-gradient-to-br ${category.color} bg-opacity-20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-opacity-40 transition-all duration-300 border border-gray-700/50 group-hover:border-white/20`}>
                  <IconComponent className="text-orange-500 group-hover:text-orange-400 transition-colors" size={28} />
                </div>

                <h3 className="text-base md:text-lg font-bold text-white mb-4 group-hover:text-orange-400 transition-colors">{category.title}</h3>

                <div className="space-y-2.5 flex-1">
                  {category.skills.map((skill, sidx) => (
                    <div 
                      key={sidx} 
                      className="group/skill flex items-center gap-2 p-2 rounded-lg hover:bg-white/5 transition-all duration-300"
                    >
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full group-hover/skill:shadow-md group-hover/skill:shadow-orange-500/50 transition-all"></div>
                      <span className="text-gray-300 group-hover/skill:text-gray-100 group-hover/skill:translate-x-1 transition-all text-sm font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* All Skills as Badges */}
        <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/20 rounded-2xl p-8 md:p-12 backdrop-blur-md border border-gray-800/50 hover:border-orange-500/20 transition-all duration-300 animate-fadeInUp" style={{ animationDelay: '500ms' }}>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-8">All Skills Overview</h3>
          
          <div className="space-y-6 md:space-y-8">
            {skillCategories.map((category, idx) => (
              <div key={idx} className="animate-fadeInUp" style={{ animationDelay: `${550 + idx * 50}ms` }}>
                <h4 className="text-orange-400 font-semibold mb-4 text-xs uppercase tracking-widest">{category.title}</h4>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {category.skills.map((skill, sidx) => (
                    <div
                      key={sidx}
                      className="group relative px-3 md:px-4 py-2 bg-gradient-to-r from-gray-800/50 to-gray-700/30 border border-gray-700/50 rounded-full hover:border-orange-500/50 transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-orange-500/10 overflow-hidden"
                    >
                      <span className="relative z-10 text-gray-300 text-xs md:text-sm font-medium group-hover:text-orange-300 transition-colors">{skill}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Proficiency Section */}
        <div className="mt-16 bg-gradient-to-br from-gray-900/50 to-gray-800/20 rounded-2xl p-8 md:p-12 backdrop-blur-md border border-gray-800/50 hover:border-orange-500/20 transition-all duration-300 animate-fadeInUp" style={{ animationDelay: '700ms' }}>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-10">Technical Proficiency</h3>
          
          <div className="space-y-8 md:space-y-10">
            {[
              { name: 'Python & Deep Learning', percentage: 92 },
              { name: 'Web Development (React/Node)', percentage: 85 },
              { name: 'Data Science & ML', percentage: 88 },
              { name: 'Database Design', percentage: 80 }
            ].map((item, idx) => (
              <div key={idx} className="group animate-fadeInUp" style={{ animationDelay: `${750 + idx * 50}ms` }}>
                <div className="flex justify-between mb-3">
                  <span className="text-white font-semibold text-sm md:text-base group-hover:text-orange-300 transition-colors">{item.name}</span>
                  <span className="text-orange-400 font-semibold text-sm">{item.percentage}%</span>
                </div>
                <div className="h-2.5 md:h-3 bg-gray-700/50 rounded-full overflow-hidden border border-gray-700/30 group-hover:border-orange-500/30 transition-all duration-300">
                  <div 
                    className="h-full bg-gradient-to-r from-orange-500 to-orange-600 rounded-full transition-all duration-1000 shadow-lg shadow-orange-500/50"
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
