import { Currency, Locale } from "./types";
/**
 * Converts Western numerals to Bangla numerals.
 */
export declare const toBanglaNumerals: (text: string | number) => string;
/**
 * Formats a price into the specified currency with localized symbols.
 */
export declare const formatPrice: (amount: number, currency?: Currency) => string;
/**
 * Formats a date with support for English and Bangla locales.
 */
export declare const formatDate: (date: Date | string, locale?: Locale) => string;
/**
 * Formats a duration as "X Days / Y Nights".
 */
export declare const formatDuration: (days: number, nights: number) => string;
/**
 * Formats a phone number for display (+880 1XX-XXXX-XXX).
 */
export declare const formatPhoneDisplay: (phone: string) => string;
/**
 * Generates a WhatsApp API link.
 */
export declare const formatWhatsAppLink: (phone: string) => string;
/**
 * Generates a URL-friendly slug.
 */
export declare const slugify: (text: string) => string;
/**
 * Truncates text to a maximum length with ellipsis.
 */
export declare const truncate: (text: string, maxLength: number) => string;
//# sourceMappingURL=formatters.d.ts.map