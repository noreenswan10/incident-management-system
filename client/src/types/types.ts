export interface AuthContextType {
  accessToken: string | null;
  rememberToken: string | null;
  login: (email: string, password: string) => void;
  logout: () => void;
  user: any | null;
}