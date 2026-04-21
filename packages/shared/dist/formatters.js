/**
 * Converts Western numerals to Bangla numerals.
 */
export const toBanglaNumerals = (text) => {
    const banglaDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
    return String(text).replace(/\d/g, (digit) => banglaDigits[parseInt(digit)]);
};
/**
 * Formats a price into the specified currency with localized symbols.
 */
export const formatPrice = (amount, currency = "BDT") => {
    const formatters = {
        BDT: new Intl.NumberFormat("bn-BD", {
            style: "currency",
            currency: "BDT",
            minimumFractionDigits: 0,
        }),
        USD: new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 0,
        }),
        EUR: new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
            minimumFractionDigits: 0,
        }),
    };
    const formatted = formatters[currency].format(amount);
    // For BDT, replace the default spacing if needed or ensure ৳ is used
    if (currency === "BDT") {
        // Ensuring the BDT symbol is consistent
        return formatted.replace("BDT", "৳").replace("Tk", "৳");
    }
    return formatted;
};
/**
 * Formats a date with support for English and Bangla locales.
 */
export const formatDate = (date, locale = "en") => {
    const d = typeof date === "string" ? new Date(date) : date;
    if (locale === "bn") {
        const monthsBn = [
            "জানুয়ারি", "ফেব্রুয়ারি", "মার্চ", "এপ্রিল", "মে", "জুন",
            "জুলাই", "আগস্ট", "সেপ্টেম্বর", "অক্টোবর", "নভেম্বর", "ডিসেম্বর"
        ];
        const day = toBanglaNumerals(d.getDate());
        const month = monthsBn[d.getMonth()];
        const year = toBanglaNumerals(d.getFullYear());
        return `${day} ${month} ${year}`;
    }
    return d.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });
};
/**
 * Formats a duration as "X Days / Y Nights".
 */
export const formatDuration = (days, nights) => {
    return `${days} Day${days > 1 ? "s" : ""} / ${nights} Night${nights > 1 ? "s" : ""}`;
};
/**
 * Formats a phone number for display (+880 1XX-XXXX-XXX).
 */
export const formatPhoneDisplay = (phone) => {
    const cleaned = phone.replace(/\D/g, "");
    if (cleaned.length === 11) {
        // 01712345678 -> +880 171-2345-678
        return `+880 ${cleaned.substring(1, 4)}-${cleaned.substring(4, 8)}-${cleaned.substring(8)}`;
    }
    if (cleaned.length === 13 && cleaned.startsWith("880")) {
        // 8801712345678 -> +880 171-2345-678
        return `+880 ${cleaned.substring(3, 6)}-${cleaned.substring(6, 10)}-${cleaned.substring(10)}`;
    }
    return phone;
};
/**
 * Generates a WhatsApp API link.
 */
export const formatWhatsAppLink = (phone) => {
    const cleaned = phone.replace(/\D/g, "");
    const formatted = cleaned.startsWith("0") ? `88${cleaned}` : cleaned;
    return `https://wa.me/${formatted}`;
};
/**
 * Generates a URL-friendly slug.
 */
export const slugify = (text) => {
    return text
        .toString()
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-") // Replace spaces with -
        .replace(/[^\w-]+/g, "") // Remove all non-word chars
        .replace(/--+/g, "-"); // Replace multiple - with single -
};
/**
 * Truncates text to a maximum length with ellipsis.
 */
export const truncate = (text, maxLength) => {
    if (text.length <= maxLength)
        return text;
    return text.slice(0, maxLength).trim() + "...";
};
