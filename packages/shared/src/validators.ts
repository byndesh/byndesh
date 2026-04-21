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
import { DIFFICULTY_LEVELS, CONTENT_STATUSES } from './constants';

// ─── Shared Regex Patterns ───────────────────────────────────────────────────

/** Accepts +8801XXXXXXXXX or 01XXXXXXXXX (9 digit suffix, valid BD operators) */
const bangladeshPhoneRegex = /^(?:\+8801|01)[3-9]\d{8}$/;

/** Min 8 chars, 1 uppercase, 1 lowercase, 1 digit */
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

/** Slug: lowercase letters, numbers, hyphens only */
const slugRegex = /^[a-z0-9-]+$/;

// ─── Auth Forms ──────────────────────────────────────────────────────────────

export const loginSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

export const registerSchema = z
  .object({
    name: z.string().min(2, 'Name must be at least 2 characters').max(100),
    email: z.string().email('Please enter a valid email address'),
    phone: z
      .string()
      .regex(bangladeshPhoneRegex, 'Please enter a valid Bangladesh phone number')
      .optional()
      .or(z.literal('')),
    password: z
      .string()
      .min(8, 'Password must be at least 8 characters')
      .regex(
        passwordRegex,
        'Password must contain at least one uppercase letter, one lowercase letter, and one number'
      ),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

// ─── Public Web Forms ────────────────────────────────────────────────────────

/**
 * Contact page form — maps to createContactSubmission() in @beyndesh/api
 * Also aliased as contactFormSchema for backward compatibility.
 */
export const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Please enter a valid email address'),
  phone: z
    .string()
    .regex(bangladeshPhoneRegex, 'Please enter a valid BD phone number')
    .optional()
    .or(z.literal('')),
  subject: z.string().min(1, 'Subject is required').max(200),
  tripInterest: z.string().optional(), // Which trip they're enquiring about
  preferredDates: z.string().optional(),
  message: z
    .string()
    .min(10, 'Please provide at least 10 characters')
    .max(2000, 'Message is too long (max 2000 characters)'),
});

/** Backward compatibility alias */
export const contactFormSchema = contactSchema;

export const newsletterSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  /** Optional — used on trip pages to tag which trip drove the subscription */
  tripSlug: z.string().optional(),
});

export const reviewSchema = z.object({
  tripSlug: z.string().min(1, 'Trip is required'),
  bookingId: z.string().optional(),
  rating: z.coerce.number().min(1).max(5),
  title: z.string().min(3, 'Title is required').max(150),
  body: z.string().min(20, 'Please write at least 20 characters').max(3000),
  /** Optional traveler photo upload URL (after R2 upload) */
  photoUrl: z.string().url().optional().or(z.literal('')),
  /** Consent to publish review publicly */
  consent: z.boolean().refine((v) => v === true, 'You must agree to publish your review'),
});

export const giftCardSchema = z.object({
  /** Gift card value in BDT */
  amountBDT: z.coerce
    .number()
    .min(5000, 'Minimum gift card value is ৳5,000')
    .max(500000, 'Maximum gift card value is ৳5,00,000'),
  /** Recipient details */
  recipientName: z.string().min(2, 'Recipient name is required').max(100),
  recipientEmail: z.string().email('Please enter a valid recipient email'),
  /** Sender details */
  senderName: z.string().min(2, 'Your name is required').max(100),
  senderEmail: z.string().email('Please enter your email'),
  /** Optional personal message */
  message: z.string().max(500, 'Message is too long (max 500 characters)').optional(),
  /** Delivery date — ISO date string (today or future) */
  deliveryDate: z.string().min(1, 'Delivery date is required'),
});

export const careerApplicationSchema = z.object({
  jobId: z.string().min(1, 'Job ID is required'),
  fullName: z.string().min(2, 'Full name is required').max(100),
  email: z.string().email('Please enter a valid email address'),
  phone: z
    .string()
    .regex(bangladeshPhoneRegex, 'Please enter a valid BD phone number')
    .optional()
    .or(z.literal('')),
  coverLetter: z
    .string()
    .min(100, 'Cover letter must be at least 100 characters')
    .max(5000, 'Cover letter is too long'),
  /** Resume/CV file URL (after R2 upload) */
  resumeUrl: z.string().url('Please upload your resume'),
  /** Optional portfolio URL */
  portfolioUrl: z.string().url('Invalid URL').optional().or(z.literal('')),
  linkedInUrl: z.string().url('Invalid URL').optional().or(z.literal('')),
  /** How they heard about this role */
  referralSource: z.string().optional(),
});

export const tailorMadeSchema = z.object({
  name: z.string().min(2, 'Name is required').max(100),
  email: z.string().email('Please enter a valid email address'),
  phone: z
    .string()
    .regex(bangladeshPhoneRegex, 'Please enter a valid BD phone number')
    .optional()
    .or(z.literal('')),
  groupSize: z.coerce.number().min(1, 'At least 1 traveler').max(50, 'Max group size is 50'),
  preferredRegion: z.string().optional(),
  desiredDuration: z.coerce.number().min(1).max(30).optional(),
  budget: z.enum(['economy', 'standard', 'premium', 'luxury']).optional(),
  travelDates: z.string().optional(),
  interests: z.array(z.string()).optional(),
  specialRequirements: z.string().max(2000).optional(),
  previousTrips: z.string().max(1000).optional(),
});

// ─── Booking Form (4-step wizard) ─────────────────────────────────────────────

/**
 * Step 1 — Trip selection (validated on step advance, not on final submit)
 */
export const bookingStep1Schema = z.object({
  tripSlug: z.string().min(1, 'Please select a trip'),
  departureDateId: z.string().min(1, 'Please select a departure date'),
});

/**
 * Step 2 — Dates & Travelers
 */
export const bookingStep2Schema = z.object({
  adults: z.coerce.number().min(1, 'At least 1 adult required').max(20),
  children: z.coerce.number().min(0).max(20),
  infants: z.coerce.number().min(0).max(10),
});

/**
 * Step 3 — Preferences
 */
export const bookingStep3Schema = z.object({
  accommodationType: z.enum(['standard', 'premium', 'luxury']).optional(),
  dietaryRequirements: z.array(z.string()).optional(),
  specialRequirements: z.string().max(1000).optional(),
});

/**
 * Step 4 — Contact & Confirm (collected last, submitted to API)
 */
export const bookingStep4Schema = z.object({
  name: z.string().min(2, 'Full name is required').max(100),
  email: z.string().email('Please enter a valid email address'),
  phone: z
    .string()
    .regex(bangladeshPhoneRegex, 'Please enter a valid BD phone number'),
  emergencyContactName: z.string().min(2, 'Emergency contact name is required').max(100),
  emergencyContactPhone: z
    .string()
    .regex(bangladeshPhoneRegex, 'Please enter a valid BD phone number'),
  agreeToTerms: z.boolean().refine((v) => v, 'You must accept the terms and conditions'),
});

/**
 * Full booking schema — used by the API route for final server-side validation.
 * Combines all 4 steps.
 */
export const bookingSchema = bookingStep1Schema
  .merge(bookingStep2Schema)
  .merge(bookingStep3Schema)
  .merge(bookingStep4Schema);

/** Legacy alias */
export const bookingInquirySchema = bookingSchema;

// ─── CMS Content Forms ────────────────────────────────────────────────────────

export const tripSchema = z.object({
  title: z.string().min(3, 'Title is required').max(200),
  titleBn: z.string().max(200).optional(),
  slug: z.string().regex(slugRegex, 'Slug: only lowercase letters, numbers, and hyphens'),
  excerpt: z.string().max(500).optional(),
  excerptBn: z.string().max(500).optional(),
  description: z.string().min(50, 'Description is required (min 50 characters)'),
  descriptionBn: z.string().optional(),
  duration: z.coerce.number().min(1, 'Duration must be at least 1 day').max(30),
  nights: z.coerce.number().min(0).max(30),
  difficulty: z.enum(DIFFICULTY_LEVELS),
  maxGroupSize: z.coerce.number().min(1).max(50),
  priceBDT: z.coerce.number().positive('Price must be a positive number'),
  priceUSD: z.coerce.number().positive().optional(),
  priceEUR: z.coerce.number().positive().optional(),
  coverImageUrl: z.string().url('A cover image is required'),
  status: z.enum(CONTENT_STATUSES),
  /** Destination ID reference */
  destinationId: z.string().optional(),
  /** Category IDs */
  categoryIds: z.array(z.string()).optional(),
  // SEO
  metaTitle: z.string().max(70).optional(),
  metaDescription: z.string().max(160).optional(),
});

export const storySchema = z.object({
  title: z.string().min(3).max(200),
  titleBn: z.string().max(200).optional(),
  slug: z.string().regex(slugRegex, 'Slug: only lowercase letters, numbers, and hyphens'),
  excerpt: z.string().max(500).optional(),
  excerptBn: z.string().max(500).optional(),
  body: z.string().min(100, 'Story content is required'),
  bodyBn: z.string().optional(),
  coverImageUrl: z.string().url('A cover image is required'),
  status: z.enum(CONTENT_STATUSES),
  authorId: z.string().min(1, 'Author is required'),
  categoryIds: z.array(z.string()).optional(),
  tagIds: z.array(z.string()).optional(),
  metaTitle: z.string().max(70).optional(),
  metaDescription: z.string().max(160).optional(),
});

export const destinationSchema = z.object({
  name: z.string().min(2).max(100),
  nameBn: z.string().max(100).optional(),
  slug: z.string().regex(slugRegex),
  description: z.string().min(20),
  descriptionBn: z.string().optional(),
  coverImageUrl: z.string().url('A cover image is required'),
  /** Mapbox coordinates [lng, lat] */
  longitude: z.coerce.number().min(-180).max(180).optional(),
  latitude: z.coerce.number().min(-90).max(90).optional(),
  country: z.string().default('Bangladesh'),
  region: z.string().optional(),
  status: z.enum(CONTENT_STATUSES),
});

export const faqSchema = z.object({
  question: z.string().min(5, 'Question is required').max(500),
  questionBn: z.string().max(500).optional(),
  answer: z.string().min(10, 'Answer is required').max(5000),
  answerBn: z.string().max(5000).optional(),
  category: z.string().optional(),
  sortOrder: z.coerce.number().min(0).optional(),
  status: z.enum(CONTENT_STATUSES),
});

// ─── Inferred Types ───────────────────────────────────────────────────────────

// Auth
export type LoginInput = z.infer<typeof loginSchema>;
export type RegisterInput = z.infer<typeof registerSchema>;

// Public forms
export type ContactInput = z.infer<typeof contactSchema>;
export type ContactFormInput = ContactInput; // alias
export type NewsletterInput = z.infer<typeof newsletterSchema>;
export type ReviewInput = z.infer<typeof reviewSchema>;
export type GiftCardInput = z.infer<typeof giftCardSchema>;
export type CareerApplicationInput = z.infer<typeof careerApplicationSchema>;
export type TailorMadeInput = z.infer<typeof tailorMadeSchema>;

// Booking
export type BookingStep1Input = z.infer<typeof bookingStep1Schema>;
export type BookingStep2Input = z.infer<typeof bookingStep2Schema>;
export type BookingStep3Input = z.infer<typeof bookingStep3Schema>;
export type BookingStep4Input = z.infer<typeof bookingStep4Schema>;
export type BookingInput = z.infer<typeof bookingSchema>;
export type BookingInquiryInput = BookingInput; // alias

// CMS
export type TripInput = z.infer<typeof tripSchema>;
export type StoryInput = z.infer<typeof storySchema>;
export type DestinationInput = z.infer<typeof destinationSchema>;
export type FaqInput = z.infer<typeof faqSchema>;
