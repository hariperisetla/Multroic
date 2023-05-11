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
    <div className="space-y-10">
      <h1 className="font-bold text-3xl text-center">Drop us a line</h1>

      <form action="" className="space-y-5 px-10">
        <input className="custom-input" type="text" placeholder="Name" />

        <input className="custom-input" type="email" placeholder="Email" />

        <textarea className="custom-input h-32" placeholder="Message" />

        <input type="submit" className="custom-button" />
      </form>
    </div>
  );
};

export default Form;
