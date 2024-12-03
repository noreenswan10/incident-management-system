export interface AuthContextType {
  isAuthenticated: boolean;
  isLogout: boolean;
  // accessToken: string | null;
  // rememberToken: string | null;
  login: (email: string, password: string) => void;
  logout: () => void;
  user: any | null;
  loading: boolean;
  userRoles: any;
  hasUserRole: boolean;
  hasTechnicianRole: boolean;
  hasAdminRole: boolean;
}