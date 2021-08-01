export type Blog = {
  id: string;

  title: string;
  publishedAt: string;
  body: string;
};

export type Blogs = {
  contents: Blog[];
  totalCount: number;
  limit: number;
  offset: number;
};
