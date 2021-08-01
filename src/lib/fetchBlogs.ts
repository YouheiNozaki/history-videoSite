import { client } from './microcmsClient';
import type { Blogs } from '../types/blog';

export const fetchArticles = async () => {
  const articles = await client.get<Blogs>({
    endpoint: 'blog',
  });

  return articles;
};
