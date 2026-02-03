

import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";  // Font Awesome icons

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const WhatsApp = () => {
  const whatsappNumber = "91XXXXXXXXXX"; // your number
  const callNumber = "+91XXXXXXXXXX";   // your number
  const message = "Hi JOHECA, I'm interested in the 2026 Batch.";

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  const callUrl = `tel:${callNumber}`;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "env(safe-area-inset-bottom, 20px)",
        right: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        zIndex: 9999999,
      }}
    >
      {/* CALL BUTTON */}
      <motion.a
        href={callUrl}
        style={{
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          background: "#4F46E5",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          boxShadow: "0 8px 20px rgba(79,70,229,0.4)",
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaPhoneAlt size={24} />
      </motion.a>

      {/* WHATSAPP BUTTON */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          width: "64px",
          height: "64px",
          borderRadius: "50%",
          background: "#25D366",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          boxShadow: "0 8px 20px rgba(37,211,102,0.4)",
          position: "relative",
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {/* Pulse animation circle */}
        <span
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            background: "#25D366",
            opacity: 0.2,
            animation: "ping 1.5s cubic-bezier(0,0,0.2,1) infinite",
          }}
        />
        <FaWhatsapp size={28} />
      </motion.a>
    </div>
  );
};

export default WhatsApp;
