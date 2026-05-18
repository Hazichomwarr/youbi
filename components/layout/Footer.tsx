// components/layout/Footer.tsx

import Image from "next/image";
import { Mail, MapPin, LinkIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="overflow-hidden bg-[#071b1a] text-white">
      {/* TOP SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* LEFT */}
        <div className="relative overflow-hidden px-8 py-20 lg:px-16">
          {/* BACKGROUND GLOW */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(196,168,120,0.18),transparent_55%)]" />

          <div className="relative z-10 max-w-xl">
            {/* QUOTE ICON */}
            <p className="mb-6 text-5xl text-[#b69267]">“</p>

            {/* QUOTE */}
            <blockquote className="font-serif text-4xl leading-[1.6] text-[#f7f1e8]">
              Le droit n’est pas uniquement un ensemble de règles, mais un
              instrument d’équilibre et de stabilité sociale.
            </blockquote>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative h-[320px] lg:h-auto">
          <Image
            src="/images/youbi-hero.JPG"
            alt="Livres et bureau juridique"
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/25" />
        </div>
      </div>

      {/* BOTTOM FOOTER */}
      <div className="border-t border-white/10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-8 py-14 md:grid-cols-2 lg:grid-cols-4 lg:px-12">
          {/* COLUMN 1 */}
          <div>
            <h3 className="font-serif text-3xl text-[#f5efe6]">
              Dr. Youbi Bouhari Maré
            </h3>

            <div className="mt-5 space-y-2 text-base leading-7 text-white/70">
              <p>Juriste. Enseignant-chercheur.</p>
              <p>Commissaire auprès des SLSP.</p>
              <p>Professeur de droit.</p>
            </div>
          </div>

          {/* COLUMN 2 */}
          <div>
            <p className="mb-6 text-sm uppercase tracking-[0.25em] text-[#b69267]">
              Contact
            </p>

            <div className="space-y-5 text-base text-white/75">
              <div className="flex items-start gap-3">
                <Mail
                  size={18}
                  strokeWidth={1.5}
                  className="mt-1 text-[#b69267]"
                />

                <p>youbi47@gmail.com</p>
              </div>

              <div className="flex items-start gap-3">
                <MapPin
                  size={18}
                  strokeWidth={1.5}
                  className="mt-1 text-[#b69267]"
                />

                <p>Bruxelles, Belgique</p>
              </div>

              <div className="flex items-start gap-3">
                <LinkIcon
                  size={18}
                  strokeWidth={1.5}
                  className="mt-1 text-[#b69267]"
                />

                <p>Profil LinkedIn</p>
              </div>
            </div>
          </div>

          {/* COLUMN 3 */}
          <div>
            <p className="mb-6 text-sm uppercase tracking-[0.25em] text-[#b69267]">
              Navigation
            </p>

            <ul className="space-y-4 text-base text-white/75">
              <li className="transition hover:text-white">À propos</li>

              <li className="transition hover:text-white">Publications</li>

              <li className="transition hover:text-white">Enseignement</li>

              <li className="transition hover:text-white">Recherche</li>
            </ul>
          </div>

          {/* COLUMN 4 */}
          <div>
            <p className="mb-6 text-sm uppercase tracking-[0.25em] text-[#b69267]">
              Institutions
            </p>

            <div className="space-y-4 text-base leading-7 text-white/75">
              <p>Université libre de Bruxelles</p>

              <p>Université Virtuelle de Belgique Francophone</p>

              <p>Société wallonne du logement</p>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-white/10 py-6 text-center">
          <p className="text-sm text-white/45">
            © 2026 Dr. Youbi Bouhari Maré. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
