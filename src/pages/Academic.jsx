import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Users, 
  Clock, 
  Award, 
  Palette, 
  Music, 
  Calculator,
  Globe,
  Heart,
  Star,
  GraduationCap,
  Target
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const AcademicLevelCard = ({ level, index, onClick }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
      index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
    }`}
  >
    <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
      <div className="flex items-center mb-6">
        <span className="text-sm font-semibold text-blue-700 bg-blue-100 px-3 py-1 rounded-full mr-4">
          {level.age}
        </span>
        <h3 className="text-3xl font-merriweather font-bold text-gray-900">
          {level.title}
        </h3>
      </div>
      
      <p className="text-lg text-gray-700 mb-6">
        {level.description}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <h4 className="font-semibold text-gray-900 mb-3 font-merriweather">Materias Principales:</h4>
          <ul className="space-y-2">
            {level.features.map((feature, idx) => (
              <li key={idx} className="flex items-center text-gray-700">
                <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center">
            <Clock className="w-5 h-5 text-blue-700 mr-3" />
            <div>
              <p className="font-medium text-gray-900">Horario</p>
              <p className="text-gray-700">{level.schedule}</p>
            </div>
          </div>
          <div className="flex items-center">
            <Users className="w-5 h-5 text-red-600 mr-3" />
            <div>
              <p className="font-medium text-gray-900">Grupos</p>
              <p className="text-gray-700">{level.groups}</p>
            </div>
          </div>
        </div>
      </div>

      <Button 
        className="bg-blue-700 text-white hover:bg-blue-800"
        onClick={() => onClick(level.title)}
      >
        Más Información
      </Button>
    </div>

    <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="relative cursor-pointer"
        onClick={() => onClick(level.title)}
      >
        <img  
          className="w-full rounded-2xl shadow-2xl"
          alt={`${level.title} - Estudiantes en clase`}
         src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
      </motion.div>
    </div>
  </motion.div>
);

const SubjectCard = ({ subject, index, onClick }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className="bg-white p-6 rounded-2xl shadow-lg card-hover cursor-pointer"
    onClick={() => onClick(subject.title)}
  >
    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
      <subject.icon className="w-6 h-6 text-white" />
    </div>
    <h3 className="text-xl font-merriweather font-semibold text-gray-900 mb-3">
      {subject.title}
    </h3>
    <p className="text-gray-700">
      {subject.description}
    </p>
  </motion.div>
);

const ExtracurricularCard = ({ category, index, onClick }) => (
   <motion.div
    key={index}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className="relative overflow-hidden rounded-2xl shadow-lg card-hover cursor-pointer"
    onClick={() => onClick(category.title)}
  >
    <div className={`p-6 text-white ${
      category.title === "Talleres Artísticos" ? "bg-pink-500" :
      category.title === "Deportes" ? "bg-green-500" :
      category.title === "Tecnología" ? "bg-blue-500" :
      "bg-orange-500" 
    }`}>
      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
        <category.icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-xl font-merriweather font-semibold mb-4">
        {category.title}
      </h3>
      <ul className="space-y-2">
        {category.activities.map((activity, idx) => (
          <li key={idx} className="text-white/90">
            • {activity}
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);


const Academic = () => {
  const handleClick = (section) => {
    toast({
      title: "🚧 Esta función aún no está implementada",
      description: "¡No te preocupes! Puedes solicitarla en tu próximo mensaje 🚀",
    });
  };

  const levels = [
    {
      title: "Preescolar",
      age: "3-5 años",
      description: "Desarrollo integral a través del juego y la exploración",
      features: ["Desarrollo psicomotriz", "Iniciación a la lectoescritura", "Matemáticas básicas", "Arte y creatividad", "Socialización"],
      schedule: "8:00 AM - 1:00 PM",
      groups: "Máximo 15 niños por grupo",
    },
    {
      title: "Primaria",
      age: "6-12 años",
      description: "Educación integral con enfoque en competencias",
      features: ["Español y Literatura", "Matemáticas avanzadas", "Ciencias Naturales", "Historia y Geografía", "Inglés como segunda lengua"],
      schedule: "7:30 AM - 2:30 PM",
      groups: "Máximo 20 estudiantes por grupo",
    }
  ];

  const subjects = [
    { icon: BookOpen, title: "Español y Literatura", description: "Desarrollo de habilidades comunicativas y amor por la lectura" },
    { icon: Calculator, title: "Matemáticas", description: "Pensamiento lógico-matemático y resolución de problemas" },
    { icon: Globe, title: "Ciencias Naturales", description: "Exploración del mundo natural y método científico" },
    { icon: Music, title: "Educación Artística", description: "Desarrollo de la creatividad y expresión artística" },
    { icon: Users, title: "Formación Cívica", description: "Valores, ciudadanía y convivencia social" },
    { icon: Target, title: "Educación Física", description: "Desarrollo físico, coordinación y trabajo en equipo" }
  ];

  const extracurricular = [
    { title: "Talleres Artísticos", activities: ["Pintura", "Música", "Teatro", "Danza"], icon: Palette },
    { title: "Deportes", activities: ["Fútbol", "Básquetbol", "Natación", "Atletismo"], icon: Target },
    { title: "Tecnología", activities: ["Robótica", "Programación", "Diseño Digital"], icon: GraduationCap },
    { title: "Idiomas", activities: ["Inglés Avanzado", "Francés", "Mandarín"], icon: Globe }
  ];

  const methodology = [
    { title: "Aprendizaje Constructivista", description: "Los estudiantes construyen su propio conocimiento a través de la experiencia" },
    { title: "Educación Personalizada", description: "Atención individual respetando el ritmo de aprendizaje de cada estudiante" },
    { title: "Aprendizaje Colaborativo", description: "Trabajo en equipo que fomenta la comunicación y el respeto mutuo" },
    { title: "Tecnología Educativa", description: "Integración de herramientas digitales para enriquecer el aprendizaje" }
  ];

  const modalities = [
    { title: "Modalidad Regular", description: "Horario completo con todas las materias", schedule: "7:30 AM - 2:30 PM", features: ["Todas las materias", "Almuerzo incluido", "Actividades deportivas"] },
    { title: "Modalidad Extendida", description: "Incluye actividades extracurriculares", schedule: "7:30 AM - 6:00 PM", features: ["Horario regular", "Talleres", "Tareas dirigidas", "Merienda"] },
    { title: "Modalidad Sabatina", description: "Actividades complementarias los sábados", schedule: "9:00 AM - 1:00 PM", features: ["Deportes", "Arte", "Música", "Robótica"] }
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
              Catálogo Académico
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Programas educativos diseñados para formar estudiantes íntegros, críticos y creativos
            </p>
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
              Niveles Educativos
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Ofrecemos educación integral desde preescolar hasta primaria
            </p>
          </motion.div>
          <div className="space-y-16">
            {levels.map((level, index) => (
              <AcademicLevelCard key={index} level={level} index={index} onClick={handleClick} />
            ))}
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
              Materias Principales
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Currículo integral que desarrolla todas las competencias necesarias
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subjects.map((subject, index) => (
              <SubjectCard key={index} subject={subject} index={index} onClick={handleClick} />
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
              Actividades Extracurriculares
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Complementamos la educación académica con actividades que desarrollan talentos y habilidades
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {extracurricular.map((category, index) => (
              <ExtracurricularCard key={index} category={category} index={index} onClick={handleClick} />
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
              Nuestra Metodología
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Enfoque pedagógico innovador que pone al estudiante en el centro del aprendizaje
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {methodology.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl card-hover cursor-pointer"
                onClick={() => handleClick(method.title)}
              >
                <h3 className="text-xl font-merriweather font-semibold mb-3">
                  {method.title}
                </h3>
                <p className="text-white/90">
                  {method.description}
                </p>
              </motion.div>
            ))}
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
              Horarios y Modalidades
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Flexibilidad para adaptarnos a las necesidades de cada familia
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {modalities.map((modality, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg card-hover cursor-pointer"
                onClick={() => handleClick(modality.title)}
              >
                <h3 className="text-xl font-merriweather font-semibold text-gray-900 mb-3">
                  {modality.title}
                </h3>
                <p className="text-gray-700 mb-4">
                  {modality.description}
                </p>
                <div className="flex items-center mb-4">
                  <Clock className="w-5 h-5 text-blue-700 mr-2" />
                  <span className="font-medium text-blue-700">
                    {modality.schedule}
                  </span>
                </div>
                <ul className="space-y-2">
                  {modality.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <Heart className="w-4 h-4 text-red-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
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
              ¿Quieres conocer más sobre nuestros programas?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Agenda una cita para conocer nuestras instalaciones y metodología
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="lg" 
                className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 text-lg font-opensans"
                onClick={() => handleClick('schedule-visit')}
              >
                Agendar Visita
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 text-lg font-opensans"
                onClick={() => handleClick('download-brochure')}
              >
                Descargar Folleto
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Academic;