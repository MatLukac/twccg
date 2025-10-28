import React from "react";
import ContactForm from "./ContactForm";
import { Mail, Phone, MapPin, Clock, Instagram, Facebook, Youtube } from "lucide-react";

const ContactHeroSection = () => {
  return (
    <section className="py-20 mx-2 my-10 bg-[#FCF5DC] rounded-2xl md:m-14">
      <div className="container px-6 mx-auto md:flex md:items-center md:justify-between">
        {/* Text */}
        <div className="pl-10 md:w-1/2">
          <h1 className="mb-4 text-2xl font-bold text-gray-800 md:text-4xl">
            Kontaktujte nás
          </h1>
          <p className="mb-6 text-gray-600">
            Neváhajte sa na nás obrátiť s otázkami, pripomienkami a požiadavkami.
          </p>
          <div className="space-y-2">
            
              <a href="mailto:thewayccg@gmail.com" className="flex items-center space-x-1 transition hover:text-gray-500">
                <Mail className="w-4 h-4 mr-2 text-gray-900" />
                <span>thewayccg@gmail.com</span>
              </a>

            {/* <p className="text-gray-700">
              {/* <a href="mailto:thewayccg@gmail.com" className="flex items-center space-x-1 transition hover:text-gray-500">
                 <Phone className="w-4 h-4 mr-2 text-gray-900" />
                <span>+421 904 068 544</span>
              </a> 
            </p> */}
          </div>
        </div>

        
        <div className="mt-10 md:mt-0 md:w-1/2">
          <ContactForm/>
        </div>
      </div>
    </section>
  );
};

export default ContactHeroSection;
