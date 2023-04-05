export type plantImagesType = {
  mainImage: string;
  placeholder: string;
  alt: string;
};

export type plantDataType = {
  id: number;
  name: string;
  images: plantImagesType;
  description: string;
  water: number;
  difficulty: number;
  season: string[];
  size: number;
  color: string[];
};
