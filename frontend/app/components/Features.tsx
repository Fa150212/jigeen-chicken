"use client";

import {
  ArrowRight,
  Bird,
  Egg,
  PackageCheck,
  Truck,
} from "lucide-react";

const data = [
  {
    title: "Poulets de chair",
    desc: "Poulets frais élevés dans les meilleures conditions pour garantir qualité et fraîcheur.",
    icon: Bird,
    bg: "bg-[#E7F3EA]",
    color: "text-[#2E5E3E]",
  },
  {
    title: "Œufs frais",
    desc: "Des œufs naturels soigneusement sélectionnés chaque jour.",
    icon: Egg,
    bg: "bg-[#FFF1DA]",
    color: "text-[#D98C1F]",
  },
  {
    title: "Aliments de qualité",
    desc: "Une alimentation saine pour assurer une croissance optimale.",
    icon: PackageCheck,
    bg: "bg-[#F4E8DB]",
    color: "text-[#8B5A2B]",
  },
  {
    title: "Livraison rapide",
    desc: "Livraison fiable et sécurisée directement chez vous.",
    icon: Truck,
    bg: "bg-[#E7F3EA]",
    color: "text-[#2E5E3E]",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-24 bg-[#F8F6F1]"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-20">

          <span className="bg-[#E7F3EA] text-[#2E5E3E] px-5 py-2 rounded-full text-sm font-semibold">
            Pourquoi nous choisir
          </span>

          <h2 className="mt-6 text-5xl md:text-6xl font-black text-[#2E5E3E] leading-tight">
            Une qualité fermière
            <br />
            authentique
          </h2>

          <p className="mt-6 text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Nous proposons des produits frais et naturels
            avec une attention particulière portée à la qualité,
            l’hygiène et la satisfaction de nos clients.
          </p>
        </div>

        {/* FEATURES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {data.map((item, index) => {

            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  group
                  bg-white
                  rounded-[32px]
                  p-8
                  border
                  border-[#EFE8DD]
                  hover:shadow-2xl
                  hover:-translate-y-2
                  transition-all
                  duration-500
                "
              >

                {/* ICON */}
                <div
                  className={`
                    w-16
                    h-16
                    rounded-2xl
                    ${item.bg}
                    flex
                    items-center
                    justify-center
                    mb-6
                    group-hover:scale-110
                    transition-all
                    duration-300
                  `}
                >

                  <Icon
                    size={30}
                    className={item.color}
                    strokeWidth={2.2}
                  />

                </div>

                {/* TITLE */}
                <h3 className="text-2xl font-black text-[#2E5E3E] leading-snug">
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-4 text-gray-500 leading-relaxed">
                  {item.desc}
                </p>

                {/* BUTTON */}

                {/* LINE EFFECT */}
                
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}