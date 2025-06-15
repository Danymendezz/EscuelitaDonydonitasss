import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, Users, Award, Heart, Star, ArrowRight, GraduationCap, Palette, ShieldCheck, Sparkles, KeyRound as UsersRound, MessageSquare as MessageSquareHeart, Camera, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Home = () => {
  const handleFeatureClick = (feature) => {
    toast({
      title: "🚧 Esta función aún no está implementada",
      description: "¡No te preocupes! Puedes solicitarla en tu próximo mensaje 🚀",
    });
  };

  const features = [
    { icon: BookOpen, title: "Educación Integral", description: "Programas académicos diseñados para el desarrollo completo de cada estudiante." },
    { icon: UsersRound, title: "Grupos Pequeños", description: "Atención personalizada con máximo 20 estudiantes por grupo." },
    { icon: ShieldCheck, title: "Ambiente Seguro", description: "Un espacio seguro y acogedor donde cada niño se siente valorado." },
    { icon: Sparkles, title: "Excelencia Académica", description: "Reconocimientos y certificaciones que avalan nuestra calidad educativa." }
  ];

  const testimonials = [
    { name: "María González", role: "Madre de familia", content: "La mejor decisión fue inscribir a mi hija aquí. El cariño y profesionalismo son excepcionales.", rating: 5, image: "Madre sonriendo con su hija en la escuela" },
    { name: "Carlos Rodríguez", role: "Padre de familia", content: "Mi hijo ha desarrollado una pasión increíble por el aprendizaje. ¡Gracias por tanto!", rating: 5, image: "Padre jugando con su hijo en un entorno educativo" },
    { name: "Ana Martínez", role: "Madre de familia", content: "El ambiente familiar y la atención personalizada hacen la diferencia. Muy recomendable.", rating: 5, image: "Madre leyendo un libro con su hija en una biblioteca escolar" }
  ];

  const programs = [
    { title: "Preescolar", age: "3-5 años", description: "Desarrollo de habilidades básicas a través del juego y la exploración.", icon: Heart, imageSrc: "https://images.unsplash.com/photo-1518737002504-51d91a609579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJlc2Nob29sJTIwY2xhc3Nyb29tfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60", alt: "Niños de preescolar jugando y aprendiendo" },
    { title: "Primaria", age: "6-12 años", description: "Educación integral con enfoque en matemáticas, ciencias y humanidades.", icon: GraduationCap, imageSrc: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJpbWFyeSUyMHNjaG9vbCUyMGNsYXNzcm9vbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60", alt: "Estudiantes de primaria en clase" },
    { title: "Actividades Extracurriculares", age: "Todas las edades", description: "Arte, música, deportes y talleres para el desarrollo integral.", icon: Palette, imageSrc: "https://images.unsplash.com/photo-1540176289948-a9de26930869?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNjaG9vbCUyMGFjdGl2aXRpZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60", alt: "Niños en actividades extracurriculares" }
  ];

  const stats = [
    { number: "20+", label: "Años de experiencia" },
    { number: "500+", label: "Estudiantes graduados" },
    { number: "25", label: "Profesores certificados" },
    { number: "98%", label: "Satisfacción de padres" }
  ];

  const fadeIn = (direction = 'up', delay = 0) => ({
    hidden: { opacity: 0, y: direction === 'up' ? 20 : direction === 'down' ? -20 : 0, x: direction === 'left' ? 20 : direction === 'right' ? -20 : 0 },
    visible: { opacity: 1, y: 0, x: 0, transition: { duration: 0.6, delay, ease: "easeOut" }}
  });
  
  const staggerContainer = (staggerChildren, delayChildren) => ({
    hidden: {},
    visible: { transition: { staggerChildren, delayChildren }}
  });


  return (
    <div className="pt-16 font-opensans">
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center hero-pattern overflow-hidden">
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              variants={fadeIn('right', 0.1)}
              initial="hidden"
              animate="visible"
              className="text-center lg:text-left"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-merriweather font-bold mb-6">
                <span className="block text-blue-700">Escuelita</span>
                <span className="block text-red-600">Donydonitasss</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-xl mx-auto lg:mx-0">
                Aprender con amor, crecer con alegría.
              </p>
              <p className="text-lg text-gray-600 mb-12 max-w-xl mx-auto lg:mx-0">
                Formamos estudiantes felices, seguros y preparados para el futuro con más de 20 años de experiencia en educación de calidad.
              </p>
              <motion.div 
                variants={staggerContainer(0.2, 0.5)}
                initial="hidden"
                animate="visible"
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <motion.div variants={fadeIn('up')}>
                  <Button asChild size="lg" className="w-full sm:w-auto bg-blue-700 text-white hover:bg-blue-800 px-8 py-4 text-lg font-opensans shadow-lg transform hover:scale-105 transition-transform">
                    <Link to="/inscripciones">
                      <GraduationCap className="mr-2 w-5 h-5" />
                      Inscripciones
                    </Link>
                  </Button>
                </motion.div>
                <motion.div variants={fadeIn('up')}>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full sm:w-auto border-2 border-red-600 text-red-600 hover:bg-red-50 hover:text-red-700 px-8 py-4 text-lg font-opensans shadow-lg transform hover:scale-105 transition-transform"
                    onClick={() => handleFeatureClick('virtual-tour')}
                  >
                    <Camera className="mr-2 w-5 h-5" />
                    Tour Virtual
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div 
              variants={fadeIn('left', 0.3)}
              initial="hidden"
              animate="visible"
              className="relative"
            >
              <div className="aspect-w-4 aspect-h-3">
              <img  
                className="w-full h-full object-cover rounded-3xl shadow-2xl"
                alt="Niños felices aprendiendo en el aula"
               src="https://images.unsplash.com/photo-1652407173066-6bca9753ffea" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeIn('up')}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-merriweather font-bold text-red-600 mb-4">
              ¿Por qué elegirnos?
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Ofrecemos una educación integral que combina excelencia académica con valores humanos, en un ambiente diseñado para inspirar.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer(0.2, 0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up')}
                className="text-center p-8 rounded-2xl bg-blue-50 card-hover cursor-pointer shadow-lg"
                onClick={() => handleFeatureClick(feature.title)}
              >
                <div className="w-20 h-20 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-merriweather font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-700 text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={staggerContainer(0.2, 0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up')}
                className="cursor-pointer p-4 bg-white/10 rounded-lg shadow-md hover:bg-white/20 transition-colors"
                onClick={() => handleFeatureClick('stats')}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-lg opacity-90 font-opensans">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeIn('up')}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-merriweather font-bold text-blue-700 mb-4">
              Nuestros Programas Educativos
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Diseñados para inspirar curiosidad y fomentar el desarrollo integral en cada etapa.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer(0.2, 0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {programs.map((program, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up')}
                className="bg-white rounded-2xl shadow-xl overflow-hidden card-hover cursor-pointer flex flex-col"
                onClick={() => handleFeatureClick(program.title)}
              >
                <div className="relative h-56">
                  <img  
                    className="w-full h-full object-cover"
                    alt={program.alt}
                   src="https://images.unsplash.com/photo-1555121638-bb997817a76d" />
                  <div className="absolute top-4 right-4 w-14 h-14 bg-red-600 rounded-full flex items-center justify-center shadow-md">
                    <program.icon className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-xl font-merriweather font-semibold text-gray-900">
                      {program.title}
                    </h3>
                    <span className="text-sm text-blue-700 font-medium bg-blue-100 px-3 py-1 rounded-full">
                      {program.age}
                    </span>
                  </div>
                  <p className="text-gray-700 mb-4 flex-grow">
                    {program.description}
                  </p>
                  <Button variant="link" className="text-blue-700 self-start px-0 hover:text-red-600">
                    Conocer Más <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeIn('up')}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-merriweather font-bold text-red-600 mb-4">
              Lo que dicen nuestras familias
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Testimonios reales de padres que confían en nuestra educación y calidez humana.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer(0.2, 0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up')}
                className="bg-blue-50 p-8 rounded-2xl card-hover cursor-pointer shadow-lg flex flex-col items-center text-center"
                onClick={() => handleFeatureClick('testimonials')}
              >
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4 shadow-md">
                  <img  
                    className="w-full h-full object-cover" 
                    alt={testimonial.image}
                   src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic text-sm">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-merriweather font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-700">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={fadeIn('up')}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <MessageSquareHeart className="w-16 h-16 mx-auto mb-6 text-white" />
            <h2 className="text-3xl md:text-4xl font-merriweather font-bold mb-6">
              ¿Listo para formar parte de nuestra gran familia?
            </h2>
            <p className="text-xl text-white/90 mb-10">
              Inscripciones abiertas para el próximo ciclo escolar. ¡Te esperamos con los brazos abiertos!
            </p>
            <motion.div 
                variants={staggerContainer(0.2, 0.3)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
              <motion.div variants={fadeIn('up')}>
                <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto bg-white text-red-600 hover:bg-gray-100 px-10 py-4 text-lg font-opensans shadow-lg transform hover:scale-105 transition-transform">
                  <Link to="/inscripciones">
                    <Users className="mr-2 w-5 h-5" />
                    Solicitar Información
                  </Link>
                </Button>
              </motion.div>
              <motion.div variants={fadeIn('up')}>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-red-600 px-10 py-4 text-lg font-opensans shadow-lg transform hover:scale-105 transition-transform"
                  onClick={() => handleFeatureClick('schedule-visit')}
                >
                  <Calendar className="mr-2 w-5 h-5" />
                  Agendar Visita
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
