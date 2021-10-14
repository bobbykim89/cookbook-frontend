import { NEXT_URL } from '@/config/';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

const endpoint = `${NEXT_URL}/api/graphql`;

const link = new HttpLink({ uri: endpoint });
const cache = new InMemoryCache();

export async function getStaticApolloClient() {
  return new ApolloClient({
    link,
    cache,
  });
}
