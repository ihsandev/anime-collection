import { IColors } from "@/styles/theme.type";

export interface ICard {
  image?: string;
  title?: string;
  sizeImg?: string | number;
  onClick?: () => void;
  onBtnAction?: () => void;
  actionType?: string;
  isBookmarkActive?: boolean;
}

export interface CardStyledProp {
  colors?: IColors;
}

export interface TitleStyledProp {
  colors?: IColors;
}