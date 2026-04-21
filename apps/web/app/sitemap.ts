import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://beyndesh.com';
  return [
    { url: base, lastModified: new Date(), changeFrequency: 'daily', priority: 1 },
    { url: `${base}/trips`, lastModified: new Date(), changeFrequency: 'hourly', priority: 0.9 },
    { url: `${base}/destinations`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.7 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/faq`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
  ];
}
