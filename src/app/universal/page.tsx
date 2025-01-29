"use client";
import { motion } from "framer-motion";
import { Clock, Earth, ExternalLink, MapPin, Star, Ticket } from "lucide-react";
import Image from "next/image";

export default function UniversalPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="px-8 pt-8 sm:px-10 sm:pt-10 bg-gray-50"
    >
      <header className="max-w-4xl mx-auto mb-12">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Earth className="w-8 h-8 text-red-600" />
          <h1 className="text-4xl font-bold text-gray-800">
            Parques Universal
          </h1>
        </div>
        <p className="text-center text-gray-600">
          Viva seus filmes favoritos como nunca antes
        </p>
      </header>

      <main className="max-w-4xl mx-auto">
        <div className="grid gap-8">
          <section className="bg-white p-8 rounded-xl shadow-sm">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/3">
                <Image
                  src="/assets/images/universalsutdioparkflorida.png"
                  alt="Universal Studios"
                  width={300}
                  height={300}
                  className="object-contain"
                />
                <div className="mt-4 space-y-3">
                  <a
                    href="https://www.universalorlando.com/web/pt/br/theme-parks/universal-studios-florida"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-red-600 hover:text-red-800 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Site Oficial do Universal Studios
                  </a>
                </div>
              </div>

              <div className="md:w-2/3">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Universal Studios Florida
                </h2>
                <p className="text-gray-600 mb-6">
                  O Universal Studios Florida é um parque temático que traz o
                  mundo do cinema e da televisão à vida. Com atrações baseadas
                  em filmes e séries populares, o parque oferece experiências
                  emocionantes e imersivas para todas as idades. Inaugurado em 7
                  de junho de 1990, é um dos parques mais visitados de Orlando.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-red-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        Horário de Funcionamento
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Geralmente das 9h às 22h
                        <br />
                        (horário pode variar conforme a temporada)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-red-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        Localização
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Universal Orlando Resort
                        <br />
                        6000 Universal Boulevard, Orlando, FL 32819
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Ticket className="w-5 h-5 text-red-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-800">Ingressos</h3>
                      <p className="text-gray-600 text-sm">
                        A partir de $109 por dia
                        <br />
                        Preços variam conforme a data e tipo de ingresso
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-red-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        Principais Atrações
                      </h3>
                      <ul className="text-gray-600 text-sm list-disc list-inside">
                        <li>Harry Potter and the Escape from Gringotts</li>
                        <li>Revenge of the Mummy</li>
                        <li>The Simpsons Ride</li>
                        <li>Transformers: The Ride 3D</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-3">
                    Dicas Importantes
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">•</span>
                      Compre o Express Pass para evitar filas longas
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">•</span>
                      Chegue cedo para aproveitar melhor o parque
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">•</span>
                      Assista aos shows e apresentações ao vivo
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">•</span>
                      Visite a área do Harry Potter pela manhã
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Adicione mais seções para outros parques Universal */}
        </div>
      </main>
    </motion.div>
  );
}
