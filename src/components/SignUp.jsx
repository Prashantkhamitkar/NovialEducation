import React from "react";

const SignUp = ({ setLoginform, setregiform, loginform, regiform }) => {
  const enablelogin = () => {
    setLoginform(!loginform);
    setregiform(!regiform);
  };
  return (
    <div className="mt-28 ml-8 flex flex-wrap flex-col">
      <h1 className="text-gray-700 font-medium text-2xl md:text-4xl mb-1">
        Elevate your <span className="text-gray-900">coding prowess</span>{" "}
      </h1>

      <div className="md:ml-8  justify-center items-start ml-0">
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
            />
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
              type="text"
              name="profile"
              id="profile"
              className="block lg:w-[30rem]   rounded-md border-0 py-1.5 pl-3 pr-[3rem] md:pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 md:text-lg sm:text-sm sm:leading-6"
              placeholder="Enter Your Profile"
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
            />
          </div>
        </div>
        <div className="mt-3 mb-3">
          <button className="btn btn-primary px-5">Register</button>
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
      </div>
    </div>
  );
};

export default SignUp;
