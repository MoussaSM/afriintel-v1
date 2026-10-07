// Données de démonstration pour la V1.
// Structurées selon le Knowledge Blueprint (métadonnées prêtes pour le futur graphe :
// pays, secteur, technologies, organisations, niveau de maturité, sources).
// En V5 (Supabase), ces tableaux seront remplacés par de vraies requêtes en base,
// sans changer la façon dont les composants consomment les données.

export const piliers = [
  { nom: "News", slug: "news", description: "Actualités vérifiées et contextualisées." },
  { nom: "Insights", slug: "insights", description: "Analyses approfondies sur l'impact des technologies pour le continent." },
  { nom: "Intelligence", slug: "intelligence", description: "Cartes, tableaux de bord, rapports et bases de données." },
  { nom: "AI Lab", slug: "ai-lab", description: "Expérimentations, guides et cas d'usage concrets de l'IA." },
];

export const articles = [
  {
    slug: "startup-kenyane-ia-agricole",
    titre: "Une startup kenyane lève 12 M$ pour l'IA agricole",
    pilier: "News",
    resume: "Ce que révèle cette levée sur la maturité des investisseurs pour l'AgriTech africaine — et ce qui reste à prouver.",
    date: "2026-07-04",
    pays: ["Kenya"],
    secteur: "AgriTech",
    technologies: ["Intelligence artificielle", "Vision par ordinateur"],
    organisations: ["FarmSense AI"],
    niveau_maturite: "croissance",
    source: "Communiqué officiel de l'entreprise",
    derniere_verification: "2026-07-04",
    corps: [
      "FarmSense AI, une startup basée à Nairobi, vient d'annoncer une levée de fonds de 12 millions de dollars pour développer ses outils de diagnostic agricole basés sur la vision par ordinateur.",
      "Cette opération illustre une tendance plus large : les investisseurs internationaux montrent un intérêt croissant pour l'AgriTech africaine, un secteur longtemps sous-financé malgré son importance économique.",
      "Reste à voir si ce capital se traduira par une adoption réelle chez les petits exploitants, qui représentent l'essentiel de l'agriculture kenyane — l'enjeu n'est pas seulement technologique mais aussi celui de la distribution.",
    ],
  },
  {
    slug: "retard-francophone-ia",
    titre: "Pourquoi le retard francophone sur l'IA peut devenir un avantage",
    pilier: "Insights",
    resume: "L'Afrique francophone adopte l'IA générative deux ans après les usages anglophones. Une analyse des raisons — et des opportunités.",
    date: "2026-07-03",
    pays: ["Côte d'Ivoire", "Sénégal", "RDC"],
    secteur: "Éducation, Économie numérique",
    technologies: ["IA générative"],
    organisations: [],
    niveau_maturite: "émergent",
    source: "Analyse éditoriale AfriIntel",
    derniere_verification: "2026-07-03",
    corps: [
      "Les usages de l'IA générative se sont largement diffusés dans les pays anglophones d'Afrique avant d'atteindre leurs voisins francophones, un décalage souvent présenté comme un simple retard.",
      "Mais ce décalage peut aussi être lu autrement : il laisse le temps d'observer les erreurs commises ailleurs — réglementation tardive, usages non encadrés en éducation — et d'adapter l'adoption en conséquence.",
      "Plusieurs initiatives ivoiriennes et sénégalaises commencent à structurer cette adoption différemment, avec une attention plus précoce portée à la formation des enseignants et à la régulation.",
    ],
  },
  {
    slug: "automatiser-veille-agent-ia",
    titre: "Automatiser sa veille sectorielle avec un agent IA",
    pilier: "AI Lab",
    resume: "Un cas d'usage pas-à-pas, testé et validé par notre rédaction, pour les analystes et chercheurs.",
    date: "2026-07-02",
    pays: [],
    secteur: "Méthodologie",
    technologies: ["Agents IA", "Automatisation"],
    organisations: [],
    niveau_maturite: "établi",
    source: "Test interne AfriIntel",
    derniere_verification: "2026-07-02",
    corps: [
      "La veille sectorielle est chronophage : suivre les annonces d'investissement, les publications réglementaires et les lancements de produits sur plusieurs pays à la fois dépasse rapidement les capacités d'une lecture manuelle.",
      "Notre équipe a testé un agent de veille automatisée qui classe les sources par pertinence et propose un résumé structuré — validé et corrigé par un rédacteur avant toute utilisation, conformément à notre Architecture IA.",
      "Ce guide détaille la configuration utilisée, ses limites actuelles, et pourquoi la validation humaine reste, à ce stade, une étape non négociable.",
    ],
  },
];

export const intelligenceHub = {
  derniere_mise_a_jour: "2026-07-04",
  frequence_mise_a_jour: "Hebdomadaire (V1 — mise à jour manuelle)",
  indicateurs: [
    { label: "Levées de fonds (7 jours)", valeur: "6", source: "Compilation AfriIntel", niveau_confiance: "vérifié" },
    { label: "Nouvelles réglementations IA", valeur: "2", source: "Journaux officiels nationaux", niveau_confiance: "vérifié" },
    { label: "Modèles IA publiés (Afrique)", valeur: "3", source: "Annonces publiques", niveau_confiance: "probable" },
    { label: "Nouveaux data centers annoncés", valeur: "1", source: "Communiqués d'entreprise", niveau_confiance: "vérifié" },
  ],
};

export function getArticleBySlug(slug) {
  return articles.find((a) => a.slug === slug);
}

export function getArticlesByPilier(nomPilier) {
  return articles.filter((a) => a.pilier === nomPilier);
}
