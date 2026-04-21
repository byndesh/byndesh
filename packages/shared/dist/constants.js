export const SITE_NAME = "Beyndesh";
export const SITE_URL = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
export const TRIP_CATEGORIES = [
    { id: "river-expeditions", label: "River Expeditions", labelBn: "নদী অভিযান" },
    { id: "sundarbans-safari", label: "Sundarbans Safari", labelBn: "সুন্দরবন সাফারি" },
    { id: "hill-tracts", label: "Hill Tracts", labelBn: "পার্বত্য অঞ্চল" },
    { id: "tea-country", label: "Tea Country", labelBn: "চা বাগান অঞ্চল" },
    { id: "cultural", label: "Cultural Heritage", labelBn: "সাংস্কৃতিক ঐতিহ্য" },
    { id: "beach-islands", label: "Beach & Islands", labelBn: "সমুদ্র সৈকত ও দ্বীপ" },
    { id: "heritage", label: "Heritage Sites", labelBn: "ঐতিহ্যবাহী স্থান" },
    { id: "tailor-made", label: "Tailor-Made", labelBn: "আপনার পছন্দমত" },
];
export const DIFFICULTY_LEVELS = ["Easy", "Moderate", "Challenging"];
export const CONTENT_STATUSES = [
    "DRAFT",
    "IN_REVIEW",
    "SCHEDULED",
    "PUBLISHED",
    "ARCHIVED",
];
export const BOOKING_STATUSES = [
    "INQUIRY",
    "PROPOSAL_SENT",
    "NEGOTIATING",
    "DEPOSIT_PENDING",
    "DEPOSIT_PAID",
    "CONFIRMED",
    "IN_PROGRESS",
    "COMPLETED",
    "CANCELLED",
    "REFUNDED",
];
export const CURRENCIES = ["BDT", "USD", "EUR"];
export const ITEMS_PER_PAGE = 12;
export const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
export const ALLOWED_IMAGE_TYPES = [
    "image/jpeg",
    "image/png",
    "image/webp",
    "image/avif",
];
