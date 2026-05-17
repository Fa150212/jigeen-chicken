import Image from "next/image";

export default function About() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-10 items-center">
      
      <div>
        <h2 className="text-5xl font-bold text-green-900">
          À propos de nous
        </h2>

        <p className="mt-6 text-gray-600 text-lg leading-relaxed">
          Jigeen Chicken est une ferme avicole engagée à offrir
          des produits de qualité supérieure.
        </p>

        <button className="mt-8 bg-green-800 text-white px-8 py-4 rounded-2xl">
          En savoir plus
        </button>
      </div>

      <div>
        <Image
          src="/farm.jpg"
          alt="Farm"
          width={700}
          height={500}
          className="rounded-3xl"
        />
      </div>
    </section>
  );
}