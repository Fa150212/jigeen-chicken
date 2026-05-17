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
    desc: "Poulets frais, élevés dans les meilleures conditions.",
    icon: Bird,
    color: "bg-green-700",
  },
  {
    title: "Œufs frais",
    desc: "Des œufs frais et naturels chaque jour.",
    icon: Egg,
    color: "bg-orange-500",
  },
  {
    title: "Aliments",
    desc: "Aliments de qualité pour une croissance saine.",
    icon: PackageCheck,
    color: "bg-green-700",
  },
  {
    title: "Livraison",
    desc: "Livraison rapide et sécurisée à domicile.",
    icon: Truck,
    color: "bg-orange-500",
  },
];

export default function Features() {
  return (
    <section className="relative z-20 -mt-16 px-6">

      <div className="max-w-7xl mx-auto bg-white rounded-[32px] shadow-[0_15px_50px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden">

        <div className="grid md:grid-cols-2 lg:grid-cols-4">

          {data.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="
                  group
                  relative
                  p-8
                  border-b
                  lg:border-b-0
                  lg:border-r
                  last:border-r-0
                  border-gray-100
                  hover:bg-[#faf9f6]
                  transition-all
                  duration-300
                "
              >

                {/* ICON */}
                <div
                  className={`
                    w-16
                    h-16
                    rounded-full
                    ${item.color}
                    flex
                    items-center
                    justify-center
                    shadow-lg
                    group-hover:scale-110
                    transition-transform
                    duration-300
                  `}
                >
                  <Icon
                    className="text-white"
                    size={28}
                    strokeWidth={2.2}
                  />
                </div>

                {/* TITLE */}
                <h3 className="mt-6 text-2xl font-bold text-gray-900 leading-snug">
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-3 text-gray-600 leading-relaxed">
                  {item.desc}
                </p>

                {/* BUTTON */}
                <button
                  className="
                    mt-6
                    flex
                    items-center
                    gap-2
                    text-orange-500
                    font-semibold
                    group-hover:gap-3
                    transition-all
                  "
                >
                  Voir plus

                  <ArrowRight
                    size={18}
                    strokeWidth={2.5}
                  />
                </button>

                {/* HOVER EFFECT */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    w-0
                    h-1
                    bg-orange-500
                    group-hover:w-full
                    transition-all
                    duration-500
                  "
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}