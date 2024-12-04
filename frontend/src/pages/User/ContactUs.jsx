import React, { useState } from "react";

const ContactUs = () => {
  const [disabled, setDisabled] = useState(false);
  const [alertInfo, setAlertInfo] = useState({
    display: false,
    message: "",
    type: "",
  });

  const toggleAlert = (message, type) => {
    setAlertInfo({ display: true, message, type });

    setTimeout(() => {
      setAlertInfo({ display: false, message: "", type: "" });
    }, 5000);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const { name, email, subject, message } = e.target.elements;
    try {
      setDisabled(true);

      const templateParams = {
        name: name.value,
        email: email.value,
        subject: subject.value,
        message: message.value,
      };

      // Simulating emailjs functionality for testing
      console.log("Email Sent!", templateParams);

      toggleAlert("Form submission was successful!", "success");
    } catch (e) {
      console.error(e);

      toggleAlert("Uh oh. Something went wrong.", "danger");
    } finally {
      setDisabled(false);

      e.target.reset();
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center"
      style={{
        fontFamily: "'Inter', sans-serif",
       
      }}
    >
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="text-lg mt-2">We’d love to hear from you!</p>
      </div>

      <div
        className="w-full max-w-md border rounded-lg p-8 shadow-lg"
        style={{
          borderColor: "#E0E0E0",
        }}
      >
        <form className="space-y-6" onSubmit={onSubmit}>
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-700 outline-none"
              placeholder="Your Name"
              required
              disabled={disabled}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-700 outline-none"
              placeholder="Your Email"
              required
              disabled={disabled}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Subject</label>
            <input
              type="text"
              name="subject"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-700 outline-none"
              placeholder="Subject"
              required
              disabled={disabled}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              name="message"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-700 outline-none"
              placeholder="Your Message"
              rows="5"
              required
              disabled={disabled}
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full p-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition"
            disabled={disabled}
          >
            {disabled ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>

      {alertInfo.display && (
        <div
          className={`mt-5 px-4 py-3 rounded-lg text-white ${
            alertInfo.type === "success" ? "bg-green-500" : "bg-red-500"
          }`}
          role="alert"
        >
          {alertInfo.message}
        </div>
      )}
    </div>
  );
};

export default ContactUs;
