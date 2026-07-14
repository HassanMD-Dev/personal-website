import React from "react";

import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
const ContactContent = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-16">
      <ContactInfo />
      <ContactForm />
    </div>
  );
};

export default ContactContent;
