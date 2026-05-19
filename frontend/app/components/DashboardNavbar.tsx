"use client";

import {
  Bell,
  Search,
} from "lucide-react";

import { useEffect, useState } from "react";

export default function Navbar() {

  const [admin, setAdmin] = useState<any>(null);

  useEffect(() => {

    const storedAdmin =
      localStorage.getItem("admin");

    if (storedAdmin) {
      setAdmin(JSON.parse(storedAdmin));
    }

  }, []);

  return (
    <header className="h-24 bg-white border-b border-gray-200 px-8 flex items-center justify-between">

      {/* LEFT */}

      <div>

        <h2 className="text-3xl font-bold text-gray-900">
          Dashboard
        </h2>

        <p className="text-gray-500">
          Bienvenue sur votre espace admin
        </p>

      </div>

      {/* RIGHT */}

      <div className="flex items-center gap-5">

        {/* SEARCH */}

        <div className="hidden md:flex items-center bg-gray-100 rounded-2xl px-4 py-3 w-[320px]">

          <Search
            className="text-gray-400"
            size={20}
          />

          <input
            type="text"
            placeholder="Rechercher..."
            className="bg-transparent outline-none ml-3 w-full"
          />

        </div>

        {/* NOTIFICATION */}

        <button className="relative w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition">

          <Bell size={22} />

          <span className="absolute top-3 right-3 w-3 h-3 rounded-full bg-red-500"></span>

        </button>

        {/* PROFILE */}

        <div className="flex items-center gap-3 bg-gray-100 px-4 py-2 rounded-2xl">

          <div className="w-12 h-12 rounded-full bg-green-800 flex items-center justify-center text-white font-bold uppercase">

            {admin?.name?.charAt(0)}

          </div>

          <div className="hidden md:block">

            <h4 className="font-semibold">
              {admin?.name || "Admin"}
            </h4>

            <p className="text-sm text-gray-500 capitalize">
              {admin?.role || "Administrator"}
            </p>

          </div>

        </div>

      </div>

    </header>
  );
}