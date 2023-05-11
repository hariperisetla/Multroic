import ContactForm from "@/components/main/contact/Form";
import Faqs from "@/components/main/contact/Faqs";
import React from "react";

const Contact = () => {
  return (
    <div className="">
      <div className="container mx-auto py-8 px-4 space-y-10">
        <h1 className="text-5xl font-extrabold text-center bg-custom-gradient text-transparent bg-clip-text">
          Contact Us
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <ContactForm />
          <Faqs />
        </div>
      </div>
    </div>
  );
};

Contact.layout = "MainL";

export default Contact;
