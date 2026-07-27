import SignupForm from "../features/signup/components/SignupForm";
import Card from "../shared/components/ui/Card";
import Header from "../shared/components/ui/Header";

export default function Signup() {
	return (
		<div className="flex items-center w-full justify-center h-screen bg-brand-secondary-100">
			<Card className="md:w-[50%] lg:w-[30%]  w-full p-8">
				<Header title="Create Account" description="Sign up to get started." />
				<SignupForm />
			</Card>
		</div>
	);
}
