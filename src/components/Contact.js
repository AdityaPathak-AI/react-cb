import React from "react";

const Contact = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-4xl font-bold mb-6 text-center">Contact</h1>
        <form>
          <div className="mb-4 ">
            <label className="block text-gray-700 text-lg font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              className="w-full border rounded-md p-2"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-lg font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full border rounded-md p-2"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-s font-bold mb-2">
              Objective
            </label>
            <textarea
              className="w-full border rounded-md p-2"
              rows="4"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-4 rounded-md "
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
