import { z } from "zod";
import { DIFFICULTY_LEVELS, CONTENT_STATUSES } from "./constants";
// --- Shared Helper Patterns ---
const bangladeshPhoneRegex = /^(?:\+8801|01)[3-9]\d{8}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
// --- Forms ---
export const contactFormSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    subject: z.string().min(1, "Subject is required"),
    message: z
        .string()
        .min(10, "Message must be at least 10 characters")
        .max(2000, "Message is too long"),
});
export const newsletterSchema = z.object({
    email: z.string().email("Please enter a valid email address"),
});
export const bookingInquirySchema = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Valid email is required"),
    phone: z.string().regex(bangladeshPhoneRegex, "Invalid Bangladesh phone number").optional().or(z.literal("")),
    tripId: z.string().min(1, "Trip selection is required"),
    preferredDate: z.string().optional(),
    groupSize: z.coerce.number().min(1).max(20),
    accommodationPreference: z.string().optional(),
    dietaryRequirements: z.array(z.string()).optional(),
    specialRequirements: z.string().max(1000).optional(),
    howDidYouHear: z.string().optional(),
});
// --- Auth ---
export const loginSchema = z.object({
    email: z.string().email("Valid email is required"),
    password: z.string().min(8, "Password must be at least 8 characters"),
});
export const registerSchema = z
    .object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Valid email is required"),
    phone: z.string().regex(bangladeshPhoneRegex, "Invalid phone number").optional().or(z.literal("")),
    password: z
        .string()
        .min(8, "Password must be at least 8 characters")
        .regex(passwordRegex, "Password must contain at least one uppercase letter, one lowercase letter, and one number"),
    confirmPassword: z.string(),
})
    .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
});
// --- CMS ---
export const tripSchema = z.object({
    title: z.string().min(3).max(200),
    titleBn: z.string().optional(),
    slug: z.string().regex(/^[a-z0-9-]+$/, "Slug must contain only lowercase letters, numbers, and hyphens"),
    excerpt: z.string().max(500).optional(),
    description: z.string().min(1, "Description is required"),
    duration: z.coerce.number().min(1).max(30),
    nights: z.coerce.number().min(0).max(30),
    difficulty: z.enum(DIFFICULTY_LEVELS),
    maxGroupSize: z.coerce.number().min(1).max(50),
    priceBDT: z.coerce.number().positive(),
    priceUSD: z.coerce.number().positive().optional(),
    priceEUR: z.coerce.number().positive().optional(),
    status: z.enum(CONTENT_STATUSES),
});
