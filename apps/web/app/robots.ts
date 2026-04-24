import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/dashboard/', '/api/', '/keystatic/'],
    },
    sitemap: 'https://byndbd.com/sitemap.xml',
  };
}
