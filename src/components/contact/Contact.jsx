import React, { useState } from "react";
import Header from "../header/header";

// Import icons
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaPaperPlane,
  FaUser,
  FaTag,
  FaComment,
  FaSpinner,
  FaCheckCircle,
  FaExclamationTriangle,
} from "react-icons/fa";
import { SiTelegram } from "react-icons/si";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(""); // 'success', 'error', ''

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(""), 5000);
    }
  };

  const isFormValid =
    formData.name.trim() &&
    formData.email.trim() &&
    formData.subject.trim() &&
    formData.message.trim();

  return (
    <div className="h-screen flex flex-col bg-gray-100 font-inter text-gray-800">
      <div className="fixed top-0 left-0 w-full z-10 bg-white shadow-md">
        <Header />
      </div>

      {/* Main Content */}
      <main className="flex flex-col items-center px-4 pt-24 h-full">
        <div className="max-w-5xl w-full flex flex-col justify-center h-full">
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Contact Information & Social Links */}
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
                <h2 className="text-xl font-bold text-indigo-700 mb-3">
                  Contact Information
                </h2>
                <div className="space-y-3">
                  <SocialLink
                    icon={<FaEnvelope className="text-red-500" />}
                    label="Email"
                    value="navneet.shukla@email.com"
                    href="mailto:navneet.shukla@email.com"
                    description="Best for detailed discussions"
                  />
                  <SocialLink
                    icon={<FaGithub className="text-[#181717]" />}
                    label="GitHub"
                    value="github.com/navneet-shukla"
                    href="https://github.com/navneet-shukla"
                    description="Check out my code and projects"
                  />
                  <SocialLink
                    icon={<FaLinkedin className="text-[#0A66C2]" />}
                    label="LinkedIn"
                    value="linkedin.com/in/navneet-shukla"
                    href="https://linkedin.com/in/navneet-shukla"
                    description="Professional networking and updates"
                  />
                  <SocialLink
                    icon={<SiTelegram className="text-[#0088CC]" />}
                    label="Telegram"
                    value="@navneetshukla"
                    href="https://t.me/navneetshukla"
                    description="Quick messages and instant contact"
                  />
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-lg shadow-md border border-green-200">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <h3 className="text-base font-bold text-green-700">
                    Currently Available
                  </h3>
                </div>
                <p className="text-green-600 text-xs">
                  Open for freelance projects, full-time opportunities, and
                  collaborations. Response time: ~24 hours.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 flex flex-col">
              <h2 className="text-xl font-bold text-indigo-700 mb-4">
                Send Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4 flex-grow">
                <div className="grid md:grid-cols-2 gap-3">
                  <FormField
                    icon={<FaUser />}
                    label="Your Name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                  <FormField
                    icon={<FaEnvelope />}
                    label="Email Address"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <FormField
                  icon={<FaTag />}
                  label="Subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project / Job / Collaboration"
                  required
                />

                <div className="flex-grow">
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    <FaComment className="inline mr-1" />
                    Message
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={7} // Increased from 2 to 7 to make the textarea taller
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none transition-all duration-200 text-sm"
                    placeholder="Hi Navneet, I'd like to discuss..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || !isFormValid}
                  className={`w-full px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center justify-center space-x-2 text-sm ${
                    isSubmitting || !isFormValid
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-indigo-600 hover:bg-indigo-700 hover:shadow-lg transform hover:-translate-y-0.5"
                  } text-white`}
                >
                  {isSubmitting ? (
                    <>
                      <FaSpinner className="animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                {submitStatus === "success" && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-2 flex items-center space-x-2">
                    <FaCheckCircle className="text-green-500 text-sm" />
                    <div>
                      <div className="text-green-800 font-medium text-sm">
                        Message sent successfully!
                      </div>
                      <div className="text-green-600 text-xs">
                        I'll get back to you within 24 hours.
                      </div>
                    </div>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-2 flex items-center space-x-2">
                    <FaExclamationTriangle className="text-red-500 text-sm" />
                    <div>
                      <div className="text-red-800 font-medium text-sm">
                        Failed to send message
                      </div>
                      <div className="text-red-600 text-xs">
                        Try again or contact me via email.
                      </div>
                    </div>
                  </div>
                )}
              </form>

              <div className="mt-3 p-2 bg-gray-50 rounded-lg border border-gray-200">
                <p className="text-xs text-gray-600">
                  <strong>Privacy Note:</strong> Your information is only used to
                  respond to your message and is not shared.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function SocialLink({ icon, label, value, href, description }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-all duration-200 group border border-transparent hover:border-indigo-100"
    >
      <div className="text-xl mt-1 group-hover:scale-110 transition-transform duration-200">
        {icon}
      </div>
      <div className="flex-grow">
        <div className="flex items-center space-x-2">
          <span className="font-medium text-gray-800 text-sm">{label}</span>
          <span className="text-xs text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded-full">
            Click to open
          </span>
        </div>
        <div className="text-xs text-gray-600 mt-1">{value}</div>
        <div className="text-xs text-gray-500 mt-1">{description}</div>
      </div>
    </a>
  );
}

function FormField({ icon, label, type, name, value, onChange, placeholder, required }) {
  return (
    <div>
      <label className="block text-xs font-medium text-gray-700 mb-1">
        {icon && <span className="mr-1">{icon}</span>}
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 text-sm"
      />
    </div>
  );
}

export default Contact;