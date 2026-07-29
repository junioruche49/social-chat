import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chat from "@/pages/Chat";
import Dashboard from "@/pages/Dashboard";
import DiscoverFriends from "@/pages/DiscoverFriends";
import Login from "@/pages/Login";
import NotFound from "@/pages/NotFound";
import Signup from "@/pages/Signup";
import DashboardLayout from "@/shared/components/layout/DashboardLayout";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/signup" element={<Signup />} />
				<Route path="/login" element={<Login />} />
				<Route path="*" element={<NotFound />} />
				<Route element={<DashboardLayout />}>
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/chat/:userid" element={<Chat />} />
					<Route path="/discover-friends" element={<DiscoverFriends />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
