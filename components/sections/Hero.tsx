// components/sections/HeroSection.tsx

import Image from "next/image";

// export default function HeroSection() {
//   return (
//     <section className="relative overflow-hidden border-b border-neutral-200 bg-[#f7f4ef]">
//       <div className="mx-auto grid min-h-[92vh] max-w-7xl grid-cols-1 items-center gap-16 px-6 py-20 lg:grid-cols-2 lg:px-12">
//         {/* LEFT CONTENT */}
//         <div className="z-10 max-w-xl">
//           <p className="mb-5 text-sm uppercase tracking-[0.35em] text-[#8B6F47]">
//             Law. Policy. Society.
//           </p>

//           <h1 className="font-serif text-5xl leading-tight text-[#111111] md:text-6xl">
//             Advancing Justice.
//             <br />
//             Strengthening Institutions.
//           </h1>

//           <p className="mt-8 text-lg leading-8 text-neutral-700">
//             Dedicated to the study of law and its impact on democratic
//             governance, public policy, and society.
//           </p>

//           {/* BUTTONS */}
//           <div className="mt-10 flex flex-wrap gap-4">
//             <button className="bg-[#18352E] px-8 py-4 text-sm uppercase tracking-widest text-white transition hover:opacity-90">
//               About Me
//             </button>

//             <button className="border border-neutral-400 px-8 py-4 text-sm uppercase tracking-widest text-neutral-800 transition hover:bg-neutral-100">
//               Publications
//             </button>
//           </div>
//         </div>

//         {/* RIGHT IMAGE */}
//         <div className="relative flex justify-center lg:justify-end">
//           <div className="relative h-[650px] w-full max-w-[560px] overflow-hidden rounded-sm">
//             <Image
//               src="/images/law-professor.jpg"
//               alt="Professor of Law portrait"
//               fill
//               priority
//               className="object-cover"
//             />
//           </div>
//         </div>
//       </div>

//       {/* SUBTLE BACKGROUND GLOW */}
//       <div className="absolute left-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-[#d8c7aa]/20 blur-3xl" />
//     </section>
//   );
// }

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-neutral-200 bg-[#f7f4ef]">
      <div className="mx-auto grid min-h-[92vh] max-w-7xl grid-cols-1 items-center gap-16 px-6 py-20 lg:grid-cols-2 lg:px-12">
        {/* LEFT CONTENT */}
        <div className="z-10 max-w-xl">
          {/* TOP LABEL */}
          <p className="mb-5 text-sm uppercase tracking-[0.35em] text-[#8B6F47]">
            Droit • Recherche • Institutions
          </p>

          {/* MAIN TITLE */}
          <h1 className="font-serif text-5xl leading-tight text-[#111111] md:text-6xl">
            Penser le droit.
            <br />
            Servir les institutions.
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-8 text-lg leading-8 text-neutral-700">
            Docteur en droit, enseignant-chercheur et spécialiste du
            financement, du droit des affaires et du droit comparé (OHADA –
            Belgique – France).
          </p>

          {/* PROFESSIONAL INFOS */}
          <div className="mt-10 space-y-3 border-l border-[#c8b89b] pl-5 text-sm leading-7 text-neutral-600">
            <p>Enseignant-chercheur à l’UVBF</p>

            <p>Commissaire auprès des SLSP</p>

            <p>Juriste à la Société wallonne du logement</p>
          </div>

          {/* BUTTONS */}
          <div className="mt-12 flex flex-wrap gap-4">
            <button className="bg-[#18352E] px-8 py-4 text-sm uppercase tracking-[0.2em] text-white transition hover:opacity-90">
              Biographie
            </button>

            <button className="border border-neutral-400 px-8 py-4 text-sm uppercase tracking-[0.2em] text-neutral-800 transition hover:bg-neutral-100">
              Publications
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative h-[650px] w-full max-w-[560px] overflow-hidden rounded-sm">
            <Image
              src="/images/youbi-hero.JPG"
              alt="Portrait du professeur de droit"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* SUBTLE BACKGROUND ACCENT */}
      <div className="absolute left-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-[#d8c7aa]/20 blur-3xl" />
    </section>
  );
}
