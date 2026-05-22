"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import Image from "next/image";

import {
  Eye,
  EyeOff,
  Loader2,
  Mail,
  Lock,
} from "lucide-react";

export default function LoginPage() {

  const router = useRouter();

  const [loading, setLoading] =
    useState(false);

  const [showPassword, setShowPassword] =
    useState(false);

  const [formData, setFormData] =
    useState({
      email: "",
      password: "",
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

    try {

      setLoading(true);

      const response = await fetch(
        "http://localhost:5000/api/client/login",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify(
            formData
          ),
        }
      );

      const data =
        await response.json();

      if (!response.ok) {

        alert(
          data.message ||
            "Connexion échouée"
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

      {/* LEFT */}

      <div className="hidden lg:flex flex-col justify-center items-center bg-[#2E5E3E] text-white p-12 relative overflow-hidden">

        <Image
          src="/poule.png"
          alt="Chicken"
          width={500}
          height={500}
          className="object-contain"
        />

        <h1 className="text-5xl font-black mt-6">
          Jigeen Chicken
        </h1>

        <p className="mt-4 text-lg text-center max-w-md text-[#F5EAD7]">

          Connectez-vous pour commander
          vos produits frais rapidement.

        </p>
      </div>

      {/* RIGHT */}

      <div className="flex items-center justify-center p-6">

        <form
          onSubmit={handleSubmit}
          className="
            bg-white
            w-full
            max-w-md
            rounded-[35px]
            shadow-xl
            p-8
          "
        >

          {/* TITLE */}

          <div className="text-center mb-8">

            <h2 className="text-4xl font-black text-[#2E5E3E]">
              Connexion
            </h2>

            <p className="text-gray-500 mt-3">
              Accédez à votre compte
            </p>

          </div>

          {/* EMAIL */}

          <div className="mb-5">

            <label className="block mb-2 font-semibold">
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

          <div className="mb-8">

            <label className="block mb-2 font-semibold">
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
                className="
                  absolute
                  right-4
                  top-1/2
                  -translate-y-1/2
                  text-gray-500
                "
              >

                {showPassword ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}

              </button>

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
              flex
              items-center
              justify-center
              gap-3
            "
          >

            {loading ? (
              <>
                <Loader2 className="animate-spin" />

                Connexion...
              </>
            ) : (
              "Se connecter"
            )}

          </button>

          {/* REGISTER */}

          <p className="text-center text-gray-500 mt-8">

            Vous n'avez pas de compte ?{" "}

            <span
              onClick={() =>
                router.push("/register")
              }
              className="
                text-[#2E5E3E]
                font-bold
                cursor-pointer
              "
            >
              Inscription
            </span>

          </p>

        </form>
      </div>
    </section>
  );
}