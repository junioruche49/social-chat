import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import type { z } from "zod";

import useToast from "@/shared/hooks/useToast";
import type { User } from "@/shared/types/user";
import useAuthStore from "@/stores/useAuthStore";
import Button from "../../../shared/components/ui/Button";
import CustomInput from "../../../shared/components/ui/CustomInput";
import Text from "../../../shared/components/ui/Text";
import { useSignup } from "../mutations/useSignup";
import { signupSchema } from "../schemas/signupSchema";

export default function SignupForm() {
	const navigation = useNavigate();
	const { showSuccess, showError } = useToast();
	const { login: loginAuthStore } = useAuthStore();
	type SignupSchemaData = z.infer<typeof signupSchema>;

	const { mutate: signupUser, isPending } = useSignup();

	const {
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<SignupSchemaData>({
		resolver: zodResolver(signupSchema),
		defaultValues: {
			firstName: "",
			lastName: "",
			bio: "",
			email: "",
			password: "",
			confirmpassword: "",
		},
	});

	const onSubmit = (data: SignupSchemaData) => {
		const newSignup: User & { passwordConfirm: string } = {
			email: data.email,
			password: data.password,
			passwordConfirm: data.confirmpassword,
			bio: data.bio ?? "",
			firstName: data.firstName,
			lastName: data.lastName,
		};
		signupUser(newSignup, {
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
				name="firstName"
				control={control}
				render={({ field }) => (
					<div className="flex flex-col leading-4 w-full">
						<CustomInput
							{...field}
							name="firstName"
							type="text"
							label="First Name"
							placeholder="John Doe"
						/>
						{errors.firstName && (
							<p className="text-red-600 text-left text-sm">
								{errors.firstName.message}
							</p>
						)}
					</div>
				)}
			/>
			<Controller
				name="lastName"
				control={control}
				render={({ field }) => (
					<div className="flex flex-col leading-4 w-full">
						<CustomInput
							{...field}
							name="lastName"
							type="text"
							label="Last Name"
							placeholder="John Doe"
						/>
						{errors.lastName && (
							<p className="text-red-600 text-left text-sm">
								{errors.lastName.message}
							</p>
						)}
					</div>
				)}
			/>
			<Controller
				name="bio"
				control={control}
				render={({ field }) => (
					<div className="flex flex-col leading-4 w-full">
						<CustomInput
							{...field}
							name="bio"
							value={field.value ?? ""}
							type="text"
							label="Bio"
							placeholder="John Doe"
						/>
						{errors.bio && (
							<p className="text-red-600 text-left text-sm">
								{errors.bio.message}
							</p>
						)}
					</div>
				)}
			/>
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
							<p className="text-red-600 text-left text-sm">
								{errors.email.message}
							</p>
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
							<p className="text-red-600 text-left text-sm">
								{errors.password.message}
							</p>
						)}
					</div>
				)}
			/>
			<Controller
				name="confirmpassword"
				control={control}
				render={({ field }) => (
					<div className="flex flex-col leading-4 w-full">
						<CustomInput
							{...field}
							name="confirmpassword"
							type="password"
							label="Confirm Password"
							placeholder="••••••••"
						/>
						{errors.confirmpassword && (
							<p className="text-red-600 text-left text-sm">
								{errors.confirmpassword.message}
							</p>
						)}
					</div>
				)}
			/>
			<div>
				<Button disabled={isPending} name="submit" type="submit">
					{isPending ? "Signing up..." : "Sign Up"}
				</Button>
			</div>
			<div className="flex flex-row w-full justify-center gap-1 items-center">
				<Text type="p" tone="secondary" className="mr-4 font-medium text-sm">
					Already have an account?
				</Text>
				<Link to="/login" className="text-sm font-bold text-brand-primary">
					Log in
				</Link>
			</div>
		</form>
	);
}
