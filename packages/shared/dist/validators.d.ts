import { z } from "zod";
export declare const contactFormSchema: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodString;
    subject: z.ZodString;
    message: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    email: string;
    subject: string;
    message: string;
}, {
    name: string;
    email: string;
    subject: string;
    message: string;
}>;
export declare const newsletterSchema: z.ZodObject<{
    email: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
}, {
    email: string;
}>;
export declare const bookingInquirySchema: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodString;
    phone: z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodLiteral<"">]>;
    tripId: z.ZodString;
    preferredDate: z.ZodOptional<z.ZodString>;
    groupSize: z.ZodNumber;
    accommodationPreference: z.ZodOptional<z.ZodString>;
    dietaryRequirements: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    specialRequirements: z.ZodOptional<z.ZodString>;
    howDidYouHear: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    name: string;
    email: string;
    tripId: string;
    groupSize: number;
    phone?: string | undefined;
    preferredDate?: string | undefined;
    accommodationPreference?: string | undefined;
    dietaryRequirements?: string[] | undefined;
    specialRequirements?: string | undefined;
    howDidYouHear?: string | undefined;
}, {
    name: string;
    email: string;
    tripId: string;
    groupSize: number;
    phone?: string | undefined;
    preferredDate?: string | undefined;
    accommodationPreference?: string | undefined;
    dietaryRequirements?: string[] | undefined;
    specialRequirements?: string | undefined;
    howDidYouHear?: string | undefined;
}>;
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
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    phone?: string | undefined;
}, {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    phone?: string | undefined;
}>, {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    phone?: string | undefined;
}, {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    phone?: string | undefined;
}>;
export declare const tripSchema: z.ZodObject<{
    title: z.ZodString;
    titleBn: z.ZodOptional<z.ZodString>;
    slug: z.ZodString;
    excerpt: z.ZodOptional<z.ZodString>;
    description: z.ZodString;
    duration: z.ZodNumber;
    nights: z.ZodNumber;
    difficulty: z.ZodEnum<["Easy", "Moderate", "Challenging"]>;
    maxGroupSize: z.ZodNumber;
    priceBDT: z.ZodNumber;
    priceUSD: z.ZodOptional<z.ZodNumber>;
    priceEUR: z.ZodOptional<z.ZodNumber>;
    status: z.ZodEnum<["DRAFT", "IN_REVIEW", "SCHEDULED", "PUBLISHED", "ARCHIVED"]>;
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
    titleBn?: string | undefined;
    excerpt?: string | undefined;
    priceUSD?: number | undefined;
    priceEUR?: number | undefined;
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
    titleBn?: string | undefined;
    excerpt?: string | undefined;
    priceUSD?: number | undefined;
    priceEUR?: number | undefined;
}>;
export type ContactFormInput = z.infer<typeof contactFormSchema>;
export type NewsletterInput = z.infer<typeof newsletterSchema>;
export type BookingInquiryInput = z.infer<typeof bookingInquirySchema>;
export type LoginInput = z.infer<typeof loginSchema>;
export type RegisterInput = z.infer<typeof registerSchema>;
export type TripInput = z.infer<typeof tripSchema>;
//# sourceMappingURL=validators.d.ts.map