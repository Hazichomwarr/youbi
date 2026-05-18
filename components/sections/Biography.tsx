// components/sections/Biography.tsx

// export default function BiographySection() {
//   return (
//     <section className="bg-white py-28">
//       <div className="mx-auto grid max-w-7xl grid-cols-1 gap-20 px-6 lg:grid-cols-2 lg:px-12">
//         {/* LEFT SIDE */}
//         <div>
//           <p className="mb-5 text-sm uppercase tracking-[0.35em] text-[#8B6F47]">
//             Parcours
//           </p>

//           <h2 className="font-serif text-4xl leading-tight text-[#111111] md:text-5xl">
//             Un juriste.
//             <br />
//             Un chercheur.
//             <br />
//             Un acteur institutionnel.
//           </h2>
//         </div>

//         {/* RIGHT SIDE */}
//         <div className="space-y-7 text-lg leading-9 text-neutral-700">
//           <p>
//             Titulaire d’un Master en droit économique et social, d’un Master de
//             spécialisation en droit fiscal ainsi que d’un Certificat de
//             formation à la recherche, il développe une approche rigoureuse du
//             droit à travers l’enseignement, la recherche et les institutions
//             publiques.
//           </p>

//           <p>
//             Ses travaux doctoraux portent principalement sur le droit du
//             financement, les procédures collectives, les voies d’exécution, les
//             sûretés, le droit des sociétés et le droit pénal des affaires.
//           </p>

//           <p>
//             Sa recherche s’inscrit dans une perspective comparée entre les
//             systèmes juridiques OHADA, belge et français, avec une attention
//             particulière portée aux enjeux contemporains du financement et de la
//             gouvernance.
//           </p>

//           <p>
//             Parallèlement à ses activités académiques, il exerce également des
//             fonctions institutionnelles et juridiques au sein du secteur public
//             wallon.
//           </p>

//           {/* SIGNATURE LINE */}
//           <div className="pt-8">
//             <div className="h-px w-24 bg-[#c8b89b]" />

//             <p className="mt-5 font-serif text-xl italic text-neutral-800">
//               « Le droit n’est pas uniquement un système de règles, mais un
//               instrument d’équilibre et de stabilité sociale. »
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import {
  Scale,
  Landmark,
  BookOpen,
  Globe,
  GraduationCap,
  Briefcase,
  Building2,
  User,
} from "lucide-react";

export default function BiographySection() {
  return (
    <section className="bg-[#f8f5f1] py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* TOP GRID */}
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-2">
          {/* LEFT SIDE */}
          <div>
            {/* LABEL */}
            <div className="mb-10 flex items-center gap-4">
              <p className="text-sm uppercase tracking-[0.35em] text-[#8B6F47]">
                À propos
              </p>

              <div className="h-px w-16 bg-[#d8cdbd]" />
            </div>

            {/* TITLE */}
            <h2 className="font-serif text-5xl leading-[1.2] text-[#111111]">
              Un juriste.
              <br />
              Un chercheur.
              <br />
              Un acteur institutionnel.
            </h2>

            {/* TEXT */}
            <div className="mt-12 space-y-7 text-lg leading-10 text-neutral-700">
              <p>
                Titulaire d’un Master en droit économique et social, d’un Master
                de spécialisation en droit fiscal, ainsi que d’un Certificat de
                formation à la recherche, je suis actuellement Doctorant en
                droit du financement suivant la méthode du droit comparé
                (OHADA–Belgique–France).
              </p>

              <p>
                Mes travaux portent notamment sur les procédures collectives,
                les voies d’exécution, les sûretés, le droit des sociétés et le
                droit pénal des affaires.
              </p>

              <p>
                Par ailleurs, j’exerce également comme Juriste à la Société
                wallonne du logement.
              </p>
            </div>

            {/* LINK */}
            <button className="mt-14 flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-[#8B6F47] transition hover:gap-5">
              Lire la biographie complète
              <span>→</span>
            </button>
          </div>

          {/* RIGHT SIDE */}
          <div className="border-l border-[#e5ddd2] pl-0 lg:pl-20">
            {/* LABEL */}
            <div className="mb-14 flex items-center gap-4">
              <p className="text-sm uppercase tracking-[0.35em] text-[#8B6F47]">
                Domaines d’expertise
              </p>
            </div>

            {/* GRID */}
            <div className="grid grid-cols-1 gap-x-14 gap-y-16 sm:grid-cols-2">
              {/* ITEM */}
              <div>
                <Scale
                  className="mb-6 text-[#9b7b55]"
                  size={38}
                  strokeWidth={1.4}
                />

                <h3 className="font-serif text-3xl text-[#111111]">
                  Droit des affaires
                </h3>

                <p className="mt-4 text-lg leading-8 text-neutral-600">
                  Accompagnement juridique des entreprises et gouvernance des
                  sociétés.
                </p>
              </div>

              {/* ITEM */}
              <div>
                <Landmark
                  className="mb-6 text-[#9b7b55]"
                  size={38}
                  strokeWidth={1.4}
                />

                <h3 className="font-serif text-3xl text-[#111111]">
                  Droit public & institutionnel
                </h3>

                <p className="mt-4 text-lg leading-8 text-neutral-600">
                  Analyse des cadres juridiques publics et accompagnement
                  institutionnel.
                </p>
              </div>

              {/* ITEM */}
              <div>
                <BookOpen
                  className="mb-6 text-[#9b7b55]"
                  size={38}
                  strokeWidth={1.4}
                />

                <h3 className="font-serif text-3xl text-[#111111]">
                  Droit du financement
                </h3>

                <p className="mt-4 text-lg leading-8 text-neutral-600">
                  Recherche sur les sûretés, les procédures collectives et les
                  voies d’exécution.
                </p>
              </div>

              {/* ITEM */}
              <div>
                <Globe
                  className="mb-6 text-[#9b7b55]"
                  size={38}
                  strokeWidth={1.4}
                />

                <h3 className="font-serif text-3xl text-[#111111]">
                  Droit comparé
                </h3>

                <p className="mt-4 text-lg leading-8 text-neutral-600">
                  Approche comparative OHADA – Belgique – France sur les
                  questions de financement et d’affaires.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM INFO BAR */}
        <div className="mt-24 grid grid-cols-1 divide-y divide-[#e5ddd2] bg-[#f4efe8] sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
          {/* ITEM */}
          <div className="flex items-start gap-5 p-8">
            <GraduationCap
              className="mt-1 text-[#9b7b55]"
              size={30}
              strokeWidth={1.5}
            />

            <div>
              <h4 className="font-serif text-2xl text-[#111111]">
                Docteur en droit
              </h4>

              <p className="mt-2 text-base leading-7 text-neutral-600">
                Université libre de Bruxelles (ULB)
              </p>
            </div>
          </div>

          {/* ITEM */}
          <div className="flex items-start gap-5 p-8">
            <User className="mt-1 text-[#9b7b55]" size={30} strokeWidth={1.5} />

            <div>
              <h4 className="font-serif text-2xl text-[#111111]">
                Enseignant-Chercheur
              </h4>

              <p className="mt-2 text-base leading-7 text-neutral-600">
                Université Virtuelle de Belgique Francophone (UVBF)
              </p>
            </div>
          </div>

          {/* ITEM */}
          <div className="flex items-start gap-5 p-8">
            <Briefcase
              className="mt-1 text-[#9b7b55]"
              size={30}
              strokeWidth={1.5}
            />

            <div>
              <h4 className="font-serif text-2xl text-[#111111]">
                Commissaire
              </h4>

              <p className="mt-2 text-base leading-7 text-neutral-600">
                Auprès des SLSP
              </p>
            </div>
          </div>

          {/* ITEM */}
          <div className="flex items-start gap-5 p-8">
            <Building2
              className="mt-1 text-[#9b7b55]"
              size={30}
              strokeWidth={1.5}
            />

            <div>
              <h4 className="font-serif text-2xl text-[#111111]">Juriste</h4>

              <p className="mt-2 text-base leading-7 text-neutral-600">
                Société wallonne du logement
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
