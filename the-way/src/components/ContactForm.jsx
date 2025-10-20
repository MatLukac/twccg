import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Odosielam...");

    try {
      const res = await fetch("https://script.google.com/macros/s/AKfycbwBzfyZmlzUCS3OG7m9UFTFeLhmzYOSAP8Huyp9EFiyoMiDjA9xvdbvCr65gGp_RDQv/exec", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.result === "success") {
        setStatus("Správa bola odoslaná!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Chyba pri odosielaní.");
      }
    } catch (err) {
      setStatus("Chyba siete.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md p-6 mx-auto bg-white shadow rounded-2xl">
      <h2 className="mb-4 text-2xl font-bold">Kontaktuj nás</h2>

      <input
        type="text"
        name="name"
        placeholder="Meno"
        value={formData.name}
        onChange={handleChange}
        className="w-full p-2 mb-3 border rounded"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full p-2 mb-3 border rounded"
        required
      />
      <textarea
        name="message"
        placeholder="Tvoja správa"
        value={formData.message}
        onChange={handleChange}
        className="w-full p-2 mb-3 border rounded"
        required
      />
      <button type="submit" className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">
        Odoslať
      </button>
      <p className="mt-2 text-sm text-gray-600">{status}</p>
    </form>
  );
}
