import { useMutation } from "@tanstack/react-query";
import AuthClient from "../services/auth-client";

const authClient = new AuthClient("/login");

const useLogin = (onLogin: () => void) => {
  return useMutation({
    mutationFn: authClient.register,
    onSuccess: () => {
      onLogin();
    },
  });
};

export default useLogin;
