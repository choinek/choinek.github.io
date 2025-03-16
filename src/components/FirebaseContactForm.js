import React, { useState } from "react";
import { db, collection, addDoc } from "../firebase";
import "../css/custom.css";
import BrowserOnly from "@docusaurus/BrowserOnly";
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";

const ContactForm = () => {
  if (ExecutionEnvironment.canUseDOM	=== false) {
    return;
  }
  
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "contact"), form);
      setStatus("✅ Wiadomość wysłana!");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.log(error);
      setStatus("❌ Błąd wysyłania wiadomości.");
    }
  };

  return (
    <div style={{ width: 500 }}>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="card">
          <div className="card__header">
            <h3>Feedback</h3>
          </div>
          <div className="card__body">
            <p>
              Write anything... some day I will read it.
            </p>
          </div>
          <input
            type="text"
            name="name"
            className="contact-input"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            className="contact-input"
            placeholder="E-mail"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            className="contact-textarea"
            placeholder="Your message"
            value={form.message}
            onChange={handleChange}
            required
          />
          <div className="card__footer">
            <button type="submit" className="button button--secondary button--block">Wyślij</button>
            <p className="contact-status">{status}</p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
