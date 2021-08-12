export interface UserState {
  isLoading?: boolean;
  isAuth?: boolean;
  errorCode?: number | null;
  error?: string | null;
  token?: string | null;
}

export interface LoginRequestPayload {
  Email: string;
  Password: string;
}
