export type LevelRange = 1 | 2 | 3

export type levelInfoType = {
  level: LevelRange;
  info: string;
};

export type plantImagesType = {
  src: string;
  alt: string;
};

export type seasonType = {
  spring: boolean;
  summer: boolean;
  fall: boolean;
  winter: boolean;
};

export type plantDataType = {
  _id: string;
  _createdAt: Date;
  name: string;
  images: plantImagesType[];
  description: string;
  water: levelInfoType;
  care: levelInfoType;
  seasons: seasonType;
  size: levelInfoType;
  color: string[];
  total: number;
};
