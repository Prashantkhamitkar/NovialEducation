import React from "react";

const Trainer = ({
  name,
  expertise,
  experience,
  image,
  bio,
  qualifications,
  contact,
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <img src={image} alt={name} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-700 mb-2">Expertise: {expertise}</p>
        <p className="text-gray-700 mb-2">Experience: {experience} years</p>
        <p className="text-gray-700 mb-4">{bio}</p>
        <p className="text-gray-700 mb-2">Qualifications: {qualifications}</p>
        <div className="flex items-center mb-4">
          {contact.map((contactInfo, index) => (
            <a
              key={index}
              href={`mailto:${contactInfo}`}
              className="text-blue-500 hover:underline mr-4"
            >
              {contactInfo}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trainer;
