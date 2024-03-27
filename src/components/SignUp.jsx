import React, { useState } from "react";
import { motion } from "framer-motion";

const SignUp = ({ setLoginform, setregiform, loginform, regiform }) => {
  const [role, setrole] = useState("");
  const enablelogin = () => {
    setLoginform(!loginform);
    setregiform(!regiform);
  };
  const handleRoleChange = (e) => {
    setrole(e.target.value);
    // console.log(role);
  };
  const Studentregi = () => {
    const [filedata, setFiledata] = useState(null);
    const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      password: "",
      address: "",
      job: "",
      education: "",
      gender: "",
    });
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    };
    const filedatachange = (e) => {
      setFiledata(e.target.files[0]);
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      const datas = new FormData();
      datas.append("firstName", formData.firstName);
      datas.append("lastName", formData.lastName);
      datas.append("phone", formData.phone);
      datas.append("email", formData.email);
      datas.append("password", formData.password);
      datas.append("address", formData.address);
      datas.append("education", formData.education);
      datas.append("job", formData.job);
      datas.append("gender", formData.gender);
      datas.append("file", filedata);

      for (let pair of datas.entries()) {
        console.log(pair[0] + ": " + pair[1]);
      }
      // Print form data to console
      // Call backend API to submit form data here
    };
    return (
      <>
        <div className="mt-28 ml-8 flex flex-wrap flex-col">
          <h1 className="text-gray-700 font-medium text-2xl md:text-4xl mb-1">
            Elevate your <span className="text-gray-900">coding prowess</span>{" "}
          </h1>

          <form
            onSubmit={handleSubmit}
            className="md:ml-8  justify-center items-start ml-0"
            encType="multipart/form-data"
          >
            <div className="mt-3">
              <label
                htmlFor="firstName"
                className="block text-sm font-sm leading-6 text-gray-900"
              >
                <h4 className="text-gray-800 font-normal cursor-auto text-md">
                  First Name
                  <sup className="text-red-500 text-sm font-bold">*</sup>
                </h4>
              </label>
              <div className="relative mt-2 rounded-md shadow-sm">
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="block lg:w-[30rem]   rounded-md border-0 py-1.5 pl-3 pr-[3rem] md:pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 md:text-lg sm:text-sm sm:leading-6"
                  placeholder="Enter Your First Name"
                  required
                />
              </div>
            </div>

            <div className="mt-3">
              <label
                htmlFor="lastName"
                className="block text-sm font-sm leading-6 text-gray-900"
              >
                <h4 className="text-gray-800 font-normal cursor-auto text-md">
                  Last Name
                  <sup className="text-red-500 text-sm font-bold">*</sup>
                </h4>
              </label>
              <div className="relative mt-2 rounded-md shadow-sm">
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="block lg:w-[30rem]   rounded-md border-0 py-1.5 pl-3 pr-[3rem] md:pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 md:text-lg sm:text-sm sm:leading-6"
                  placeholder="Enter Your Last Name"
                />
              </div>
            </div>

            <div className="mt-3">
              <label
                htmlFor="phone"
                className="block text-sm font-sm leading-6 text-gray-900"
              >
                <h4 className="text-gray-800 font-normal cursor-auto text-md">
                  Phone
                  <sup className="text-red-500 text-sm font-bold">*</sup>
                </h4>
              </label>
              <div className="relative mt-2 rounded-md shadow-sm">
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  className="block lg:w-[30rem]   rounded-md border-0 py-1.5 pl-3 pr-[3rem] md:pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 md:text-lg sm:text-sm sm:leading-6"
                  placeholder="Enter Your Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="mt-3">
              <label
                htmlFor="email1"
                className="block text-sm font-sm leading-6 text-gray-900"
              >
                <h4 className="text-gray-800 font-normal cursor-auto text-md">
                  Email Address
                  <sup className="text-red-500 text-sm font-bold">*</sup>
                </h4>
              </label>
              <div className="relative mt-2 rounded-md shadow-sm">
                <input
                  type="text"
                  name="email"
                  id="email1"
                  className="block lg:w-[30rem]   rounded-md border-0 py-1.5 pl-3 pr-[3rem] md:pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 md:text-lg sm:text-sm sm:leading-6"
                  placeholder="Enter Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="mt-3">
              <label
                htmlFor="password"
                className="block text-sm font-sm leading-6 text-gray-900"
              >
                <h4 className="text-gray-800 font-normal cursor-auto text-md">
                  Enter Password
                  <sup className="text-red-500 text-sm font-bold">*</sup>
                </h4>
              </label>
              <div className="relative mt-2 rounded-md shadow-sm">
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="block lg:w-[30rem]   rounded-md border-0 py-1.5 pl-3 pr-[3rem] md:pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 md:text-lg sm:text-sm sm:leading-6"
                  placeholder="Enter Your Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="mt-3">
              <label
                htmlFor="address"
                className="block text-sm font-sm leading-6 text-gray-900"
              >
                <h4 className="text-gray-800 font-normal cursor-auto text-md">
                  Address
                  <sup className="text-red-500 text-sm font-bold">*</sup>
                </h4>
              </label>
              <div className="relative mt-2 rounded-md shadow-sm">
                <input
                  type="text"
                  name="address"
                  id="address"
                  className="block lg:w-[30rem]   rounded-md border-0 py-1.5 pl-3 pr-[3rem] md:pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 md:text-lg sm:text-sm sm:leading-6"
                  placeholder="Enter Your Address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="mt-3">
              <label
                htmlFor="job"
                className="block text-sm font-sm leading-6 text-gray-900"
              >
                <h4 className="text-gray-800 font-normal cursor-auto text-md">
                  Job
                  <sup className="text-red-500 text-sm font-bold">*</sup>
                </h4>
              </label>
              <div className="relative mt-2 rounded-md shadow-sm">
                <input
                  type="text"
                  name="job"
                  id="job"
                  className="block lg:w-[30rem]   rounded-md border-0 py-1.5 pl-3 pr-[3rem] md:pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 md:text-lg sm:text-sm sm:leading-6"
                  placeholder="Enter Your Job"
                  value={formData.job}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="mt-3">
              <label
                htmlFor="education"
                className="block text-sm font-sm leading-6 text-gray-900"
              >
                <h4 className="text-gray-800 font-normal cursor-auto text-md">
                  Education
                  <sup className="text-red-500 text-sm font-bold">*</sup>
                </h4>
              </label>
              <div className="flex items-center mt-1">
                <label className="mr-4 text-lg text-gray-800 font-normal">
                  <input
                    type="radio"
                    name="education"
                    value="Technical"
                    className="cursor-pointer mr-2"
                    checked={formData.education === "Technical"}
                    onChange={handleChange}
                    required
                  />
                  Technical
                </label>
                <label className="mr-4 text-lg text-gray-800 font-normal">
                  <input
                    type="radio"
                    name="education"
                    value="Non Technical"
                    className="cursor-pointer mr-2"
                    checked={formData.education === "Non Technical"}
                    onChange={handleChange}
                    required
                  />
                  Non Technical
                </label>
              </div>
            </div>
            <div className="mt-3">
              <label
                htmlFor="gender"
                className="block text-sm font-sm leading-6 text-gray-900"
              >
                <h4 className="text-gray-800 font-normal cursor-auto text-md">
                  Gender
                  <sup className="text-red-500 text-sm font-bold">*</sup>
                </h4>
              </label>
              <div className="flex items-center mt-1">
                <label className="mr-4 text-lg text-gray-800 font-normal">
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    className="cursor-pointer mr-2"
                    checked={formData.gender === "Male"}
                    onChange={handleChange}
                    required
                  />
                  Male
                </label>
                <label className="mr-4 text-lg text-gray-800 font-normal">
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    className="cursor-pointer mr-2"
                    checked={formData.gender === "Female"}
                    onChange={handleChange}
                    required
                  />
                  Female
                </label>
                <label className="mr-4 text-lg text-gray-800 font-normal">
                  <input
                    type="radio"
                    name="gender"
                    value="Other"
                    className="cursor-pointer mr-2"
                    checked={formData.gender === "Other"}
                    onChange={handleChange}
                    required
                  />
                  Other
                </label>
              </div>
            </div>

            <div className="mt-3">
              <label
                htmlFor="profile"
                className="block text-sm font-sm leading-6 text-gray-900"
              >
                <h4 className="text-gray-800 font-normal cursor-auto text-md">
                  Profile
                  <sup className="text-red-500 text-sm font-bold">*</sup>
                </h4>
              </label>
              <div className="relative mt-2 rounded-md shadow-sm">
                <input
                  type="file"
                  name="file"
                  id="file"
                  className="block lg:w-[30rem] rounded-md border-0 py-1.5 pl-3 pr-[3rem] md:pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 md:text-lg sm:text-sm sm:leading-6"
                  placeholder="Upload Your Profile Image"
                  onChange={filedatachange}
                />
              </div>
            </div>

            <div className="mt-3 mb-3">
              <button className="btn btn-primary px-5">Register</button>
              <button
                className="btn shadow-md hover:!text-gray-900 ml-2 text-gray-950 px-5"
                onClick={() => setrole("")}
              >
                Back
              </button>
            </div>
            <div className="flex items-center justify-center mb-4">
              <span className="text-gray-500 text-md">Already a member?</span>
              <span
                className="text-blue-500 text-md font-bold cursor-pointer ml-[4px]"
                onClick={enablelogin}
              >
                LOG IN
              </span>
            </div>
          </form>
        </div>
      </>
    );
  };
  const Trainregi = () => {
    const [profile, setProfile] = useState(null);
    const [resume, setResume] = useState(null);
    const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      password: "",
      address: "",
      job: "",
      education: "",
      gender: "",
    });
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    };
    const Profilechange = (e) => {
      setProfile(e.target.files[0]);
    };
    const Resumechange = (e) => {
      setResume(e.target.files[0]);
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      const datas = new FormData();
      datas.append("firstName", formData.firstName);
      datas.append("lastName", formData.lastName);
      datas.append("phone", formData.phone);
      datas.append("email", formData.email);
      datas.append("password", formData.password);
      datas.append("address", formData.address);
      datas.append("education", formData.education);
      datas.append("job", formData.job);
      datas.append("gender", formData.gender);
      datas.append("file", profile);
      datas.append("resume", resume);

      for (let pair of datas.entries()) {
        console.log(pair[0] + ": " + pair[1]);
      }

    //   console.log(formData); // Print form data to console
      // Call backend API to submit form data here
    };
    return (
      <>
        <div className="mt-28 ml-8 flex flex-wrap flex-col">
          <h1 className="text-gray-700 font-medium text-2xl md:text-4xl mb-1">
            Elevate your <span className="text-gray-900">teaching skills</span>{" "}
          </h1>

          <form
            onSubmit={handleSubmit}
            className="md:ml-8  justify-center items-start ml-0"
          >
            <div className="mt-3">
              <label
                htmlFor="firstName"
                className="block text-sm font-sm leading-6 text-gray-900"
              >
                <h4 className="text-gray-800 font-normal cursor-auto text-md">
                  First Name
                  <sup className="text-red-500 text-sm font-bold">*</sup>
                </h4>
              </label>
              <div className="relative mt-2 rounded-md shadow-sm">
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  className="block lg:w-[30rem]   rounded-md border-0 py-1.5 pl-3 pr-[3rem] md:pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 md:text-lg sm:text-sm sm:leading-6"
                  placeholder="Enter Your First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="mt-3">
              <label
                htmlFor="lastName"
                className="block text-sm font-sm leading-6 text-gray-900"
              >
                <h4 className="text-gray-800 font-normal cursor-auto text-md">
                  Last Name
                  <sup className="text-red-500 text-sm font-bold">*</sup>
                </h4>
              </label>
              <div className="relative mt-2 rounded-md shadow-sm">
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  className="block lg:w-[30rem]   rounded-md border-0 py-1.5 pl-3 pr-[3rem] md:pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 md:text-lg sm:text-sm sm:leading-6"
                  placeholder="Enter Your Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="mt-3">
              <label
                htmlFor="phone"
                className="block text-sm font-sm leading-6 text-gray-900"
              >
                <h4 className="text-gray-800 font-normal cursor-auto text-md">
                  Phone
                  <sup className="text-red-500 text-sm font-bold">*</sup>
                </h4>
              </label>
              <div className="relative mt-2 rounded-md shadow-sm">
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  className="block lg:w-[30rem]   rounded-md border-0 py-1.5 pl-3 pr-[3rem] md:pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 md:text-lg sm:text-sm sm:leading-6"
                  placeholder="Enter Your Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="mt-3">
              <label
                htmlFor="email"
                className="block text-sm font-sm leading-6 text-gray-900"
              >
                <h4 className="text-gray-800 font-normal cursor-auto text-md">
                  Email Address
                  <sup className="text-red-500 text-sm font-bold">*</sup>
                </h4>
              </label>
              <div className="relative mt-2 rounded-md shadow-sm">
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="block lg:w-[30rem]   rounded-md border-0 py-1.5 pl-3 pr-[3rem] md:pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 md:text-lg sm:text-sm sm:leading-6"
                  placeholder="Enter Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="mt-3">
              <label
                htmlFor="password"
                className="block text-sm font-sm leading-6 text-gray-900"
              >
                <h4 className="text-gray-800 font-normal cursor-auto text-md">
                  Enter Password
                  <sup className="text-red-500 text-sm font-bold">*</sup>
                </h4>
              </label>
              <div className="relative mt-2 rounded-md shadow-sm">
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="block lg:w-[30rem]   rounded-md border-0 py-1.5 pl-3 pr-[3rem] md:pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 md:text-lg sm:text-sm sm:leading-6"
                  placeholder="Enter Your Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="mt-3">
              <label
                htmlFor="address"
                className="block text-sm font-sm leading-6 text-gray-900"
              >
                <h4 className="text-gray-800 font-normal cursor-auto text-md">
                  Address
                  <sup className="text-red-500 text-sm font-bold">*</sup>
                </h4>
              </label>
              <div className="relative mt-2 rounded-md shadow-sm">
                <input
                  type="text"
                  name="address"
                  id="address"
                  className="block lg:w-[30rem]   rounded-md border-0 py-1.5 pl-3 pr-[3rem] md:pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 md:text-lg sm:text-sm sm:leading-6"
                  placeholder="Enter Your Address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="mt-3">
              <label
                htmlFor="job"
                className="block text-sm font-sm leading-6 text-gray-900"
              >
                <h4 className="text-gray-800 font-normal cursor-auto text-md">
                  Job
                  <sup className="text-red-500 text-sm font-bold">*</sup>
                </h4>
              </label>
              <div className="relative mt-2 rounded-md shadow-sm">
                <input
                  type="text"
                  name="job"
                  id="job"
                  className="block lg:w-[30rem]   rounded-md border-0 py-1.5 pl-3 pr-[3rem] md:pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 md:text-lg sm:text-sm sm:leading-6"
                  placeholder="Enter Your Job"
                  value={formData.job}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="mt-3">
              <label
                htmlFor="education"
                className="block text-sm font-sm leading-6 text-gray-900"
              >
                <h4 className="text-gray-800 font-normal cursor-auto text-md">
                  Education
                  <sup className="text-red-500 text-sm font-bold">*</sup>
                </h4>
              </label>
              <div className="flex items-center mt-1">
                <label className="mr-4 text-lg text-gray-800 font-normal">
                  <input
                    type="radio"
                    name="education"
                    value="Technical"
                    className="cursor-pointer mr-2"
                    checked={formData.education === "Technical"}
                    onChange={handleChange}
                    required
                  />
                  Technical
                </label>
                <label className="mr-4 text-lg text-gray-800 font-normal">
                  <input
                    type="radio"
                    name="education"
                    value="Non Technical"
                    className="cursor-pointer mr-2"
                    checked={formData.education === "Non Technical"}
                    onChange={handleChange}
                    required
                  />
                  Non Technical
                </label>
              </div>
            </div>
            <div className="mt-3">
              <label
                htmlFor="gender"
                className="block text-sm font-sm leading-6 text-gray-900"
              >
                <h4 className="text-gray-800 font-normal cursor-auto text-md">
                  Gender
                  <sup className="text-red-500 text-sm font-bold">*</sup>
                </h4>
              </label>
              <div className="flex items-center mt-1">
                <label className="mr-4 text-lg text-gray-800 font-normal">
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    className="cursor-pointer mr-2"
                    checked={formData.gender === "Male"}
                    onChange={handleChange}
                    required
                  />
                  Male
                </label>
                <label className="mr-4 text-lg text-gray-800 font-normal">
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    className="cursor-pointer mr-2"
                    checked={formData.gender === "Female"}
                    onChange={handleChange}
                    required
                  />
                  Female
                </label>
                <label className="mr-4 text-lg text-gray-800 font-normal">
                  <input
                    type="radio"
                    name="gender"
                    value="Other"
                    className="cursor-pointer mr-2"
                    checked={formData.gender === "Other"}
                    onChange={handleChange}
                    required
                  />
                  Other
                </label>
              </div>
            </div>
            <div className="mt-3">
              <label
                htmlFor="resume"
                className="block text-sm font-sm leading-6 text-gray-900"
              >
                <h4 className="text-gray-800 font-normal cursor-auto text-md">
                  Resume
                  <sup className="text-red-500 text-sm font-bold">*</sup>
                </h4>
              </label>
              <div className="relative mt-2 rounded-md shadow-sm">
                <input
                  type="file"
                  name="resume"
                  id="resume"
                  className="block lg:w-[30rem] rounded-md border-0 py-1.5 pl-3 pr-[3rem] md:pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 md:text-lg sm:text-sm sm:leading-6"
                  placeholder="Upload Your Resume"
                  onChange={Resumechange}
                />
              </div>
            </div>
            <div className="mt-3">
              <label
                htmlFor="file"
                className="block text-sm font-sm leading-6 text-gray-900"
              >
                <h4 className="text-gray-800 font-normal cursor-auto text-md">
                  Profile
                  <sup className="text-red-500 text-sm font-bold">*</sup>
                </h4>
              </label>
              <div className="relative mt-2 rounded-md shadow-sm">
                <input
                  type="file"
                  name="file"
                  id="file"
                  className="block lg:w-[30rem] rounded-md border-0 py-1.5 pl-3 pr-[3rem] md:pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 md:text-lg sm:text-sm sm:leading-6"
                  placeholder="Upload Your Profile Image"
                  onChange={Profilechange}
                />
              </div>
            </div>

            <div className="mt-3 mb-3">
              <button className="btn btn-primary px-5">Register</button>
              <button
                className="btn shadow-md hover:!text-gray-900 ml-2 text-gray-950 px-5"
                onClick={() => setrole("")}
              >
                Back
              </button>
            </div>
            <div className="flex items-center justify-center mb-4">
              <span className="text-gray-500 text-md">Already a member?</span>
              <span
                className="text-blue-500 text-md font-bold cursor-pointer ml-[4px]"
                onClick={enablelogin}
              >
                LOG IN
              </span>
            </div>
          </form>
        </div>
      </>
    );
  };
  return (
    <>
      {role.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="mt-[5rem] ml-0 flex flex-wrap flex-col bg-contain bg-no-repeat h-full"
          style={{
            backgroundImage: 'url("../../src/assets/images/background.jpg")',
          }}
        >
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white font-medium text-xl mt-5 md:text-4xl text-center"
          >
            Please select an option:
          </motion.p>

          <div className="mt-2 text-center">
            <motion.input
              type="radio"
              id="student"
              value="student"
              checked={role === "student"}
              onChange={handleRoleChange}
              className="size-3 md:size-5 mr-1 cursor-pointer"
              whileHover={{ scale: 1.1 }}
            />
            <motion.label
              htmlFor="student"
              className="text-white ml-2 mr-[5rem] font-medium text-sm mt-0 md:text-2xl"
              whileHover={{ scale: 1.1 }}
            >
              Student
            </motion.label>

            <motion.input
              type="radio"
              id="trainer"
              value="trainer"
              checked={role === "trainer"}
              onChange={handleRoleChange}
              className="size-3 md:size-5 mr-1 cursor-pointer"
              whileHover={{ scale: 1.1 }}
            />
            <motion.label
              htmlFor="trainer"
              className="text-white ml-2 font-medium text-sm mt-0 md:text-2xl"
              whileHover={{ scale: 1.1 }}
            >
              Trainer
            </motion.label>
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "100%" }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:mt-3 left-0 h-0.5 bg-white"
            />
          </div>
        </motion.div>
      )}
      {role === "student" && <Studentregi />}
      {role === "trainer" && <Trainregi />}
    </>
  );
};

export default SignUp;
