import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [checked, setChecked] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [statusMsg, setStatusMsg] = useState(""); // nový stav pre chybovú správu

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!checked) {
      setStatusMsg("Musíte súhlasiť s odberom newslettera.");
      return;
    }

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
    setStatusMsg(""); // vyčistiť správu po úspešnom odoslaní
  };

  return (
    <section className="bg-[#411F0F] py-16 px-6 mx-2 md:mx-14 mb-10 rounded-2xl shadow-md  md:px-20 flex flex-col md:flex-row items-center justify-center gap-28 text-[#FCF5DC]">
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
            Ďakujeme! Váš e-mail bol uložený.
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
                <a>
                Súhlasím s odberom newslettera a potvrdzujem, že mám najmenej 16 rokov. 
                <Link to="/privacy-policy" className="flex items-center space-x-2">
                  
                  <span className="underline text-[#D7B264]">
                    Viac informácií
                  </span>
                </Link> 
                </a>
              </label>
            </div>

            {statusMsg && <p className="text-sm text-red-500">{statusMsg}</p>}

            <button
              type="submit"
              disabled={!checked} // zablokuje tlačidlo, kým checkbox nie je zaškrtnutý
              className={`px-10 py-3 mt-4 font-semibold text-[#411F0F] bg-[#D7B264] rounded-full transition-all hover:bg-[#733417] hover:text-[#FCF5DC] ${
                !checked ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              ODOBERAŤ
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
