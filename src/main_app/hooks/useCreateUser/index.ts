import { gql, useMutation } from '@apollo/client';
import { useCallback } from 'react';
import create_user_mutation from '../../../service_providers/graphql/mutations/create_user_mutation';
import { User as UserDTO } from '../useUsers';

interface CreateUserParams {
  firstName: string;
  lastName: string;
  email: string;
  telephone: string;
}

type User = (v: CreateUserParams) => Promise<{
  success: boolean;
  message: string;
  user: UserDTO;
}>;

interface CreateUserResult {
  createUser: User;
}

export function useCreateUser(): CreateUserResult {
  const [mutate] = useMutation(create_user_mutation, {
    update (cache, { data: { createUser }}) {
      cache.modify({
        fields: {
          users (existingUsers = []) {
            const newUserRef = cache.writeFragment({
              data: createUser.user,
              fragment: gql`
                fragment NewUser on User {
                  id
                  firstName
                  lastName
                  email
                  telephone
                }
              `
            });

            return [
              ...existingUsers,
              newUserRef
            ]
          }
        }
      })
    }
  });

  const createUser = useCallback(async(input: CreateUserParams) => {
    try {
      const { data, errors } = await mutate({
        variables: input
      });

      if (errors) {
        throw new Error(errors[0].message);
      }

      return data?.createUser
    } catch(err) {
      console.error(err);
    }
  }, [mutate]);

  return { createUser }
}