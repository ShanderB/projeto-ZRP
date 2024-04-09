export interface PaginationProps {
    nextUrl: string | null;
    prevUrl: string | null;
    fetchData: (url: string) => void;
    API: string;
}