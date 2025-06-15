import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  MessageCircle,
  Facebook,
  Instagram,
  Twitter,
  Building
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const ContactInfoCard = ({ info, index, onClick }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className="bg-blue-50 p-6 rounded-2xl shadow-lg text-center card-hover cursor-pointer"
    onClick={() => onClick(info.action)}
  >
    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
      <info.icon className="w-8 h-8 text-white" />
    </div>
    <h3 className="text-xl font-merriweather font-semibold text-gray-900 mb-3">
      {info.title}
    </h3>
    <p className="text-gray-800 font-medium mb-2">
      {info.primary}
    </p>
    <p className="text-sm text-gray-700">
      {info.secondary}
    </p>
  </motion.div>
);

const DepartmentCard = ({ dept, onClick }) => (
  <div 
    className="p-4 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200 transition-colors"
    onClick={() => onClick(dept.name)}
  >
    <div className="flex items-start space-x-3">
      <Building className="w-5 h-5 text-blue-700 mt-1 flex-shrink-0" />
      <div className="flex-1">
        <h4 className="font-merriweather font-semibold text-gray-900">{dept.name}</h4>
        <p className="text-sm text-gray-700 mb-1">{dept.contact}</p>
        <div className="flex flex-col sm:flex-row sm:space-x-4 text-sm text-gray-600">
          <span>{dept.phone}</span>
          <span>{dept.email}</span>
        </div>
      </div>
    </div>
  </div>
);

const ContactForm = ({ formData, handleInputChange, handleSubmit }) => (
  <form onSubmit={handleSubmit} className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2 font-opensans">
          Nombre Completo *
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors font-opensans"
          placeholder="Tu nombre completo"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2 font-opensans">
          Teléfono *
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors font-opensans"
          placeholder="+52 55 1234-5678"
        />
      </div>
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2 font-opensans">
        Correo Electrónico *
      </label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        required
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors font-opensans"
        placeholder="tu@correo.com"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2 font-opensans">
        Asunto
      </label>
      <select
        name="subject"
        value={formData.subject}
        onChange={handleInputChange}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors font-opensans"
      >
        <option value="">Selecciona un tema</option>
        <option value="inscripciones">Inscripciones</option>
        <option value="informacion">Información General</option>
        <option value="academico">Asuntos Académicos</option>
        <option value="administracion">Administración</option>
        <option value="otro">Otro</option>
      </select>
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2 font-opensans">
        Mensaje *
      </label>
      <textarea
        name="message"
        value={formData.message}
        onChange={handleInputChange}
        required
        rows={5}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none font-opensans"
        placeholder="Escribe tu mensaje aquí..."
      ></textarea>
    </div>
    <Button 
      type="submit"
      className="w-full bg-blue-700 text-white hover:bg-blue-800 py-3 text-lg font-opensans"
    >
      <Send className="w-5 h-5 mr-2" />
      Enviar Mensaje
    </Button>
  </form>
);


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "🚧 Formulario no funcional",
      description: "Esta función aún no está implementada. ¡Puedes solicitarla! 🚀",
    });
  };

  const handleClick = (action) => {
    toast({
      title: "🚧 Esta función aún no está implementada",
      description: "¡No te preocupes! Puedes solicitarla en tu próximo mensaje 🚀",
    });
  };

  const contactInfo = [
    { icon: Phone, title: "Teléfono", primary: "+52 55 1234-5678", secondary: "Lunes a Viernes: 7:00 AM - 6:00 PM", action: "call" },
    { icon: Mail, title: "Correo Electrónico", primary: "info@escuelitadonydonitasss.edu.mx", secondary: "Respuesta en menos de 24 horas", action: "email" },
    { icon: MapPin, title: "Dirección", primary: "Av. Educación 123, Col. Estudiantil", secondary: "Coyoacán, Ciudad de México, C.P. 04100", action: "location" },
    { icon: Clock, title: "Horarios de Atención", primary: "Lunes a Viernes: 7:00 AM - 6:00 PM", secondary: "Sábados: 9:00 AM - 1:00 PM", action: "schedule" }
  ];

  const departments = [
    { name: "Dirección General", contact: "Dra. María Elena Rodríguez", phone: "Ext. 101", email: "direccion@escuelitadonydonitasss.edu.mx" },
    { name: "Coordinación Académica", contact: "Lic. Carlos Mendoza", phone: "Ext. 102", email: "academico@escuelitadonydonitasss.edu.mx" },
    { name: "Administración", contact: "Lic. Patricia Hernández", phone: "Ext. 103", email: "admin@escuelitadonydonitasss.edu.mx" },
    { name: "Inscripciones", contact: "Lic. Roberto García", phone: "Ext. 104", email: "inscripciones@escuelitadonydonitasss.edu.mx" }
  ];

  const socialMedia = [
    { name: "Facebook", icon: Facebook, url: "#", color: "bg-blue-600 hover:bg-blue-700" },
    { name: "Instagram", icon: Instagram, url: "#", color: "bg-pink-600 hover:bg-pink-700" },
    { name: "Twitter", icon: Twitter, url: "#", color: "bg-blue-400 hover:bg-blue-500" }
  ];

  const faqItems = [
    { question: "¿Cuál es el horario de atención?", answer: "Lunes a Viernes: 7:00 AM - 6:00 PM, Sábados: 9:00 AM - 1:00 PM" },
    { question: "¿Ofrecen transporte escolar?", answer: "Sí, tenemos servicio de transporte con cobertura en 15 colonias" },
    { question: "¿Cuándo son las inscripciones?", answer: "Nuevos ingresos: Enero 15 - Marzo 31, Reinscripciones: Febrero 1 - Abril 15" },
    { question: "¿Tienen becas disponibles?", answer: "Sí, ofrecemos descuentos por hermanos, pago anual y empleados de educación" }
  ];

  return (
    <div className="pt-16 font-opensans">
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-merriweather font-bold text-blue-700 mb-6">
              Contacto
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Estamos aquí para resolver todas tus dudas y acompañarte en el proceso educativo
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <img  
              className="w-full max-w-4xl mx-auto rounded-3xl shadow-2xl"
              alt="Personal de la escuela atendiendo a padres de familia"
             src="https://images.unsplash.com/photo-1666533835045-3a1b3dfc3538" />
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-merriweather font-bold text-red-600 mb-4">
              Información de Contacto
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Múltiples formas de comunicarte con nosotros
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <ContactInfoCard key={index} info={info} index={index} onClick={handleClick} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-merriweather font-bold text-blue-700 mb-6">
                Envíanos un Mensaje
              </h2>
              <p className="text-gray-700 mb-8">
                Completa el formulario y nos pondremos en contacto contigo lo antes posible.
              </p>
              <ContactForm formData={formData} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-merriweather font-bold text-gray-900 mb-6">
                  Departamentos
                </h3>
                <div className="space-y-4">
                  {departments.map((dept, index) => (
                    <DepartmentCard key={index} dept={dept} onClick={handleClick} />
                  ))}
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-merriweather font-bold text-gray-900 mb-6">
                  Síguenos en Redes Sociales
                </h3>
                <div className="flex space-x-4">
                  {socialMedia.map((social, index) => (
                    <motion.a
                      key={index}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={social.url}
                      className={`w-12 h-12 ${social.color} rounded-full flex items-center justify-center text-white transition-colors cursor-pointer`}
                      onClick={(e) => { e.preventDefault(); handleClick(social.name); }}
                    >
                      <social.icon className="w-6 h-6" />
                    </motion.a>
                  ))}
                </div>
                <p className="text-gray-700 mt-4 text-sm">
                  Mantente al día con nuestras actividades, eventos y noticias importantes.
                </p>
              </div>
              <div className="bg-red-600 p-6 rounded-2xl text-white">
                <div className="flex items-center mb-4">
                  <MessageCircle className="w-8 h-8 mr-3" />
                  <h3 className="text-xl font-merriweather font-bold">Chat en Vivo</h3>
                </div>
                <p className="mb-4 text-white/90">
                  ¿Necesitas ayuda inmediata? Nuestro equipo está disponible para atenderte.
                </p>
                <Button 
                  variant="secondary"
                  className="w-full bg-white text-red-600 hover:bg-gray-100"
                  onClick={() => handleClick('live-chat')}
                >
                  Iniciar Chat
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-merriweather font-bold text-blue-700 mb-4">
              Cómo Llegar
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Ubicación estratégica con fácil acceso desde cualquier punto de la ciudad
            </p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-merriweather font-bold text-gray-900 mb-6">
                Nuestra Ubicación
              </h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Dirección Completa:</p>
                    <p className="text-gray-700">
                      Av. Educación 123, Colonia Estudiantil<br />
                      Delegación Coyoacán, Ciudad de México<br />
                      C.P. 04100, México
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-blue-50 p-6 rounded-2xl">
                <h4 className="font-merriweather font-semibold text-gray-900 mb-3">Referencias:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• A 2 cuadras del Centro Comercial Coyoacán</li>
                  <li>• Frente al Parque de los Estudiantes</li>
                  <li>• 5 minutos del Metro Universidad (Línea 3)</li>
                  <li>• Cerca del Hospital General de México</li>
                </ul>
              </div>
              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-blue-700 text-white hover:bg-blue-800"
                  onClick={() => handleClick('directions')}
                >
                  Ver Direcciones
                </Button>
                <Button 
                  variant="outline"
                  className="border-blue-700 text-blue-700 hover:bg-blue-50"
                  onClick={() => handleClick('uber')}
                >
                  Solicitar Uber
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-blue-100 p-4 rounded-2xl">
                <img  
                  className="w-full rounded-xl shadow-lg cursor-pointer"
                  alt="Mapa interactivo mostrando la ubicación de la Escuelita Donydonitasss"
                  onClick={() => handleClick('map')}
                 src="https://images.unsplash.com/photo-1621273961349-0612be84b10a" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-merriweather font-bold mb-6">
              Preguntas Frecuentes
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Respuestas rápidas a las consultas más comunes
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {faqItems.map((faq, index) => (
                <div 
                  key={index} 
                  className="bg-white/10 backdrop-blur-sm p-4 rounded-xl text-left cursor-pointer hover:bg-white/20 transition-colors"
                  onClick={() => handleClick('faq')}
                >
                  <h4 className="font-merriweather font-semibold mb-2">{faq.question}</h4>
                  <p className="text-white/90 text-sm">{faq.answer}</p>
                </div>
              ))}
            </div>
            <Button 
              variant="secondary" 
              size="lg" 
              className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 text-lg font-opensans"
              onClick={() => handleClick('more-faq')}
            >
              Ver Más Preguntas
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;