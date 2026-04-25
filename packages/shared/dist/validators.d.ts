/**
 * @beyndesh/shared — Zod validators
 *
 * CRITICAL RULE: Every schema here is used twice:
 *   1. Client-side (React Hook Form resolver) — UX validation
 *   2. Server-side (API route handler) — security validation
 *
 * Never validate only on the client. Never validate only on the server.
 * Same schema. Both sides. Always.
 */
import { z } from 'zod';
export declare const loginSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
}, {
    email: string;
    password: string;
}>;
export declare const registerSchema: z.ZodEffects<z.ZodObject<{
    name: z.ZodString;
    email: z.ZodString;
    phone: z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodLiteral<"">]>;
    password: z.ZodString;
    confirmPassword: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
    name: string;
    confirmPassword: string;
    phone?: string | undefined;
}, {
    email: string;
    password: string;
    name: string;
    confirmPassword: string;
    phone?: string | undefined;
}>, {
    email: string;
    password: string;
    name: string;
    confirmPassword: string;
    phone?: string | undefined;
}, {
    email: string;
    password: string;
    name: string;
    confirmPassword: string;
    phone?: string | undefined;
}>;
/**
 * Contact page form — maps to createContactSubmission() in @beyndesh/api
 * Also aliased as contactFormSchema for backward compatibility.
 */
export declare const contactSchema: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodString;
    phone: z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodLiteral<"">]>;
    subject: z.ZodString;
    tripInterest: z.ZodOptional<z.ZodString>;
    preferredDates: z.ZodOptional<z.ZodString>;
    message: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    message: string;
    name: string;
    subject: string;
    phone?: string | undefined;
    tripInterest?: string | undefined;
    preferredDates?: string | undefined;
}, {
    email: string;
    message: string;
    name: string;
    subject: string;
    phone?: string | undefined;
    tripInterest?: string | undefined;
    preferredDates?: string | undefined;
}>;
/** Backward compatibility alias */
export declare const contactFormSchema: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodString;
    phone: z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodLiteral<"">]>;
    subject: z.ZodString;
    tripInterest: z.ZodOptional<z.ZodString>;
    preferredDates: z.ZodOptional<z.ZodString>;
    message: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    message: string;
    name: string;
    subject: string;
    phone?: string | undefined;
    tripInterest?: string | undefined;
    preferredDates?: string | undefined;
}, {
    email: string;
    message: string;
    name: string;
    subject: string;
    phone?: string | undefined;
    tripInterest?: string | undefined;
    preferredDates?: string | undefined;
}>;
export declare const newsletterSchema: z.ZodObject<{
    email: z.ZodString;
    /** Optional — used on trip pages to tag which trip drove the subscription */
    tripSlug: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    email: string;
    tripSlug?: string | undefined;
}, {
    email: string;
    tripSlug?: string | undefined;
}>;
export declare const reviewSchema: z.ZodObject<{
    tripSlug: z.ZodString;
    bookingId: z.ZodOptional<z.ZodString>;
    rating: z.ZodNumber;
    title: z.ZodString;
    body: z.ZodString;
    /** Optional traveler photo upload URL (after R2 upload) */
    photoUrl: z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodLiteral<"">]>;
    /** Consent to publish review publicly */
    consent: z.ZodEffects<z.ZodBoolean, boolean, boolean>;
}, "strip", z.ZodTypeAny, {
    title: string;
    tripSlug: string;
    rating: number;
    body: string;
    consent: boolean;
    bookingId?: string | undefined;
    photoUrl?: string | undefined;
}, {
    title: string;
    tripSlug: string;
    rating: number;
    body: string;
    consent: boolean;
    bookingId?: string | undefined;
    photoUrl?: string | undefined;
}>;
export declare const giftCardSchema: z.ZodObject<{
    /** Gift card value in BDT */
    amountBDT: z.ZodNumber;
    /** Recipient details */
    recipientName: z.ZodString;
    recipientEmail: z.ZodString;
    /** Sender details */
    senderName: z.ZodString;
    senderEmail: z.ZodString;
    /** Optional personal message */
    message: z.ZodOptional<z.ZodString>;
    /** Delivery date — ISO date string (today or future) */
    deliveryDate: z.ZodString;
}, "strip", z.ZodTypeAny, {
    amountBDT: number;
    recipientName: string;
    recipientEmail: string;
    senderName: string;
    senderEmail: string;
    deliveryDate: string;
    message?: string | undefined;
}, {
    amountBDT: number;
    recipientName: string;
    recipientEmail: string;
    senderName: string;
    senderEmail: string;
    deliveryDate: string;
    message?: string | undefined;
}>;
export declare const careerApplicationSchema: z.ZodObject<{
    jobId: z.ZodString;
    fullName: z.ZodString;
    email: z.ZodString;
    phone: z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodLiteral<"">]>;
    coverLetter: z.ZodString;
    /** Resume/CV file URL (after R2 upload) */
    resumeUrl: z.ZodString;
    /** Optional portfolio URL */
    portfolioUrl: z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodLiteral<"">]>;
    linkedInUrl: z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodLiteral<"">]>;
    /** How they heard about this role */
    referralSource: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    email: string;
    jobId: string;
    fullName: string;
    coverLetter: string;
    resumeUrl: string;
    phone?: string | undefined;
    portfolioUrl?: string | undefined;
    linkedInUrl?: string | undefined;
    referralSource?: string | undefined;
}, {
    email: string;
    jobId: string;
    fullName: string;
    coverLetter: string;
    resumeUrl: string;
    phone?: string | undefined;
    portfolioUrl?: string | undefined;
    linkedInUrl?: string | undefined;
    referralSource?: string | undefined;
}>;
export declare const tailorMadeSchema: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodString;
    phone: z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodLiteral<"">]>;
    groupSize: z.ZodNumber;
    preferredRegion: z.ZodOptional<z.ZodString>;
    desiredDuration: z.ZodOptional<z.ZodNumber>;
    budget: z.ZodOptional<z.ZodEnum<["economy", "standard", "premium", "luxury"]>>;
    travelDates: z.ZodOptional<z.ZodString>;
    interests: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    specialRequirements: z.ZodOptional<z.ZodString>;
    previousTrips: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    email: string;
    name: string;
    groupSize: number;
    phone?: string | undefined;
    preferredRegion?: string | undefined;
    desiredDuration?: number | undefined;
    budget?: "economy" | "standard" | "premium" | "luxury" | undefined;
    travelDates?: string | undefined;
    interests?: string[] | undefined;
    specialRequirements?: string | undefined;
    previousTrips?: string | undefined;
}, {
    email: string;
    name: string;
    groupSize: number;
    phone?: string | undefined;
    preferredRegion?: string | undefined;
    desiredDuration?: number | undefined;
    budget?: "economy" | "standard" | "premium" | "luxury" | undefined;
    travelDates?: string | undefined;
    interests?: string[] | undefined;
    specialRequirements?: string | undefined;
    previousTrips?: string | undefined;
}>;
/**
 * Step 1 — Trip selection (validated on step advance, not on final submit)
 */
export declare const bookingStep1Schema: z.ZodObject<{
    tripSlug: z.ZodString;
    departureDateId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    tripSlug: string;
    departureDateId: string;
}, {
    tripSlug: string;
    departureDateId: string;
}>;
/**
 * Step 2 — Dates & Travelers
 */
export declare const bookingStep2Schema: z.ZodObject<{
    adults: z.ZodNumber;
    children: z.ZodNumber;
    infants: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    children: number;
    adults: number;
    infants: number;
}, {
    children: number;
    adults: number;
    infants: number;
}>;
/**
 * Step 3 — Preferences
 */
export declare const bookingStep3Schema: z.ZodObject<{
    accommodationType: z.ZodOptional<z.ZodEnum<["standard", "premium", "luxury"]>>;
    dietaryRequirements: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    specialRequirements: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    specialRequirements?: string | undefined;
    accommodationType?: "standard" | "premium" | "luxury" | undefined;
    dietaryRequirements?: string[] | undefined;
}, {
    specialRequirements?: string | undefined;
    accommodationType?: "standard" | "premium" | "luxury" | undefined;
    dietaryRequirements?: string[] | undefined;
}>;
/**
 * Step 4 — Contact & Confirm (collected last, submitted to API)
 */
export declare const bookingStep4Schema: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodString;
    phone: z.ZodString;
    emergencyContactName: z.ZodString;
    emergencyContactPhone: z.ZodString;
    agreeToTerms: z.ZodEffects<z.ZodBoolean, boolean, boolean>;
}, "strip", z.ZodTypeAny, {
    email: string;
    name: string;
    phone: string;
    emergencyContactName: string;
    emergencyContactPhone: string;
    agreeToTerms: boolean;
}, {
    email: string;
    name: string;
    phone: string;
    emergencyContactName: string;
    emergencyContactPhone: string;
    agreeToTerms: boolean;
}>;
/**
 * Full booking schema — used by the API route for final server-side validation.
 * Combines all 4 steps.
 */
export declare const bookingSchema: z.ZodObject<{
    tripSlug: z.ZodString;
    departureDateId: z.ZodString;
} & {
    adults: z.ZodNumber;
    children: z.ZodNumber;
    infants: z.ZodNumber;
} & {
    accommodationType: z.ZodOptional<z.ZodEnum<["standard", "premium", "luxury"]>>;
    dietaryRequirements: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    specialRequirements: z.ZodOptional<z.ZodString>;
} & {
    name: z.ZodString;
    email: z.ZodString;
    phone: z.ZodString;
    emergencyContactName: z.ZodString;
    emergencyContactPhone: z.ZodString;
    agreeToTerms: z.ZodEffects<z.ZodBoolean, boolean, boolean>;
}, "strip", z.ZodTypeAny, {
    email: string;
    name: string;
    children: number;
    phone: string;
    tripSlug: string;
    departureDateId: string;
    adults: number;
    infants: number;
    emergencyContactName: string;
    emergencyContactPhone: string;
    agreeToTerms: boolean;
    specialRequirements?: string | undefined;
    accommodationType?: "standard" | "premium" | "luxury" | undefined;
    dietaryRequirements?: string[] | undefined;
}, {
    email: string;
    name: string;
    children: number;
    phone: string;
    tripSlug: string;
    departureDateId: string;
    adults: number;
    infants: number;
    emergencyContactName: string;
    emergencyContactPhone: string;
    agreeToTerms: boolean;
    specialRequirements?: string | undefined;
    accommodationType?: "standard" | "premium" | "luxury" | undefined;
    dietaryRequirements?: string[] | undefined;
}>;
/** Legacy alias */
export declare const bookingInquirySchema: z.ZodObject<{
    tripSlug: z.ZodString;
    departureDateId: z.ZodString;
} & {
    adults: z.ZodNumber;
    children: z.ZodNumber;
    infants: z.ZodNumber;
} & {
    accommodationType: z.ZodOptional<z.ZodEnum<["standard", "premium", "luxury"]>>;
    dietaryRequirements: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    specialRequirements: z.ZodOptional<z.ZodString>;
} & {
    name: z.ZodString;
    email: z.ZodString;
    phone: z.ZodString;
    emergencyContactName: z.ZodString;
    emergencyContactPhone: z.ZodString;
    agreeToTerms: z.ZodEffects<z.ZodBoolean, boolean, boolean>;
}, "strip", z.ZodTypeAny, {
    email: string;
    name: string;
    children: number;
    phone: string;
    tripSlug: string;
    departureDateId: string;
    adults: number;
    infants: number;
    emergencyContactName: string;
    emergencyContactPhone: string;
    agreeToTerms: boolean;
    specialRequirements?: string | undefined;
    accommodationType?: "standard" | "premium" | "luxury" | undefined;
    dietaryRequirements?: string[] | undefined;
}, {
    email: string;
    name: string;
    children: number;
    phone: string;
    tripSlug: string;
    departureDateId: string;
    adults: number;
    infants: number;
    emergencyContactName: string;
    emergencyContactPhone: string;
    agreeToTerms: boolean;
    specialRequirements?: string | undefined;
    accommodationType?: "standard" | "premium" | "luxury" | undefined;
    dietaryRequirements?: string[] | undefined;
}>;
export declare const tripSchema: z.ZodObject<{
    title: z.ZodString;
    titleBn: z.ZodOptional<z.ZodString>;
    slug: z.ZodString;
    excerpt: z.ZodOptional<z.ZodString>;
    excerptBn: z.ZodOptional<z.ZodString>;
    description: z.ZodString;
    descriptionBn: z.ZodOptional<z.ZodString>;
    duration: z.ZodNumber;
    nights: z.ZodNumber;
    difficulty: z.ZodEnum<["Easy", "Moderate", "Challenging"]>;
    maxGroupSize: z.ZodNumber;
    priceBDT: z.ZodNumber;
    priceUSD: z.ZodOptional<z.ZodNumber>;
    priceEUR: z.ZodOptional<z.ZodNumber>;
    coverImageUrl: z.ZodString;
    status: z.ZodEnum<["DRAFT", "IN_REVIEW", "SCHEDULED", "PUBLISHED", "ARCHIVED"]>;
    /** Destination ID reference */
    destinationId: z.ZodOptional<z.ZodString>;
    /** Category IDs */
    categoryIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    metaTitle: z.ZodOptional<z.ZodString>;
    metaDescription: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    status: "DRAFT" | "IN_REVIEW" | "SCHEDULED" | "PUBLISHED" | "ARCHIVED";
    title: string;
    slug: string;
    description: string;
    duration: number;
    nights: number;
    difficulty: "Easy" | "Moderate" | "Challenging";
    maxGroupSize: number;
    priceBDT: number;
    coverImageUrl: string;
    titleBn?: string | undefined;
    excerpt?: string | undefined;
    excerptBn?: string | undefined;
    descriptionBn?: string | undefined;
    priceUSD?: number | undefined;
    priceEUR?: number | undefined;
    destinationId?: string | undefined;
    categoryIds?: string[] | undefined;
    metaTitle?: string | undefined;
    metaDescription?: string | undefined;
}, {
    status: "DRAFT" | "IN_REVIEW" | "SCHEDULED" | "PUBLISHED" | "ARCHIVED";
    title: string;
    slug: string;
    description: string;
    duration: number;
    nights: number;
    difficulty: "Easy" | "Moderate" | "Challenging";
    maxGroupSize: number;
    priceBDT: number;
    coverImageUrl: string;
    titleBn?: string | undefined;
    excerpt?: string | undefined;
    excerptBn?: string | undefined;
    descriptionBn?: string | undefined;
    priceUSD?: number | undefined;
    priceEUR?: number | undefined;
    destinationId?: string | undefined;
    categoryIds?: string[] | undefined;
    metaTitle?: string | undefined;
    metaDescription?: string | undefined;
}>;
export declare const storySchema: z.ZodObject<{
    title: z.ZodString;
    titleBn: z.ZodOptional<z.ZodString>;
    slug: z.ZodString;
    excerpt: z.ZodOptional<z.ZodString>;
    excerptBn: z.ZodOptional<z.ZodString>;
    body: z.ZodString;
    bodyBn: z.ZodOptional<z.ZodString>;
    coverImageUrl: z.ZodString;
    status: z.ZodEnum<["DRAFT", "IN_REVIEW", "SCHEDULED", "PUBLISHED", "ARCHIVED"]>;
    authorId: z.ZodString;
    categoryIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    tagIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    metaTitle: z.ZodOptional<z.ZodString>;
    metaDescription: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    status: "DRAFT" | "IN_REVIEW" | "SCHEDULED" | "PUBLISHED" | "ARCHIVED";
    title: string;
    body: string;
    slug: string;
    coverImageUrl: string;
    authorId: string;
    titleBn?: string | undefined;
    excerpt?: string | undefined;
    excerptBn?: string | undefined;
    categoryIds?: string[] | undefined;
    metaTitle?: string | undefined;
    metaDescription?: string | undefined;
    bodyBn?: string | undefined;
    tagIds?: string[] | undefined;
}, {
    status: "DRAFT" | "IN_REVIEW" | "SCHEDULED" | "PUBLISHED" | "ARCHIVED";
    title: string;
    body: string;
    slug: string;
    coverImageUrl: string;
    authorId: string;
    titleBn?: string | undefined;
    excerpt?: string | undefined;
    excerptBn?: string | undefined;
    categoryIds?: string[] | undefined;
    metaTitle?: string | undefined;
    metaDescription?: string | undefined;
    bodyBn?: string | undefined;
    tagIds?: string[] | undefined;
}>;
export declare const destinationSchema: z.ZodObject<{
    name: z.ZodString;
    nameBn: z.ZodOptional<z.ZodString>;
    slug: z.ZodString;
    description: z.ZodString;
    descriptionBn: z.ZodOptional<z.ZodString>;
    coverImageUrl: z.ZodString;
    /** Mapbox coordinates [lng, lat] */
    longitude: z.ZodOptional<z.ZodNumber>;
    latitude: z.ZodOptional<z.ZodNumber>;
    country: z.ZodDefault<z.ZodString>;
    region: z.ZodOptional<z.ZodString>;
    status: z.ZodEnum<["DRAFT", "IN_REVIEW", "SCHEDULED", "PUBLISHED", "ARCHIVED"]>;
}, "strip", z.ZodTypeAny, {
    status: "DRAFT" | "IN_REVIEW" | "SCHEDULED" | "PUBLISHED" | "ARCHIVED";
    name: string;
    country: string;
    slug: string;
    description: string;
    coverImageUrl: string;
    descriptionBn?: string | undefined;
    nameBn?: string | undefined;
    longitude?: number | undefined;
    latitude?: number | undefined;
    region?: string | undefined;
}, {
    status: "DRAFT" | "IN_REVIEW" | "SCHEDULED" | "PUBLISHED" | "ARCHIVED";
    name: string;
    slug: string;
    description: string;
    coverImageUrl: string;
    country?: string | undefined;
    descriptionBn?: string | undefined;
    nameBn?: string | undefined;
    longitude?: number | undefined;
    latitude?: number | undefined;
    region?: string | undefined;
}>;
export declare const faqSchema: z.ZodObject<{
    question: z.ZodString;
    questionBn: z.ZodOptional<z.ZodString>;
    answer: z.ZodString;
    answerBn: z.ZodOptional<z.ZodString>;
    category: z.ZodOptional<z.ZodString>;
    sortOrder: z.ZodOptional<z.ZodNumber>;
    status: z.ZodEnum<["DRAFT", "IN_REVIEW", "SCHEDULED", "PUBLISHED", "ARCHIVED"]>;
}, "strip", z.ZodTypeAny, {
    status: "DRAFT" | "IN_REVIEW" | "SCHEDULED" | "PUBLISHED" | "ARCHIVED";
    question: string;
    answer: string;
    questionBn?: string | undefined;
    answerBn?: string | undefined;
    category?: string | undefined;
    sortOrder?: number | undefined;
}, {
    status: "DRAFT" | "IN_REVIEW" | "SCHEDULED" | "PUBLISHED" | "ARCHIVED";
    question: string;
    answer: string;
    questionBn?: string | undefined;
    answerBn?: string | undefined;
    category?: string | undefined;
    sortOrder?: number | undefined;
}>;
export type LoginInput = z.infer<typeof loginSchema>;
export type RegisterInput = z.infer<typeof registerSchema>;
export type ContactInput = z.infer<typeof contactSchema>;
export type ContactFormInput = ContactInput;
export type NewsletterInput = z.infer<typeof newsletterSchema>;
export type ReviewInput = z.infer<typeof reviewSchema>;
export type GiftCardInput = z.infer<typeof giftCardSchema>;
export type CareerApplicationInput = z.infer<typeof careerApplicationSchema>;
export type TailorMadeInput = z.infer<typeof tailorMadeSchema>;
export type BookingStep1Input = z.infer<typeof bookingStep1Schema>;
export type BookingStep2Input = z.infer<typeof bookingStep2Schema>;
export type BookingStep3Input = z.infer<typeof bookingStep3Schema>;
export type BookingStep4Input = z.infer<typeof bookingStep4Schema>;
export type BookingInput = z.infer<typeof bookingSchema>;
export type BookingInquiryInput = BookingInput;
export type TripInput = z.infer<typeof tripSchema>;
export type StoryInput = z.infer<typeof storySchema>;
export type DestinationInput = z.infer<typeof destinationSchema>;
export type FaqInput = z.infer<typeof faqSchema>;
//# sourceMappingURL=validators.d.ts.map