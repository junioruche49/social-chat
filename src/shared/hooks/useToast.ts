import { type TypeOptions,toast } from "react-toastify";

const useToast = () => {
	const showToast = (message: string, type: TypeOptions) => {
		toast(message, {
			type: type,
			position: "top-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
	};

	const showSuccess = (message: string) => {
		showToast(message, "success");
	};

	const showError = (message: string) => {
		showToast(message, "error");
	};

	const showInfo = (message: string) => {
		showToast(message, "info");
	};

	return { showSuccess, showError, showInfo };
};

export default useToast;