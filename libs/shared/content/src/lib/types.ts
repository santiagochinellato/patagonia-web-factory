// libs/shared/content/src/lib/types.ts

export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
}

export interface Post {
  title: string;
  slug: { current: string };
  publishedAt: string;
  mainImage?: SanityImage;
}

export interface Page {
  title: string;
  content: any[]; // Portable Text
}
