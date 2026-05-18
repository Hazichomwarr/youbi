// components/sections/AcademicActivitiesSection.tsx

import { GraduationCap, Mic, Users, Landmark } from "lucide-react";

const activities = [
  {
    icon: GraduationCap,
    title: "Enseignement universitaire",
    description:
      "Cours en droit constitutionnel, droit public, droit des affaires et théorie juridique.",
  },
  {
    icon: Mic,
    title: "Conférences & interventions",
    description:
      "Participation à des colloques et interventions académiques sur les questions juridiques contemporaines.",
  },
  {
    icon: Users,
    title: "Recherche & encadrement",
    description:
      "Accompagnement d’étudiants et participation aux travaux de recherche universitaire.",
  },
  {
    icon: Landmark,
    title: "Activités institutionnelles",
    description:
      "Contribution aux réflexions juridiques et institutionnelles au sein du secteur public.",
  },
];

export default function Academic() {
  return (
    <section className="bg-[#f8f5f1] pb-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* TOP LABEL */}
        <div className="mb-14 flex items-center gap-4 border-t border-[#ddd3c5] pt-10">
          <p className="text-sm uppercase tracking-[0.35em] text-[#8B6F47]">
            Enseignement & activités académiques
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 xl:grid-cols-4">
          {activities.map((activity, index) => {
            const Icon = activity.icon;

            return (
              <div key={index} className="flex items-start gap-5">
                {/* ICON */}
                <div className="mt-1">
                  <Icon
                    size={34}
                    strokeWidth={1.4}
                    className="text-[#9b7b55]"
                  />
                </div>

                {/* CONTENT */}
                <div>
                  <h3 className="font-serif text-2xl leading-snug text-[#111111]">
                    {activity.title}
                  </h3>

                  <p className="mt-4 text-lg leading-8 text-neutral-600">
                    {activity.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
