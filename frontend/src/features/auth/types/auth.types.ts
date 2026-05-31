export type RegisterInput = {
  name: string;
  username: string;
  email: string;
  password: string;
};

export type PublicUser = {
  uuid: string;
  name: string;
  username: string;
  email: string;
  createdAt: string;
  updatedAt: string;
};

export type RegisterResponse = {
  message: string;
  user: PublicUser;
};

export type RegisterMutationData = {
  register: RegisterResponse;
};

export type LoginInput = {
  email: string;
  password: string;
};
