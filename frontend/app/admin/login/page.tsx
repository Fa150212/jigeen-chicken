"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await fetch(
        "http://localhost:5000/api/auth/login",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Login failed");
        return;
      }

      /* SAVE ADMIN */

      // localStorage.setItem(
      //   "admin",
      //   JSON.stringify(data)
      // );
      localStorage.setItem(
        "admin",
        JSON.stringify(data.user)
      );

      localStorage.setItem(
        "token",
        data.token
      );

      /* REDIRECT */

      router.push("/admin/dashboardAdmin");

    } catch (error) {
      console.log(error);

      alert("Server Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen grid lg:grid-cols-2 bg-[#F8F5F0]">

      {/* LEFT SIDE */}

      <div className="hidden lg:flex flex-col justify-center items-center bg-[#1F5E3B] text-white p-12 relative overflow-hidden">

        <Image
          src="/poule.png"
          alt="Chicken"
          width={500}
          height={500}
          className="object-contain"
        />

        <h1 className="text-5xl font-bold mt-6">
          Jigeen Chicken
        </h1>

        <p className="mt-4 text-lg text-center max-w-md text-gray-200">
          Welcome back to your poultry
          management dashboard.
        </p>
      </div>

      {/* RIGHT SIDE */}

      <div className="flex items-center justify-center p-6">

        <form
          onSubmit={handleSubmit}
          className="bg-white w-full max-w-md rounded-3xl shadow-xl p-8"
        >

          {/* TITLE */}

          <div className="text-center mb-8">

            <h2 className="text-4xl font-bold text-[#1F5E3B]">
              Admin Login
            </h2>

            <p className="text-gray-500 mt-2">
              Login to your dashboard
            </p>

          </div>

          {/* EMAIL */}

          <div className="mb-5">

            <label className="block mb-2 font-medium">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1F5E3B]"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  email: e.target.value,
                })
              }
            />

          </div>

          {/* PASSWORD */}

          <div className="mb-6">

            <label className="block mb-2 font-medium">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1F5E3B]"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  password: e.target.value,
                })
              }
            />

          </div>

          {/* BUTTON */}

          <button
            disabled={loading}
            className="w-full bg-[#F4A62A] hover:bg-[#df961c] transition-all duration-300 text-white font-semibold p-4 rounded-xl"
          >
            {loading ? "Loading..." : "Login"}
          </button>

          {/* REGISTER */}

          <p className="text-center text-gray-500 mt-6">

            Don&apos;t have an account ?{" "}

            <span
              onClick={() =>
                router.push("/register")
              }
              className="text-[#1F5E3B] font-semibold cursor-pointer"
            >
              Register
            </span>

          </p>

        </form>

      </div>

    </section>
  );
}