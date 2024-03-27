import React, { useState } from "react";

const CorporateTraining = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div
      className="grid bg-gradient-to-br from-purple-200 to-purple-300
 grid-cols-1 pl-[6rem]   pb-[3rem] md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {/* Section 1: Information about corporate training programs */}
      <div
        className="bg-white mt-[3rem]  cursor-pointer hover:scale-110 duration-100 ease-in-out  rounded-lg overflow-hidden shadow-md p-6"
        style={{ width: "80%" }}
      >
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29ycG9yYXRlJTIwdHJhaW5pbmclMjBwaG90b3N8ZW58MHx8MHx8fDA%3D"
          alt="Corporate Training Programs"
          className="w-full h-auto mb-4"
        />
        <h2 className="text-xl font-semibold mb-4">
          Corporate Training Programs
        </h2>
        <p className="text-gray-700">
          Our corporate training programs offer comprehensive learning
          experiences tailored to meet the unique needs of your organization.
          With expert instructors and hands-on training, we ensure that your
          employees gain the skills and knowledge necessary to excel in their
          roles.
        </p>
      </div>

      {/* Section 2: Customized training solutions for businesses */}
      <div
        className="bg-white mt-[3rem] cursor-pointer hover:scale-110 duration-100 ease-in-out  rounded-lg overflow-hidden shadow-md p-6"
        style={{ width: "80%" }}
      >
        <img
          src="https://images.unsplash.com/photo-1552581234-26160f608093?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRyYWluaW5nfGVufDB8fDB8fHww"
          alt="Customized Training Solutions"
          className="w-full h-auto mb-4"
        />
        <h2 className="text-xl font-semibold mb-4">
          Customized Training Solutions
        </h2>
        <p className="text-gray-700">
          Our customized training solutions are designed to address the specific
          challenges and goals of your business. Whether you need to upskill
          your workforce in emerging technologies or improve team collaboration,
          we work closely with you to develop training programs that deliver
          measurable results.
        </p>
      </div>

      {/* Section 3: Inquiry form for corporate training needs */}
      <div
        className="bg-white mt-[3rem] cursor-pointer hover:scale-110 duration-100  ease-in-out  rounded-lg overflow-hidden shadow-md p-6"
        style={{ width: "80%" }}
      >
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-xl font-semibold mb-4">Inquiry Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-semibold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-700 font-semibold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
                placeholder="Enter your message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-md transition duration-300 hover:shadow-md"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CorporateTraining;
