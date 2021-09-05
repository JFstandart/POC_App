export interface PokeResponse { 
    count: number;
    next: string;
    previous: string;
    results: PokeArray[]
}

export interface PokeArray{ name: string; url: string; }