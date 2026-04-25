/**
 * Meilisearch integration for full-text trip/story search.
 */
import { Meilisearch } from 'meilisearch';
const client = new Meilisearch({
    host: process.env.MEILISEARCH_HOST ?? 'http://localhost:7700',
    apiKey: process.env.MEILISEARCH_API_KEY,
});
export const tripsIndex = client.index('trips');
export const storiesIndex = client.index('stories');
export async function searchTrips(query, options = {}) {
    return tripsIndex.search(query, { limit: 20, ...options });
}
export async function searchStories(query, options = {}) {
    return storiesIndex.search(query, { limit: 20, ...options });
}
export { client as searchClient };
