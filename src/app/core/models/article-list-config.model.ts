export interface ArticleListConfig {
  type: string;

  filters: {
    tag?: string,
    author?: string,
    favorited?: boolean,
    limit?: number,
    offset?: number
  };
}
