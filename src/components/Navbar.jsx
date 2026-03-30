import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { NAV_ITEMS } from '../data/constants'

export default function Navbar({ scrollToSection, activeSection }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleNavClick = (id) => {
    scrollToSection(id)
    setIsOpen(false)
  }

  return (
    <nav className="fixed w-full bg-gradient-to-b from-black via-black/95 to-black/80 backdrop-blur-lg z-50 border-b border-orange-500/20 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center group cursor-pointer transition-all duration-300"
          >
            <div className="text-2xl font-black bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent hover:from-orange-300 hover:to-orange-500 transition-all duration-300">
              DK
            </div>
            <span className="hidden sm:inline ml-2 text-xs text-gray-400 group-hover:text-orange-400 transition-colors duration-300">Portfolio</span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-orange-400'
                    : 'text-gray-300 hover:text-orange-400'
                }`}
              >
                {item.name}
                <span className={`absolute bottom-1 left-2 right-2 h-0.5 bg-gradient-to-r from-orange-500 to-orange-400 transition-transform duration-300 origin-left ${
                  activeSection === item.id ? 'scale-x-100' : 'scale-x-0 hover:scale-x-100'
                }`}></span>
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <button className="hidden md:block relative px-6 py-2.5 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/50 group overflow-hidden">
            <span className="relative z-10">Hire Me</span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-orange-500 hover:text-orange-400 hover:bg-gray-800/50 rounded-lg transition-all duration-300"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-gradient-to-b from-black/50 to-black/80 border-t border-orange-500/20 py-4 backdrop-blur-md animate-fadeInUp">
            <div className="flex flex-col space-y-1">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 py-3 text-left font-medium rounded-lg transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-orange-500/20 text-orange-400 border-l-2 border-orange-500 pl-3'
                      : 'text-gray-300 hover:text-orange-400 hover:bg-orange-500/10'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className={`w-1.5 h-1.5 rounded-full transition-opacity ${
                      activeSection === item.id ? 'bg-orange-400 opacity-100' : 'bg-orange-500 opacity-0 group-hover:opacity-100'
                    }`}></span>
                    {item.name}
                  </span>
                </button>
              ))}
              <button className="mx-2 mt-4 px-6 py-2.5 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 w-auto" >
                <a href="#contact" className="flex items-center gap-2">
                  Contact Me
                    </a>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
