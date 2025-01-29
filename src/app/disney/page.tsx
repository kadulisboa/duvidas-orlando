"use client";
import { motion } from "framer-motion";
import {
  Clock,
  ExternalLink,
  FerrisWheel,
  MapPin,
  Star,
  Ticket,
} from "lucide-react";
import Image from "next/image";

export default function DisneyPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="px-8 pt-8 sm:px-10 sm:pt-10 bg-gray-50"
    >
      <header className="max-w-4xl mx-auto mb-12">
        <div className="flex items-center justify-center gap-3 mb-6">
          <FerrisWheel className="w-8 h-8 text-indigo-600" />
          <h1 className="text-4xl font-bold text-gray-800">Parques Disney</h1>
        </div>
        <p className="text-center text-gray-600">
          Descubra a magia dos parques Disney em Orlando
        </p>
      </header>

      <main className="max-w-4xl mx-auto">
        <div className="grid gap-8">
          <section className="bg-white p-8 rounded-xl shadow-sm">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/3">
                <Image
                  src="/assets/images/magic-kingdom-logo.png"
                  alt="Magic Kingdom"
                  width={300}
                  height={300}
                  className="object-contain"
                />
                <div className="mt-4 space-y-3">
                  <a
                    href="https://disneyworld.disney.go.com/destinations/magic-kingdom/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Site Oficial do Magic Kingdom
                  </a>
                </div>
              </div>

              <div className="md:w-2/3">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Magic Kingdom
                </h2>
                <p className="text-gray-600 mb-6">
                  O Magic Kingdom é o parque mais icônico da Disney World. Com
                  seu famoso castelo da Cinderela e atrações clássicas, o parque
                  oferece uma experiência mágica para todas as idades. Foi o
                  primeiro parque da Disney em Orlando, inaugurado em 1º de
                  outubro de 1971.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-indigo-600 mt-1" />
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
                    <MapPin className="w-5 h-5 text-indigo-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        Localização
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Walt Disney World Resort
                        <br />
                        Lake Buena Vista, FL 32830
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Ticket className="w-5 h-5 text-indigo-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-800">Ingressos</h3>
                      <p className="text-gray-600 text-sm">
                        A partir de $109 por dia
                        <br />
                        Preços variam conforme a data
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-indigo-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        Principais Atrações
                      </h3>
                      <ul className="text-gray-600 text-sm list-disc list-inside">
                        <li>Space Mountain</li>
                        <li>Big Thunder Mountain Railroad</li>
                        <li>Pirates of the Caribbean</li>
                        <li>Haunted Mansion</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-indigo-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-3">
                    Dicas Importantes
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-600">•</span>
                      Chegue cedo para aproveitar melhor o parque
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-600">•</span>
                      Use o Disney Genie+ para economizar tempo nas filas
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-600">•</span>
                      Assista ao show de fogos &quot;Disney Enchantment&quot; à
                      noite
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-600">•</span>
                      Faça reserva antecipada para refeições nos restaurantes
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Adicione mais seções para outros parques Disney */}
        </div>
      </main>
    </motion.div>
  );
}
