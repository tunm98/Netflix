const AuthContext = React.createContext();

export function AuthContextProvider({ children }) {
  return <AuthContext.Provider>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
