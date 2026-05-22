
"use client";

import Link from "next/link";

import Image from "next/image";

import {
  MessageCircle,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {

  return (
    <footer className="relative overflow-hidden bg-[#1F3D2B] text-white">

      {/* BACKGROUND GLOW */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#F4A62A]/10 rounded-full blur-3xl" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#5E8C4A]/20 rounded-full blur-3xl" />

      {/* TOP WAVE */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#F4A62A]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">

        {/* TOP CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

          {/* LEFT */}
          <div>

            {/* LOGO */}
            <div className="relative w-[420px] h-[180px]">

              <Image
                src="/Jigeen_Chicken -blanc.png"
                alt="Jigeen Chicken"
                fill
                className="object-contain object-left"
                priority
              />

            </div>

            {/* DESCRIPTION */}
            <p className="text-[#F5EAD7] leading-relaxed mt-6 text-[17px]">

              Des poulets frais et de qualité,
              élevés avec soin dans le respect
              des normes d’hygiène et du bien-être
              animal pour offrir le meilleur
              à votre famille.

            </p>

            {/* SOCIALS */}
            <div className="flex items-center gap-4 mt-8 flex-wrap">

              {/* FACEBOOK */}
              <Link
                href="https://facebook.com"
                target="_blank"
                className="group w-12 h-12 rounded-2xl bg-white/10 hover:bg-[#1877F2] flex items-center justify-center transition-all duration-300 hover:scale-110"
              >

                <FaFacebookF
                  size={18}
                  className="group-hover:rotate-12 transition-all"
                />

              </Link>

              {/* INSTAGRAM */}
              <Link
                href="https://instagram.com"
                target="_blank"
                className="group w-12 h-12 rounded-2xl bg-white/10 hover:bg-gradient-to-tr hover:from-pink-500 hover:to-yellow-500 flex items-center justify-center transition-all duration-300 hover:scale-110"
              >

                <FaInstagram
                  size={20}
                  className="group-hover:rotate-12 transition-all"
                />

              </Link>

              {/* TIKTOK */}
              <Link
                href="https://tiktok.com"
                target="_blank"
                className="group w-12 h-12 rounded-2xl bg-white/10 hover:bg-black flex items-center justify-center transition-all duration-300 hover:scale-110"
              >

                <FaTiktok
                  size={18}
                  className="group-hover:rotate-12 transition-all"
                />

              </Link>

              {/* WHATSAPP */}
              <Link
                href="https://wa.me/221771364150"
                target="_blank"
                className="group w-12 h-12 rounded-2xl bg-white/10 hover:bg-[#25D366] flex items-center justify-center transition-all duration-300 hover:scale-110"
              >

                <FaWhatsapp
                  size={20}
                  className="group-hover:rotate-12 transition-all"
                />

              </Link>

            </div>
          </div>

          {/* CENTER */}
          <div>

            <h3 className="text-2xl font-black text-white mb-8">

              Navigation

            </h3>

            <div className="space-y-5">

              {[
                "Accueil",
                "Produits",
                "À propos",
                "Contact",
              ].map((item) => (

                <Link
                  key={item}
                  href="#"
                  className="group flex items-center gap-3 text-[#F5EAD7]/90 hover:text-[#F4A62A] transition-all"
                >

                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-all"
                  />

                  <span className="text-[17px]">
                    {item}
                  </span>

                </Link>
              ))}
            </div>

            {/* CONTACT CARD */}
            <div className="mt-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6">

              <h4 className="text-xl font-bold mb-5">
                Contact
              </h4>

              <div className="space-y-4">

                <div className="flex items-start gap-4">

                  <div className="w-11 h-11 rounded-2xl bg-[#F4A62A]/20 flex items-center justify-center">

                    <MapPin
                      size={20}
                      className="text-[#F4A62A]"
                    />

                  </div>

                  <div>

                    <p className="font-semibold">
                      Adresse
                    </p>

                    <p className="text-sm text-[#F5EAD7]/70">
                      Somone, Thiès - Sénégal
                    </p>

                  </div>
                </div>

                <div className="flex items-start gap-4">

                  <div className="w-11 h-11 rounded-2xl bg-[#5E8C4A]/20 flex items-center justify-center">

                    <Phone
                      size={20}
                      className="text-[#5E8C4A]"
                    />

                  </div>

                  <div>

                    <p className="font-semibold">
                      Téléphone
                    </p>

                    <p className="text-sm text-[#F5EAD7]/70">
                      +221 77 123 45 67
                    </p>

                  </div>
                </div>

                <div className="flex items-start gap-4">

                  <div className="w-11 h-11 rounded-2xl bg-[#8B5A2B]/20 flex items-center justify-center">

                    <Mail
                      size={20}
                      className="text-[#F4A62A]"
                    />

                  </div>

                  <div>

                    <p className="font-semibold">
                      Email
                    </p>

                    <p className="text-sm text-[#F5EAD7]/70">
                      contact@jigeenchicken.com
                    </p>

                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div>

            <div className="bg-gradient-to-br from-[#2E5E3E] to-[#1b3526] border border-white/10 rounded-[32px] p-8 shadow-2xl relative overflow-hidden">

              {/* BG */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#F4A62A]/10 rounded-full blur-3xl" />

              <div className="relative z-10">

                <span className="bg-[#F4A62A]/20 text-[#F4A62A] px-4 py-2 rounded-full text-sm font-semibold">

                  Livraison rapide

                </span>

                <h3 className="text-3xl font-black mt-6 leading-tight">

                  Commandez vos poulets frais dès maintenant

                </h3>

                <p className="text-[#F5EAD7]/80 mt-5 leading-relaxed">

                  Disponible sur WhatsApp avec livraison rapide
                  et produits frais directement depuis notre ferme.

                </p>

                {/* BUTTON */}
                <Link
                  href="https://wa.me/221771364150"
                  target="_blank"
                  className="mt-8 bg-[#F4A62A] hover:bg-[#db941d] text-white transition-all duration-300 px-7 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-2xl hover:scale-[1.03]"
                >

                  <MessageCircle size={24} />

                  Commander maintenant

                </Link>

                {/* STATS */}
                <div className="grid grid-cols-2 gap-4 mt-8">

                  <div className="bg-white/5 rounded-2xl p-4 border border-white/5">

                    <h4 className="text-3xl font-black text-[#F4A62A]">

                      100%

                    </h4>

                    <p className="text-sm text-[#F5EAD7]/70 mt-1">
                      Frais & Naturel
                    </p>

                  </div>

                  <div className="bg-white/5 rounded-2xl p-4 border border-white/5">

                    <h4 className="text-3xl font-black text-[#5E8C4A]">

                      24H

                    </h4>

                    <p className="text-sm text-[#F5EAD7]/70 mt-1">
                      Livraison rapide
                    </p>

                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/10 mt-20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-[#F5EAD7]/70 text-sm text-center md:text-left">

            © {new Date().getFullYear()} Jigeen Chicken —
            Tous droits réservés.

          </p>

          <div className="flex items-center gap-6 text-sm text-[#F5EAD7]/70">

            <Link
              href="#"
              className="hover:text-[#F4A62A] transition-all"
            >
              Confidentialité
            </Link>

            <Link
              href="#"
              className="hover:text-[#F4A62A] transition-all"
            >
              Conditions
            </Link>

            <Link
              href="#"
              className="hover:text-[#F4A62A] transition-all"
            >
              Support
            </Link>

          </div>
        </div>
      </div>
    </footer>
  );
}

