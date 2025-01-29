"use client";

import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";

export default function FaqPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="px-8 pt-8 sm:px-10 sm:pt-10 bg-gray-50"
    >
      <header className="max-w-4xl mx-auto mb-12">
        <div className="flex items-center justify-center gap-3 mb-6">
          <HelpCircle className="w-8 h-8 text-amber-600" />
          <h1 className="text-4xl font-bold text-gray-800">
            Dúvidas Frequentes
          </h1>
        </div>
        <p className="text-center text-gray-600">
          Tire suas principais dúvidas sobre a viagem para Orlando
        </p>
      </header>

      <main className="max-w-4xl mx-auto">
        <div className="grid gap-8">
          <section id="visa" className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Visto Americano
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  Como tirar o visto?
                </h3>
                <p className="text-gray-600 mb-4">
                  O processo envolve 5 etapas principais:
                </p>
                <ol className="list-decimal list-inside text-gray-600 space-y-2 ml-4">
                  <li>Preencher o formulário DS-160 online</li>
                  <li>Pagar a taxa do visto (US$ 185)</li>
                  <li>Agendar e comparecer ao CASV para coleta de biometria</li>
                  <li>Realizar a entrevista no consulado</li>
                  <li>
                    Aguardar a emissão e entrega do passaporte com o visto
                  </li>
                </ol>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  Documentos necessários
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Passaporte válido</li>
                  <li>Foto no padrão americano</li>
                  <li>Comprovante de renda (holerite, declaração IR)</li>
                  <li>Comprovante de vínculo empregatício</li>
                  <li>Extratos bancários</li>
                  <li>Comprovantes de bens (imóveis, veículos)</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  Dicas importantes
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Seja honesto em todas as respostas</li>
                  <li>Demonstre vínculos fortes com o Brasil</li>
                  <li>Prepare-se para responder em inglês</li>
                  <li>Faça o processo com antecedência</li>
                </ul>
              </div>

              <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                <h3 className="font-semibold text-gray-800 mb-2">
                  Preciso de ajuda para tirar o visto?
                </h3>
                <p className="text-gray-600">
                  É altamente recomendável a contratação de uma assessoria
                  especializada em vistos caso você:
                </p>
                <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                  <li>Não tenha familiaridade com o processo</li>
                  <li>Não se sinta seguro com o idioma inglês</li>
                  <li>Queira evitar erros no preenchimento dos formulários</li>
                  <li>Deseje orientação personalizada para a entrevista</li>
                  <li>Precise de ajuda com a documentação necessária</li>
                </ul>
                <p className="text-gray-600 mt-3">
                  Uma assessoria profissional pode aumentar significativamente
                  suas chances de aprovação e tornar todo o processo mais
                  tranquilo.
                </p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <p className="text-sm text-gray-600">
                  <strong>Nota:</strong> Os valores e procedimentos mencionados
                  podem sofrer alterações. Sempre consulte o{" "}
                  <a
                    href="https://br.usembassy.gov/pt/vistos/turismo-e-negocio/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    site oficial da embaixada americana
                  </a>{" "}
                  para informações atualizadas.
                </p>
              </div>
            </div>
          </section>

          {/* <section id="money" className="bg-white p-8 rounded-xl shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Dinheiro e Cartões
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  Quanto levar em dinheiro?
                </h3>
                <p className="text-gray-600">
                  Recomenda-se levar entre $200-300 em dinheiro para
                  emergências. O ideal é usar cartões de crédito para a maioria
                  das despesas.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  Melhores cartões para usar
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Cartões sem taxa de IOF</li>
                  <li>Cartões com programa de milhas</li>
                  <li>Cartões com seguro viagem</li>
                </ul>
              </div>
            </div>
          </section>

          <section
            id="car-rental"
            className="bg-white p-8 rounded-xl shadow-sm"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Aluguel de Carro
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  Posso dirigir sendo menor de 25 anos?
                </h3>
                <p className="text-gray-600">
                  Sim, mas pode haver taxas adicionais. A idade mínima é 21 anos
                  e algumas locadoras cobram uma taxa extra para motoristas
                  entre 21-24 anos.
                </p>
              </div>
            </div>
          </section>

          <section id="health" className="bg-white p-8 rounded-xl shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Saúde e Segurança
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  Preciso tomar alguma vacina?
                </h3>
                <p className="text-gray-600">
                  Não há exigência específica de vacinas para entrar nos EUA,
                  mas recomenda-se estar em dia com as vacinas de rotina.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  Seguro viagem é obrigatório?
                </h3>
                <p className="text-gray-600">
                  Não é obrigatório, mas é altamente recomendado devido aos
                  altos custos médicos nos EUA.
                </p>
              </div>
            </div>
          </section> */}
        </div>
      </main>
    </motion.div>
  );
}
