
import React from 'react';
import { Shield, Award, Users, Clock } from 'lucide-react';

const About = () => {
  const features = [
    { 
      icon: <Shield className="w-10 h-10 text-hajj-700" />,
      title: "Licensed Provider",
      description: "Officially licensed and recognized by Saudi authorities to provide Hajj and Umrah services."
    },
    { 
      icon: <Award className="w-10 h-10 text-hajj-700" />,
      title: "15+ Years Experience",
      description: "Over 15 years of experience guiding pilgrims through their sacred journey with care."
    },
    { 
      icon: <Users className="w-10 h-10 text-hajj-700" />,
      title: "Expert Guides",
      description: "Multilingual guides with deep knowledge of rituals and the history of holy sites."
    },
    { 
      icon: <Clock className="w-10 h-10 text-hajj-700" />,
      title: "24/7 Support",
      description: "Round-the-clock support before, during, and after your pilgrimage for your peace of mind."
    }
  ];

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold-500 font-medium">WHO WE ARE</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Your Trusted Partner for Hajj & Umrah</h2>
          <p className="text-gray-600">
            Al-Ihsan Travels has been serving pilgrims with dedication and excellence for over 15 years. 
            Our mission is to make your sacred journey comfortable, meaningful, and spiritually rewarding.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-700">
              Founded in 2008, Al-Ihsan Travels has grown to become one of the most trusted Hajj and Umrah service providers. 
              What sets us apart is our unwavering commitment to the spiritual wellbeing of our pilgrims.
            </p>
            <p className="text-gray-700">
              We understand that Hajj and Umrah are once-in-a-lifetime experiences for many Muslims, and we take the responsibility 
              of facilitating these journeys with the utmost seriousness and care.
            </p>
            <p className="text-gray-700">
              Our team consists of experienced professionals who have performed Hajj and Umrah numerous times. 
              This practical experience, combined with our logistical expertise, ensures that your pilgrimage is seamless and focused on worship.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-hajj-700">15k+</div>
                <p className="text-gray-600">Pilgrims Served</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-hajj-700">98%</div>
                <p className="text-gray-600">Satisfaction Rate</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-hajj-700">25+</div>
                <p className="text-gray-600">Expert Guides</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-hajj-700">100%</div>
                <p className="text-gray-600">Visa Success</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="/lovable-uploads/770c7c19-8ec6-4a0b-9b29-977f8bb4d814.png" 
              alt="Kaaba in Makkah" 
              className="rounded-lg shadow-xl w-full object-cover h-[500px]"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
              <img 
                src="/lovable-uploads/587c40a4-3d4e-4b57-9ad5-ef215b78888d.png" 
                alt="Pilgrims in ihram at Kaaba" 
                className="rounded-lg w-32 h-32 object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-24">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
