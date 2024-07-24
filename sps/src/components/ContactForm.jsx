import React, { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {};
  return (
    <div
      id="contact"
      className="reveal py-8 lg:py-20 px-9 mx-auto max-w-screen-md  rounded-lg bg-white"
    >
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-green-800 uppercase">
        Contact Us
      </h2>
      <p className="mb-8 lg:mb-16 font-light text-center text-green-500  sm:text-xl">
        Need an Admission ? Let us Know{" "}
      </p>
      <form onSubmit={handleSubmit} className="space-y-8">
        <div>
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-green-900 "
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="block p-3 w-full text-sm  bg-green-50 rounded-lg border border-green-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 "
            placeholder="Name"
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-green-900 "
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow-sm bg-green-50 border  text-green-900 v text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  "
            placeholder="name@email.com"
            required
          />
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="block mb-2 text-sm font-medium text-green-900 dark:text-green-400"
          >
            Your message
          </label>
          <textarea
            id="message"
            rows="6"
            className="block p-2.5 w-full text-sm text-green-900 bg-green-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
            placeholder="Leave a comment..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-green-800 py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
        >
          Send message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
