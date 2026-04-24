import { MetadataRoute } from 'next';
import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '@/keystatic.config';

const reader = createReader(process.cwd(), keystaticConfig);
const BASE_URL = 'https://byndbd.com'; // Update with actual domain

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static pages
  const staticPages = [
    '', '/trips', '/about', '/contact', '/faq', '/reviews',
    '/stories', '/tailor-made', '/gallery', '/club', '/careers',
    '/partners', '/gift-cards', '/booking',
    '/privacy', '/terms', '/cancellation-policy', '/cookie-policy', '/liability-waiver',
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Dynamic trip pages
  let tripPages: MetadataRoute.Sitemap = [];
  try {
    const trips = await reader.collections.trips.all();
    tripPages = trips.map((trip) => ({
      url: `${BASE_URL}/trips/${trip.entry.category}/${trip.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    }));
  } catch {
    // CMS not available during build — skip dynamic pages
  }

  // Dynamic story pages
  let storyPages: MetadataRoute.Sitemap = [];
  try {
    const stories = await reader.collections.stories.all();
    storyPages = stories.map((story) => ({
      url: `${BASE_URL}/stories/${story.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));
  } catch {
    // CMS not available
  }

  return [...staticPages, ...tripPages, ...storyPages];
}
