import React from 'react'
import { motion } from 'framer-motion'
import { Building2, Home, Factory, Wrench, Palette, Shield, Clock, Award, CheckCircle, ArrowRight } from 'lucide-react'

export default function Services() {
  const mainServices = [
    {
      icon: Home,
      title: 'Construção Residencial',
      description: 'Casas personalizadas que refletem seu estilo de vida e sonhos. Do projeto à entrega, cuidamos de cada detalhe.',
      features: ['Projetos arquitetônicos únicos', 'Materiais de primeira qualidade', 'Acabamentos premium', 'Pós-obra garantido'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Building2,
      title: 'Construção Comercial',
      description: 'Espaços comerciais funcionais e modernos que potencializam seus negócios e impressionam clientes.',
      features: ['Design corporativo moderno', 'Otimização de espaços', 'Tecnologia integrada', 'Entrega no prazo'],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Factory,
      title: 'Construção Industrial',
      description: 'Instalações industriais robustas e eficientes, projetadas para máxima produtividade e segurança.',
      features: ['Estruturas de alta resistência', 'Normas de segurança rigorosas', 'Eficiência energética', 'Manutenção preventiva'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Wrench,
      title: 'Reformas e Renovações',
      description: 'Transformamos espaços existentes em ambientes modernos e funcionais, sempre respeitando o orçamento.',
      features: ['Diagnóstico completo', 'Reformas parciais ou totais', 'Modernização de sistemas', 'Mínimo transtorno'],
      color: 'from-purple-500 to-purple-600'
    }
  ]

  const additionalServices = [
    {
      icon: Palette,
      title: 'Design de Interiores',
      description: 'Criamos ambientes únicos que combinam funcionalidade e beleza.'
    },
    {
      icon: Shield,
      title: 'Consultoria Técnica',
      description: 'Orientação especializada para todos os tipos de projetos.'
    },
    {
      icon: Clock,
      title: 'Gerenciamento de Obras',
      description: 'Acompanhamento completo desde o planejamento até a entrega.'
    },
    {
      icon: Award,
      title: 'Certificação LEED',
      description: 'Construções sustentáveis com certificação internacional.'
    }
  ]

  const process = [
    {
      step: '01',
      title: 'Consulta Inicial',
      description: 'Entendemos suas necessidades e objetivos para o projeto.'
    },
    {
      step: '02',
      title: 'Projeto e Orçamento',
      description: 'Desenvolvemos o projeto detalhado e orçamento transparente.'
    },
    {
      step: '03',
      title: 'Execução',
      description: 'Construção com acompanhamento diário e relatórios regulares.'
    },
    {
      step: '04',
      title: 'Entrega e Pós-Obra',
      description: 'Entrega final com garantia e suporte técnico contínuo.'
    }
  ]

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-primary-500 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-accent-500 rounded-full blur-3xl" />
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
            <Wrench className="w-5 h-5 text-primary-600" />
            <span className="text-primary-700 font-semibold">Nossos Serviços</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-6">
            Soluções Completas em
            <span className="block text-accent-gradient">Construção</span>
          </h2>
          
          <p className="text-xl text-primary-600 max-w-4xl mx-auto leading-relaxed">
            Da concepção à entrega, oferecemos serviços especializados para transformar 
            seus projetos em realidade com qualidade excepcional.
          </p>
        </motion.div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {mainServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-3xl shadow-construction-lg overflow-hidden border border-primary-100 group"
            >
              <div className={`h-2 bg-gradient-to-r ${service.color}`} />
              
              <div className="p-8">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6`}
                >
                  {React.createElement(service.icon, { className: 'w-8 h-8 text-white' })}
                </motion.div>
                
                <h3 className="text-2xl font-bold text-primary-800 mb-4 group-hover:text-primary-900 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-primary-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 + featureIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-primary-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={scrollToContact}
                  className={`mt-6 bg-gradient-to-r ${service.color} text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center space-x-2 group`}
                >
                  <span>Solicitar Orçamento</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-center text-primary-800 mb-12">
            Serviços Complementares
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-2xl p-6 shadow-construction hover:shadow-construction-lg transition-all duration-300 border border-primary-100 text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-accent-100 transition-colors"
                >
                  {React.createElement(service.icon, { className: 'w-6 h-6 text-primary-600 group-hover:text-accent-600 transition-colors' })}
                </motion.div>
                <h4 className="text-lg font-bold text-primary-800 mb-3">{service.title}</h4>
                <p className="text-primary-600 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-construction-gradient rounded-3xl p-8 md:p-12 mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Nosso Processo
            </h3>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Um método comprovado que garante resultados excepcionais em cada projeto
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-16 h-16 bg-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white group-hover:bg-accent-400 transition-colors"
                >
                  {step.step}
                </motion.div>
                <h4 className="text-xl font-bold text-white mb-3">{step.title}</h4>
                <p className="text-white/80 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-white rounded-3xl p-8 md:p-12 shadow-construction-lg border border-primary-100"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-primary-800 mb-6">
            Pronto para Começar seu Projeto?
          </h3>
          <p className="text-xl text-primary-600 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco hoje mesmo e descubra como podemos transformar 
            suas ideias em realidade com excelência e qualidade.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(14, 165, 233, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToContact}
            className="bg-accent-gradient text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-construction-lg hover:shadow-accent-500/25 transition-all duration-300 inline-flex items-center space-x-2"
          >
            <span>Entre em Contato</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}