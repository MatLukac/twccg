import { Mail, Phone, MapPin, Clock, Instagram, Facebook, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="pt-7 text-gray-700 bg-[#FCF5DC]">
      <div className="grid max-w-6xl grid-cols-1 gap-10 px-6 pb-6 mx-auto md:grid-cols-2">
        {/* Kontakt */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-gray-900">Kontakt</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-gray-900" />
              <a href="mailto:thewayccg@gmail.com" className="transition hover:text-gray-500">
                thewayccg@gmail.com
              </a>
            </li>
            {/* <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-gray-900" />
              <a href="tel:+421904068544" className="transition hover:text-gray-500">
                +421 904 068 544
              </a>
            </li> */}
            
          </ul>
        </div>

        {/* Sociálne siete */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-gray-900">Sociálne siete</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Instagram className="w-4 h-4 text-gray-900" />
              <a href="https://www.instagram.com/thewayccg" className="transition hover:text-gray-500">Instagram</a>
            </li>
            <li className="flex items-center gap-2">
              <Facebook className="w-4 h-4 text-gray-900" />
              <a href="https://www.facebook.com/profile.php?id=61574830625101" className="transition hover:text-gray-500">Facebook</a>
            </li>
            <li className="flex items-center gap-2">
              <Youtube className="w-4 h-4 text-gray-900" />
              <a href="https://www.youtube.com/@thewayccg" className="transition hover:text-gray-500">YouTube</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="py-4 text-xs text-center text-gray-500 border-t border-gray-700">
        Copyright © {new Date().getFullYear()} The Way of the Disciple. Všetky práva vyhradené.
      </div>
    </footer>
  );
}
