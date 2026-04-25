/**
 * Meilisearch integration for full-text trip/story search.
 */
import { Meilisearch } from 'meilisearch';
declare const client: Meilisearch;
export declare const tripsIndex: import("meilisearch").Index<import("meilisearch").RecordAny>;
export declare const storiesIndex: import("meilisearch").Index<import("meilisearch").RecordAny>;
export declare function searchTrips(query: string, options?: {}): Promise<import("meilisearch").SearchResponse<import("meilisearch").RecordAny, {
    limit: number;
}>>;
export declare function searchStories(query: string, options?: {}): Promise<import("meilisearch").SearchResponse<import("meilisearch").RecordAny, {
    limit: number;
}>>;
export { client as searchClient };
//# sourceMappingURL=search.d.ts.map