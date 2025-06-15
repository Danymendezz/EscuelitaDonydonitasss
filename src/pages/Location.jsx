import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Clock, 
  Phone, 
  Mail, 
  Bus, 
  Car, 
  Navigation,
  Building
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Location = () => {
  const handleClick = (action) => {
    toast({
      title: "🚧 Esta función aún no está implementada",
      description: "¡No te preocupes! Puedes solicitarla en tu próximo mensaje 🚀",
    });
  };

  const transportOptions = [
    { icon: Bus, title: "Transporte Público", description: "Línea 3 del Metro, estación Universidad", details: "Camina 5 minutos desde la estación" },
    { icon: Car, title: "En Automóvil", description: "Estacionamiento gratuito disponible", details: "50 espacios para padres de familia" },
    { icon: Navigation, title: "Rutas de Transporte", description: "Servicio de transporte escolar", details: "Cobertura en 15 colonias" }
  ];

  const contactInfo = [
    { icon: Phone, title: "Teléfono Principal", info: "+52 55 1234-5678", subtitle: "Lunes a Viernes: 7:00 AM - 6:00 PM" },
    { icon: Mail, title: "Correo Electrónico", info: "info@escuelitadonydonitasss.edu.mx", subtitle: "Respuesta en menos de 24 horas" },
    { icon: Clock, title: "Horarios de Atención", info: "7:00 AM - 6:00 PM", subtitle: "Lunes a Viernes" }
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
              Nuestra Ubicación
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Nos encontramos en el corazón de la Ciudad de México, en un lugar accesible y seguro para toda la familia
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center mr-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-merriweather font-bold text-red-600">
                  Dirección
                </h2>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <Building className="w-5 h-5 text-blue-700 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-lg font-merriweather font-semibold text-gray-900">
                      Escuelita Donydonitasss
                    </p>
                    <p className="text-gray-700">
                      Av. Educación 123, Colonia Estudiantil
                    </p>
                    <p className="text-gray-700">
                      Delegación Coyoacán, Ciudad de México
                    </p>
                    <p className="text-gray-700">
                      C.P. 04100, México
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-blue-700 text-white hover:bg-blue-800 font-opensans"
                  onClick={() => handleClick('directions')}
                >
                  <Navigation className="w-4 h-4 mr-2" />
                  Cómo Llegar
                </Button>
                <Button 
                  variant="outline"
                  className="border-blue-700 text-blue-700 hover:bg-blue-100 font-opensans"
                  onClick={() => handleClick('map')}
                >
                  Ver en Mapa
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-blue-100 p-8 rounded-2xl">
                <img  
                  className="w-full rounded-xl shadow-lg"
                  alt="Mapa de ubicación de la Escuelita Donydonitasss"
                 src="https://images.unsplash.com/photo-1689375929472-2381479b5fc7" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-merriweather font-bold text-blue-700 mb-4">
              Información de Contacto
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Estamos aquí para resolver todas tus dudas y acompañarte en el proceso de inscripción
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg text-center card-hover cursor-pointer"
                onClick={() => handleClick(contact.title)}
              >
                <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-6">
                  <contact.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-merriweather font-semibold text-gray-900 mb-2">
                  {contact.title}
                </h3>
                <p className="text-lg text-blue-700 font-medium mb-2">
                  {contact.info}
                </p>
                <p className="text-sm text-gray-700">
                  {contact.subtitle}
                </p>
              </motion.div>
            ))}
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
            <h2 className="text-3xl md:text-4xl font-merriweather font-bold text-red-600 mb-4">
              Cómo Llegar
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Múltiples opciones de transporte para llegar cómodamente a nuestra escuela
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {transportOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-blue-50 p-8 rounded-2xl text-center card-hover cursor-pointer"
                onClick={() => handleClick(option.title)}
              >
                <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-6">
                  <option.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-merriweather font-semibold text-gray-900 mb-3">
                  {option.title}
                </h3>
                <p className="text-gray-700 mb-2 font-medium">
                  {option.description}
                </p>
                <p className="text-sm text-gray-700">
                  {option.details}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-blue-700 p-8 rounded-2xl text-white"
          >
            <h3 className="text-2xl font-merriweather font-bold mb-6 text-center">
              Referencias Importantes
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-merriweather font-semibold mb-2">Cerca de:</h4>
                <ul className="space-y-1 text-white/90">
                  <li>• Centro Comercial Coyoacán (2 cuadras)</li>
                  <li>• Hospital General de México (5 min)</li>
                  <li>• Parque Hundido (10 min caminando)</li>
                  <li>• Universidad Nacional (15 min)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-merriweather font-semibold mb-2">Transporte Público:</h4>
                <ul className="space-y-1 text-white/90">
                  <li>• Metro Línea 3 - Estación Universidad</li>
                  <li>• Metrobús Línea 1 - Estación Dr. Gálvez</li>
                  <li>• Rutas de camión: 1, 13, 76, 88</li>
                  <li>• Ecobici - Estación a 2 cuadras</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-merriweather font-bold mb-8">
              Horarios de Atención
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                <h3 className="text-xl font-merriweather font-semibold mb-4">
                  Horario Escolar
                </h3>
                <div className="space-y-2 text-white/90">
                  <p>Preescolar: 8:00 AM - 1:00 PM</p>
                  <p>Primaria: 7:30 AM - 2:30 PM</p>
                  <p>Actividades Extra: 3:00 PM - 6:00 PM</p>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                <h3 className="text-xl font-merriweather font-semibold mb-4">
                  Atención a Padres
                </h3>
                <div className="space-y-2 text-white/90">
                  <p>Lunes a Viernes: 7:00 AM - 6:00 PM</p>
                  <p>Sábados: 9:00 AM - 1:00 PM</p>
                  <p>Citas previa programación</p>
                </div>
              </div>
            </div>

            <Button 
              variant="secondary" 
              size="lg" 
              className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 text-lg font-opensans"
              onClick={() => handleClick('schedule-visit')}
            >
              <Clock className="w-5 h-5 mr-2" />
              Agendar Visita
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Location;