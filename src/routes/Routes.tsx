import { Routes as AllRoutes, Route } from "react-router-dom";

import Chat from "@/pages/Chat";
import Dashboard from "@/pages/Dashboard";
import DiscoverFriends from "@/pages/DiscoverFriends";
import Login from "@/pages/Login";
import NotFound from "@/pages/NotFound";
import Signup from "@/pages/Signup";
import ProtectedRoute from "./ProtectedRoute";

export default function Routes() {
	return (
		<AllRoutes>
			<Route path="/signup" element={<Signup />} />
			<Route path="/login" element={<Login />} />
			<Route path="*" element={<NotFound />} />
			<Route element={<ProtectedRoute />}>
				<Route path="/" element={<Dashboard />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/chat/:userid" element={<Chat />} />
				<Route path="/discover-friends" element={<DiscoverFriends />} />
			</Route>
		</AllRoutes>
	);
}
