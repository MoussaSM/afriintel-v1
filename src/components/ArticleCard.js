import Link from "next/link";

const tagColors = {
  News: "bg-[#0B1F3A]",
  Insights: "bg-[#C96F34]",
  Intelligence: "bg-[#E8B34E] text-[#0B1F3A]",
  "AI Lab": "bg-[#3D6FB4]",
};

export default function ArticleCard({ article }) {
  return (
    <Link
      href={`/articles/${article.slug}`}
      className="block bg-white border border-black/10 rounded-sm overflow-hidden hover:-translate-y-1 hover:shadow-lg transition"
    >
      <span className={`inline-block text-[11px] font-mono uppercase tracking-wide text-white px-2.5 py-1 ${tagColors[article.pilier] || "bg-[#0B1F3A]"}`}>
        {article.pilier}
      </span>
      <div className="p-5">
        <h3 className="font-semibold text-lg leading-snug mb-2">{article.titre}</h3>
        <p className="text-sm text-[#2A2E35]/70 mb-3">{article.resume}</p>
        <span className="font-mono text-[11px] text-[#8b8e95] uppercase">{article.date}</span>
      </div>
    </Link>
  );
}
