"use client";

import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-[#f8f8f5]"
    >

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}
          <div className="relative">

            <div className="absolute -top-5 -left-5 w-full h-full bg-[#F4A62A]/20 rounded-[40px]" />

            <div className="relative h-[500px] rounded-[40px] overflow-hidden shadow-2xl">

              <Image
                src="/case.png"
                alt="Poulailler Fermier"
                fill
                className="object-cover"
              />

            </div>

          </div>

          {/* CONTENT */}
          <div>

            <span className="bg-green-100 text-green-800 px-5 py-2 rounded-full text-sm font-semibold">
              À PROPOS DE NOUS
            </span>

            <h2 className="text-5xl font-black text-[#2E5E3E] leading-tight mt-6">
              Des poulets frais élevés avec soin
            </h2>

            <p className="text-gray-600 text-lg leading-9 mt-8">
              Chez Poulailler Fermier, nous proposons des
              poulets de qualité élevés dans un environnement
              sain avec une alimentation naturelle.
            </p>

            <p className="text-gray-600 text-lg leading-9 mt-6">
              Notre objectif est d’offrir des produits frais,
              savoureux et accessibles à toutes les familles.
            </p>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-5 mt-10">

              <div className="bg-white rounded-3xl p-6 shadow-lg text-center">

                <h3 className="text-4xl font-black text-[#F4A62A]">
                  500+
                </h3>

                <p className="text-gray-500 mt-2">
                  Clients
                </p>

              </div>

              <div className="bg-white rounded-3xl p-6 shadow-lg text-center">

                <h3 className="text-4xl font-black text-[#F4A62A]">
                  100%
                </h3>

                <p className="text-gray-500 mt-2">
                  Naturel
                </p>

              </div>

              <div className="bg-white rounded-3xl p-6 shadow-lg text-center">

                <h3 className="text-4xl font-black text-[#F4A62A]">
                  24h
                </h3>

                <p className="text-gray-500 mt-2">
                  Livraison
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}