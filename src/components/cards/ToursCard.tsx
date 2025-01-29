import { motion } from "framer-motion";
import { Flag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function ToursCard() {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border-t-4 border-pink-600"
    >
      <Link href="/tours" className="block">
        <motion.div
          className="flex items-center justify-center gap-2 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Flag name="tour" className="w-6 h-6 text-pink-600" />
          <h2 className="text-2xl font-semibold text-center text-gray-800">
            Passeios
          </h2>
        </motion.div>
        <div className="space-y-6">
          <motion.div
            className="flex flex-col items-center gap-4"
            whileHover={{ scale: 1.05 }}
          >
            {/* <Image
              src="/empresas/tour1.png"
              alt="Passeios em Orlando"
              width={120}
              height={120}
              className="object-contain"
            /> */}
            <div className="text-center">
              <h3 className="font-semibold text-gray-800">Tours Especiais</h3>
              <p className="text-gray-600 text-sm mt-1">
                Experiências únicas além dos parques
              </p>
            </div>
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
}
