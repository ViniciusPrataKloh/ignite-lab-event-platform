import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o0n6k101q101xmdpu4dgrl/master',
    cache: new InMemoryCache()
});