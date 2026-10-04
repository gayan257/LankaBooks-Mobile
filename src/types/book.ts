export type Book = {
  id?: string;
  title: string;
  author: string;
  genre: string;
  price: number;
  description: string;
  status?: 'draft' | 'published';
  publishedBy?: string;
  createdAt?: string;
};
