/**
 * Sync database content to Meilisearch indexes.
 * Called after content publish/update in the CMS.
 */
import { db } from '@beyndesh/database';
import { tripsIndex, storiesIndex } from './search';

export async function reindexTrips() {
  const trips = await db.cmsTrip.findMany({ where: { status: 'PUBLISHED' } });
  await tripsIndex.addDocuments(trips.map(t => ({ id: t.id, ...t })));
}

export async function reindexStories() {
  const stories = await db.cmsStory.findMany({ where: { status: 'PUBLISHED' } });
  await storiesIndex.addDocuments(stories.map(s => ({ id: s.id, ...s })));
}

export async function reindexAll() {
  await Promise.all([reindexTrips(), reindexStories()]);
}
