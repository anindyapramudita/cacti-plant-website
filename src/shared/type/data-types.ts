export type LevelRange = 1 | 2 | 3

export type LevelInfoType = {
  level: LevelRange;
  info: string;
};

export type PlantImagesType = {
  src: string;
  alt: string;
};

export type SeasonType = {
  spring?: boolean;
  summer?: boolean;
  fall?: boolean;
  winter?: boolean;
};

export type PlantDataType = {
  _id: string;
  _createdAt: string;
  name: string;
  images: PlantImagesType[];
  description: string;
  water: LevelInfoType;
  care: LevelInfoType;
  seasons: SeasonType;
  size: LevelInfoType;
  colors: string[];
  total: number;
};
