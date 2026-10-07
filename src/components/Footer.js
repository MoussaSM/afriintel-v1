import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#2A2E35] text-white/60 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <span className="text-[#F7F4EF] font-serif text-base">AfriIntel</span>
        <div className="flex gap-6 flex-wrap justify-center">
          <Link href="/a-propos" className="hover:text-white transition">À propos</Link>
          <Link href="/a-propos#methodologie" className="hover:text-white transition">Méthodologie éditoriale</Link>
          <Link href="#newsletter" className="hover:text-white transition">Newsletter</Link>
        </div>
        <span className="font-mono text-xs">© 2026 AfriIntel</span>
      </div>
    </footer>
  );
}
