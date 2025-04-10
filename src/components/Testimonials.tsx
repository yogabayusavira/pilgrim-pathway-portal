
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Ahmed Mohammed",
      location: "New York, USA",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
      text: "Al-Ihsan Travels made my first Umrah journey incredibly smooth. Their attention to detail, from hotel accommodations near the Haram to the knowledgeable guides, enhanced my spiritual experience. I highly recommend their services to anyone planning their first pilgrimage.",
      package: "Premium Umrah Package"
    },
    {
      id: 2,
      name: "Fatima Abdullah",
      location: "London, UK",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
      text: "I was hesitant about performing Hajj due to the logistics involved, but Al-Ihsan made everything seamless. The pre-departure training sessions were extremely helpful, and their arrangements during the days of Hajj were excellent. Their team was always available to assist and guide us throughout.",
      package: "Hajj Journey Package"
    },
    {
      id: 3,
      name: "Omar Khan",
      location: "Toronto, Canada",
      image: "https://randomuser.me/api/portraits/men/55.jpg",
      rating: 4,
      text: "Traveling with my elderly parents for Umrah was a concern, but Al-Ihsan Travels provided exceptional service with special care for their needs. The proximity of our hotel to Masjid al-Haram made it convenient for my parents. The guides were patient and accommodating to our pace.",
      package: "Essential Umrah Package"
    },
    {
      id: 4,
      name: "Aisha Rahman",
      location: "Sydney, Australia",
      image: "https://randomuser.me/api/portraits/women/66.jpg",
      rating: 5,
      text: "My experience with Al-Ihsan for Hajj was truly life-changing. Their organization during the critical days of Hajj was impeccable. The scholars accompanying us provided valuable insights and guidance. The accommodations and transportation were comfortable, allowing us to focus on our worship.",
      package: "Hajj Journey Package"
    },
    {
      id: 5,
      name: "Yusuf Ibrahim",
      location: "Chicago, USA",
      image: "https://randomuser.me/api/portraits/men/77.jpg",
      rating: 5,
      text: "The Premium Umrah package was worth every penny. The hotels were excellent, and the private transport made our movements between sites very comfortable. The highlight was the knowledgeable guide who explained the historical and spiritual significance of each site we visited.",
      package: "Premium Umrah Package"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right' | null>(null);

  const handlePrev = () => {
    setDirection('left');
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection('right');
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="section-padding hajj-gradient text-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold-300 font-medium">TESTIMONIALS</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">What Our Pilgrims Say</h2>
          <p className="text-white/80">
            Hear from those who have embarked on their sacred journeys with us and 
            experienced the care, professionalism, and spiritual guidance we provide.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-xl bg-white/10 backdrop-blur-sm p-6 md:p-10">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`transition-opacity duration-500 ${
                  index === activeIndex ? 'opacity-100' : 'opacity-0 absolute top-0 left-0'
                }`}
                style={{ display: index === activeIndex ? 'block' : 'none' }}
              >
                <div className="flex flex-col md:flex-row gap-6 items-start md:items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-20 h-20 rounded-full border-4 border-gold-500"
                  />
                  <div>
                    <h3 className="text-xl font-bold">{testimonial.name}</h3>
                    <p className="text-white/70">{testimonial.location}</p>
                    <div className="flex mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={16} 
                          className={i < testimonial.rating ? "fill-gold-500 text-gold-500" : "text-white/30"}
                        />
                      ))}
                    </div>
                    <span className="inline-block mt-2 px-3 py-1 bg-white/20 rounded-full text-sm">
                      {testimonial.package}
                    </span>
                  </div>
                </div>

                <blockquote className="text-lg md:text-xl italic text-white/90 mb-6">
                  "{testimonial.text}"
                </blockquote>
              </div>
            ))}

            <div className="flex justify-between mt-8">
              <Button 
                variant="outline" 
                size="icon" 
                className="border-white/30 text-white hover:bg-white/10 hover:border-white"
                onClick={handlePrev}
              >
                <ChevronLeft size={20} />
              </Button>
              
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === activeIndex ? 'bg-gold-500' : 'bg-white/30 hover:bg-white/50'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <Button 
                variant="outline" 
                size="icon" 
                className="border-white/30 text-white hover:bg-white/10 hover:border-white"
                onClick={handleNext}
              >
                <ChevronRight size={20} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
