export interface IAnimeMedia {
  title: {
    english: string;
  };
  bannerImage: string;
}

export interface IAnimeList {
  type?: string;
}

export interface AnimeListStyledProp {
  loading: string;
}

export interface IList {
  animeList?: IAnimeMedia[],
  loading?: boolean;
}