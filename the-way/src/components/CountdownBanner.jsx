import { useState, useEffect } from "react";
import { HeartHandshake } from "lucide-react";

export default function CountdownBanner() {
  // 🔗 URL kampane
  const DONIO_URL =
    "https://donio.sk/pribeh/12863?utm_source=copylink&utm_medium=socialshare&utm_campaign=share_button&utm_content=bb0aaf01-1fc2-422e-9eff-0d89f7d13370";

  // 🕒 Dátum spustenia kampane
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

  // 🔘 Kliknutie na tlačidlo otvorí nové okno
  function handleOpenDonio() {
    window.open(DONIO_URL, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="w-full max-w-3xl mx-auto text-center scale-95 bg-[#FFF9EF] border border-[#E6DCC6] rounded-2xl shadow-md p-10 mt-10">
      
        <>
          <h2 className="text-3xl font-semibold text-[#3E2F1C] mb-6">
            Kampaň je spustená!
          </h2>
          <button
            onClick={handleOpenDonio}
            className="flex items-center justify-center gap-2 px-16 py-3 mx-auto font-semibold text-white transition-all bg-[#D7B264] rounded-full shadow-lg mt-9 hover:bg-[#F0C66F]"
          >
            {"Podpor nás na Donio"} <HeartHandshake />
          </button>
        </>
      
    </div>
  );
}
