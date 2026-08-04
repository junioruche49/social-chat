import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, type SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import type { z } from "zod";

import { useLogin } from "@/features/login/mutations/useLogin";
import useToast from "@/shared/hooks/useToast";
import type { User } from "@/shared/types/user";
import useAuthStore from "@/store/useAuthStore";
import Button from "../../../shared/components/ui/Button";
import CustomInput from "../../../shared/components/ui/CustomInput";
import Text from "../../../shared/components/ui/Text";
import { loginSchema } from "../schemas/loginSchema";

export type loginCredentails = {
	email: string;
	password: string;
};

export default function LoginForm() {
	const navigation = useNavigate();
	const { mutate: loginUser, isPending } = useLogin();
	const { showSuccess, showError } = useToast();
	const { login: loginAuthStore } = useAuthStore();
	type LoginSchemaData = z.infer<typeof loginSchema>;
	const {
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<LoginSchemaData>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});
	const onSubmit: SubmitHandler<LoginSchemaData> = (data) => {
		const newLogin: loginCredentails = {
			email: data.email,
			password: data.password,
		};
		loginUser(newLogin, {
			onSuccess: (data) => {
				showSuccess("Login successful!");
				const res = data as {
					data: { user: User; accessToken: string; refreshToken: string };
				};
				loginAuthStore(
					res.data?.user,
					res.data?.accessToken,
					res.data?.refreshToken,
				);
				navigation("/dashboard", { replace: true });
			},
			onError: (error: unknown) => {
				const errorMessage =
					typeof error === "object" && error !== null && "response" in error
						? (error as { response?: { data?: { detail?: string } } }).response
								?.data?.detail
						: undefined;
				showError(errorMessage || "An error occurred during login.");
			},
		});
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
			<Controller
				name="email"
				control={control}
				render={({ field }) => (
					<div className="flex flex-col leading-4 w-full">
						<CustomInput
							{...field}
							name="email"
							type="email"
							label="Email"
							placeholder="you@example.com"
						/>
						{errors.email && (
							<p className="text-red-600 text-left">{errors.email.message}</p>
						)}
					</div>
				)}
			/>

			<Controller
				name="password"
				control={control}
				render={({ field }) => (
					<div className="flex flex-col leading-4 w-full">
						<CustomInput
							{...field}
							name="password"
							type="password"
							label="Password"
							placeholder="••••••••"
						/>
						{errors.password && (
							<p className="text-red-600 text-left">
								{errors.password.message}
							</p>
						)}
					</div>
				)}
			/>
			<div>
				<Button disabled={isPending} name="submit" type="submit">
					{isPending ? "Logging in..." : "Log In"}
				</Button>
			</div>
			<div className="flex flex-row w-full justify-center gap-1 items-center">
				<Text type="p" tone="secondary" className="mr-4 font-medium text-sm">
					Don't have an account?
				</Text>
				<Link to="/signup" className="text-sm font-bold text-brand-primary">
					Sign up
				</Link>
			</div>
		</form>
	);
}
