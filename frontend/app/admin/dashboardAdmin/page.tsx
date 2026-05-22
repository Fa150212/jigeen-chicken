
"use client";

import { useEffect, useState } from "react";

import { Plus } from "lucide-react";

import AddProductModal from "./products/ProductModal";

export default function DashboardPage() {

  const [isOpen, setIsOpen] =
    useState(false);

  const [products, setProducts] =
    useState([]);

  /* FETCH PRODUCTS */

  const fetchProducts = async () => {

    const res = await fetch(
      "http://localhost:5000/api/products"
    );

    const data = await res.json();

    setProducts(data);
  };

  useEffect(() => {

    fetchProducts();

  }, []);

  return (
    <div>

      {/* HEADER */}
      <div className="flex items-center justify-between mb-10">

        <div>

          <h1 className="text-4xl font-black text-green-900">
            Dashboard Admin
          </h1>

          <p className="text-gray-500 mt-2">
            Gérez vos produits facilement
          </p>

        </div>

        {/* BUTTON */}
        <button
          onClick={() =>
            setIsOpen(true)
          }
          className="bg-green-800 hover:bg-green-900 text-white px-6 py-4 rounded-2xl flex items-center gap-3 font-semibold shadow-lg transition-all duration-300"
        >

          <Plus size={22} />

          Ajouter un produit

        </button>
      </div>

      {/* STATS */}
      <div className="bg-white p-8 rounded-3xl">

        <h2 className="text-2xl font-bold">
          Nombres de Poulets :
          {products.length}
        </h2>

      </div>

      {/* MODAL */}
      <AddProductModal
        isOpen={isOpen}
        onClose={() =>
          setIsOpen(false)
        }
        fetchProducts={fetchProducts}
      />
    </div>
  );
}
