import { AgenciesCard } from "@/components/cards/AgenciesCard";
import { CarsCard } from "@/components/cards/CarsCard";
import { DisneyCard } from "@/components/cards/DisneyCard";
import { FaqCard } from "@/components/cards/FaqCard";
import { HotelsCard } from "@/components/cards/HotelsCard";
// import { ToursCard } from "@/components/cards/ToursCard";
import { UniversalCard } from "@/components/cards/UniversalCard";

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-10 sm:p-10 font-[family-name:var(--font-geist-sans)] bg-gray-50">
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <FaqCard delay={0.2} />
        <DisneyCard delay={0.4} />
        <UniversalCard delay={0.6} />
        <HotelsCard delay={0.8} />
        <CarsCard delay={1.0} />
        {/* <ToursCard delay={2.0} /> */}
        <AgenciesCard delay={1.2} />
      </main>
    </div>
  );
}
