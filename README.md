# AfriIntel — V1

## Démarrage

```
npm install
npm run dev
```
Puis ouvre http://localhost:3000

## Déploiement (Vercel, recommandé)
1. Crée un dépôt GitHub avec ce code (git init, git add ., git commit, git push)
2. Va sur vercel.com, connecte ton compte GitHub, importe le dépôt
3. Vercel détecte Next.js automatiquement — clique "Deploy"

## Structure
- src/app — pages (accueil, /a-propos, /articles/[slug], /pilier/[slug])
- src/components — Header, Hero, IntelligenceHub, Pillars, ArticleCard, Manifesto, Newsletter, Footer, SignalLine
- src/lib/data.js — données de démonstration (à remplacer par Supabase en Phase 5)
