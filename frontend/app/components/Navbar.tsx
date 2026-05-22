
"use client";

import { Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  {
    name: "Accueil",
    href: "#home",
  },

  {
    name: "Nos produits",
    href: "#Products",
  },

  {
    name: "Nos services",
    href: "#services",
  },
  
   {
    name: "À propos",
    href: "#about",
  },

  {
    name: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {

  const [isOpen, setIsOpen] =
    useState(false);

  return (
    <header className="w-full bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="flex items-center justify-between h-20">

          {/* LOGO */}
          <a
            href="#home"
            className="flex items-center gap-3"
          >

            <div className="relative w-52 h-20">

              <Image
                src="/Jigeen_Chiken_website.png"
                alt="Jigeen Chicken"
                fill
                className="object-contain"
                priority
              />

            </div>

          </a>

          {/* DESKTOP MENU */}
          <nav className="hidden lg:flex items-center gap-10">

            {navLinks.map((link, index) => (

              <a
                key={index}
                href={link.href}
                className="relative font-medium text-gray-700 hover:text-green-700 transition duration-300"
              >
                {link.name}
              </a>

            ))}

          </nav>

          {/* RIGHT */}
          <div className="flex items-center gap-4">

            <a
              href="https://wa.me/221771234567"
              target="_blank"
              className="hidden md:flex items-center gap-3 bg-green-800 hover:bg-green-900 transition text-white px-6 py-3 rounded-2xl shadow-lg"
            >

              <div className="bg-white/20 p-2 rounded-full">
                <Phone size={18} />
              </div>

              <span className="font-semibold">
                77 123 45 67
              </span>

            </a>

            {/* MOBILE BUTTON */}
            <button
              onClick={() =>
                setIsOpen(!isOpen)
              }
              className="lg:hidden p-2 rounded-xl border border-gray-200"
            >

              {isOpen ? (
                <X className="text-green-800" />
              ) : (
                <Menu className="text-green-800" />
              )}

            </button>

          </div>

        </div>

      </div>

      {/* MOBILE MENU */}
      {isOpen && (

        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl">

          <div className="flex flex-col px-6 py-6 gap-5">

            {navLinks.map((link, index) => (

              <a
                key={index}
                href={link.href}
                className="font-medium text-lg text-gray-700"
                onClick={() =>
                  setIsOpen(false)
                }
              >
                {link.name}
              </a>

            ))}

            <a
              href="https://wa.me/221771234567"
              target="_blank"
              className="mt-4 flex items-center justify-center gap-3 bg-green-800 text-white px-6 py-4 rounded-2xl"
            >

              <Phone size={18} />

              77 123 45 67

            </a>

          </div>

        </div>

      )}

    </header>
  );
}

// "use client";

// import { Menu, Phone, X } from "lucide-react";
// import Image from "next/image";
// import { useState } from "react";

// const navLinks = [
//   "Accueil",
//   "À propos",
//   "Nos produits",
//   "Nos services",
//   "Contact",
// ];

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header className="w-full bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
      
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
//         <div className="flex items-center justify-between h-20">

//           {/* LOGO */}
//           <div className="flex items-center gap-3 cursor-pointer">
//             <div className="relative w-50 h-20">
//               <Image
//                 src="/Jigeen_Chiken_website.png"
//                 alt="Jigeen Chicken"
//                 fill
//                 className="object-contain"
//                 priority
//               />
//             </div>
//           </div>
          
//           {/* DESKTOP MENU */}
//           <nav className="hidden lg:flex items-center gap-10">
//             {navLinks.map((link, index) => (
//               <a
//                 key={index}
//                 href="#"
//                 className={`relative font-medium transition duration-300 hover:text-green-700 ${
//                   index === 0
//                     ? "text-green-700"
//                     : "text-gray-700"
//                 }`}
//               >
//                 {link}

//                 {/* Active underline */}
//                 {index === 0 && (
//                   <span className="absolute left-0 -bottom-2 w-full h-[3px] bg-orange-400 rounded-full"></span>
//                 )}
//               </a>
//             ))}
//           </nav>

//           {/* RIGHT ACTIONS */}
//           <div className="flex items-center gap-4">

//             {/* PHONE BUTTON */}
//             <button className="hidden md:flex items-center gap-3 bg-green-800 hover:bg-green-900 transition text-white px-6 py-3 rounded-2xl shadow-lg">
//               <div className="bg-white/20 p-2 rounded-full">
//                 <Phone size={18} />
//               </div>

//               <span className="font-semibold">
//                 77 123 45 67
//               </span>
//             </button>

//             {/* MOBILE MENU BUTTON */}
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="lg:hidden p-2 rounded-xl border border-gray-200"
//             >
//               {isOpen ? (
//                 <X className="text-green-800" />
//               ) : (
//                 <Menu className="text-green-800" />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* MOBILE MENU */}
//       {isOpen && (
//         <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl">
//           <div className="flex flex-col px-6 py-6 gap-5">

//             {navLinks.map((link, index) => (
//               <a
//                 key={index}
//                 href="#"
//                 className={`font-medium text-lg ${
//                   index === 0
//                     ? "text-green-700"
//                     : "text-gray-700"
//                 }`}
//               >
//                 {link}
//               </a>
//             ))}

//             <button className="mt-4 flex items-center justify-center gap-3 bg-green-800 text-white px-6 py-4 rounded-2xl">
//               <Phone size={18} />
//               77 123 45 67
//             </button>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }