
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Target, 
  Eye, 
  Award, 
  Users, 
  BookOpen,
  Star,
  GraduationCap
} from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const About = () => {
  const handleClick = (section) => {
    toast({
      title: "🚧 Esta función aún no está implementada",
      description: "¡No te preocupes! Puedes solicitarla en tu próximo mensaje 🚀",
    });
  };

  const values = [
    {
      icon: Heart,
      title: "Amor",
      description: "Creemos que el amor es la base de toda educación exitosa"
    },
    {
      icon: Star,
      title: "Excelencia",
      description: "Buscamos la excelencia en cada aspecto de nuestra enseñanza"
    },
    {
      icon: Users,
      title: "Respeto",
      description: "Fomentamos el respeto mutuo entre estudiantes, padres y maestros"
    },
    {
      icon: BookOpen,
      title: "Aprendizaje",
      description: "Promovemos el aprendizaje continuo y la curiosidad natural"
    }
  ];

  const team = [
    {
      name: "Dra. María Elena Rodríguez",
      position: "Directora General",
      experience: "25 años de experiencia",
      image: "Directora de escuela profesional sonriendo en su oficina"
    },
    {
      name: "Lic. Carlos Mendoza",
      position: "Coordinador Académico",
      experience: "18 años de experiencia",
      image: "Coordinador académico masculino en un aula moderna"
    },
    {
      name: "Mtra. Ana Sofía López",
      position: "Coordinadora de Preescolar",
      experience: "15 años de experiencia",
      image: "Maestra de preescolar con niños pequeños en actividades educativas"
    },
    {
      name: "Lic. Roberto García",
      position: "Coordinador de Primaria",
      experience: "20 años de experiencia",
      image: "Maestro de primaria enseñando en un salón colorido"
    }
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
              Quiénes Somos
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Más de dos décadas formando estudiantes felices, seguros y preparados para el futuro
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
              alt="Fachada de la Escuelita Donydonitasss"
             src="https://images.unsplash.com/photo-1687899952907-a1adc581a5a4" />
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
              <h2 className="text-3xl md:text-4xl font-merriweather font-bold text-red-600 mb-6">
                Nuestra Historia
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  La Escuelita Donydonitasss nació en el año 2003 con el sueño de crear un espacio 
                  educativo donde cada niño pudiera desarrollar su máximo potencial en un ambiente 
                  de amor, respeto y excelencia académica.
                </p>
                <p>
                  Fundada por la Dra. María Elena Rodríguez, nuestra institución comenzó con apenas 
                  30 estudiantes y un equipo de 5 maestros comprometidos. Hoy, después de más de 20 años, 
                  hemos graduado a más de 500 estudiantes que han continuado destacando en sus estudios superiores.
                </p>
                <p>
                  Nuestro enfoque pedagógico combina metodologías tradicionales probadas con innovaciones 
                  educativas modernas, siempre manteniendo en el centro el bienestar integral de nuestros estudiantes.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="cursor-pointer"
              onClick={() => handleClick('history')}
            >
              <img  
                className="w-full rounded-2xl shadow-lg"
                alt="Historia de la escuela - foto antigua"
               src="https://images.unsplash.com/photo-1688855002060-5958ab6c2b16" />
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
              Misión, Visión y Valores
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-2xl shadow-lg text-center card-hover cursor-pointer"
              onClick={() => handleClick('mission')}
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-merriweather font-bold text-gray-900 mb-4">Misión</h3>
              <p className="text-gray-700">
                Formar estudiantes íntegros, críticos y creativos, proporcionando una educación 
                de calidad que fomente valores humanos, excelencia académica y responsabilidad social.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg text-center card-hover cursor-pointer"
              onClick={() => handleClick('vision')}
            >
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-merriweather font-bold text-gray-900 mb-4">Visión</h3>
              <p className="text-gray-700">
                Ser reconocidos como la institución educativa líder en formación integral, 
                donde cada estudiante desarrolle su máximo potencial y se convierta en un 
                ciudadano comprometido con su comunidad.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg text-center card-hover cursor-pointer"
              onClick={() => handleClick('values')}
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-merriweather font-bold text-gray-900 mb-4">Valores</h3>
              <p className="text-gray-700">
                Amor, respeto, honestidad, responsabilidad, solidaridad y excelencia 
                son los pilares que guían todas nuestras acciones educativas y formativas.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-xl card-hover cursor-pointer"
                onClick={() => handleClick(value.title)}
              >
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-merriweather font-semibold text-gray-900 mb-2">
                  {value.title}
                </h4>
                <p className="text-sm text-gray-700">
                  {value.description}
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
              Nuestro Equipo Directivo
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Profesionales comprometidos con la excelencia educativa y el desarrollo integral de nuestros estudiantes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-blue-50 rounded-2xl overflow-hidden shadow-lg card-hover cursor-pointer"
                onClick={() => handleClick(member.name)}
              >
                <div className="relative h-64">
                  <img  
                    className="w-full h-full object-cover"
                    alt={`${member.name} - ${member.position}`}
                   src="https://images.unsplash.com/photo-1644424235476-295f24d503d9" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-merriweather font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-700 font-medium mb-2">
                    {member.position}
                  </p>
                  <p className="text-sm text-gray-700">
                    {member.experience}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-merriweather font-bold mb-4">
              Reconocimientos y Certificaciones
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Nuestro compromiso con la calidad educativa ha sido reconocido por diversas instituciones
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Certificación SEP",
                description: "Reconocimiento oficial de la Secretaría de Educación Pública",
                year: "2023"
              },
              {
                title: "Premio a la Excelencia",
                description: "Otorgado por la Asociación de Escuelas Privadas",
                year: "2022"
              },
              {
                title: "Escuela Segura",
                description: "Certificación en protocolos de seguridad escolar",
                year: "2023"
              }
            ].map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl text-center card-hover cursor-pointer"
                onClick={() => handleClick(award.title)}
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-merriweather font-semibold mb-2">{award.title}</h3>
                <p className="text-white/90 mb-2">{award.description}</p>
                <span className="text-sm bg-white/20 px-3 py-1 rounded-full">
                  {award.year}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;