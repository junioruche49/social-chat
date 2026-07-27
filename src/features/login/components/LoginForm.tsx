import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, type SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import type { z } from "zod";

import Button from "../../../shared/components/ui/Button";
import CustomInput from "../../../shared/components/ui/CustomInput";
import Text from "../../../shared/components/ui/Text";
import { loginSchema } from "../schemas/loginSchema";

export default function LoginForm() {
	const navigation = useNavigate();
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
		console.log(data);
		navigation("/");
	};

	return (
		<div className="flex flex-col gap-4">
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
				<Button onClick={handleSubmit(onSubmit)} name="submit" type="submit">
					Log In
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
		</div>
	);
}
