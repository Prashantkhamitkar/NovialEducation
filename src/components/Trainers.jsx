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
      image:
        "https://images.unsplash.com/photo-1557862921-37829c790f19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW5kaWFuJTIwdGVhY2hlcnxlbnwwfHwwfHx8MA%3D%3D",
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
      image:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fHww",
      bio: "Jane is a data science enthusiast with a strong background in statistical analysis and machine learning.",
      qualifications:
        "Master's Degree in Data Science, Data Analyst Certification",
      contact: ["jane@example.com", "+0987654321"],
    },
    {
      id: 3,
      name: "Amit Kulkarni",
      expertise: "Devops",
      experience: 6,
      image:
        "https://media.istockphoto.com/id/1562983249/photo/portrait-of-happy-and-successful-businessman-indian-man-smiling-and-looking-at-camera.webp?b=1&s=170667a&w=0&k=20&c=z2tuWSfqvWQvucbL9nyjgHXIFvWqwE1CxwI7OoSk3sk=",
      bio: "Jane is a data science enthusiast with a strong background in statistical analysis and machine learning.",
      qualifications:
        "Master's Degree in Data Science, Data Analyst Certification",
      contact: ["amit@example.com", "+0987654321"],
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
