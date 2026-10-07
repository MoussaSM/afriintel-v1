import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#0B1F3A] text-[#F7F4EF] sticky top-0 z-50 border-b border-white/10">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-5">
        <Link href="/" className="font-serif text-2xl font-semibold flex items-baseline gap-1">
          AfriIntel
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#E8B34E] animate-pulse" />
        </Link>
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <Link href="/pilier/news" className="opacity-85 hover:opacity-100 transition">News</Link>
          <Link href="/pilier/insights" className="opacity-85 hover:opacity-100 transition">Insights</Link>
          <Link href="/pilier/intelligence" className="opacity-85 hover:opacity-100 transition">Intelligence</Link>
          <Link href="/pilier/ai-lab" className="opacity-85 hover:opacity-100 transition">AI Lab</Link>
          <Link href="/a-propos" className="opacity-85 hover:opacity-100 transition">À propos</Link>
        </nav>
        <Link
          href="#newsletter"
          className="bg-[#C96F34] text-[#F7F4EF] text-sm font-semibold px-4 py-2 rounded-sm hover:brightness-110 transition"
        >
          Newsletter
        </Link>
      </div>
    </header>
  );
}
