export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  image: string;
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon: string;
  features: string[];
  process: { step: string; description: string }[];
  faqs: { question: string; answer: string }[];
}

export interface Review {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageBefore: string;
  imageAfter: string;
}
