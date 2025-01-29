"use client";
import { motion } from "framer-motion";
import { ChevronRight, FerrisWheel } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function DisneyCard({ delay }: { delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay, duration: 0.2 }}
      className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg min-h-96 transition-shadow border-t-4 border-indigo-600"
    >
      <div className="block">
        <motion.div
          className="flex items-center justify-center gap-2 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <FerrisWheel className="w-6 h-6 text-indigo-600" />
          <h2 className="text-2xl font-semibold text-center text-gray-800">
            Parques Disney
          </h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center text-gray-600 text-sm mb-6"
        >
          Os parques mais mágicos do mundo
        </motion.p>
        <div className="space-y-6 min-h-60">
          <Link href="/disney#magickingdom">
            <motion.div
              className="flex flex-col items-center gap-4"
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src="/assets/images/magic-kingdom-logo.png"
                alt="Magic Kingdom"
                width={170}
                height={170}
                className="object-contain"
              />
              <div className="text-center">
                <h3 className="font-semibold text-gray-800">Magic Kingdom</h3>
                <p className="text-gray-600 text-sm mt-1">
                  O parque mais mágico do mundo
                </p>
              </div>
            </motion.div>
          </Link>

          <motion.div
            className="flex flex-col items-center gap-4 pt-4 border-t border-gray-100"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-center">
              <Link href="/disney">
                <motion.button
                  className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 transition-colors text-sm font-medium"
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Ver Todos os Parques
                  <ChevronRight className="w-4 h-4" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
