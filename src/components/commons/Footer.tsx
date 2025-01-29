"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <motion.footer
      className="my-12 text-center text-gray-500"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        &copy; {new Date().getFullYear()} Dúvidas Orlando. Todos os direitos
        reservados.
      </motion.p>
    </motion.footer>
  );
}
