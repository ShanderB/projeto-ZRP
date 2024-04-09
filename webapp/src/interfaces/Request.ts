export interface Request {
    count: number;
    next: string | null | URL;
    previous: string | null | URL;
    results: Result[];
}

export interface Result {
    name: string;
    url: string;
}