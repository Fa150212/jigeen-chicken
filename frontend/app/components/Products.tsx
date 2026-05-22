
"use client";

import { useEffect, useState } from "react";

import Image from "next/image";

import {
  ShoppingCart,
  Loader2,
} from "lucide-react";

interface Product {
  _id: string;
  name: string;
  price: number;
  weight: number;
  image: string;
  category: string;
  description: string;
}

export default function Products() {

  const [products, setProducts] =
    useState<Product[]>([]);

  const [loading, setLoading] =
    useState(true);

  /* FETCH */

  const fetchProducts =
    async () => {
      try {

        const res =
          await fetch(
            "http://localhost:5000/api/products"
          );

        const data =
          await res.json();

        setProducts(data);

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);

      }
    };

  useEffect(() => {

    fetchProducts();

  }, []);

  return (
    <section id="Products" className="py-24 px-6 bg-[#f7f7f5]">

      {/* HEADER */}
      <div className="max-w-7xl mx-auto text-center mb-16">

        <span className="bg-green-100 text-green-700 px-5 py-2 rounded-full text-sm font-semibold">
          Produits frais
        </span>

        <h2 className="text-5xl font-black text-green-950 mt-6">
          Nos Produits
        </h2>

        <p className="text-gray-500 mt-5 max-w-2xl mx-auto leading-relaxed">
          Découvrez nos poulets frais élevés avec soin
          pour garantir qualité, fraîcheur et goût.
        </p>
      </div>

      {/* LOADING */}
      {loading ? (

        <div className="flex flex-col items-center justify-center py-20">

          <Loader2
            size={45}
            className="animate-spin text-green-700"
          />

          <p className="mt-5 text-gray-500">
            Chargement...
          </p>
        </div>

      ) : (

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

          {products.map((product) => (

            <div
              key={product._id}
              className="bg-white rounded-[28px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >

              {/* IMAGE */}
              <div className="relative h-64 w-full bg-gray-100">

                <Image
                  src={
                    product.image ||
                    "/placeholder.png"
                  }
                  alt={product.name}
                  fill
                  className="object-cover"
                />

                {/* CATEGORY */}
                <div className="absolute top-4 left-4">

                  <span className="bg-white/90 backdrop-blur-sm text-green-700 text-sm px-4 py-2 rounded-full font-medium shadow-sm">
                    {product.category}
                  </span>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-6">

                <h3 className="text-2xl font-bold text-gray-900">
                  {product.name}
                </h3>

                <p className="text-gray-500 mt-1 line-clamp-2 leading-relaxed">
                  {product.description}
                </p>

                {/* FOOTER */}
                <div className="flex items-end justify-between mt-2 items-center">

                    {/* PRICE */}
                    <div>

                      <div className="flex items-center gap-2">

                        <p className="text-1xl font-black text-[#2E5E3E]">

                          {product.price}

                        </p>

                        <span className="text-[#8B5A2B] text-sm font-medium">

                          FCFA

                        </span>

                      </div>

                      {/* WEIGHT */}
                      <p className="text-[#8B5A2B] text-sm mt-1 font-medium">

                        {product.weight} KG

                      </p>

                    </div>

                    {/* CART BUTTON */}
                    <button className="bg-[#2E5E3E] hover:bg-[#5E8C4A] text-white w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg">

                      <ShoppingCart size={22} />

                    </button>

                  </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
