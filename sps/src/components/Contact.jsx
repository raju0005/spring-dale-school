import React from "react";

const Contact = () => {
  return (
    <div className="reveal mb-7 w-full bg-green-600 rounded-lg flex flex-col md:flex-row justify-center items-center gap-2 shadow-md p-5">
      <div className="w-[50%] flex flex-col justify-around items-center p-10">
        <h1 className="m-10 text-white font-bold uppercase text-center">Springdale Public School</h1>
        <p className="flex flex-col justify-around items-center text-center gap-2 text-white ">
          <span>123 Education Lane</span>
          <span>Cityville,</span>
          <span>ABC State -2XXXXX</span>
          <span>+1 (123) 456-7890</span>
          <span>info@springdale.edu</span>
        </p>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15298.981922523935!2d81.61626444645506!3d16.5389421473685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37d1eeeee5261d%3A0xc2155289a01ebb69!2sZ.P.%20High%20School!5e0!3m2!1sen!2sin!4v1721754023811!5m2!1sen!2sin"
        width="400"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Contact;
