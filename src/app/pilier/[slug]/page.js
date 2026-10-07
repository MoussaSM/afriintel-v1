import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import { piliers, articles } from "@/lib/data";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return piliers.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const pilier = piliers.find((p) => p.slug === params.slug);
  if (!pilier) return {};
  return { title: `${pilier.nom} — AfriIntel` };
}

export default function PilierPage({ params }) {
  const pilier = piliers.find((p) => p.slug === params.slug);
  if (!pilier) return notFound();

  const articlesDuPilier = articles.filter((a) => a.pilier === pilier.nom);

  return (
    <>
      <Header />
      <main className="flex-1 bg-[#F7F4EF]">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <span className="font-mono text-xs uppercase tracking-wide text-[#C96F34]">Pilier</span>
          <h1 className="font-serif text-4xl font-semibold text-[#0B1F3A] mt-2 mb-3">{pilier.nom}</h1>
          <p className="text-[#2A2E35]/70 max-w-xl mb-10">{pilier.description}</p>

          {articlesDuPilier.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-8">
              {articlesDuPilier.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          ) : (
            <p className="text-[#2A2E35]/60 italic">Aucun article publié pour l&apos;instant dans ce pilier.</p>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
