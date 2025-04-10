
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const images = [
    {
      src: "https://images.unsplash.com/photo-1591604621962-b6469122863a?q=80&w=2070",
      alt: "Prophet's Mosque in Madinah"
    },
    {
      src: "https://images.unsplash.com/photo-1564769623108-30de21a61b9b?q=80&w=2070",
      alt: "Kaaba during Umrah"
    },
    {
      src: "https://images.unsplash.com/photo-1535368459444-9bcb6089eb34?q=80&w=2070",
      alt: "Pilgrims at Mount Arafat"
    },
    {
      src: "https://images.unsplash.com/photo-1566624790190-511a09f6ddbd?q=80&w=2070",
      alt: "Pilgrims in Ihram"
    },
    {
      src: "https://images.unsplash.com/photo-1608693378126-304adb862b40?q=80&w=2070",
      alt: "Masjid al-Haram at night"
    },
    {
      src: "https://images.unsplash.com/photo-1557519583-fdf6ddf4e70a?q=80&w=1964",
      alt: "Journey to Mina"
    }
  ];

  const openLightbox = (src: string) => {
    setSelectedImage(src);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="gallery" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold-500 font-medium">GALLERY</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Sacred Moments Captured</h2>
          <p className="text-gray-600">
            Experience the beauty and spirituality of Hajj and Umrah through our gallery 
            featuring pilgrims and the holy sites of Makkah and Madinah.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all group cursor-pointer"
              onClick={() => openLightbox(image.src)}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                  <Button variant="outline" className="text-white border-white hover:bg-white/20">
                    View Larger
                  </Button>
                </div>
              </div>
              <div className="p-4 bg-white">
                <p className="text-gray-700 font-medium">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in" onClick={closeLightbox}>
            <div className="relative max-w-5xl max-h-[90vh]">
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute -top-12 right-0 text-white hover:bg-white/10"
                onClick={(e) => {
                  e.stopPropagation();
                  closeLightbox();
                }}
              >
                <X size={24} />
              </Button>
              <img 
                src={selectedImage} 
                alt="Enlarged view" 
                className="max-w-full max-h-[80vh] object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
