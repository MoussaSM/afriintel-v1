import Link from "next/link";
import { piliers } from "@/lib/data";

const barColors = {
  news: "bg-[#0B1F3A]",
  insights: "bg-[#C96F34]",
  intelligence: "bg-[#E8B34E]",
  "ai-lab": "bg-[#3D6FB4]",
};

export default function Pillars() {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="font-serif text-2xl font-semibold text-[#0B1F3A] mb-8">Les quatre piliers</h2>
        <div className="grid md:grid-cols-4 border border-black/10">
          {piliers.map((p, i) => (
            <Link
              href={`/pilier/${p.slug}`}
              key={p.slug}
              className={`p-7 hover:bg-black/[0.02] transition ${i < piliers.length - 1 ? "md:border-r border-b md:border-b-0 border-black/10" : ""}`}
            >
              <div className={`w-7 h-1 mb-4 ${barColors[p.slug]}`} />
              <h3 className="font-semibold text-lg mb-2">{p.nom}</h3>
              <p className="text-sm text-[#2A2E35]/70">{p.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
