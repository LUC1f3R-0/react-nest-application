import { graphqlRequest } from "../../../shared/api/graphqlRequest";
import type {
  RegisterInput,
  RegisterMutationData,
  RegisterResponse,
} from "../types/auth.types";

const REGISTER_MUTATION = `
  mutation Register($input: RegisterInput!) {
    register(input: $input) {
      message
      user {
        uuid
        name
        username
        email
        createdAt
        updatedAt
      }
    }
  }
`;

export const registerUser = async (
  input: RegisterInput,
): Promise<RegisterResponse> => {
  const data = await graphqlRequest<
    RegisterMutationData,
    { input: RegisterInput }
  >(REGISTER_MUTATION, {
    input,
  });

  return data.register;
};
