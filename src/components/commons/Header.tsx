"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const menuItems = [
  {
    href: "/",
    text: "Início",
    color: "gray",
    delay: 0.2,
  },
  {
    href: "/faq",
    text: "Dúvidas Frequentes",
    color: "amber",
    delay: 0.4,
  },
  {
    href: "/disney",
    text: "Parques Disney",
    color: "indigo",
    delay: 0.4,
  },
  {
    href: "/universal",
    text: "Parques Universal",
    color: "red",
    delay: 0.5,
  },
  {
    href: "/hotels",
    text: "Hotéis",
    color: "green",
    delay: 0.6,
  },
  {
    href: "/cars",
    text: "Aluguel de Carros",
    color: "blue",
    delay: 0.7,
  },
  // {
  //   href: "#tours",
  //   text: "Passeios",
  //   color: "pink",
  //   delay: 0.8,
  // },
  {
    href: "/agencies",
    text: "Agências de Viagem",
    color: "purple",
    delay: 0.9,
  },
];

export function Header() {
  return (
    <motion.nav
      className="mb-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.5 }}
    >
      <ul className="flex flex-wrap justify-center gap-8">
        {menuItems.map((item) => (
          <motion.li
            key={item.href}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: item.delay, duration: 0.5 }}
          >
            <Link href={item.href}>
              <motion.div
                className={`text-${item.color}-600 hover:text-${item.color}-800 transition-colors inline-block`}
                whileHover={{
                  scale: 1.05,
                  rotate: 5,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                {item.text}
              </motion.div>
            </Link>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
}
