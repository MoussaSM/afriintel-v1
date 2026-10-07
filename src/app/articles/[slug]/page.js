import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { articles, getArticleBySlug } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }) {
  const article = getArticleBySlug(params.slug);
  if (!article) return {};
  return {
    title: `${article.titre} — AfriIntel`,
    description: article.resume,
  };
}

export default function ArticlePage({ params }) {
  const article = getArticleBySlug(params.slug);
  if (!article) return notFound();

  return (
    <>
      <Header />
      <main className="flex-1 bg-[#F7F4EF]">
        <article className="max-w-2xl mx-auto px-6 py-16">
          <Link href="/" className="font-mono text-xs uppercase tracking-wide text-[#C96F34] hover:underline">
            ← Retour à l&apos;accueil
          </Link>

          <span className="block font-mono text-xs uppercase tracking-wide text-[#0B1F3A]/60 mt-6">
            {article.pilier} · {article.date}
          </span>
          <h1 className="font-serif text-3xl md:text-4xl font-semibold text-[#0B1F3A] mt-3 mb-6 leading-tight">
            {article.titre}
          </h1>
          <p className="text-lg text-[#2A2E35]/80 mb-10">{article.resume}</p>

          <div className="space-y-5 text-[#2A2E35] leading-relaxed">
            {article.corps.map((paragraphe, i) => (
              <p key={i}>{paragraphe}</p>
            ))}
          </div>

          <div className="mt-14 border-t border-black/10 pt-6">
            <h2 className="font-mono text-xs uppercase tracking-wide text-[#0B1F3A]/60 mb-3">
              Traçabilité
            </h2>
            <dl className="grid grid-cols-2 gap-y-2 text-sm text-[#2A2E35]/70">
              <dt className="font-medium">Pays concernés</dt>
              <dd>{article.pays.length ? article.pays.join(", ") : "—"}</dd>
              <dt className="font-medium">Secteur</dt>
              <dd>{article.secteur}</dd>
              <dt className="font-medium">Technologies</dt>
              <dd>{article.technologies.join(", ") || "—"}</dd>
              <dt className="font-medium">Source</dt>
              <dd>{article.source}</dd>
              <dt className="font-medium">Dernière vérification</dt>
              <dd>{article.derniere_verification}</dd>
            </dl>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
