"use client";

import Image from "next/image";

import {
  Pencil,
  Plus,
  Trash2,
} from "lucide-react";

import {
  useEffect,
  useState,
} from "react";

import AddProductModal from "./ProductModal";

export default function ProductsPage() {

  const [products, setProducts] =
    useState([]);

  const [isOpen, setIsOpen] =
    useState(false);

  const [
    editingProduct,
    setEditingProduct,
  ] = useState<any>(null);

  /* FETCH PRODUCTS */

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

      }
    };

  useEffect(() => {

    fetchProducts();

  }, []);

  /* DELETE */

  const deleteProduct =
    async (id: string) => {

      const confirmDelete =
        confirm(
          "Supprimer ce produit ?"
        );

      if (!confirmDelete)
        return;

      try {

        await fetch(
          `http://localhost:5000/api/products/${id}`,
          {
            method: "DELETE",
          }
        );

        fetchProducts();

      } catch (error) {

        console.log(error);

      }
    };

  return (
    <div className="p-8">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-10">

        <div>

          <h1 className="text-4xl font-black text-green-900">
            Produits
          </h1>

          <p className="text-gray-500 mt-2">
            Gérez vos produits facilement
          </p>

        </div>

        {/* ADD BUTTON */}
        <button
          onClick={() => {

            setEditingProduct(null);

            setIsOpen(true);

          }}
          className="bg-green-800 hover:bg-green-900 text-white px-6 py-4 rounded-2xl flex items-center gap-3 font-semibold shadow-lg"
        >

          <Plus size={22} />

          Ajouter produit

        </button>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

        <table className="w-full">

          <thead className="bg-green-50">

            <tr>

              <th className="text-left p-5">
                ID
              </th>

              <th className="text-left p-5">
                Image
              </th>

              <th className="text-left p-5">
                Produit
              </th>

              <th className="text-left p-5">
                Prix
              </th>

              <th className="text-left p-5">
                Poids
              </th>

              <th className="text-left p-5">
                Catégorie
              </th>

              <th className="text-left p-5">
                Actions
              </th>

            </tr>
          </thead>

          <tbody>

            {products.map(
              (product: any) => (

                <tr
                  key={product._id}
                  className="border-t"
                >

                  {/* ID */}
                  <td className="p-5">

                    {product._id.slice(
                      0,
                      6
                    )}

                  </td>

                  {/* IMAGE */}
                  <td className="p-5">

                    <div className="relative w-20 h-20 rounded-2xl overflow-hidden">

                      {product.image ? (

                        <Image
                          src={
                            product.image
                          }
                          alt={
                            product.name
                          }
                          fill
                          className="object-cover"
                        />

                      ) : (

                        <div className="w-full h-full bg-gray-100 flex items-center justify-center text-xs text-gray-400">

                          No image

                        </div>
                      )}
                    </div>
                  </td>

                  {/* NAME */}
                  <td className="p-5 font-semibold">

                    {product.name}

                  </td>

                  {/* PRICE */}
                  <td className="p-5 font-bold text-green-700">

                    {product.price} FCFA

                  </td>

                  {/* WEIGHT */}
                  <td className="p-5 font-medium">

                    {product.weight} KG

                  </td>

                  {/* CATEGORY */}
                  <td className="p-5">

                    {product.category}

                  </td>

                  {/* ACTIONS */}
                  <td className="p-5">

                    <div className="flex items-center gap-4">

                      {/* EDIT */}
                      <button
                        onClick={() => {

                          setEditingProduct(
                            product
                          );

                          setIsOpen(
                            true
                          );
                        }}
                        className="bg-blue-100 text-blue-700 p-3 rounded-xl"
                      >

                        <Pencil
                          size={18}
                        />

                      </button>

                      {/* DELETE */}
                      <button
                        onClick={() =>
                          deleteProduct(
                            product._id
                          )
                        }
                        className="bg-red-100 text-red-700 p-3 rounded-xl"
                      >

                        <Trash2
                          size={18}
                        />

                      </button>

                    </div>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>

      {/* MODAL */}
      <AddProductModal
        isOpen={isOpen}
        onClose={() => {

          setIsOpen(false);

          setEditingProduct(
            null
          );
        }}
        fetchProducts={
          fetchProducts
        }
        editingProduct={
          editingProduct
        }
      />
    </div>
  );
}