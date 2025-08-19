export type TResponses<T> = {
  status: number;
  message: string;
  data: T;
};
