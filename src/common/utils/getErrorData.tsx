import { AxiosError } from "axios";

type ErrorType = {
  code: string;
  reason: string;
  status: number;
};

type ValidErrorType = {
  message: string;
  role: string | null;
  valid: boolean;
};

export const getErrorMessage = (error: unknown) => {
  console.log(error);
  const { response } = (error as unknown) as AxiosError;
  if (response?.status == 502 || 404) {
    const data = response?.data as ErrorType;
    return data.reason;
  }
  if (response?.status == 400) {
    const data = response?.data as ValidErrorType;
    return data.message;
  }
};
