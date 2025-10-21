import React, { useState } from "react";

export default function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [checked, setChecked] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!checked) {
      setStatusMsg("Musíte súhlasiť s odberom newslettera.");
      return;
    }

    setLoading(true);
    setStatusMsg("Odosielam...");

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbytzbTv8IqpqBkl0b96VtsCmtHPD7S6WUAhm5o8xqwArAy7-8MWZz8jcKy4y8GR0a2I/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ firstName, lastName, email, message }),
        }
      );

      setSubmitted(true);
      setFirstName("");
      setLastName("");
      setEmail("");
      setMessage("");
      setStatusMsg("✅ Správa bola odoslaná! Ďakujeme.");
    } catch (err) {
      console.error(err);
      setStatusMsg("Chyba pri odosielaní.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 bg-[#867f75]">
      <div className="container max-w-2xl px-6 mx-auto">
        <h2 className="mb-6 text-3xl font-bold text-gray-800">Ak máte otázky, pripomienky alebo požiadavky, neváhajte nás kontaktovať.</h2>
        {submitted ? (
          <p className="mb-4 font-medium text-green-700">{statusMsg}</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="md:flex md:space-x-4">
              <input
                name="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Krstné meno"
                className="w-full p-3 border rounded-lg"
                required
              />
              <input
                name="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Priezvisko"
                className="w-full p-3 mt-4 border rounded-lg md:mt-0"
                required
              />
            </div>
            <input
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full p-3 border rounded-lg"
              required
            />
            <textarea
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Vaša správa"
              rows="5"
              className="w-full p-3 border rounded-lg"
              required
            />

            <button
              type="submit"
              className="px-6 py-3 text-white bg-blue-600 rounded-lg"
              disabled={loading}
            >
              {loading ? "Odosielam..." : "Odoslať"}
            </button>
          </form>
        )}
        {statusMsg && !submitted && (
          <p className="mt-4 text-gray-700 break-words">{statusMsg}</p>
        )}
      </div>
    </section>
  );
}
