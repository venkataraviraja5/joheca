import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="w-full">
       {/* Banner */}
     <section
        className="relative w-full h-[30vh] md:h-[80vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/contact-us.jpg')",
        }}
      >
        <h1 className="font-poppins mt-[-100px] md:mt-[-200px] text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center">
          Contact Us
        </h1>
      </section>


      <div className="flex flex-col md:flex-row gap-8 md:p-8 p-1">
        {/* Left: Contact Info */}
        <div className="flex-1 bg-white rounded-xl ring-1 ring-gray-200 p-8 space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900">Get in Touch</h2>

          <div className="flex items-start gap-4">
            <FaMapMarkerAlt className="text-blue-500 mt-1" size={24} />
            <div>
              <h3 className="font-medium text-gray-800">Address</h3>
              <p className="text-gray-600">123 Main Street, New Delhi, India</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaPhoneAlt className="text-blue-500 mt-1" size={24} />
            <div>
              <h3 className="font-medium text-gray-800">Phone</h3>
              <p className="text-gray-600">+91 9876543210</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaEnvelope className="text-blue-500 mt-1" size={24} />
            <div>
              <h3 className="font-medium text-gray-800">Email</h3>
              <p className="text-gray-600">info@joheca.com</p>
            </div>
          </div>

          {/* Google Map */}
          <div className="w-full h-64 rounded-xl overflow-hidden mt-6">
            <iframe
              title="JoHeCa Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.462515180314!2d77.20902151500606!3d28.613939382396713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce34f29c7e95f%3A0x4abf7e74b0f74c1f!2sIndia%20Gate!5e0!3m2!1sen!2sin!4v1693019438293!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="flex-1 bg-white rounded-xl ring-1 ring-gray-200 p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 font-poppins">
            Send a Message
          </h2>
          <form className="space-y-4 font-inter">
            <div>
              <label className="block text-gray-700 mb-1">Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Message</label>
              <textarea
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                rows="5"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
