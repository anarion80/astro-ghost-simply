import GhostContentAPI from "@tryghost/content-api";

// Create API instance with site credentials
const api = new GhostContentAPI({
  url: import.meta.env.GHOST_API_URL,
  key: import.meta.env.GHOST_API_KEY,
  version: "v5.0"
});

export const getPosts = async ({filter = "", include = "tags,authors", limit = "all", order = "published_at DESC"}) => {
  return await api.posts
    .browse({
      limit: limit,
      include: include,
      filter: filter,
      order: order,
    })
    .catch(err => {
      console.error(err);
    });
}

export const getPages = async ({ filter = "", include = "tags,authors", limit = "all", order = "published_at DESC" }) => {
  return await api.pages
    .browse({
      limit: limit,
      include: include,
      filter: filter,
      order: order,
    })
    .catch(err => {
      console.error(err);
    });
}

export async function getSinglePost(postSlug) {
  return await api.posts
    .read({
      slug: postSlug
    })
    .catch(err => {
      console.error(err);
    });
}

export const getAuthors = async ({ filter = "", include = "count.posts", limit = "all", order = "slug ASC" }) => {
  return await api.authors
    .browse({
      limit: limit,
      include: include,
      filter: filter,
      order: order,
    })
    .catch(err => {
      console.error(err);
    });
}

export async function getAuthor(authorSlug) {
  return await api.authors
    .read({
      slug: authorSlug
    })
    .catch(err => {
      console.error(err);
    });
}

export const getTags = async ({filter = "", include = "tags,authors", limit = "all", order = "slug ASC"}) => {
  return await api.tags
    .browse({
      order: order,
      filter: filter,
      limit: limit,
      include: include,
    })
    .catch(err => {
      console.error(err);
    });
}

export async function getSettings() {
  return await api.settings
    .browse()
    .catch(err => {
      console.error(err);
    });
}
