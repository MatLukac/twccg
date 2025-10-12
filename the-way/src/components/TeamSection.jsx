import React from "react";

const teamMembers = [
  {
    name: "Alfonz",
    role: "spravca",
    image: `${process.env.PUBLIC_URL}/materials/peter_the_apostle.png`,
  },
  {
    name: "Zoro",
    role: "spravca",
    image: `${process.env.PUBLIC_URL}/materials/peter_the_apostle.png`,
  },
  {
    name: "Laszlo",
    role: "spravca",
    image: `${process.env.PUBLIC_URL}/materials/peter_the_apostle.png`,
  },
  {
    name: "Dano",
    role: "spravca",
    image: `${process.env.PUBLIC_URL}/materials/peter_the_apostle.png`,
  },
];

export default function TeamSection() {
  return (
    <section className="py-16 mt-4 text-center bg-white">
      <h2 className="mb-20 text-4xl font-extrabold text-black">
        Toto je náš tím:
      </h2>
     

      <div className="flex flex-wrap justify-center gap-10">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={member.image}
              alt={member.name}
              className="object-cover w-40 h-40 mb-4 rounded-full shadow-md"
            />
            <h3 className="text-lg font-semibold text-gray-700 hover:text-gray-900">
              {member.name}
            </h3>
          </div>
        ))}
      </div>

      <button className="px-6 py-3 mt-10 font-medium text-gray-700 transition border-2 border-gray-700 rounded-full hover:bg-gray-700 hover:text-white">
        O našej značke
      </button>
    </section>
  );
}
