import React from "react";
import { Link } from "react-router-dom";
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
    <div className="bg-white rounded-lg mt-4 overflow-hidden shadow-md ml-[3rem] mr-[3rem]">
      <img src={image} alt={name} className="w-full h-64 object-contain" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-700 mb-2">Expertise: {expertise}</p>
        <p className="text-gray-700 mb-2">Experience: {experience} years</p>
        <p className="text-gray-700 mb-4">{bio}</p>
        <p className="text-gray-700 mb-2">Qualifications: {qualifications}</p>
        <div className="flex items-center mb-4">
          {contact.map((contactInfo, index) => (
            <Link
              key={index}
              to={`mailto:${contactInfo}`}
              className="text-blue-500 hover:underline mr-4"
            >
              {contactInfo}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trainer;
