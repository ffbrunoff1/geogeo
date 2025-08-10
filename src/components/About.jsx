import React from 'react'
import { motion } from 'framer-motion'
import { Building2, Shield, Users, Target, Award, Zap, Heart, Leaf } from 'lucide-react'

export default function About() {
  const values = [
    {
      icon: Shield,
      title: 'Confiança',
      description: 'Construímos relacionamentos sólidos baseados na transparência e comprometimento com nossos clientes.'
    },
    {
      icon: Award,
      title: 'Excelência',
      description: 'Buscamos sempre a perfeição em cada detalhe, utilizando as melhores práticas e materiais do mercado.'
    },
    {
      icon: Zap,
      title: 'Inovação',
      description: 'Aplicamos tecnologias modernas e soluções criativas para superar expectativas em cada projeto.'
    },
    {
      icon: Leaf,
      title: 'Sustentabilidade',
      description: 'Priorizamos práticas ecológicas e materiais sustentáveis, pensando no futuro do planeta.'
    }
  ]

  const achievements = [
    {
      number: '500+',
      label: 'Projetos Concluídos',
      description: 'Residenciais e comerciais'
    },
    {
      number: '15+',
      label: 'Anos de Mercado',
      description: 'Experiência consolidada'
    },
    {
      number: '1000+',
      label: 'Clientes Atendidos',
      description: 'Satisfação garantida'
    },
    {
      number: '98%',
      label: 'Taxa de Satisfação',
      description: 'Aprovação dos clientes'
    }
  ]

  const certifications = [
    'ISO 9001 - Gestão da Qualidade',
    'ISO 14001 - Gestão Ambiental',
    'PBQP-H - Programa Brasileiro da Qualidade',
    'Certificação LEED - Construção Sustentável'
  ]

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-500 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-primary-100 rounded-full px-6 py-3 mb-6"
          >
            <Building2 className="w-5 h-5 text-primary-600" />
            <span className="text-primary-700 font-semibold">Sobre a GeoGeo</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-6">
            Construindo com
            <span className="block text-accent-gradient">Paixão e Propósito</span>
          </h2>
          
          <p className="text-xl text-primary-600 max-w-4xl mx-auto leading-relaxed">
            Há mais de 15 anos, a GeoGeo tem sido sinônimo de qualidade, inovação e confiança no setor da construção.
            Transformamos sonhos em realidade através de projetos únicos e sustentáveis.
          </p>
        </motion.div>

        {/* Main Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-construction-lg p-8 md:p-12 mb-20 border border-primary-100"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold text-primary-800">
                Nossa História
              </h3>
              <p className="text-lg text-primary-600 leading-relaxed">
                Fundada com o objetivo de revolucionar o setor da construção, a GeoGeo nasceu da visão de criar 
                espaços que não apenas atendem às necessidades funcionais, mas também inspiram e transformam vidas.
              </p>
              <p className="text-lg text-primary-600 leading-relaxed">
                Ao longo dos anos, desenvolvemos uma metodologia única que combina técnicas tradicionais comprovadas 
                com as mais modernas tecnologias de construção, sempre priorizando a sustentabilidade e a qualidade.
              </p>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center space-x-3 bg-primary-50 rounded-xl p-4"
              >
                <Heart className="w-6 h-6 text-accent-500" />
                <span className="text-primary-700 font-medium">
                  Cada projeto é tratado com o carinho e dedicação que merece
                </span>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-construction-gradient rounded-2xl p-8 text-white">
                <Target className="w-16 h-16 text-accent-400 mb-6" />
                <h4 className="text-2xl font-bold mb-4">Nossa Missão</h4>
                <p className="text-white/90 leading-relaxed">
                  Transformar espaços através de construções de excelência, sempre priorizando a sustentabilidade, 
                  inovação e satisfação total de nossos clientes.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-center text-primary-800 mb-12">
            Nossos Valores
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-2xl p-8 shadow-construction hover:shadow-construction-lg transition-all duration-300 border border-primary-100 text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-accent-100 transition-colors"
                >
                  {React.createElement(value.icon, { className: 'w-8 h-8 text-primary-600 group-hover:text-accent-600 transition-colors' })}
                </motion.div>
                <h4 className="text-xl font-bold text-primary-800 mb-4">{value.title}</h4>
                <p className="text-primary-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-construction-gradient rounded-3xl p-8 md:p-12 mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Nossos Números
            </h3>
            <p className="text-white/90 text-lg">
              Resultados que falam por si só
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="text-center group"
              >
                <div className="text-4xl md:text-5xl font-bold text-accent-400 mb-2 group-hover:scale-110 transition-transform">
                  {achievement.number}
                </div>
                <div className="text-white font-semibold mb-1">{achievement.label}</div>
                <div className="text-white/70 text-sm">{achievement.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-primary-800 mb-8">
            Certificações e Qualificações
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-xl p-6 shadow-construction border border-primary-100 flex items-center space-x-4"
              >
                <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-accent-600" />
                </div>
                <span className="text-primary-700 font-medium">{cert}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}