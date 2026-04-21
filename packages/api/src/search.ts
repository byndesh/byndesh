/**
 * Meilisearch integration for full-text trip/story search.
 */
import { MeiliSearch } from 'meilisearch';

const client = new MeiliSearch({
  host: process.env.MEILISEARCH_HOST ?? 'http://localhost:7700',
  apiKey: process.env.MEILISEARCH_API_KEY,
});

export const tripsIndex = client.index('trips');
export const storiesIndex = client.index('stories');

export async function searchTrips(query: string, options = {}) {
  return tripsIndex.search(query, { limit: 20, ...options });
}

export async function searchStories(query: string, options = {}) {
  return storiesIndex.search(query, { limit: 20, ...options });
}

export { client as searchClient };
