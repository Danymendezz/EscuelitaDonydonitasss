import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  Twitter,
  Heart
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <span className="text-2xl font-merriweather font-bold">Escuelita Donydonitasss</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md font-opensans">
              Formando el futuro de nuestros niños con amor, dedicación y excelencia académica. 
              Más de 20 años comprometidos con la educación de calidad.
            </p>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="text-lg font-merriweather font-semibold mb-4 block">Enlaces Rápidos</span>
            <ul className="space-y-2 font-opensans">
              {[
                { name: 'Inicio', path: '/' },
                { name: 'Nosotros', path: '/nosotros' },
                { name: 'Académico', path: '/academico' },
                { name: 'Galería', path: '/galeria' },
                { name: 'Inscripciones', path: '/inscripciones' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-lg font-merriweather font-semibold mb-4 block">Contacto</span>
            <div className="space-y-3 font-opensans">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-red-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  Av. Educación 123, Colonia Estudiantil, Ciudad de México
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-red-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  +52 55 1234-5678
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-red-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  info@escuelitadonydonitasss.edu.mx
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center font-opensans">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Escuelita Donydonitasss. Todos los derechos reservados.
            </p>
            <p className="text-gray-400 text-sm flex items-center">
              Hecho con <Heart className="w-4 h-4 text-red-400 mx-1" /> para nuestros estudiantes
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;