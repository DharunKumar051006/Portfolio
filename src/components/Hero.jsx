import { ArrowRight, Github, Linkedin, Mail, Zap } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-32 pb-24 px-4 md:px-8 overflow-hidden scroll-mt-16">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-orange-500 opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 left-10 w-96 h-96 bg-orange-500 opacity-5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl w-full relative z-10">
        {/* Main Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* LEFT COLUMN - Content */}
          <div className="animate-slideInLeft flex flex-col justify-center">
            
            {/* Intro Pill */}
            <div className="inline-flex items-center mb-6 w-fit">
              <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500/20 to-transparent border border-orange-500/30 rounded-full hover:border-orange-500/60 transition-all duration-300">
                <Zap size={16} className="text-orange-500" />
                <span className="text-orange-400 font-medium text-sm">Hi, I am</span>
              </div>
            </div>

            {/* Name & Title */}
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-4">
                Dharun Kumar <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">S</span>
              </h1>
              
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-snug">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">AI/ML & Full Stack</span> Developer
              </h2>
            </div>

            {/* Description */}
            <p className="text-base md:text-lg text-gray-300 mb-10 leading-relaxed max-w-lg">
              Building intelligent, scalable, and user-centric digital solutions that drive real-world impact. Passionate about leveraging AI and modern web technologies.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="group relative px-8 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/40 flex items-center justify-center gap-2 overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                    <a href="#contact" className="flex items-center gap-2">
                  Contact Me
                    </a>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
              
              <a 
                href="/Dharun Kumar Resume.pdf" 
                download="Dharun Kumar Resume.pdf"
                className="px-8 py-3.5 border-2 border-orange-500/50 text-orange-400 font-semibold rounded-lg transition-all duration-300 hover:border-orange-500 hover:bg-orange-500/10 hover:text-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-500/50 flex items-center justify-center"
              >
                Download CV
              </a>
            </div>

            {/* Social Icons Row */}
            <div className="flex items-center gap-4 pb-12 border-b border-gray-700/50">
              {[
                { icon: Github, label: 'GitHub', url: 'https://github.com/Dharunkumar0' },
                { icon: Linkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/in/dharun-kumar-s' },
                { icon: Mail, label: 'Email', url: 'mailto:dharunkumar123a@gmail.com' }
              ].map((social, idx) => {
                const Icon = social.icon
                return (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.label}
                    className="group relative w-12 h-12 flex items-center justify-center bg-gray-800/50 hover:bg-orange-500 text-gray-400 hover:text-white rounded-full transition-all duration-300 transform hover:scale-110 border border-gray-700/50 hover:border-orange-500"
                  >
                    <Icon size={20} className="relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 opacity-0 group-hover:opacity-100 rounded-full transition-opacity"></div>
                  </a>
                )
              })}
            </div>

            {/* Stats Cards Row */}
            <div className="grid grid-cols-3 gap-3 mt-8">
              {[
                { label: 'Projects', value: '3+' },
                { label: 'Skills', value: '10+' },
                { label: 'Certifications', value: '2+' }
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="group py-4 px-3 md:px-4 bg-gradient-to-br from-gray-800/50 to-gray-900/30 rounded-lg border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 backdrop-blur-sm hover:bg-gradient-to-br hover:from-gray-800/80 hover:to-gray-900/50"
                >
                  <div className="text-lg md:text-xl font-bold text-orange-500 group-hover:text-orange-400 transition-colors">
                    {stat.value}
                  </div>
                  <p className="text-xs md:text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN - Profile Image */}
          <div className="animate-fadeInUp relative">
            {/* Orange glow backlight */}
            <div className="absolute -inset-8 bg-gradient-to-b from-orange-500/20 via-orange-500/10 to-transparent blur-3xl rounded-full"></div>
            
            {/* Profile Image Container */}
            <div className="relative w-full h-full lg:h-[600px] flex items-center justify-center">
              {/* Image */}
              <img 
                src="/Dharun Kumar.png" 
                alt="Dharun Kumar" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <p className="text-xs text-gray-500 font-medium uppercase tracking-widest">Scroll to explore</p>
          <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
