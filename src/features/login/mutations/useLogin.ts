import { useMutation } from "@tanstack/react-query";
import type { loginCredentails } from "../components/LoginForm";
import { login } from "../endpoints/endpoints";

export const useLogin = () => {
	
	return useMutation({
		mutationFn: (user : loginCredentails) => login(user)
	});
};