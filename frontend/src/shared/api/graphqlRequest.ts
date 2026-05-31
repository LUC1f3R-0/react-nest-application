import graphqlClient from "./graphqlClient";
import type { GraphqlError, GraphqlResponse } from "./graphql.types";

const getGraphqlErrorMessage = (errors?: GraphqlError[]) => {
  if (!errors || errors.length === 0) {
    return "Something went wrong";
  }

  return errors[0]?.message ?? "Something went wrong";
};

export const graphqlRequest = async <TData, TVariables = unknown>(
  query: string,
  variables?: TVariables,
): Promise<TData> => {
  const response = await graphqlClient.post<GraphqlResponse<TData>>("", {
    query,
    variables,
  });

  if (response.data.errors?.length) {
    throw new Error(getGraphqlErrorMessage(response.data.errors));
  }

  if (!response.data.data) {
    throw new Error("No data returned from GraphQL server");
  }

  return response.data.data;
};
