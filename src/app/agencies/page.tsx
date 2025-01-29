"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  ExternalLink,
  Globe,
  MapPin,
  Phone,
  Star,
} from "lucide-react";
import Image from "next/image";

export default function AgenciesPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="px-8 pt-8 sm:px-10 sm:pt-10 bg-gray-50"
    >
      <header className="max-w-4xl mx-auto mb-12">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Briefcase className="w-8 h-8 text-purple-600" />
          <h1 className="text-4xl font-bold text-gray-800">
            Agências de Viagem
          </h1>
        </div>
        <p className="text-center text-gray-600">
          Encontre a agência ideal para planejar sua viagem a Orlando
        </p>
      </header>

      <main className="max-w-4xl mx-auto">
        <div className="grid gap-8">
          <section className="bg-white p-8 rounded-xl shadow-sm">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/3">
                <Image
                  src="/assets/images/logo-cdo.png"
                  alt="CDO Travel"
                  width={300}
                  height={300}
                  className="object-contain rounded-lg"
                />
                <div className="mt-4 space-y-3">
                  <a
                    href="https://cdo.travel/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Site Oficial da CDO Travel
                  </a>
                </div>
              </div>

              <div className="md:w-2/3">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  CDO Travel
                </h2>
                <p className="text-gray-600 mb-6">
                  A CDO Travel é uma agência especializada em Orlando, com mais
                  de 11 anos de experiência. Oferece atendimento personalizado e
                  pacotes completos, garantindo a melhor experiência para sua
                  viagem aos parques da Disney, Universal e muito mais.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-purple-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        Serviços Oferecidos
                      </h3>
                      <ul className="text-gray-600 text-sm list-disc list-inside">
                        <li>Pacotes completos para Orlando</li>
                        <li>Ingressos de parques</li>
                        <li>Reservas de hotéis</li>
                        <li>Aluguel de carros</li>
                        <li>Transfers e passeios</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-purple-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        Localização
                      </h3>
                      <p className="text-gray-600 text-sm">
                        12211 Regency Village Dr. - Suite 5 - Orlando, FL 32821
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-purple-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-800">Contato</h3>
                      <ul className="text-gray-600 text-sm list-disc list-inside">
                        <li>WhatsApp</li>
                        <li>E-mail</li>
                        <li>Redes Sociais</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-purple-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        Diferenciais
                      </h3>
                      <ul className="text-gray-600 text-sm list-disc list-inside">
                        <li>Atendimento em português</li>
                        <li>Suporte durante a viagem</li>
                        <li>Parcelamento facilitado</li>
                        <li>Consultores especializados</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-3">
                    Por que escolher a CDO Travel?
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600">•</span>
                      Experiência comprovada no mercado de turismo
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600">•</span>
                      Atendimento personalizado do início ao fim
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600">•</span>
                      Parceria com os principais fornecedores de Orlando
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600">•</span>
                      Suporte 24/7 durante sua viagem
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600">•</span>
                      Melhores condições de pagamento do mercado
                    </li>
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
