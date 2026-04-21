export interface ApiResponse<T> {
    success: boolean;
    data?: T;
    error?: string;
}
export interface Pagination {
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
}
export interface PaginatedResponse<T> extends ApiResponse<T> {
    pagination: Pagination;
}
export interface BreadcrumbItem {
    label: string;
    href?: string;
}
export type Locale = "en" | "bn";
export type Currency = "BDT" | "USD" | "EUR";
//# sourceMappingURL=types.d.ts.map