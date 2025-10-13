import React, { useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [checked, setChecked] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://script.google.com/macros/s/AKfycbwXk7JGs0DHT8_fhig8b7_DZN6BX3fDTOFg0R-oPVP0WOmbu92KnLjSmtuxJSfDAFYBwQ/exec", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="bg-[#f7e2c2] m-11 py-16 px-6 md:px-20 flex flex-col md:flex-row items-center justify-center gap-28">
      {/* Ľavá strana – text + formulár */}
      <div className="flex flex-col items-center w-full max-w-lg text-center md:text-left md:items-start">
        <h2 className="mb-4 text-3xl font-bold text-black">Newsletter</h2>
        <p className="mb-8 leading-relaxed text-gray-800">
          <strong>Odoberajte</strong> náš newsletter s exkluzívnymi ponukami,
          občasnými zľavami a zaujímavými príspevkami. Buďte vždy v obraze o
          aktuálnych novinkách!
        </p>

        {submitted ? (
          <p className="font-medium text-green-700">
            ✅ Ďakujeme! Tvoj e-mail bol uložený.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center w-full gap-4 md:items-start"
          >
            <label htmlFor="email" className="text-sm text-gray-900">
              Tu zadajte svoj e-mail: *
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 bg-transparent border-b-2 border-black focus:outline-none"
              placeholder="napr. tvoj@email.com"
            />

            <div className="flex items-start gap-2 mt-2 text-left">
              <input
                type="checkbox"
                id="consent"
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
                className="mt-1"
              />
              <label htmlFor="consent" className="text-xs text-gray-700">
                Súhlasím s odberom newslettera a potvrdzujem, že mám najmenej 16
                rokov. Súhlas môžete kedykoľvek odvolať. Všetky informácie o
                ochrane osobných údajov nájdete{" "}
                <a href="#" className="underline">
                  tu
                </a>
                .
              </label>
            </div>

            <button
              type="submit"
              className="bg-[#e95420] hover:bg-[#d44a19] text-white px-10 py-3 rounded-full mt-4 font-semibold transition-all"
            >
              Odoberať
            </button>
          </form>
        )}
      </div>

      {/* Pravá strana – obrázok */}
      <div className="flex justify-center flex-shrink-0">
        <img
          src={`${process.env.PUBLIC_URL}/materials/BuddyChristSticker.webp`}
          alt="Tím newslettera"
          className="rounded-2xl shadow-lg w-[320px] md:w-[420px] lg:w-[460px]"
        />
      </div>
    </section>
  );
}
