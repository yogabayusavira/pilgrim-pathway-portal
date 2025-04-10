
import React from 'react';
import { Button } from "@/components/ui/button";
import { CalendarDays, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1537444532052-2afbf769b76c?q=80&w=2070')] bg-cover bg-center opacity-20 z-0"></div>
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/90 z-0"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          <span className="inline-block px-4 py-1 rounded-full bg-hajj-100 text-hajj-800 font-semibold text-sm mb-4 animate-fade-in">
            Trusted Hajj & Umrah Service Provider
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight animate-fade-up">
            Begin Your Sacred Journey to <span className="text-hajj-700">Makkah</span> & <span className="text-gold-500">Madinah</span>
          </h1>
          
          <p className="text-lg text-gray-700 mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Experience the spiritual journey of a lifetime with our comprehensive Hajj and Umrah packages. We handle all the details so you can focus on your spiritual connection.
          </p>
          
          <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <Button size="lg" className="bg-hajj-700 hover:bg-hajj-800 text-white gap-2">
              <CalendarDays size={20} />
              Book Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-hajj-700 text-hajj-700 hover:bg-hajj-50 gap-2">
              <Phone size={20} />
              Call Us
            </Button>
          </div>
          
          <div className="mt-12 flex items-center gap-6 animate-fade-up" style={{ animationDelay: "0.6s" }}>
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-hajj-100">
                  <img 
                    src={`https://randomuser.me/api/portraits/men/${20 + item}.jpg`} 
                    alt="Happy pilgrim" 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-gold-500">★</span>
                ))}
              </div>
              <p className="text-sm text-gray-600">From <span className="font-semibold">500+</span> satisfied pilgrims</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
