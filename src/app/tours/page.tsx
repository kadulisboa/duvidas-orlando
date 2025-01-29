import { Icon } from "@/components/Icon";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ToursPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="px-8 pt-8 sm:px-10 sm:pt-10 bg-gray-50"
    >
      <header className="max-w-4xl mx-auto mb-12">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Icon name="tour" className="w-8 h-8 text-pink-600" />
          <h1 className="text-4xl font-bold text-gray-800">
            Passeios em Orlando
          </h1>
        </div>
        <p className="text-center text-gray-600">
          Descubra experiências únicas além dos parques temáticos
        </p>
      </header>

      <main className="max-w-4xl mx-auto">
        <div className="grid gap-8">
          <section className="bg-white p-8 rounded-xl shadow-sm">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <Image
                src="/empresas/tour1.png"
                alt="Tours Especiais"
                width={300}
                height={300}
                className="object-contain"
              />
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Tours Especiais
                </h2>
                <p className="text-gray-600">
                  Explore Orlando além dos parques temáticos com nossos tours
                  especiais, conhecendo lugares únicos e experiências
                  inesquecíveis.
                </p>
                <div className="mt-6 space-y-3">
                  <h3 className="font-semibold text-gray-800">
                    Opções Populares:
                  </h3>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>Kennedy Space Center</li>
                    <li>Everglades Safari</li>
                    <li>Shopping Tours</li>
                    <li>Passeios Gastronômicos</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </motion.div>
  );
}
