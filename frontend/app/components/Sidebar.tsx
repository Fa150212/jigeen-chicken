
"use client";

import Link from "next/link";

import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  Settings,
  LogOut,
} from "lucide-react";

import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboardAdmin",
  },

  {
    title: "Produits",
    icon: Package,
    href: "/dashboardAdmin/products",
  },

  {
    title: "Commandes",
    icon: ShoppingCart,
    href: "/dashboardAdmin/orders",
  },

  {
    title: "Clients",
    icon: Users,
    href: "/dashboardAdmin/customers",
  },

  {
    title: "Paramètres",
    icon: Settings,
    href: "/dashboardAdmin/settings",
  },
];

export default function Sidebar() {

  const router = useRouter();

  const [admin, setAdmin] = useState<any>(null);

  useEffect(() => {

    const storedAdmin =
      localStorage.getItem("admin");

    if (storedAdmin) {
      setAdmin(JSON.parse(storedAdmin));
    }

  }, []);

  /* LOGOUT */

  const handleLogout = () => {

    localStorage.removeItem("admin");

    localStorage.removeItem("token");

    router.push("/login");

  };

  return (
    <aside className="w-[300px] bg-green-950 text-white flex flex-col justify-between min-h-screen">

      <div>

        {/* LOGO */}

        <div className="px-8 pt-4 pb-5 border-b border-white/10">

          <h1 className="text-3xl font-extrabold">
            JIGEEN
          </h1>

          <p className="text-orange-400 tracking-[4px] text-sm">
            CHICKEN
          </p>

        </div>

        {/* ADMIN PROFILE */}

        <div className="px-8 py-4 border-b border-white/10">

          <div className="flex items-center gap-4">

            {/* AVATAR */}

            <div className="w-16 h-16 rounded-full bg-green-800 flex items-center justify-center text-2xl font-bold uppercase">
              {admin?.name?.charAt(0)}
            </div>

            {/* INFOS */}

            <div>

              <h3 className="font-bold text-lg">
                {admin?.name || "Admin"}
              </h3>

              <p className="text-sm text-gray-300 capitalize">
                {admin?.role || "Administrator"}
              </p>

            </div>

          </div>

        </div>

        {/* MENU */}

        <nav className="mt-6 px-4 flex flex-col gap-2">

          {menuItems.map((item, index) => {

            const Icon = item.icon;

            return (
              <Link
                key={index}
                href={item.href}
                className={`flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300
                  
                ${
                  index === 0
                    ? "bg-green-800 text-white"
                    : "hover:bg-white/10 text-gray-200"
                }`}
              >

                <Icon size={22} />

                <span className="font-medium">
                  {item.title}
                </span>

              </Link>
            );
          })}

        </nav>

      </div>

      {/* LOGOUT */}

      <div className="p-4 border-t border-white/10">

        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-4 px-5 py-4 rounded-2xl hover:bg-red-500/20 transition text-red-300"
        >

          <LogOut size={22} />

          <span>Déconnexion</span>

        </button>

      </div>

    </aside>
  );
}
