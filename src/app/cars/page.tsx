"use client";

import { motion } from "framer-motion";
import { Car, CreditCard, ExternalLink, MapPin, Shield } from "lucide-react";
import Image from "next/image";

export default function CarsPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="px-8 pt-8 sm:px-10 sm:pt-10 bg-gray-50"
    >
      <header className="max-w-4xl mx-auto mb-12">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Car className="w-8 h-8 text-blue-600" />
          <h1 className="text-4xl font-bold text-gray-800">
            Aluguel de Carros
          </h1>
        </div>
        <p className="text-center text-gray-600">
          Encontre o carro ideal para sua viagem em Orlando
        </p>
      </header>

      <main className="max-w-4xl mx-auto">
        <div className="grid gap-8">
          <section className="bg-white p-8 rounded-xl shadow-sm">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/3">
                <Image
                  src="/assets/images/alamo.png"
                  alt="Alamo Rent a Car"
                  width={300}
                  height={300}
                  className="object-contain rounded-lg"
                />
                <div className="mt-4 space-y-3">
                  <a
                    href="https://www.alamo.com/pt_BR/car-rental/home.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Site Oficial da Alamo
                  </a>
                </div>
              </div>

              <div className="md:w-2/3">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Alamo Rent a Car
                </h2>
                <p className="text-gray-600 mb-6">
                  A Alamo é uma das locadoras mais tradicionais de Orlando,
                  oferecendo excelente custo-benefício e atendimento em
                  português. Com uma frota diversificada e processo simplificado
                  de locação, é uma ótima opção para brasileiros.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-start gap-3">
                    <Car className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        Tipos de Veículos
                      </h3>
                      <ul className="text-gray-600 text-sm list-disc list-inside">
                        <li>Econômicos</li>
                        <li>Intermediários</li>
                        <li>SUVs</li>
                        <li>Minivans</li>
                        <li>Luxos</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        Locais de Retirada
                      </h3>
                      <ul className="text-gray-600 text-sm list-disc list-inside">
                        <li>Aeroporto de Orlando (MCO)</li>
                        <li>International Drive</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-800">Seguros</h3>
                      <ul className="text-gray-600 text-sm list-disc list-inside">
                        <li>LDW (Proteção contra Danos)</li>
                        <li>EP (Proteção Estendida)</li>
                        <li>ALI (Seguro Adicional)</li>
                        <li>PAI (Proteção Pessoal)</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CreditCard className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        Formas de Pagamento
                      </h3>
                      <ul className="text-gray-600 text-sm list-disc list-inside">
                        <li>Cartões de Crédito</li>
                        <li>Vouchers Pré-pagos</li>
                        <li>Reserva Antecipada Online</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-3">
                    Informações Importantes
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">•</span>
                      <div>
                        <strong className="text-gray-800">
                          Auto Atendimento Fácil:
                        </strong>{" "}
                        Todo o processo é feito em totens de auto atendimento,
                        sem necessidade de falar com atendentes.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">•</span>
                      Idade mínima: 21 anos (taxa adicional para menores de 25)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">•</span>
                      Necessário cartão de crédito internacional em nome do
                      motorista
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">•</span>
                      Carteira de motorista física válida e passaporte
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">•</span>
                      GPS e cadeira de bebê disponíveis mediante taxa adicional
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">•</span>
                      Quilometragem livre na maioria dos planos
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Adicione mais seções para outras locadoras */}
        </div>
      </main>
    </motion.div>
  );
}
