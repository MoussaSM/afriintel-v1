import SignalLine from "./SignalLine";

export default function Hero() {
  return (
    <section className="bg-[#0B1F3A] text-[#F7F4EF] pt-16 pb-0">
      <div className="max-w-3xl mx-auto text-center px-6">
        <span className="font-mono text-xs tracking-[0.2em] uppercase text-[#E8B34E] mb-6 block">
          L&apos;intelligence de l&apos;Afrique
        </span>
        <h1 className="font-serif text-4xl md:text-5xl font-semibold leading-tight mb-7">
          AfriIntel aide l&apos;Afrique à comprendre le futur qu&apos;elle est en train de construire.
        </h1>
        <p className="text-white/75 text-lg max-w-xl mx-auto mb-12">
          Analyses vérifiées sur l&apos;IA, les technologies émergentes et les transformations
          stratégiques du continent — pensées et signées par des humains, assistées par l&apos;IA.
        </p>
      </div>
      <SignalLine />
    </section>
  );
}
