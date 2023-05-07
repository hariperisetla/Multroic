import React from "react";
import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send form data to server or do something else with it
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    // Clear form fields
    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <div className="bg-white p-6">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <form className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-lg font-semibold mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="border border-gray-300 py-2 px-4"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="text-lg font-semibold mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="border border-gray-300 py-2 px-4"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="message" className="text-lg font-semibold mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="border border-gray-300 py-2 px-4 h-32"
            placeholder="Enter your message"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-purple-950 hover:bg-purple-700 text-white font-bold py-2 px-4"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Form;
