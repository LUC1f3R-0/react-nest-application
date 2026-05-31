export type GraphqlError = {
  message: string;
  extensions?: {
    code?: string;
    [key: string]: unknown;
  };
};

export type GraphqlResponse<TData> = {
  data?: TData;
  errors?: GraphqlError[];
};
