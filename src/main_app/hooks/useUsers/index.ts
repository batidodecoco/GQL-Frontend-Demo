import { ApolloError, useQuery } from "@apollo/client";
import complete_users_query from "../../../service_providers/graphql/queries/complete_users_query";

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  telephone: string;
}

interface UseUsersResult {
  users: User[];
  loading: boolean;
  error?: ApolloError;
}

export function useUsers (): UseUsersResult {
  const { loading, error, data } = useQuery(complete_users_query);

  return {
    users: data?.users ?? [],
    loading,
    error,
  }
}