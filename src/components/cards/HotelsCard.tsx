"use client";

import { motion } from "framer-motion";
import { Building, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function HotelsCard({ delay }: { delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay, duration: 0.5 }}
      className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg min-h-96 transition-shadow border-t-4 border-green-600"
    >
      <div className="block">
        <motion.div
          className="flex items-center justify-center gap-2 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Building className="w-6 h-6 text-green-600" />
          <h2 className="text-2xl font-semibold text-center text-gray-800">
            Hotéis
          </h2>
        </motion.div>
        <p className="text-center text-gray-600 text-sm mb-6">
          Hospedagem para todos os gostos e orçamentos
        </p>

        <div className="space-y-6 min-h-60">
          <Link href="/hotels#roseninn">
            <motion.div
              className="flex flex-col items-center gap-4"
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src="/assets/images/rosenini.png"
                alt="Rosen Inn International"
                width={170}
                height={170}
                className="object-cover"
              />
              <div className="text-center">
                <h3 className="font-semibold text-gray-800">
                  Rosen Inn International
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  Um dos melhores custos benefício de Orlando
                </p>
              </div>
            </motion.div>
          </Link>

          <motion.div
            className="flex flex-col items-center gap-4 pt-4 border-t border-gray-100"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-center">
              <Link href="/hotels">
                <motion.div
                  className="inline-flex items-center gap-2 text-green-600 hover:text-green-800 transition-colors text-sm font-medium"
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Ver Todos os Hotéis
                  <ChevronRight className="w-4 h-4" />
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
