import React from 'react'
import { motion } from 'framer-motion'
import { Building2, Mail, Phone, MapPin, Clock, ArrowUp, Heart } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const quickLinks = [
    { name: 'Início', id: 'hero' },
    { name: 'Sobre Nós', id: 'about' },
    { name: 'Serviços', id: 'services' },
    { name: 'Contato', id: 'contact' }
  ]

  const services = [
    'Construção Residencial',
    'Construção Comercial',
    'Construção Industrial',
    'Reformas e Renovações',
    'Design de Interiores',
    'Consultoria Técnica'
  ]

  const contactInfo = [
    {
      icon: Phone,
      label: 'Telefone',
      value: 'Entre em contato conosco',
      subtext: 'Seg - Sex: 8h às 18h'
    },
    {
      icon: Mail,
      label: 'E-mail',
      value: 'Entre em contato conosco',
      subtext: 'Resposta em até 24h'
    },
    {
      icon: MapPin,
      label: 'Endereço',
      value: 'Nossa sede',
      subtext: 'Atendemos toda a região'
    }
  ]

  return (
    <footer className="bg-construction-gradient relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-3 mb-6"
              >
                <img
                  src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1754869270559_0.png"
                  alt="GeoGeo"
                  className="h-12 w-auto brightness-0 invert"
                />
              </motion.div>
              
              <p className="text-white/90 mb-6 leading-relaxed">
                Há mais de 15 anos construindo sonhos e transformando espaços com 
                excelência, qualidade e sustentabilidade.
              </p>
              
              <div className="space-y-3">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center space-x-3 text-white/80"
                >
                  <Clock className="w-5 h-5 text-accent-400" />
                  <span>Seg - Sex: 8h às 18h</span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center space-x-3 text-white/80"
                >
                  <Building2 className="w-5 h-5 text-accent-400" />
                  <span>Mais de 500 projetos realizados</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-white mb-6">Links Rápidos</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.button
                      whileHover={{ scale: 1.05, x: 5 }}
                      onClick={() => scrollToSection(link.id)}
                      className="text-white/80 hover:text-accent-400 transition-colors duration-300 flex items-center space-x-2"
                    >
                      <span className="w-1 h-1 bg-accent-400 rounded-full" />
                      <span>{link.name}</span>
                    </motion.button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-white mb-6">Nossos Serviços</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.span
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="text-white/80 hover:text-accent-400 transition-colors duration-300 flex items-center space-x-2 cursor-pointer"
                    >
                      <span className="w-1 h-1 bg-accent-400 rounded-full" />
                      <span>{service}</span>
                    </motion.span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-white mb-6">Contato</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-10 h-10 bg-accent-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      {React.createElement(info.icon, { className: 'w-5 h-5 text-white' })}
                    </div>
                    <div>
                      <div className="text-white font-medium">{info.value}</div>
                      <div className="text-white/70 text-sm">{info.subtext}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(14, 165, 233, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contact')}
                className="mt-6 bg-accent-gradient text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center space-x-2"
              >
                <Mail className="w-4 h-4" />
                <span>Entre em Contato</span>
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Copyright */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-white/80 text-center md:text-left"
              >
                <p>© 2024 GeoGeo. Todos os direitos reservados.</p>
                <p className="text-sm text-white/60 mt-1">
                  Criado com <Heart className="w-4 h-4 inline text-accent-400" /> por{' '}
                  <a 
                    href="https://papum.ai" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-accent-400 hover:text-accent-300 transition-colors"
                  >
                    Papum
                  </a>
                </p>
              </motion.div>

              {/* Back to Top */}
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToTop}
                className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 border border-white/30"
              >
                <ArrowUp className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}