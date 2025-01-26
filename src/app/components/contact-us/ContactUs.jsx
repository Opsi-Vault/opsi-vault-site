import React, { useState } from "react";
import "../loader.scss";
import "./contact.scss";
import { motion } from "framer-motion"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  async function callPostApi(url, data) {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const validateForm = () => {
    // Check if all fields are filled out
    if (
      formData?.name === "" ||
      formData?.email === "" ||
      formData?.phone === "" ||
      formData?.subject === "" ||
      formData?.message === ""
    ) {
      return false;
    }

    // Check if email is valid
    if (!/^[^@]+@[^@]+\.[^@]+$/.test(formData?.email)) {
      return false;
    }

    // Check if phone number is valid
    // if (!/^\d{10}$/.test(formData?.phone)) {
    //   return false;
    // }

    // Check if subject is valid
    if (formData?.subject?.length < 5 || formData?.subject?.length > 50) {
      return false;
    }

    // Check if message is valid
    if (formData?.message?.length < 10 || formData?.message?.length > 500) {
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      callPostApi("https://api.emailjs.com/api/v1.0/email/send", {
        service_id: "service_1b5otwb",
        template_id: "template_uscu4jk",
        user_id: "iJqkn25W7jqG6XimK",
        template_params: {
          subject: formData?.subject,
          name: formData?.name,
          message: formData?.message,
          email: formData?.email,
          phone: formData?.phone,
        },
      });
      window.alert(
        "Thank you for approaching us!, We will be in touch with you shortly."
      );
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })
    } else {
      // Show an error message
      window.alert("Please fill out all fields correctly");
    }
  };

  return (
    <section className="get-quote-main-container" id="get-a-free-quote">
      <div className="get-quote-content">
        <motion.div className="upper-content-gtq" initial={{ y: 50, opacity: 0 }} whileInView={{y: 0, opacity: 1}} transition={{ease: "easeInOut" }}>
          <h5>GET QUOTE</h5>
          <h3 className="sub-heading-gtq">Request a Free Consultation</h3>
          <div className="loader"></div>
          <p id="paragraph-gtq">
            Unlock your business&apos;s potential with a free consultation.
            Share your
          </p>
          <p>
            goals, and our experts will craft a tailored solution just for you.
          </p>
        </motion.div>
        <motion.div className="lower-content-gtq" initial={{ y: 50, opacity: 0 }} whileInView={{y: 0, opacity: 1}} transition={{ease: "easeInOut" }}>
          <form className="form">
            <div className="field-grid-container">
              <input
                placeholder="Your Name"
                className="input"
                type="text"
                value={formData?.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e?.target?.value })
                }
                required
              />
              <input
                placeholder="Your Email"
                className="input"
                type="email"
                value={formData?.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e?.target?.value })
                }
                required
              />
              <input
                placeholder="Your Phone"
                className="input"
                type="tel"
                value={formData?.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e?.target?.value })
                }
                required
              />
              <input
                placeholder="Subject"
                className="input"
                type="text"
                value={formData?.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e?.target?.value })
                }
                required
              />
            </div>
            <textarea
              className="input text-area"
              placeholder="Your Message"
              rows={6}
              value={formData?.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e?.target?.value })
              }
              required
            />
            <button onClick={(e) => handleSubmit(e)}>Get Started</button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
