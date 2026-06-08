import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://buddie-fod2r3dfd-xjyang01s-projects.vercel.app";
  return [
    { url: base,               lastModified: new Date(), changeFrequency: "daily",   priority: 1.0 },
    { url: `${base}/discover`, lastModified: new Date(), changeFrequency: "daily",   priority: 0.9 },
    { url: `${base}/nearby`,   lastModified: new Date(), changeFrequency: "daily",   priority: 0.8 },
    { url: `${base}/search`,   lastModified: new Date(), changeFrequency: "weekly",  priority: 0.7 },
    { url: `${base}/new`,      lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
  ];
}
