export type LevelInfoType = {
  level: number;
  info: string;
};

export type PlantImagesType = {
  src: string;
  alt: string;
};

export type SeasonType = {
  spring: boolean;
  summer: boolean;
  fall: boolean;
  winter: boolean;
};

export type PlantDataType = {
  _id: string;
  _createdAt: Date;
  name: string;
  images: PlantImagesType[];
  description: string;
  water: LevelInfoType;
  care: LevelInfoType;
  seasons: SeasonType;
  size: LevelInfoType;
  color: string[];
  total: number;
};
