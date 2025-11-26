// libs/shared/content/src/lib/queries.ts

export const GET_ALL_POSTS = `*[_type == "post"] {
  title,
  slug,
  publishedAt,
  mainImage
}`;

export const GET_PAGE_BY_SLUG = `*[_type == "page" && slug.current == $slug][0] {
  title,
  content
}`;
