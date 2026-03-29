import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'dharunkumar123a@gmail.com',
      link: 'mailto:dharunkumar123a@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9942613840',
      link: 'tel:+919942613840'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Trichy, Tamil Nadu',
      link: '#'
    }
  ]

  return (
    <section id="contact" className="relative py-24 px-4 md:px-8 overflow-hidden scroll-mt-16">
      {/* Background decoration */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 text-center animate-fadeInUp">
          Get in <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Touch</span>
        </h2>
        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto text-base md:text-lg animate-fadeInUp" style={{ animationDelay: '100ms' }}>
          Have a project in mind or want to collaborate? Feel free to reach out!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {contactInfo.map((info, idx) => {
            const IconComponent = info.icon
            return (
              <a 
                key={idx}
                href={info.link}
                className="group bg-gradient-to-br from-gray-900/50 to-gray-800/20 rounded-2xl p-6 md:p-8 backdrop-blur-md hover:from-gray-900/80 hover:to-gray-800/40 border border-gray-800/50 hover:border-orange-500/50 transition-all text-center animate-fadeInUp hover-glow"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500/20 to-orange-600/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:from-orange-500/40 group-hover:to-orange-600/20 transition-all duration-300 border border-orange-500/20 group-hover:border-orange-500/50">
                  <IconComponent className="text-orange-500 group-hover:text-orange-400 transition-colors" size={32} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">{info.label}</h3>
                <p className="text-gray-400 group-hover:text-orange-400 transition-colors font-medium">{info.value}</p>
              </a>
            )
          })}
        </div>

        {/* Contact Form */}
        <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/20 rounded-2xl p-8 md:p-12 backdrop-blur-md border border-gray-800/50 hover:border-orange-500/20 transition-all duration-300">
          <h3 className="text-2xl font-bold text-white mb-10">Send me a Message</h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-300 font-semibold mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-gray-300 font-semibold mb-2">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-300 font-semibold mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300"
                placeholder="Project Discussion"
              />
            </div>

            <div>
              <label className="block text-gray-300 font-semibold mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300 resize-none"
                placeholder="Tell me about your project or inquiry..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full relative px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 overflow-hidden group"
            >
              <Send size={20} className="relative z-10" />
              <span className="relative z-10">Send Message</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
          </form>

          {submitted && (
            <div className="mt-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-center font-medium animate-fadeInUp">
              ✓ Thank you! Your message has been sent successfully.
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
