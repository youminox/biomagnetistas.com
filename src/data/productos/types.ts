export type ProductoCluster =
  | "resena"
  | "comparativa"
  | "guia-compra"
  | "info-tecnica";

export const PRODUCTO_CLUSTERS: Record<ProductoCluster, string> = {
  resena: "Reseñas de Imanes & Equipos",
  comparativa: "Comparativas Producto vs Producto",
  "guia-compra": "Guías de Compra & Rankings",
  "info-tecnica": "Info Técnica, Gauss & Mantenimiento",
};

export interface ProductoSeed {
  id: number;
  slug: string;
  title: string;
  seoTitle: string;
  excerpt: string;
  cluster: ProductoCluster;
  brand: string;
  badgeLabel: string;
  imageUrl: string;
  imageAlt: string;
  readTime: string;
  publishedAt: string;
  updatedAt: string;
  /** 3 keys from BIOMAGNETISMO_CATALOG in src/lib/amazon.ts */
  amazonProductKeys: [string, string, string];
  /** Technical specs table rows */
  specs: { label: string; value: string }[];
  pros: string[];
  cons: string[];
  keyTakeaways: string[];
  sections: { heading: string; paragraphs: string[] }[];
  faqs: { question: string; answer: string }[];
}

export interface ProductoArticle extends ProductoSeed {
  clusterLabel: string;
  toc: { id: string; label: string }[];
  contentFirstHalf: string;
  contentSecondHalf: string;
}

export interface ProductoSummary {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  cluster: ProductoCluster;
  clusterLabel: string;
  brand: string;
  badgeLabel: string;
  imageUrl: string;
  imageAlt: string;
  readTime: string;
  publishedAt: string;
  updatedAt: string;
}
