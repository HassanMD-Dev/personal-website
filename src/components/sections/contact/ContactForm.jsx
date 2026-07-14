import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const [loading, setloading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.subject.trim() ||
      !form.message.trim()
    ) {
      return toast.error("Please fill in all fields.");
    } else {
      try {
        setloading(true);
        const sendEmail = await emailjs.send(SERVICE_ID, TEMPLATE_ID, form, {
          publicKey: PUBLIC_KEY,
        });
        if (sendEmail.status == 200) {
          toast.success("Send Message Successfully.");
          setForm({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        }
      } catch (error) {
        toast.error("Failed to send message. Please try again.");
      } finally {
        setloading(false);
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="space-y-4 bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-lg hover:border-primary/50 transition-all duration-300"
    >
      <p className="text-sm uppercase font-medium tracking-widest text-primary">
        Get In Touch
      </p>
      <h3 className="font-bold text-2xl text-foreground">Send Me a Message</h3>
      <p className="text-muted-foreground leading-7">
        Have a project idea or opportunity? Fill out the form below and I'll get
        back to you as soon as possible.
      </p>
      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div className="space-y-6">
          <label className="text-sm font-medium text-foreground" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            autoComplete="name"
            placeholder="Enter Your Name"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full h-12 rounded-xl border border-border bg-background px-4 text-foreground placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary transition-all duration-300"
          />
        </div>
        <div className="space-y-2">
          <label
            className="text-sm font-medium text-foreground"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            autoComplete="email"
            placeholder="Enter Your Email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full h-12 rounded-xl border border-border bg-background px-4 text-foreground placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary transition-all duration-300"
          />
        </div>
        <div className="space-y-2">
          <label
            className="text-sm font-medium text-foreground"
            htmlFor="subject"
          >
            Subject
          </label>
          <input
            type="text"
            autoComplete="off"
            placeholder="Subject"
            id="subject"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            className="w-full h-12 rounded-xl border border-border bg-background px-4 text-foreground placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary transition-all duration-300"
          />
        </div>
        <div className="space-y-2">
          <label
            className="text-sm font-medium text-foreground"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            name="message"
            className="w-full min-h-36 resize-none rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary transition-all duration-300"
            id="message"
            placeholder="Tell me about your project..."
            value={form.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <Button
          type="submit"
          variant="default"
          className="w-full h-12 rounded-xl font-medium cursor-pointer"
          disabled={loading ? true : false}
        >
          {loading ? "Sending....." : "Send Message"}
        </Button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
