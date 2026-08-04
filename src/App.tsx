import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/Routes";
import useThemeStore from "./store/useThemeStore";

function App() {
	const initTheme = useThemeStore((state) => state.initTheme);

	useEffect(() => {
		initTheme();
	}, [initTheme]);
	return (
		<BrowserRouter>
			<Routes />
		</BrowserRouter>
	);
}

export default App;
