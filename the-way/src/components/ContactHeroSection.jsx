import React from "react";

const ContactHeroSection = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container px-6 mx-auto md:flex md:items-center md:justify-between">
        {/* Text */}
        <div className="md:w-1/2">
          <h1 className="mb-4 text-4xl font-bold text-gray-800">
            Kontaktujte nás
          </h1>
          <p className="mb-6 text-gray-600">
            Neváhajte sa na nás obrátiť s otázkami, pripomienkami a požiadavkami.
          </p>
          <div className="space-y-2">
            <p className="text-gray-700">
              <span className="font-semibold">Email:</span> info@lebomadved.sk
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Telefón:</span> +421 907 544 744
            </p>
          </div>
        </div>

        {/* Obrázok */}
        <div className="mt-10 md:mt-0 md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
            alt="Kontaktná sekcia"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactHeroSection;
