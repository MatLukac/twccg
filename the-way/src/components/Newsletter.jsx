import React, { useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [checked, setChecked] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(
      "https://script.google.com/macros/s/AKfycbwXk7JGs0DHT8_fhig8b7_DZN6BX3fDTOFg0R-oPVP0WOmbu92KnLjSmtuxJSfDAFYBwQ/exec",
      {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      }
    );

    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="bg-[#2c2c3a] py-16 px-6 md:px-20 flex flex-col md:flex-row items-center justify-center gap-28 text-white">
      {/* Ľavá strana – text + formulár */}
      <div className="w-full max-w-lg text-center md:text-left md:items-start">
        <h2 className="mb-4 text-4xl font-bold md:text-5xl">
          NEWSLETTER
        </h2>
        <p className="mb-8 leading-relaxed text-gray-300">
          <b>Odoberajte </b> náš newsletter s exkluzívnymi ponukami a zaujímavými príspevkami. Buďte vždy v obraze o aktuálnych novinkách!
        </p>
      </div>

      <div className="w-full max-w-md">
        {submitted ? (
          <p className="font-medium text-green-400">✅ Thank you! Your email has been saved.</p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full gap-4"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
              className="w-full p-3 text-black rounded-md focus:outline-none"
            />

            <div className="flex items-start gap-2 mt-2 text-sm text-gray-300">
              <input
                type="checkbox"
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
                className="mt-1"
              />
              <label>
                Súhlasím s odberom newslettera a potvrdzujem, že mám najmenej 16 rokov. Súhlas môžete kedykoľvek odvolať. Všetky informácie o ochrane osobných údajov nájdete <a href="#" className="underline">tu</a>.
              </label>
            </div>

            <button
              type="submit"
              className="px-10 py-3 mt-4 font-semibold text-white transition-all bg-red-600 rounded-full hover:bg-red-700"
            >
              SIGN UP
            </button>
          </form>
        )}
      </div>

    </section>
  );
}
