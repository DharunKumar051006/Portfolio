import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react'
import { FOOTER_LINKS } from '../data/constants'

export default function Footer({ scrollToSection }) {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, label: 'GitHub', url: 'https://github.com/Dharunkumar0' },
    { icon: Linkedin, label: 'LinkedIn', url: 'www.linkedin.com/in/dharun-kumar-s' },
    { icon: Mail, label: 'Email', url: 'mailto:dharunkumar123a@gmail.com' }
  ]

  return (
    <footer className="relative bg-black/80 border-t border-orange-500/20 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col animate-fadeInUp">
            <button
              onClick={() => scrollToSection('home')}
              className="text-2xl font-black bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent mb-4 hover:from-orange-300 hover:to-orange-500 transition-all duration-300 cursor-pointer text-left"
            >
              Dharun Kumar S
            </button>
            <p className="text-gray-400 text-sm leading-relaxed">
              AI/ML and Full Stack Developer crafting intelligent digital experiences 
              and scalable solutions for real-world problems. Passionate about innovation and continuous learning.
            </p>
          </div>

          {/* Quick Links */}
          <div className="animate-fadeInUp" style={{ animationDelay: '100ms' }}>
            <h4 className="text-white font-semibold mb-6 text-base">Quick Links</h4>
            <div className="space-y-3">
              {FOOTER_LINKS.map((link, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-gray-400 hover:text-orange-400 hover:translate-x-2 transition-all text-sm font-medium"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="animate-fadeInUp" style={{ animationDelay: '200ms' }}>
            <h4 className="text-white font-semibold mb-6 text-base">Follow Me</h4>
            <div className="flex gap-3">
              {socialLinks.map((link, idx) => {
                const IconComponent = link.icon
                return (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-10 h-10 bg-gray-800/50 hover:bg-orange-500 text-gray-400 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 border border-gray-700/50 hover:border-orange-500 overflow-hidden"
                    title={link.label}
                  >
                    <IconComponent size={20} className="relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {currentYear} Dharun Kumar S. All rights reserved.
          </p>
          
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            Made with
            <Heart size={16} className="text-orange-500 fill-orange-500 hover:scale-110 transition-transform" />
            by Dharun Kumar S
          </div>

          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-orange-400 transition-all text-xs font-medium uppercase tracking-widest hover:translate-y-[-2px]">
              Privacy
            </a>
            <span className="text-gray-600">•</span>
            <a href="#" className="text-gray-400 hover:text-orange-400 transition-all text-xs font-medium uppercase tracking-widest hover:translate-y-[-2px]">
              Terms
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <div className="fixed bottom-8 right-8 z-40 group">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="relative w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl hover:shadow-orange-500/50 border border-orange-400/20 group-hover:border-orange-400 overflow-hidden"
          title="Scroll to top"
        >
          <span className="relative z-10 text-xl font-bold">↑</span>
          <div className="absolute inset-0 bg-gradient-to-br from-orange-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity rounded-full"></div>
        </button>
      </div>
    </footer>
  )
}
