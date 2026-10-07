import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "À propos — AfriIntel",
  description: "La mission, la méthode et les valeurs d'AfriIntel.",
};

const valeurs = [
  { titre: "Crédibilité", texte: "Chaque information est vérifiée." },
  { titre: "Excellence", texte: "Chaque article apporte une réelle valeur ajoutée." },
  { titre: "Transparence", texte: "Nous expliquons comment nous travaillons, notamment lorsque l'IA intervient dans notre processus éditorial." },
  { titre: "Innovation", texte: "Nous utilisons les meilleures technologies sans sacrifier la qualité." },
  { titre: "Perspective africaine", texte: "Nous analysons les sujets mondiaux à travers leur impact sur l'Afrique." },
];

export default function AProposPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-[#F7F4EF]">
        <div className="max-w-2xl mx-auto px-6 py-16">
          <h1 className="font-serif text-4xl font-semibold text-[#0B1F3A] mb-8">À propos d&apos;AfriIntel</h1>

          <blockquote className="font-serif text-xl italic text-[#C96F34] border-l-4 border-[#C96F34] pl-5 mb-10">
            Nous refusons l&apos;idée que l&apos;Afrique doive simplement suivre les innovations du
            reste du monde. Nous croyons qu&apos;elle peut aussi les comprendre, les adapter et les créer.
          </blockquote>

          <p className="text-lg text-[#2A2E35] mb-6 leading-relaxed">
            AfriIntel est la plateforme africaine d&apos;intelligence stratégique augmentée par l&apos;IA
            — l&apos;endroit où l&apos;on vient non seulement lire, mais mesurer, comparer, interroger
            et anticiper les transformations technologiques du continent.
          </p>
          <p className="text-lg text-[#2A2E35] mb-14 leading-relaxed">
            AfriIntel aide l&apos;Afrique à comprendre le futur qu&apos;elle est en train de construire.
          </p>

          <h2 id="methodologie" className="font-serif text-2xl font-semibold text-[#0B1F3A] mb-6">
            Notre méthode
          </h2>
          <p className="text-[#2A2E35]/80 mb-4">
            Chaque article répond systématiquement à cinq questions : que s&apos;est-il passé, pourquoi
            est-ce important, quel est l&apos;impact pour l&apos;Afrique, quelles opportunités et quels
            risques, et que faut-il surveiller ensuite.
          </p>
          <p className="text-[#2A2E35]/80 mb-14">
            Aucun article n&apos;est publié s&apos;il n&apos;apporte pas une valeur ajoutée réelle par
            rapport à la source originale. L&apos;IA nous assiste dans la recherche, les résumés et la
            traduction — mais la décision éditoriale reste toujours humaine.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-[#0B1F3A] mb-6">Nos valeurs</h2>
          <div className="space-y-6">
            {valeurs.map((v) => (
              <div key={v.titre}>
                <h3 className="font-semibold text-[#0B1F3A]">{v.titre}</h3>
                <p className="text-[#2A2E35]/70 text-sm">{v.texte}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
