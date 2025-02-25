import { useMutation } from "@tanstack/react-query";
import AuthClient from "../services/auth-client";

const authClient = new AuthClient("/register");

const useRegister = (onRegister: () => void) => {
  return useMutation({
    mutationFn: authClient.register,
    onSuccess: () => {
      onRegister();
    },
  });
};

export default useRegister;
