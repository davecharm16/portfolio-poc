export interface ImageFormat {
  url: string;
  width: number;
  height: number;
}

export interface Image {
  id: number;
  url: string;
  alternativeText: string;
  width: number;
  height: number;
  formats?: {
    thumbnail?: ImageFormat;
    small?: ImageFormat;
    medium?: ImageFormat;
    large?: ImageFormat;
  };
}
