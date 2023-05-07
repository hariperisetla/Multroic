import ContactForm from "@/components/contact/Form";
import Faqs from "@/components/contact/Faqs";
import React from "react";

const Contact = () => {
  return (
    <div className="">
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-2">
          <ContactForm />
          <Faqs />
        </div>
      </div>
    </div>
  );
};

Contact.layout = "MainL";

export default Contact;
