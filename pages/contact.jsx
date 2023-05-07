import Faqs from "@/components/Layouts/main/contact/Faqs";
import ContactForm from "@/components/Layouts/main/contact/Form";
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
