import React, { useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";
import Spline from "@splinetool/react-spline";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // إرسال البريد الإلكتروني باستخدام EmailJS
      const result = await emailjs.sendForm(
        "service_q1woy2a", // استبدل بـ Service ID من EmailJS
        "template_7m8dmun", // استبدل بـ Template ID من EmailJS
        formRef.current,
        "CLZBonfc9S4tMPEVs" // استبدل بـ Public Key من EmailJS
      );

      console.log("Email sent successfully:", result.text);

      // ✅ نافذة نجاح
      Swal.fire({
        title: "Message Sent!",
        text: "Thank you for reaching out. I'll get back to you soon!",
        icon: "success",
        draggable: true,
        background: "#0B0B0B",
        color: "#EAEAEA",
        confirmButtonColor: "#E86B1D",
        timer: 2500,
        showConfirmButton: false,
        timerProgressBar: true,
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });

      // إعادة تعيين النموذج
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);

      // ✅ نافذة خطأ
      Swal.fire({
        title: "Error!",
        text: "Sorry, there was a problem sending your message. Please try again.",
        icon: "error",
        draggable: true,
        background: "#0B0B0B",
        color: "#EAEAEA",
        confirmButtonColor: "#E86B1D",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative min-h-screen py-20 overflow-hidden bg-bg_dark"
    >
      <div className="relative z-10 max-w-6xl px-6 mx-auto lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold md:text-5xl text-text_light">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="max-w-md mx-auto text-lg text-text_muted">
            Let's discuss your next project and bring your ideas to life
          </p>
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* النموذج */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="block mb-2 text-sm font-medium text-text_light">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border rounded-xl bg-bg_dark border-text_muted/30 focus:border-primary focus:ring-2 focus:ring-primary/20 text-text_light placeholder-text_muted/50"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-text_light">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border rounded-xl bg-bg_dark border-text_muted/30 focus:border-primary focus:ring-2 focus:ring-primary/20 text-text_light placeholder-text_muted/50"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-text_light">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border resize-none rounded-xl bg-bg_dark border-text_muted/30 focus:border-primary focus:ring-2 focus:ring-primary/20 text-text_light placeholder-text_muted/50"
                    placeholder="Tell me about your project..."
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center justify-center w-full gap-3 py-4 font-bold transition-all duration-300 rounded-xl bg-gradient-to-r from-primary to-secondary text-bg_dark disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-primary/25"
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="w-5 h-5 border-2 rounded-full border-bg_dark border-t-transparent"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend className="text-lg" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 text-text_muted">
                <FiMail className="text-primary" />
                <span>haithemmaher26@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-text_muted">
                <FiPhone className="text-primary" />
                <span>+970 592 49 5102</span>
              </div>
              <div className="flex items-center gap-3 text-text_muted">
                <FiMapPin className="text-primary" />
                <span>Gaza, Palestine</span>
              </div>
            </div>
          </motion.div>

          {/* 3D Spline */}
          <motion.div className="lg:flex items-center justify-center h-full min-h-[500px] hidden lg:visible">
            <div className="relative w-full h-full max-w-lg">
              <Spline
                scene="https://prod.spline.design/g8jsYhdS3nxRMPU2/scene.splinecode"
                style={{ pointerEvents: "none" }}
              />
              <div className="inset-0 w-[90%] h-[90%] bg-secondary/10 blur-[120px] rounded-full absolute"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
