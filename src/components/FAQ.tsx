
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What is the difference between Hajj and Umrah?",
      answer: "Hajj is the annual Islamic pilgrimage to Makkah that is mandatory for Muslims to perform at least once in their lifetime if they are physically and financially capable. It takes place during specific days in the Islamic month of Dhul Hijjah. Umrah, on the other hand, is a voluntary pilgrimage that can be performed at any time of the year. While Hajj has specific rituals performed over several days, Umrah involves fewer rituals and can be completed in a few hours."
    },
    {
      question: "When should I book my Hajj or Umrah package?",
      answer: "For Hajj, we recommend booking at least 8-10 months in advance as spaces fill quickly and visa processing takes time. For Umrah, booking 2-3 months ahead is advisable, though during peak seasons like Ramadan, earlier booking is recommended. Early booking also typically secures better rates and accommodation options closer to the Haram."
    },
    {
      question: "What documents do I need for Hajj and Umrah?",
      answer: "Required documents typically include a valid passport with at least 6 months validity beyond your return date, completed visa application forms, passport-sized photographs with specific requirements, proof of vaccination (including meningitis ACWY and seasonal vaccines), and for women under 45 traveling without a Mahram, additional documentation may be required. Our team will provide a comprehensive checklist based on the latest requirements from Saudi authorities."
    },
    {
      question: "What is included in your Hajj and Umrah packages?",
      answer: "Our packages typically include international flights, visa processing, accommodation in Makkah and Madinah, transportation between cities and holy sites, guided religious tours, assistance with performing rituals, meals as specified in the package details, and 24/7 support during your journey. Some packages may also include Ziyarat (visits) to historical sites, seminars by scholars, and special amenities. Custom packages can be tailored to include additional services as needed."
    },
    {
      question: "How can I prepare physically and spiritually for Hajj?",
      answer: "Physical preparation includes starting a fitness routine 3-6 months before departure, focusing on walking endurance and strength training. Practice walking in your Ihram clothing and sandals. Consult your doctor about health precautions. For spiritual preparation, learn about the rituals and their significance, practice patience and tolerance, increase your good deeds and prayers, seek forgiveness for past sins, and resolve any outstanding issues or conflicts with others. Our pre-departure orientation sessions provide detailed guidance on both physical and spiritual preparation."
    },
    {
      question: "What accommodations do you offer in Makkah and Madinah?",
      answer: "We offer a range of accommodations from 3-star to 5-star hotels at various distances from the Haram in both Makkah and Madinah. Our packages specify the hotel category, distance from Haram, and room type (e.g., double, triple, quad). For Hajj packages, we also arrange for tents in Mina and Arafat according to the package level. All accommodations are carefully selected for cleanliness, service quality, and convenience for pilgrims."
    },
    {
      question: "Do you provide assistance for elderly or disabled pilgrims?",
      answer: "Yes, we offer special assistance for elderly and disabled pilgrims, including wheelchair arrangements, special transportation services, accessible room options where available, and dedicated helpers for Tawaf and Sa'i rituals if needed. We recommend discussing specific requirements at the time of booking so we can make appropriate arrangements. There may be additional charges for some specialized services."
    },
    {
      question: "What happens if Saudi Arabia changes Hajj or Umrah regulations?",
      answer: "Saudi authorities occasionally update regulations for pilgrims. In such cases, we immediately adapt our services to comply with new requirements and inform all our clients promptly. Our team stays continuously updated with the latest announcements from Saudi authorities. If changes affect your package significantly, we'll discuss options with you, which may include modifications to your itinerary or, in rare cases, rescheduling. We strive to minimize disruptions while ensuring compliance with all regulations."
    }
  ];

  return (
    <section id="faq" className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold-500 font-medium">COMMON QUESTIONS</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600">
            Find answers to common questions about Hajj, Umrah, and our services. 
            If you don't see your question here, please contact us directly.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left font-medium text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-700 mb-4">Still have questions about our Hajj or Umrah services?</p>
          <a 
            href="#contact" 
            className="inline-block px-6 py-3 bg-hajj-700 hover:bg-hajj-800 text-white rounded-lg transition-colors"
          >
            Contact Our Team
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
