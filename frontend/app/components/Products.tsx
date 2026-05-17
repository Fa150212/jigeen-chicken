import Image from "next/image";

const products = [
  {
    title: "Poulet entier",
    price: "2 500 FCFA",
    image: "/poulet.jpg",
  },
  {
    title: "Cuisses de poulet",
    price: "1 500 FCFA",
    image: "/cuisse.jpg",
  },
  {
    title: "Plateau d'œufs",
    price: "2 000 FCFA",
    image: "/oeufs.jpg",
  },
];

export default function Products() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-5xl font-bold text-green-900">
          Nos produits phares
        </h2>

        <button className="text-orange-500 font-semibold">
          Voir tous les produits →
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {products.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-3xl overflow-hidden shadow-sm"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={500}
              height={400}
              className="w-full h-64 object-cover"
            />

            <div className="p-5">
              <h3 className="text-2xl font-semibold">
                {item.title}
              </h3>

              <p className="text-green-700 font-bold mt-2">
                {item.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}