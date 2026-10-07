import Header from "@/components/Header";
import Hero from "@/components/Hero";
import IntelligenceHub from "@/components/IntelligenceHub";
import Pillars from "@/components/Pillars";
import ArticleCard from "@/components/ArticleCard";
import Manifesto from "@/components/Manifesto";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import { articles } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <IntelligenceHub />

        <section className="max-w-6xl mx-auto px-6 py-16">
          <div className="flex items-baseline justify-between mb-8 border-b border-black/10 pb-4">
            <h2 className="font-serif text-2xl font-semibold text-[#0B1F3A]">À la une</h2>
            <span className="font-mono text-xs uppercase tracking-wide text-[#C96F34]">
              Mis à jour aujourd&apos;hui
            </span>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </section>

        <Pillars />
        <Manifesto />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
