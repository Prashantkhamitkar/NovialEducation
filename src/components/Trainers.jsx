import React from "react";
import Trainer from "./Trainer"; // Make sure to import the Trainer component

const Trainers = () => {
  // Dummy data for trainers
  const trainers = [
    {
      id: 1,
      name: "John Doe",
      expertise: "Web Development",
      experience: 8,
      image: "https://via.placeholder.com/300",
      bio: "John is a passionate web developer with extensive experience in building modern web applications.",
      qualifications:
        "Bachelor's Degree in Computer Science, Full-Stack Developer Certification",
      contact: ["john@example.com", "+1234567890"],
    },
    {
      id: 2,
      name: "Jane Smith",
      expertise: "Data Science",
      experience: 6,
      image: "https://via.placeholder.com/300",
      bio: "Jane is a data science enthusiast with a strong background in statistical analysis and machine learning.",
      qualifications:
        "Master's Degree in Data Science, Data Analyst Certification",
      contact: ["jane@example.com", "+0987654321"],
    },
    // Add more dummy data for additional trainers
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {trainers.map((trainer) => (
        <Trainer
          key={trainer.id}
          name={trainer.name}
          expertise={trainer.expertise}
          experience={trainer.experience}
          image={trainer.image}
          bio={trainer.bio}
          qualifications={trainer.qualifications}
          contact={trainer.contact}
        />
      ))}
    </div>
  );
};

export default Trainers;
