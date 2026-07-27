import LoginForm from "@/features/login/components/LoginForm";
import Card from "@/shared/components/ui/Card";
import Header from "@/shared/components/ui/Header";

export default function Login() {
	return (
		<div className="flex items-center w-full justify-center h-screen bg-brand-secondary-100">
			<Card className="md:w-[50%] lg:w-[30%] w-full p-8">
				<Header
					title="Welcome Back"
					description="Sign in to continue chatting."
				/>
				<LoginForm />
			</Card>
		</div>
	);
}
