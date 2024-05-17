import { AxiosError } from "axios";

type ErrorType = {
  code: string;
  reason: string;
  status: number;
};

export const getErrorMessage = (error: unknown) => {
  const { response } = (error as unknown) as AxiosError;
  const data = response?.data as ErrorType;
  alert(data.reason);
};
