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
    <section className="bg-[#411F0F] py-16 px-6 mx-10 my-10 md:px-20 flex flex-col md:flex-row items-center justify-center gap-28 text-[#FCF5DC]">
      <div className="w-full max-w-lg text-center md:text-left md:items-start">
        <h2 className="mb-4 text-4xl font-bold md:text-5xl text-[#D7B264] ">
          NEWSLETTER
        </h2>
        <p className="mb-8 leading-relaxed text-[#FCF5DC]/90">
          <b>Odoberajte </b> náš newsletter s exkluzívnymi ponukami a zaujímavými príspevkami. 
          Buďte vždy v obraze o aktuálnych novinkách!
        </p>
      </div>

      <div className="w-full max-w-md">
        {submitted ? (
          <p className="font-medium ">
            ✅ Ďakujeme! Váš e-mail bol uložený.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col w-full gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Zadajte svoj e-mail"
              className="w-full p-3 rounded-md text-[#411F0F] focus:outline-none"
            />

            <div className="flex items-start gap-2 mt-2 text-sm text-[#FCF5DC]/80">
              <input
                type="checkbox"
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
                className="mt-1"
              />
              <label>
                Súhlasím s odberom newslettera a potvrdzujem, že mám najmenej 16 rokov. 
                <a href="#" className="underline text-[#D7B264]"> Viac informácií</a>.
              </label>
            </div>

            <button
              type="submit"
              className="px-10 py-3 mt-4 font-semibold text-[#411F0F] bg-[#D7B264] rounded-full transition-all hover:bg-[#733417] hover:text-[#FCF5DC]"
            >
              ODOBERAŤ
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
