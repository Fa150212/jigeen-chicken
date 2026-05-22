"use client";

import Image from "next/image";

import {
  Loader2,
  Upload,
  X,
} from "lucide-react";

import {
  useEffect,
  useState,
} from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  fetchProducts: () => void;
  editingProduct?: any;
}

export default function ProductModal({
  isOpen,
  onClose,
  fetchProducts,
  editingProduct,
}: Props) {

  const [loading, setLoading] =
    useState(false);

  const [preview, setPreview] =
    useState("");

  const [image, setImage] =
    useState<File | null>(null);

  const [formData, setFormData] =
    useState({
      name: "",
      price: "",
      weight: "",
      category: "",
      description: "",
    });

  /* PREFILL */

  useEffect(() => {

    if (editingProduct) {

      setFormData({
        name:
          editingProduct.name || "",

        price:
          editingProduct.price || "",

        weight:
          editingProduct.weight || "",

        category:
          editingProduct.category || "",

        description:
          editingProduct.description || "",
      });

      setPreview(
        editingProduct.image || ""
      );

    } else {

      setFormData({
        name: "",
        price: "",
        weight: "",
        category: "",
        description: "",
      });

      setPreview("");

      setImage(null);
    }

  }, [editingProduct]);

  /* IMAGE */

  const handleImage = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {

    const file =
      e.target.files?.[0];

    if (!file) return;

    setImage(file);

    setPreview(
      URL.createObjectURL(file)
    );
  };

  /* SUBMIT */

  const handleSubmit =
    async () => {

      try {

        setLoading(true);

        const data =
          new FormData();

        data.append(
          "name",
          formData.name
        );

        data.append(
          "price",
          formData.price
        );

        data.append(
          "weight",
          formData.weight
        );

        data.append(
          "category",
          formData.category
        );

        data.append(
          "description",
          formData.description
        );

        if (image) {

          data.append(
            "image",
            image
          );
        }

        const url =
          editingProduct
            ? `http://localhost:5000/api/products/${editingProduct._id}`
            : "http://localhost:5000/api/products";

        const method =
          editingProduct
            ? "PUT"
            : "POST";

        const res =
          await fetch(url, {
            method,
            body: data,
          });

        const result =
          await res.json();

        console.log(result);

        fetchProducts();

        onClose();

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);
      }
    };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-5">

      <div className="bg-white w-full max-w-2xl rounded-[35px] p-8 relative shadow-2xl overflow-y-auto max-h-[95vh]">

        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute right-6 top-6"
        >
          <X />
        </button>

        {/* TITLE */}
        <h2 className="text-4xl font-black text-green-900 mb-10">

          {editingProduct
            ? "Modifier Produit"
            : "Ajouter Produit"}

        </h2>

        <div className="space-y-6">

          {/* IMAGE */}
          <div>

            <label className="border-2 border-dashed border-gray-300 rounded-3xl h-72 flex flex-col items-center justify-center cursor-pointer overflow-hidden relative">

              {preview ? (

                <Image
                  src={preview}
                  alt="Preview"
                  fill
                  className="object-cover"
                />

              ) : (

                <>

                  <Upload
                    size={45}
                    className="text-gray-400"
                  />

                  <p className="mt-4 text-gray-500">
                    Ajouter une image
                  </p>

                </>
              )}

              <input
                type="file"
                hidden
                accept="image/*"
                onChange={
                  handleImage
                }
              />
            </label>
          </div>

          {/* NAME */}
          <input
            type="text"
            placeholder="Nom produit"
            value={formData.name}
            className="w-full border rounded-2xl px-5 py-4"
            onChange={(e) =>
              setFormData({
                ...formData,
                name:
                  e.target.value,
              })
            }
          />

          {/* PRICE */}
          <input
            type="number"
            placeholder="Prix"
            value={formData.price}
            className="w-full border rounded-2xl px-5 py-4"
            onChange={(e) =>
              setFormData({
                ...formData,
                price:
                  e.target.value,
              })
            }
          />

          {/* WEIGHT */}
          <input
            type="number"
            placeholder="Poids en KG"
            value={formData.weight}
            className="w-full border rounded-2xl px-5 py-4"
            onChange={(e) =>
              setFormData({
                ...formData,
                weight:
                  e.target.value,
              })
            }
          />

          {/* CATEGORY */}
          <input
            type="text"
            placeholder="Catégorie"
            value={formData.category}
            className="w-full border rounded-2xl px-5 py-4"
            onChange={(e) =>
              setFormData({
                ...formData,
                category:
                  e.target.value,
              })
            }
          />

          {/* DESCRIPTION */}
          <textarea
            placeholder="Description"
            value={
              formData.description
            }
            className="w-full border rounded-2xl px-5 py-4 h-32"
            onChange={(e) =>
              setFormData({
                ...formData,
                description:
                  e.target.value,
              })
            }
          />

          {/* BUTTON */}
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full bg-green-800 hover:bg-green-900 text-white py-5 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-3"
          >

            {loading ? (

              <>
                <Loader2 className="animate-spin" />
                Chargement...
              </>

            ) : (

              editingProduct
                ? "Mettre à jour"
                : "Créer produit"

            )}
          </button>
        </div>
      </div>
    </div>
  );
}