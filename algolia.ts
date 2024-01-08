import algoliasearch from 'algoliasearch/lite';

const searchClient = algoliasearch(
  process.env.ALGOLIA_APP_ID!,
  process.env.ALGOLIA_SEARCH_KEY!
);

const searchIndex = searchClient.initIndex(process.env.ALGOLIA_INDEX_NAME!);

export const searchPosts = async (query: string) => {
  const { hits } = await searchIndex.search(query);
  return hits;
};
