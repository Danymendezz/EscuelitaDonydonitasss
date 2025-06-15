import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Camera, 
  Play, 
  Calendar, 
  Users, 
  Award,
  Heart,
  Star,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const GalleryCategoryButton = ({ category, selectedCategory, onClick }) => (
  <Button
    variant={selectedCategory === category.id ? "default" : "outline"}
    className={`flex items-center space-x-2 font-opensans ${
      selectedCategory === category.id 
        ? 'bg-blue-700 text-white hover:bg-blue-800' 
        : 'border-gray-300 text-gray-700 hover:bg-blue-50'
    }`}
    onClick={() => onClick(category.id)}
  >
    <category.icon className="w-4 h-4" />
    <span>{category.name}</span>
  </Button>
);

const GalleryItemCard = ({ item, index, onImageSelect }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover cursor-pointer"
    onClick={() => onImageSelect(item)}
  >
    <div className="relative h-64 overflow-hidden">
      <img  
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        alt={item.title}
       src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
      <div className="absolute top-4 right-4">
        <span className="bg-white/90 text-gray-800 px-2 py-1 rounded-full text-xs font-medium font-opensans">
          {item.categoryName}
        </span>
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-lg font-merriweather font-semibold text-gray-900 mb-2">
        {item.title}
      </h3>
      <p className="text-gray-700 mb-3 font-opensans">
        {item.description}
      </p>
      <div className="flex items-center text-sm text-gray-600 font-opensans">
        <Calendar className="w-4 h-4 mr-1" />
        {item.date}
      </div>
    </div>
  </motion.div>
);

const ImageModal = ({ image, onClose, onShare }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0.8 }}
      className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden font-opensans"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="relative">
        <img  
          className="w-full h-96 object-cover"
          alt={image.title}
         src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 bg-white/90 hover:bg-white"
          onClick={onClose}
        >
          <X className="w-6 h-6" />
        </Button>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-merriweather font-bold text-gray-900 mb-2">
          {image.title}
        </h3>
        <p className="text-gray-700 mb-4">
          {image.description}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center text-gray-600">
            <Calendar className="w-4 h-4 mr-2" />
            {image.date}
          </div>
          <Button 
            variant="outline"
            className="border-blue-700 text-blue-700 hover:bg-blue-50"
            onClick={() => onShare('share')}
          >
            Compartir
          </Button>
        </div>
      </div>
    </motion.div>
  </motion.div>
);


const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClick = (action) => {
    toast({
      title: "🚧 Esta función aún no está implementada",
      description: "¡No te preocupes! Puedes solicitarla en tu próximo mensaje 🚀",
    });
  };

  const categories = [
    { id: 'all', name: 'Todas', icon: Camera },
    { id: 'events', name: 'Eventos', icon: Calendar },
    { id: 'classrooms', name: 'Salones', icon: Users },
    { id: 'activities', name: 'Actividades', icon: Play },
    { id: 'awards', name: 'Logros', icon: Award }
  ];

  const galleryItemsData = [
    { id: 1, category: 'events', title: 'Festival de Primavera 2023', description: 'Celebración anual con presentaciones artísticas', image: 'Niños en coloridos trajes típicos presentándose en el festival escolar', date: 'Marzo 2023' },
    { id: 2, category: 'classrooms', title: 'Aula de Preescolar', description: 'Espacios diseñados para el aprendizaje lúdico', image: 'Aula de preescolar moderna y colorida con materiales didácticos y área de juegos', date: 'Instalaciones 2023' },
    { id: 3, category: 'activities', title: 'Taller de Ciencias', description: 'Experimentos y descubrimientos científicos', image: 'Estudiantes realizando experimentos científicos en el laboratorio escolar', date: 'Octubre 2023' },
    { id: 4, category: 'events', title: 'Día del Niño', description: 'Celebración especial con juegos y actividades', image: 'Niños felices jugando en el patio escolar durante la celebración del Día del Niño', date: 'Abril 2023' },
    { id: 5, category: 'classrooms', title: 'Biblioteca Escolar', description: 'Espacio de lectura y investigación', image: 'Biblioteca escolar moderna con estantes de libros y área de lectura cómoda', date: 'Instalaciones 2023' },
    { id: 6, category: 'activities', title: 'Clase de Arte', description: 'Desarrollo de la creatividad y expresión artística', image: 'Estudiantes pintando y creando arte en el taller de artes plásticas', date: 'Noviembre 2023' },
    { id: 7, category: 'awards', title: 'Concurso de Matemáticas', description: 'Primer lugar en competencia regional', image: 'Estudiantes recibiendo medallas y trofeos en ceremonia de premiación', date: 'Septiembre 2023' },
    { id: 8, category: 'events', title: 'Graduación 2023', description: 'Ceremonia de graduación de sexto grado', image: 'Estudiantes de sexto grado en toga y birrete durante la ceremonia de graduación', date: 'Julio 2023' },
    { id: 9, category: 'activities', title: 'Educación Física', description: 'Desarrollo físico y trabajo en equipo', image: 'Niños jugando deportes en el patio escolar durante la clase de educación física', date: 'Durante el año' },
    { id: 10, category: 'classrooms', title: 'Laboratorio de Cómputo', description: 'Tecnología al servicio del aprendizaje', image: 'Estudiantes trabajando en computadoras en el laboratorio de tecnología', date: 'Instalaciones 2023' },
    { id: 11, category: 'events', title: 'Obra de Teatro', description: 'Presentación teatral de fin de curso', image: 'Niños actuando en una obra de teatro en el auditorio escolar', date: 'Junio 2023' },
    { id: 12, category: 'activities', title: 'Huerto Escolar', description: 'Aprendizaje sobre naturaleza y sustentabilidad', image: 'Estudiantes cuidando plantas en el huerto escolar y aprendiendo sobre agricultura', date: 'Todo el año' }
  ];
  
  const galleryItemsWithCategoryName = galleryItemsData.map(item => ({
    ...item,
    categoryName: categories.find(cat => cat.id === item.category)?.name || ''
  }));

  const filteredItems = selectedCategory === 'all' 
    ? galleryItemsWithCategoryName 
    : galleryItemsWithCategoryName.filter(item => item.category === selectedCategory);

  const statsData = [
      { number: "500+", label: "Fotos del año", icon: Camera },
      { number: "25", label: "Eventos especiales", icon: Calendar },
      { number: "12", label: "Logros destacados", icon: Award },
      { number: "100%", label: "Momentos felices", icon: Heart }
  ];

  const visualTestimonials = [
      { quote: "Las sonrisas de los niños en cada evento son la mejor muestra de su felicidad", author: "Dra. María Elena Rodríguez", role: "Directora General", image: "Directora sonriendo con estudiantes en un evento escolar" },
      { quote: "Cada logro académico se refleja en el orgullo de nuestros estudiantes", author: "Lic. Carlos Mendoza", role: "Coordinador Académico", image: "Coordinador celebrando con estudiantes que reciben premios académicos" },
      { quote: "La creatividad y el arte florecen en cada rincón de nuestra escuela", author: "Mtra. Ana Sofía López", role: "Coordinadora de Preescolar", image: "Maestra con niños pequeños mostrando sus obras de arte" }
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
              Galería
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Momentos especiales, logros y la vida diaria en nuestra escuela
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
              alt="Estudiantes felices en actividades escolares"
             src="https://images.unsplash.com/photo-1520778166-93b06a2ce71a" />
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <GalleryCategoryButton 
                key={category.id} 
                category={category} 
                selectedCategory={selectedCategory} 
                onClick={setSelectedCategory} 
              />
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredItems.map((item, index) => (
              <GalleryItemCard 
                key={item.id} 
                item={item} 
                index={index} 
                onImageSelect={setSelectedImage} 
              />
            ))}
          </motion.div>
        </div>
      </section>

      {selectedImage && (
        <ImageModal 
          image={selectedImage} 
          onClose={() => setSelectedImage(null)} 
          onShare={handleClick} 
        />
      )}

      <section className="py-20 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-merriweather font-bold mb-4">
              Momentos Capturados
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Cada imagen cuenta una historia de crecimiento, aprendizaje y alegría
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {statsData.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="cursor-pointer"
                onClick={() => handleClick('stats')}
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-lg opacity-90">
                  {stat.label}
                </div>
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
              Lo que Dicen las Imágenes
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Cada fotografía refleja la felicidad y el crecimiento de nuestros estudiantes
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {visualTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-blue-50 p-6 rounded-2xl card-hover cursor-pointer"
                onClick={() => handleClick('testimonial')}
              >
                <div className="relative h-48 mb-4 rounded-xl overflow-hidden">
                  <img  
                    className="w-full h-full object-cover"
                    alt={`${testimonial.author} - ${testimonial.role}`}
                   src="https://images.unsplash.com/photo-1644424235476-295f24d503d9" />
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-merriweather font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-700">{testimonial.role}</p>
                </div>
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
              ¿Quieres ser parte de estos momentos especiales?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Únete a nuestra familia escolar y crea recuerdos inolvidables
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="lg" 
                className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 text-lg font-opensans"
                onClick={() => handleClick('visit')}
              >
                Visitar la Escuela
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 text-lg font-opensans"
                onClick={() => handleClick('album')}
              >
                Ver Álbum Completo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;