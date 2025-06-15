import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Calendar, 
  CheckCircle, 
  Clock, 
  Users, 
  DollarSign,
  Download,
  Upload,
  Phone,
  Mail,
  AlertCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const EnrollmentStepCard = ({ step, index, onClick }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className="relative bg-white p-6 rounded-2xl shadow-lg text-center card-hover cursor-pointer"
    onClick={() => onClick(step.title)}
  >
    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
      <step.icon className="w-8 h-8 text-white" />
    </div>
    <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold z-20">
      {step.step}
    </div>
    <h3 className="text-lg font-merriweather font-semibold text-gray-900 mb-2">
      {step.title}
    </h3>
    <p className="text-gray-700 mb-3 text-sm">
      {step.description}
    </p>
    <div className="flex items-center justify-center text-blue-700">
      <Clock className="w-4 h-4 mr-1" />
      <span className="text-sm font-medium">{step.duration}</span>
    </div>
  </motion.div>
);

const RequirementsList = ({ requirements, level }) => (
  <div>
    <h3 className="text-2xl font-merriweather font-bold text-gray-900 mb-6">
      Documentos Requeridos - {level === 'preescolar' ? 'Preescolar' : 'Primaria'}
    </h3>
    <div className="space-y-3">
      {requirements.map((requirement, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          className="flex items-start space-x-3 p-3 bg-white rounded-lg shadow-sm"
        >
          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
          <span className="text-gray-700">{requirement}</span>
        </motion.div>
      ))}
    </div>
    <div className="mt-8 p-4 bg-blue-100 rounded-lg border border-blue-200">
      <div className="flex items-start space-x-3">
        <AlertCircle className="w-5 h-5 text-blue-700 mt-0.5 flex-shrink-0" />
        <div>
          <h4 className="font-merriweather font-semibold text-blue-800 mb-1">Importante</h4>
          <p className="text-blue-700 text-sm">
            Todos los documentos deben estar vigentes y en buen estado. 
            Las copias deben ser legibles y completas.
          </p>
        </div>
      </div>
    </div>
  </div>
);

const CostsTable = ({ costs }) => (
  <div>
    <h3 className="text-2xl font-merriweather font-bold text-gray-900 mb-6">
      Costos de Inscripción
    </h3>
    <div className="bg-white p-6 rounded-2xl shadow-lg">
      <div className="space-y-4">
        <div className="flex justify-between items-center py-3 border-b border-gray-100">
          <span className="text-gray-700">Inscripción</span>
          <span className="text-xl font-bold text-blue-700">
            {costs.inscription}
          </span>
        </div>
        <div className="flex justify-between items-center py-3 border-b border-gray-100">
          <span className="text-gray-700">Colegiatura mensual</span>
          <span className="text-xl font-bold text-red-600">
            {costs.monthly}
          </span>
        </div>
        <div className="flex justify-between items-center py-3 border-b border-gray-100">
          <span className="text-gray-700">Materiales escolares</span>
          <span className="text-lg font-semibold text-gray-800">
            {costs.materials}
          </span>
        </div>
        <div className="flex justify-between items-center py-3">
          <span className="text-gray-700">Uniformes</span>
          <span className="text-lg font-semibold text-gray-800">
            {costs.uniform}
          </span>
        </div>
      </div>
      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <p className="text-sm text-gray-700 text-center">
          <strong>Descuentos disponibles:</strong> Hermanos (10%), Pago anual (15%), 
          Empleados de educación (20%)
        </p>
      </div>
    </div>
  </div>
);

const EnrollmentForm = ({ onClick }) => (
  <form className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2 font-opensans">
          Nombre del Padre/Madre
        </label>
        <input
          type="text"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-opensans"
          placeholder="Nombre completo"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2 font-opensans">
          Teléfono
        </label>
        <input
          type="tel"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-opensans"
          placeholder="+52 55 1234-5678"
        />
      </div>
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2 font-opensans">
        Correo Electrónico
      </label>
      <input
        type="email"
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-opensans"
        placeholder="correo@ejemplo.com"
      />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2 font-opensans">
          Nombre del Estudiante
        </label>
        <input
          type="text"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-opensans"
          placeholder="Nombre del niño/niña"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2 font-opensans">
          Nivel de Interés
        </label>
        <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-opensans">
          <option value="">Seleccionar nivel</option>
          <option value="preescolar">Preescolar</option>
          <option value="primaria">Primaria</option>
        </select>
      </div>
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2 font-opensans">
        Mensaje (Opcional)
      </label>
      <textarea
        rows={4}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-opensans"
        placeholder="Cuéntanos sobre tus expectativas o preguntas específicas..."
      ></textarea>
    </div>
    <div className="flex flex-col sm:flex-row gap-4">
      <Button 
        type="button"
        className="flex-1 bg-blue-700 text-white hover:bg-blue-800 py-3 font-opensans"
        onClick={() => onClick('submit-form')}
      >
        <Mail className="w-5 h-5 mr-2" />
        Enviar Solicitud
      </Button>
      <Button 
        type="button"
        variant="outline"
        className="flex-1 py-3 border-blue-700 text-blue-700 hover:bg-blue-50 font-opensans"
        onClick={() => onClick('call')}
      >
        <Phone className="w-5 h-5 mr-2" />
        Llamar Ahora
      </Button>
    </div>
  </form>
);


const Enrollment = () => {
  const [selectedLevel, setSelectedLevel] = useState('preescolar');

  const handleClick = (action) => {
    toast({
      title: "🚧 Esta función aún no está implementada",
      description: "¡No te preocupes! Puedes solicitarla en tu próximo mensaje 🚀",
    });
  };

  const enrollmentSteps = [
    { step: 1, title: "Solicitud de Información", description: "Completa el formulario de interés o contáctanos directamente", icon: FileText, duration: "1 día" },
    { step: 2, title: "Visita a las Instalaciones", description: "Conoce nuestras instalaciones y metodología educativa", icon: Users, duration: "1-2 horas" },
    { step: 3, title: "Entrega de Documentos", description: "Presenta la documentación requerida completa", icon: Upload, duration: "1 día" },
    { step: 4, title: "Evaluación del Estudiante", description: "Evaluación académica y entrevista personal", icon: CheckCircle, duration: "2-3 días" },
    { step: 5, title: "Confirmación de Inscripción", description: "Pago de inscripción y confirmación de lugar", icon: DollarSign, duration: "1 día" }
  ];

  const requirementsData = {
    preescolar: ["Acta de nacimiento (original y 2 copias)", "CURP del estudiante (original y 2 copias)", "Cartilla de vacunación completa", "Certificado médico reciente", "4 fotografías tamaño infantil", "Comprobante de domicilio", "Identificación oficial de los padres", "Carta de no adeudo (si viene de otra escuela)"],
    primaria: ["Acta de nacimiento (original y 2 copias)", "CURP del estudiante (original y 2 copias)", "Certificado de preescolar", "Boletas de calificaciones anteriores", "Carta de buena conducta", "Certificado médico reciente", "4 fotografías tamaño infantil", "Comprobante de domicilio", "Identificación oficial de los padres", "Carta de no adeudo de la escuela anterior"]
  };

  const calendarData = [
    { period: "Inscripciones Nuevos Ingresos", dates: "Enero 15 - Marzo 31, 2024", status: "Abiertas", color: "bg-green-100 text-green-800" },
    { period: "Reinscripciones", dates: "Febrero 1 - Abril 15, 2024", status: "Abiertas", color: "bg-blue-100 text-blue-800" },
    { period: "Exámenes de Admisión", dates: "Abril 1 - Abril 30, 2024", status: "Próximamente", color: "bg-yellow-100 text-yellow-800" },
    { period: "Inicio de Clases", dates: "Agosto 21, 2024", status: "Programado", color: "bg-purple-100 text-purple-800" }
  ];

  const costsData = {
    preescolar: { inscription: "$3,500", monthly: "$2,800", materials: "$1,200", uniform: "$800" },
    primaria: { inscription: "$4,000", monthly: "$3,200", materials: "$1,500", uniform: "$1,000" }
  };
  
  const documentsData = [
      { title: "Solicitud de Inscripción", description: "Formulario oficial de inscripción", icon: FileText, type: "PDF" },
      { title: "Lista de Útiles", description: "Materiales escolares por grado", icon: CheckCircle, type: "PDF" },
      { title: "Reglamento Escolar", description: "Normas y políticas institucionales", icon: Users, type: "PDF" },
      { title: "Calendario Escolar", description: "Fechas importantes del ciclo", icon: Calendar, type: "PDF" }
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
              Inscripciones
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Únete a nuestra familia educativa. Proceso de inscripción sencillo y transparente
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
              alt="Familia feliz durante el proceso de inscripción"
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
              Proceso de Inscripción
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Cinco pasos sencillos para formar parte de nuestra comunidad educativa
            </p>
          </motion.div>
          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-blue-200 transform -translate-y-1/2"></div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {enrollmentSteps.map((step, index) => (
                <EnrollmentStepCard key={index} step={step} index={index} onClick={handleClick} />
              ))}
            </div>
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
              Requisitos de Inscripción
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Documentación necesaria según el nivel educativo
            </p>
          </motion.div>
          <div className="flex justify-center mb-12">
            <div className="bg-white p-2 rounded-xl shadow-lg">
              <Button
                variant={selectedLevel === 'preescolar' ? 'default' : 'ghost'}
                className={`${selectedLevel === 'preescolar' ? 'bg-blue-700 text-white hover:bg-blue-800' : 'text-gray-700 hover:bg-blue-100'} font-opensans`}
                onClick={() => setSelectedLevel('preescolar')}
              >
                Preescolar
              </Button>
              <Button
                variant={selectedLevel === 'primaria' ? 'default' : 'ghost'}
                className={`${selectedLevel === 'primaria' ? 'bg-red-600 text-white hover:bg-red-700' : 'text-gray-700 hover:bg-red-100'} font-opensans`}
                onClick={() => setSelectedLevel('primaria')}
              >
                Primaria
              </Button>
            </div>
          </div>
          <motion.div
            key={selectedLevel}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            <RequirementsList requirements={requirementsData[selectedLevel]} level={selectedLevel} />
            <CostsTable costs={costsData[selectedLevel]} />
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
              Calendario de Inscripciones
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Fechas importantes para el proceso de inscripción 2024
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {calendarData.map((period, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-blue-50 p-6 rounded-2xl shadow-lg card-hover cursor-pointer"
                onClick={() => handleClick(period.period)}
              >
                <div className="flex items-center justify-between mb-4">
                  <Calendar className="w-8 h-8 text-blue-700" />
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${period.color}`}>
                    {period.status}
                  </span>
                </div>
                <h3 className="text-lg font-merriweather font-semibold text-gray-900 mb-2">
                  {period.period}
                </h3>
                <p className="text-gray-700 font-medium">
                  {period.dates}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-merriweather font-bold text-blue-700 mb-4">
              Solicita Información
            </h2>
            <p className="text-lg text-gray-700">
              Completa el formulario y nos pondremos en contacto contigo
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <EnrollmentForm onClick={handleClick} />
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
              Documentos Útiles
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Descarga los formularios y documentos necesarios para el proceso
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {documentsData.map((document, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-blue-50 p-6 rounded-2xl shadow-lg text-center card-hover cursor-pointer"
                onClick={() => handleClick(document.title)}
              >
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <document.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-merriweather font-semibold text-gray-900 mb-2">
                  {document.title}
                </h3>
                <p className="text-gray-700 mb-4 text-sm">
                  {document.description}
                </p>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="w-full border-blue-700 text-blue-700 hover:bg-blue-100 font-opensans"
                  onClick={() => handleClick(`download-${document.title}`)}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Descargar {document.type}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-merriweather font-bold mb-6">
              ¿Listo para comenzar esta aventura educativa?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Nuestro equipo está aquí para guiarte en cada paso del proceso
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="lg" 
                className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-4 text-lg font-opensans"
                onClick={() => handleClick('schedule-visit')}
              >
                Agendar Visita
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-4 text-lg font-opensans"
                onClick={() => handleClick('call-now')}
              >
                <Phone className="w-5 h-5 mr-2" />
                Llamar Ahora
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Enrollment;