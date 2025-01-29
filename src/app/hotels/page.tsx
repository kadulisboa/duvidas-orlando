"use client";

import { motion } from "framer-motion";
import {
  Building,
  ExternalLink,
  MapPin,
  UtensilsCrossed,
  Wifi,
} from "lucide-react";
import Image from "next/image";

export default function HotelsPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="px-8 pt-8 sm:px-10 sm:pt-10 bg-gray-50"
    >
      <header className="max-w-4xl mx-auto mb-12">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Building className="w-8 h-8 text-green-600" />
          <h1 className="text-4xl font-bold text-gray-800">
            Hotéis em Orlando
          </h1>
        </div>
        <p className="text-center text-gray-600">
          Encontre a hospedagem perfeita para sua viagem
        </p>
      </header>

      <main className="max-w-4xl mx-auto">
        <div className="grid gap-8">
          <section className="bg-white p-8 rounded-xl shadow-sm">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/3">
                <Image
                  src="/assets/images/rosenini.png"
                  alt="Rosen Inn International"
                  width={300}
                  height={300}
                  className="object-contain rounded-lg"
                />
                <div className="mt-4 space-y-3">
                  <a
                    href="https://www.rosenhotels.com/rosen-inn-international/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-green-600 hover:text-green-800 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Site Oficial do Hotel
                  </a>
                </div>
              </div>

              <div className="md:w-2/3">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Rosen Inn International
                </h2>
                <p className="text-gray-600 mb-6">
                  Localizado na International Drive, o Rosen Inn International
                  oferece excelente custo-benefício e localização privilegiada.
                  Com fácil acesso aos principais parques temáticos,
                  restaurantes e shoppings, é uma ótima opção para famílias que
                  buscam conforto e economia.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-start gap-3">
                    <Building className="w-5 h-5 text-green-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-800">Categoria</h3>
                      <p className="text-gray-600 text-sm">
                        Hotel 3 Estrelas
                        <br />
                        Ótimo Custo-Benefício
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-green-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        Localização
                      </h3>
                      <p className="text-gray-600 text-sm">
                        7600 International Drive
                        <br />
                        Orlando, FL 32819
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <UtensilsCrossed className="w-5 h-5 text-green-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        Restaurantes
                      </h3>
                      <ul className="text-gray-600 text-sm list-disc list-inside">
                        <li>Fountain View Cafe</li>
                        <li>Lite Bite Mini-Market/Deli</li>
                        <li>Topsy Turvey Lounge</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Wifi className="w-5 h-5 text-green-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        Comodidades
                      </h3>
                      <ul className="text-gray-600 text-sm list-disc list-inside">
                        <li>Wi-Fi gratuito</li>
                        <li>2 piscinas ao ar livre</li>
                        <li>Estacionamento gratuito</li>
                        <li>Playground</li>
                        <li>Business Center</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-3">
                    Informações Importantes
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">•</span>
                      Serviço de transporte gratuito para parques da Universal
                      (mediante agendamento)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">•</span>
                      Quartos renovados com 2 camas queen-size
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">•</span>
                      Cofre digital gratuito em todos os quartos
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">•</span>
                      Localizado próximo ao ICON Park e diversos restaurantes
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">•</span>
                      Política de cancelamento flexível
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Adicione mais seções para outros hotéis */}
        </div>
      </main>
    </motion.div>
  );
}
