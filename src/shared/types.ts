export type levelInfoType = {
  level: number;
  info: string;
};

export type plantImagesType = {
  mainImage: string;
  placeholder: string;
  alt: string;
};

export type seasonType = {
  spring: boolean;
  summer: boolean;
  fall: boolean;
  winter: boolean;
};

export type plantDataType = {
  id: number;
  name: string;
  images: plantImagesType[];
  description: string;
  water: levelInfoType;
  difficulty: levelInfoType;
  season: seasonType;
  size: levelInfoType;
  color: string[];
};
