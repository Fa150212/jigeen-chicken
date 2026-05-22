"use client";

import Image from "next/image";

import { useState } from "react";

import { useRouter } from "next/navigation";

import {
  Loader2,
  Eye,
  EyeOff,
  User,
  Mail,
  Lock,
} from "lucide-react";

export default function RegisterPage() {

  const router = useRouter();

  const [loading, setLoading] =
    useState(false);

  const [showPassword, setShowPassword] =
    useState(false);

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

  /* HANDLE CHANGE */

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  /* SUBMIT */

  const handleSubmit = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    /* VALIDATION */

    if (
      formData.password !==
      formData.confirmPassword
    ) {

      alert(
        "Les mots de passe ne correspondent pas"
      );

      return;
    }

    try {

      setLoading(true);

      const response = await fetch(
        "http://localhost:5000/api/client/register",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            password:
              formData.password,

            role: "client",
          }),
        }
      );

      const data =
        await response.json();

      if (!response.ok) {

        alert(
          data.message ||
            "Inscription échouée"
        );

        return;
      }

      /* SAVE USER */

      localStorage.setItem(
        "client",
        JSON.stringify(data.user)
      );

      localStorage.setItem(
        "token",
        data.token
      );

      /* REDIRECT */

      router.push("/");

    } catch (error) {

      console.log(error);

      alert("Erreur serveur");

    } finally {

      setLoading(false);

    }
  };

  return (
    <section className="min-h-screen grid lg:grid-cols-2 bg-[#F8F5F0]">

      {/* LEFT SIDE */}

      <div className="hidden lg:flex flex-col justify-center items-center bg-[#2E5E3E] text-white p-12 relative overflow-hidden">

        {/* BACKGROUND */}

        <div className="absolute top-0 left-0 w-72 h-72 bg-[#F4A62A]/10 rounded-full blur-3xl" />

        <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#5E8C4A]/20 rounded-full blur-3xl" />

        {/* IMAGE */}

        <Image
          src="/poule.png"
          alt="Chicken"
          width={520}
          height={520}
          className="object-contain relative z-10"
        />

        {/* TEXT */}

        <h1 className="text-5xl font-black mt-8 relative z-10">
          Jigeen Chicken
        </h1>

        <p className="mt-5 text-lg text-center max-w-md text-[#F5EAD7] leading-relaxed relative z-10">

          Rejoignez notre plateforme et profitez
          de poulets frais, naturels et de qualité
          directement chez vous.

        </p>
      </div>

      {/* RIGHT SIDE */}

      <div className="flex items-center justify-center p-6">

        <form
          onSubmit={handleSubmit}
          className="
            bg-white
            w-full
            max-w-md
            rounded-[35px]
            shadow-2xl
            p-8
            border
            border-[#EFE8DD]
          "
        >

          {/* HEADER */}

          <div className="text-center mb-8">

            <span className="bg-[#E7F3EA] text-[#2E5E3E] px-4 py-2 rounded-full text-sm font-semibold">

              Créer un compte

            </span>

            <h2 className="text-4xl font-black text-[#2E5E3E] mt-5">

              Inscription

            </h2>

            <p className="text-gray-500 mt-3">

              Créez votre compte client

            </p>

          </div>

          {/* NAME */}

          <div className="mb-5">

            <label className="block mb-2 font-semibold text-[#2E5E3E]">
              Nom complet
            </label>

            <div className="relative">

              <User
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                name="name"
                placeholder="Votre nom"
                required
                onChange={handleChange}
                className="
                  w-full
                  border
                  border-gray-300
                  rounded-2xl
                  pl-12
                  pr-4
                  py-4
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#2E5E3E]
                "
              />

            </div>
          </div>

          {/* EMAIL */}

          <div className="mb-5">

            <label className="block mb-2 font-semibold text-[#2E5E3E]">
              Email
            </label>

            <div className="relative">

              <Mail
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="email"
                name="email"
                placeholder="Votre email"
                required
                onChange={handleChange}
                className="
                  w-full
                  border
                  border-gray-300
                  rounded-2xl
                  pl-12
                  pr-4
                  py-4
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#2E5E3E]
                "
              />

            </div>
          </div>

          {/* PASSWORD */}

          <div className="mb-5">

            <label className="block mb-2 font-semibold text-[#2E5E3E]">
              Mot de passe
            </label>

            <div className="relative">

              <Lock
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                name="password"
                placeholder="Mot de passe"
                required
                onChange={handleChange}
                className="
                  w-full
                  border
                  border-gray-300
                  rounded-2xl
                  pl-12
                  pr-12
                  py-4
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#2E5E3E]
                "
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(
                    !showPassword
                  )
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
              >

                {showPassword ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}

              </button>

            </div>
          </div>

          {/* CONFIRM PASSWORD */}

          <div className="mb-8">

            <label className="block mb-2 font-semibold text-[#2E5E3E]">
              Confirmer mot de passe
            </label>

            <div className="relative">

              <Lock
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirmer mot de passe"
                required
                onChange={handleChange}
                className="
                  w-full
                  border
                  border-gray-300
                  rounded-2xl
                  pl-12
                  pr-4
                  py-4
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#2E5E3E]
                "
              />

            </div>
          </div>

          {/* BUTTON */}

          <button
            disabled={loading}
            className="
              w-full
              bg-[#F4A62A]
              hover:bg-[#df961c]
              text-white
              font-bold
              py-4
              rounded-2xl
              transition-all
              duration-300
              flex
              items-center
              justify-center
              gap-3
              hover:scale-[1.02]
            "
          >

            {loading ? (
              <>
                <Loader2 className="animate-spin" />

                Création...
              </>
            ) : (
              "Créer mon compte"
            )}

          </button>

          {/* LOGIN */}

          <p className="text-center text-gray-500 mt-8">

            Vous avez déjà un compte ?{" "}

            <span
              onClick={() =>
                router.push("/login")
              }
              className="
                text-[#2E5E3E]
                font-bold
                cursor-pointer
                hover:text-[#F4A62A]
                transition-all
              "
            >
              Connexion
            </span>

          </p>

        </form>
      </div>
    </section>
  );
}