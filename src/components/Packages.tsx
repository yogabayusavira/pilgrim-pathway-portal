
import React from 'react';
import { Button } from "@/components/ui/button";
import { Check, CalendarDays, Users, Coffee, Clock, Plane, Bed, Utensils, Map } from "lucide-react";

const Packages = () => {
  const packages = [
    {
      id: "umrah-basic",
      name: "Essential Umrah",
      subtitle: "10 Days Package",
      price: "2,499",
      description: "Perfect for first-time pilgrims seeking a comprehensive yet affordable Umrah experience.",
      popularLabel: false,
      features: [
        "Economy class flights",
        "3-star hotel accommodations",
        "Daily breakfast",
        "Guided Umrah rituals",
        "Transportation between cities",
        "Visit to historical sites in Makkah",
        "Group Ziyarah in Madinah",
        "Visa processing assistance"
      ],
      hotelDistance: "800m from Haram",
      roomType: "Double or Triple sharing",
      icon: <CalendarDays className="w-5 h-5" />
    },
    {
      id: "umrah-premium",
      name: "Premium Umrah",
      subtitle: "14 Days Package",
      price: "3,999",
      description: "Enhanced comfort and extended stay for a more relaxed and spiritually fulfilling experience.",
      popularLabel: true,
      features: [
        "Economy plus flights",
        "4-star hotel accommodations",
        "Breakfast and dinner daily",
        "Private Umrah guidance",
        "Premium transportation",
        "Extended Ziyarah program",
        "Historical sites in both cities",
        "Specialized religious lectures",
        "Dedicated group leader",
        "Visa & documentation handling"
      ],
      hotelDistance: "400m from Haram",
      roomType: "Double sharing",
      icon: <Users className="w-5 h-5" />
    },
    {
      id: "hajj-standard",
      name: "Hajj Journey",
      subtitle: "21 Days Package",
      price: "7,999",
      description: "Complete Hajj package with all necessary arrangements for this once-in-a-lifetime obligation.",
      popularLabel: false,
      features: [
        "Return international flights",
        "4-star hotel accommodations",
        "Premium camp in Mina & Arafat",
        "All meals included",
        "Exclusive transport during Hajj",
        "Comprehensive Hajj training",
        "Qualified scholars throughout",
        "Ihram clothing provided",
        "Sacrifice arrangement",
        "VIP visa processing"
      ],
      hotelDistance: "500m from Haram",
      roomType: "Double sharing",
      icon: <Map className="w-5 h-5" />
    }
  ];

  return (
    <section id="packages" className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold-500 font-medium">OUR PACKAGES</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Choose Your Sacred Journey</h2>
          <p className="text-gray-600">
            We offer carefully designed packages to suit different needs and preferences,
            ensuring a comfortable and spiritually fulfilling pilgrimage experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div 
              key={pkg.id}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow relative"
            >
              {pkg.popularLabel && (
                <div className="absolute top-6 right-0">
                  <div className="bg-gold-500 text-white text-sm font-bold py-1 px-4 rounded-l-full">
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="p-8">
                <div className="flex items-center gap-2 mb-2">
                  {pkg.icon}
                  <span className="text-sm font-medium text-gray-500">{pkg.subtitle}</span>
                </div>
                <h3 className="text-2xl font-bold mb-1">{pkg.name}</h3>
                <p className="text-gray-600 mb-6">{pkg.description}</p>
                
                <div className="flex items-baseline mb-6">
                  <span className="text-3xl font-bold">${pkg.price}</span>
                  <span className="text-gray-500 ml-2">/ person</span>
                </div>
                
                <div className="space-y-3 mb-8">
                  {pkg.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-hajj-600 shrink-0 mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-2">
                    <Bed className="w-5 h-5 text-hajj-700" />
                    <span className="text-gray-700">{pkg.hotelDistance}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-hajj-700" />
                    <span className="text-gray-700">{pkg.roomType}</span>
                  </div>
                </div>
                
                <Button className="w-full bg-hajj-700 hover:bg-hajj-800 text-white">
                  Book Now
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-hajj-50 rounded-xl p-8 mt-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Looking for a Custom Package?</h3>
              <p className="text-gray-600 mb-6">
                We understand that each pilgrim has unique needs. Contact us to create a customized 
                Hajj or Umrah package that perfectly suits your requirements and preferences.
              </p>
              <Button className="bg-hajj-700 hover:bg-hajj-800 text-white">Request Custom Quote</Button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg flex flex-col items-center text-center">
                <Plane className="w-10 h-10 text-hajj-600 mb-2" />
                <h4 className="font-semibold">Flight Options</h4>
                <p className="text-sm text-gray-500">Choose your preferred airline and class</p>
              </div>
              <div className="bg-white p-4 rounded-lg flex flex-col items-center text-center">
                <Bed className="w-10 h-10 text-hajj-600 mb-2" />
                <h4 className="font-semibold">Accommodation</h4>
                <p className="text-sm text-gray-500">Select hotels based on proximity and comfort</p>
              </div>
              <div className="bg-white p-4 rounded-lg flex flex-col items-center text-center">
                <Clock className="w-10 h-10 text-hajj-600 mb-2" />
                <h4 className="font-semibold">Duration</h4>
                <p className="text-sm text-gray-500">Adjust length of stay to your schedule</p>
              </div>
              <div className="bg-white p-4 rounded-lg flex flex-col items-center text-center">
                <Utensils className="w-10 h-10 text-hajj-600 mb-2" />
                <h4 className="font-semibold">Meal Plans</h4>
                <p className="text-sm text-gray-500">Choose from various dining options</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
