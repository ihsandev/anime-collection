export interface IAnimeDetail {
    id: number | string;
    title: {
        english: string;
    },
    description: string
    coverImage: {
        extraLarge: string;
        color: string;
    };
    bannerImage?: string;
    type: string;
    status: string;
    genres: string[];
    episodes: number | string;
    isFavorite?: boolean;
}