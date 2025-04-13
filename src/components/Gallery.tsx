
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const images = [
    {
      src: "/lovable-uploads/770c7c19-8ec6-4a0b-9b29-977f8bb4d814.png",
      alt: "Kaaba in Makkah at night"
    },
    {
      src: "/lovable-uploads/587c40a4-3d4e-4b57-9ad5-ef215b78888d.png",
      alt: "Pilgrims in ihram at Kaaba"
    },
    {
      src: "/lovable-uploads/33b86d54-c341-4600-92ce-9f7d031dba4b.png",
      alt: "Prophet's Mosque in Madinah with green dome"
    },
    {
      src: "/lovable-uploads/b56fb742-ca69-4f52-b413-6977547f94ba.png",
      alt: "Masjid Nabawi in Madinah"
    },
    {
      src: "/lovable-uploads/3012d280-6c9c-4426-9af3-f24e82234602.png",
      alt: "Aerial view of Masjid al-Haram during Hajj"
    },
    {
      src: "/lovable-uploads/a1f2bedc-75f9-468e-9429-c9ab107174c1.png",
      alt: "Pilgrims at Mount Arafat during Hajj"
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
