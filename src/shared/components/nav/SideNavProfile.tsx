import { faBell, faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import useAuthStore from "@/store/useAuthStore";
import useThemeStore from "@/store/useThemeStore";
import Avatar from "../ui/Avatar";
import Text from "../ui/Text";

export default function SideNavProfile() {
	const firstName = useAuthStore((state) => state.user?.firstName) as string;
	const lastName = useAuthStore((state) => state.user?.lastName);
	const mode = useThemeStore((state) => state.theme);
	const toggleTheme = useThemeStore((state) => state.toggleTheme);

	const onLogout = () => {
		useAuthStore.getState().logout();
		window.location.reload();
	};
	const onToggleHandler = () => {
		toggleTheme();
	};
	return (
		<div className="flex flex-row w-full items-center p-3.5  border-b border-brand-secondary-500">
			<div className="flex flex-row items-center">
				<Avatar
					initials={firstName[0].toUpperCase()}
					className="p-3"
					size="sm"
				/>
				<Text
					type="h6"
					tone="none"
					className="font-extrabold text-black text-sm ml-2 mr-3"
				>
					{lastName} {firstName}
				</Text>
			</div>
			<div className="flex flex-row flex-1 w-full gap-1 justify-end">
				<FontAwesomeIcon
					icon={mode === "dark" ? faSun : faMoon}
					size="lg"
					className="text-brand-secondary cursor-pointer"
					onClick={onToggleHandler}
					title={mode === "dark" ? "Light Mode" : "Dark Mode"}
				/>
				<FontAwesomeIcon
					icon={faBell}
					size="lg"
					className="text-brand-secondary"
				/>
				<button type="button" onClick={onLogout}>
					<FontAwesomeIcon
						icon={faArrowRightFromBracket}
						className="text-brand-secondary"
						size="lg"
					/>
				</button>
			</div>
		</div>
	);
}
