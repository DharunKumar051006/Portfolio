import { BookOpen, Calendar, GraduationCap } from 'lucide-react'

export default function Education() {
  const education = [
    {
      school: 'Kongu Engineering College',
      degree: 'Bachelor of Technology in Artificial Intelligence and Data Science',
      duration: 'Aug 2024 – May 2028',
      level: 'Undergraduate',
      highlights: ['CGPA: 8.00/10', 'AI & Data Science', 'In Progress']
    },
    {
      school: 'Sri Jayendra Matriculation Higher Secondary School',
      degree: 'Higher Secondary',
      duration: 'Jun 2023 – Apr 2024',
      level: 'HSC',
      highlights: ['Percentage: 85.84%', 'State Board', 'Completed']
    },
    {
      school: 'SEVAI Shanthi Matriculation Higher Secondary School',
      degree: 'SSLC',
      duration: 'Jun 2021 – Apr 2022',
      level: 'Secondary',
      highlights: ['Percentage: 71.2%', 'State Board', 'Completed']
    }
  ]

  return (
    <section id="education" className="relative py-24 px-4 md:px-8 overflow-hidden scroll-mt-16">
      {/* Background decoration */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 text-center animate-fadeInUp">
          My <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Education</span>
        </h2>
        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto text-base md:text-lg animate-fadeInUp" style={{ animationDelay: '100ms' }}>
          My academic journey and professional certifications
        </p>

        <div className="space-y-6 md:space-y-8">
          {education.map((edu, idx) => (
            <div 
              key={idx}
              className="group bg-gradient-to-br from-gray-900/50 to-gray-800/20 rounded-2xl p-6 md:p-8 backdrop-blur-md hover:from-gray-900/80 hover:to-gray-800/40 border border-gray-800/50 hover:border-orange-500/20 transition-all duration-300 animate-fadeInUp hover:shadow-lg hover:shadow-orange-500/10"
              style={{ animationDelay: `${200 + idx * 100}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex-1">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-500/30 to-orange-600/20 rounded-xl flex items-center justify-center group-hover:from-orange-500/50 group-hover:to-orange-600/30 transition-all duration-300 border border-orange-500/30 group-hover:border-orange-500/60 flex-shrink-0">
                      <GraduationCap className="text-orange-500 group-hover:text-orange-400 transition-colors" size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-orange-400 transition-colors mb-1">{edu.degree}</h3>
                      <p className="text-orange-500 group-hover:text-orange-400 font-semibold transition-colors text-lg">{edu.school}</p>
                      <p className="text-gray-400 text-sm mt-1">{edu.level}</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-400 group-hover:text-orange-400 transition-colors whitespace-nowrap">
                  <Calendar size={20} />
                  <span className="font-semibold">{edu.duration}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-6">
                {edu.highlights.map((highlight, hidx) => (
                  <span key={hidx} className="px-4 py-2 bg-gradient-to-r from-orange-500/20 to-orange-600/10 text-orange-300 rounded-full text-sm font-medium border border-orange-500/30 group-hover:from-orange-500/40 group-hover:to-orange-600/20 group-hover:border-orange-500/60 transition-all">
                    {highlight}
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
