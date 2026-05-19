"use client";

import Image from "next/image";
import {
  Heart,
  Leaf,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-[#f7f5f1] overflow-hidden min-h-screen">

      <div className="grid lg:grid-cols-2 min-h-screen">

        {/* LEFT SIDE */}
        <div className="flex items-center">

          <div className="max-w-2xl px-6 lg:px-16 py-20">

            {/* TOP TEXT */}
            <p className="text-orange-500 uppercase tracking-[3px] font-bold mb-6">
              Élevage sain, qualité garantie
            </p>

            {/* TITLE */}
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-extrabold leading-tight text-green-900">
              Jigeen Chicken
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-8 text-lg md:text-xl leading-relaxed text-gray-600">
              Des poulets élevés avec soin pour vous offrir
              fraîcheur, qualité et confiance au quotidien.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-5 mt-10">

              <button className="bg-green-800 hover:bg-green-900 transition-all duration-300 text-white px-8 py-4 rounded-2xl font-semibold flex items-center gap-3 shadow-lg">
                <Leaf size={20} />
                Nos produits
              </button>

              <button className="border-2 border-green-800 hover:bg-green-800 hover:text-white transition-all duration-300 text-green-800 px-8 py-4 rounded-2xl font-semibold flex items-center gap-3">
                <Phone size={18} />
                  Nous contacter
              </button>
            </div>

            {/* FEATURES */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-14">

              {/* FEATURE 1 */}
              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
                  <Leaf
                    className="text-green-800"
                    size={24}
                  />
                </div>

                <div>
                  <h4 className="font-bold text-gray-900">
                    Alimentation
                  </h4>

                  <p className="text-gray-600 text-sm">
                    naturelle
                  </p>
                </div>
              </div>

              {/* FEATURE 2 */}
              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
                  <ShieldCheck
                    className="text-green-800"
                    size={24}
                  />
                </div>

                <div>
                  <h4 className="font-bold text-gray-900">
                    Qualité
                  </h4>

                  <p className="text-gray-600 text-sm">
                    garantie
                  </p>
                </div>
              </div>

              {/* FEATURE 3 */}
              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
                  <Heart
                    className="text-green-800"
                    size={24}
                  />
                </div>

                <div>
                  <h4 className="font-bold text-gray-900">
                    Élevage
                  </h4>

                  <p className="text-gray-600 text-sm">
                    avec soin
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative h-[100vh]">

          {/* IMAGE CONTAINER */}
          <div className="absolute inset-0 overflow-hidden rounded-l-[180px] border-l-[14px] border-t-[14px] border-b-[14px] border-green-800 shadow-2xl">

            <Image
              src="/poule.png"
              alt="Poulet fermier"
              fill
              priority
              className="object-cover"
            />
            {/* <Image
              src="/poule.png"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              alt="poule"
              priority
              className="object-cover"
            /> */}
          </div>

          {/* BADGE */}
          <div className="absolute left-[-70px] bottom-24 w-44 h-44 rounded-full bg-gradient-to-br from-green-800 to-green-950 text-white flex flex-col items-center justify-center shadow-[0_20px_60px_rgba(0,0,0,0.25)] border-8 border-white z-20">

            <div className="bg-white/10 backdrop-blur-md p-4 rounded-full mb-3">
              <Sparkles
                size={34}
                strokeWidth={2.5}
              />
            </div>

            <h3 className="text-5xl font-black">
              100%
            </h3>

            <p className="text-xs tracking-[4px] uppercase font-semibold">
              Naturel
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}