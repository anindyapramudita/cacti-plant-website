export type levelInfoType = {
  level: number;
  info: string;
};

export type plantImagesType = {
  mainImage: string;
  placeholder: string;
  alt: string;
};

export type plantDataType = {
  id: number;
  name: string;
  images: plantImagesType[];
  description: string;
  water: levelInfoType;
  difficulty: levelInfoType;
  season: string[];
  size: levelInfoType;
  color: string[];
};
