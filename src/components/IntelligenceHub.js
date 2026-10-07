import { intelligenceHub } from "@/lib/data";

export default function IntelligenceHub() {
  return (
    <section className="bg-white border-y border-black/10">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex items-baseline justify-between mb-6 flex-wrap gap-2">
          <h2 className="font-serif text-xl font-semibold text-[#0B1F3A]">
            African AI Monitor
          </h2>
          <span className="font-mono text-xs text-[#C96F34] uppercase tracking-wide">
            Mis à jour le {intelligenceHub.derniere_mise_a_jour} · {intelligenceHub.frequence_mise_a_jour}
          </span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {intelligenceHub.indicateurs.map((ind) => (
            <div key={ind.label} className="border border-black/10 rounded-md p-4">
              <div className="font-serif text-3xl font-bold text-[#0B1F3A]">{ind.valeur}</div>
              <div className="text-sm text-[#2A2E35]/70 mt-1">{ind.label}</div>
              <div className="font-mono text-[10px] text-[#8b8e95] mt-3 uppercase tracking-wide">
                {ind.source} · {ind.niveau_confiance}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
