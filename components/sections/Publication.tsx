// components/sections/PublicationsSection.tsx

import Image from "next/image";

const publications = [
  {
    type: "ARTICLE",
    title: "Le constitutionnalisme en période de crise",
    source: "Revue européenne de droit",
    date: "Mai 2024",
    image: "/images/publication-1.jpg",
  },
  {
    type: "CHAPITRE",
    title: "Le rôle des institutions dans la résilience démocratique",
    source: "Gouvernance & Démocratie",
    date: "Mars 2024",
    image: "/images/publication-2.jpg",
  },
  {
    type: "ARTICLE",
    title: "Droits fondamentaux et intérêt public",
    source: "European Public Law Review",
    date: "Janvier 2024",
    image: "/images/publication-3.jpg",
  },
  {
    type: "PAPIER",
    title: "Droit, éthique et politiques publiques",
    source: "Brussels Legal Studies",
    date: "Novembre 2023",
    image: "/images/publication-4.jpg",
  },
];

export default function PublicationsSection() {
  return (
    <section className="bg-[#f8f5f1] py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* TOP HEADER */}
        <div className="mb-14 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          {/* LEFT */}
          <div className="flex items-center gap-4">
            <p className="text-sm uppercase tracking-[0.35em] text-[#8B6F47]">
              Publications récentes
            </p>

            <div className="h-px w-16 bg-[#d8cdbd]" />
          </div>

          {/* RIGHT */}
          <button className="flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-[#8B6F47] transition hover:gap-5">
            Voir toutes les publications
            <span>→</span>
          </button>
        </div>

        {/* PUBLICATIONS GRID */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
          {publications.map((publication, index) => (
            <article
              key={index}
              className="group overflow-hidden border border-[#e6ddd2] bg-white transition hover:-translate-y-1 hover:shadow-sm"
            >
              {/* IMAGE */}
              <div className="relative h-[140px] overflow-hidden">
                <Image
                  src={publication.image}
                  alt={publication.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              {/* CONTENT */}
              <div className="p-7">
                {/* TYPE */}
                <p className="text-xs uppercase tracking-[0.25em] text-[#9b7b55]">
                  {publication.type}
                </p>

                {/* TITLE */}
                <h3 className="mt-4 font-serif text-3xl leading-snug text-[#111111]">
                  {publication.title}
                </h3>

                {/* SOURCE */}
                <p className="mt-5 text-lg leading-8 text-neutral-600">
                  {publication.source}
                </p>

                {/* DATE */}
                <p className="mt-4 text-base text-neutral-500">
                  {publication.date}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
