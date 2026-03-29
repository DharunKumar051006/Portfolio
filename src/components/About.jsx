import { Check } from 'lucide-react'
import { ABOUT_HIGHLIGHTS, ABOUT_STATS } from '../data/constants'

export default function About() {
  return (
    <section id="about" className="relative py-24 px-4 md:px-8 overflow-hidden scroll-mt-16">
      {/* Background decoration */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 text-center animate-fadeInUp">
          About <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Me</span>
        </h2>
        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto text-base md:text-lg animate-fadeInUp" style={{ animationDelay: '100ms' }}>
          Learn about my academic background and passion for AI/ML and Full Stack Development
        </p>

        <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/20 rounded-2xl p-8 md:p-12 backdrop-blur-md border border-gray-800/50 hover:border-orange-500/20 transition-all duration-300 animate-fadeInUp" style={{ animationDelay: '200ms' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* About Text */}
            <div className="animate-slideInLeft">
              <div className="mb-8">
                <div className="inline-block mb-4">
                  <div className="px-4 py-2 bg-orange-500/20 border border-orange-500/30 rounded-full">
                    <p className="text-orange-400 font-semibold text-xs uppercase tracking-wider">Education</p>
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">B.Tech in AI & Data Science</h3>
                <p className="text-orange-400 font-semibold mb-4 text-sm md:text-base">Kongu Engineering College | CGPA: 8.00</p>
                <p className="text-gray-300 leading-relaxed text-base">
                  I am passionate about Artificial Intelligence, machine learning, Natural Language Processing, and full-stack development. With a strong foundation in both theoretical concepts and practical implementations, I focus on building scalable applications that solve real-world problems and improve user experience.
                </p>
              </div>

              <p className="text-gray-300 leading-relaxed mb-8 text-base">
                My journey is driven by a curiosity to understand how AI can be leveraged to create intelligent systems. I enjoy collaborating on projects that push boundaries and exploring new technologies to deliver impactful solutions.
              </p>

              <div className="space-y-3">
                {ABOUT_HIGHLIGHTS.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 group animate-fadeInUp" style={{ animationDelay: `${100 + idx * 50}ms` }}>
                    <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:shadow-lg group-hover:shadow-orange-500/50 transition-all">
                      <Check size={16} className="text-white" />
                    </div>
                    <span className="text-gray-300 group-hover:text-white transition-colors text-sm md:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="animate-fadeInUp grid grid-cols-2 gap-4" style={{ animationDelay: '300ms' }}>
              {ABOUT_STATS.map((stat, idx) => (
                <div 
                  key={idx} 
                  className="group bg-gradient-to-br from-gray-800/60 to-gray-900/30 border border-gray-700/50 rounded-xl p-6 hover:border-orange-500/50 hover:bg-gradient-to-br hover:from-gray-800/80 hover:to-gray-900/50 transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-orange-500/10 animate-fadeInUp"
                  style={{ animationDelay: `${300 + idx * 50}ms` }}
                >
                  <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent mb-2 group-hover:from-orange-300 group-hover:to-orange-500 transition-all">
                    {stat.number}
                  </div>
                  <p className="text-gray-400 text-xs md:text-sm group-hover:text-gray-300 transition-colors">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
