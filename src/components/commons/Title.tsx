"use client";

import { motion } from "framer-motion";

export function Title() {
  return (
    <motion.header
      className="mb-12 text-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className={`text-5xl font-bold text-violet-800 mb-10 font-[Chewy]`}>
          Dúvidas Orlando
        </h1>
      </motion.div>
      <motion.h2
        className="text-4xl font-bold mt-4 text-gray-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Seu Guia de Viagem para Orlando
      </motion.h2>
      <motion.p
        className="mt-2 text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Tire suas dúvidas sobre Orlando e planeje sua viagem com confiança
      </motion.p>
    </motion.header>
  );
}
