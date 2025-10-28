import { useState, useEffect } from "react";
import { HeartHandshake } from "lucide-react";

export default function CountdownBanner() {
  // 🕒 Nastav dátum spustenia kampane
  const targetDate = new Date("2025-10-28T12:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        setIsLive(true);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((distance / (1000 * 60)) % 60),
          seconds: Math.floor((distance / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="w-full max-w-3xl mx-auto text-center scale-95 bg-[#FFF9EF] border border-[#E6DCC6] rounded-2xl shadow-md p-10 mt-10">
      {!isLive ? (
        <>
          <h2 className="text-3xl font-semibold text-[#3E2F1C] mb-4">
             Spúšťame našu Donio kampaň už čoskoro!
          </h2>

          <div className="flex justify-center gap-4 mt-6">
            <TimeBox label="Dní" value={timeLeft.days} />
            <TimeBox label="Hodín" value={timeLeft.hours} />
            <TimeBox label="Minút" value={timeLeft.minutes} />
            <TimeBox label="Sekúnd" value={timeLeft.seconds} />
          </div>

          <p className="mt-6 text-[#6C5B3E] text-lg">
            Sleduj nás a buď pri tom od začiatku 
          </p>
        </>
      ) : (
        <>
          <h2 className="text-3xl font-semibold text-[#3E2F1C] mb-6">
            Kampaň je spustená!
          </h2>
          <button
          
          className="flex items-center justify-center gap-2 px-16 py-3 mx-auto font-semibold text-white transition-all bg-[#D7B264] rounded-full shadow-lg mt-9 hover:bg-[#F0C66F]"
        >
          {"Podpor nás na Donio"} <HeartHandshake />
        </button>
        </>
      )}
    </div>
  );
}

function TimeBox({ label, value }) {
  return (
    <div className="flex flex-col items-center bg-white border border-[#E6DCC6] rounded-xl px-5 py-4 shadow-sm min-w-[80px]">
      <span className="text-3xl font-bold text-[#3E2F1C]">
        {String(value).padStart(2, "0")}
      </span>
      <span className="text-sm text-[#6C5B3E] mt-1">{label}</span>
    </div>
  );
}
