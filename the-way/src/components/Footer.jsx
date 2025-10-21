import { Mail, Phone, MapPin, Clock, Instagram, Facebook, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-10 text-gray-300 bg-gray-800">
      <div className="grid max-w-6xl grid-cols-1 gap-10 px-6 mx-auto md:grid-cols-2">
        {/* Kontakt */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-gray-100">Kontakt</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-gray-400" />
              <a href="mailto:info@tvojweb.sk" className="transition hover:text-gray-100">
                zatial@nic.sk
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-gray-400" />
              <a href="tel:+421777777777" className="transition hover:text-gray-100">
                +421 777 777 777
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-gray-400" />
              <span>Račianska 78, Bratislava</span>
            </li>
            <li className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-gray-400" />
              <a href="#" className="transition hover:text-gray-100">
                Otváracia doba
              </a>
            </li>
          </ul>
        </div>

        {/* Sociálne siete */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-gray-100">Sociálne siete</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Instagram className="w-4 h-4 text-gray-400" />
              <a href="#" className="transition hover:text-gray-100">Instagram</a>
            </li>
            <li className="flex items-center gap-2">
              <Facebook className="w-4 h-4 text-gray-400" />
              <a href="#" className="transition hover:text-gray-100">Facebook</a>
            </li>
            <li className="flex items-center gap-2">
              <Youtube className="w-4 h-4 text-gray-400" />
              <a href="#" className="transition hover:text-gray-100">YouTube</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="pt-4 mt-10 text-xs text-center text-gray-500 border-t border-gray-700">
        © {new Date().getFullYear()} TvojWeb. Všetky práva vyhradené.
      </div>
    </footer>
  );
}
