import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import type { z } from "zod";

import Button from "../../../shared/components/ui/Button";
import CustomInput from "../../../shared/components/ui/CustomInput";
import Text from "../../../shared/components/ui/Text";
import { signupSchema } from "../schemas/signupSchema";

export default function SignupForm() {
	type SignupSchemaData = z.infer<typeof signupSchema>;

	const {
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<SignupSchemaData>({
		resolver: zodResolver(signupSchema),
		defaultValues: {
			name: "",
			email: "",
			password: "",
			confirmpassword: "",
		},
	});

	const onSubmit = (data: SignupSchemaData) => {
		console.log(data);
	};

	return (
		<div className="flex flex-col gap-4">
			<Controller
				name="name"
				control={control}
				render={({ field }) => (
					<div className="flex flex-col leading-4 w-full">
						<CustomInput
							{...field}
							name="name"
							type="name"
							label="Full Name"
							placeholder="John Doe"
						/>
						{errors.name && (
							<p className="text-red-600 text-left text-sm">
								{errors.name.message}
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
				<Button onClick={handleSubmit(onSubmit)} name="submit" type="submit">
					Sign Up
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
		</div>
	);
}
