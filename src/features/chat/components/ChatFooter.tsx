import {
	faFaceSmile,
	faPaperclip,
	faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
	send: () => Promise<void>;
	text: string;
	setText: React.Dispatch<React.SetStateAction<string>>;
};

export default function ChatFooter({ send, setText, text }: Props) {
	return (
		<div className="p-4 bg-white border-t border-slate-200 w-full">
			<div className="flex gap-2 items-center w-full">
				<button
					type="button"
					className="text-slate-400 hover:text-indigo-600 p-2"
				>
					<FontAwesomeIcon
						icon={faFaceSmile}
						size="lg"
						className="text-brand-secondary"
					/>
				</button>
				<button
					type="button"
					className="text-slate-400 hover:text-indigo-600 p-2"
				>
					<FontAwesomeIcon
						icon={faPaperclip}
						size="lg"
						className="text-brand-secondary"
					/>
				</button>
				<input
					onChange={(e) => setText(e.target.value)}
					value={text}
					type="text"
					placeholder="Type a message..."
					className="flex-1 bg-slate-100 border-none px-4 py-2.5 rounded-full focus:ring-2 focus:ring-indigo-500 focus:outline-none"
				/>
				<button
					onClick={send}
					type="button"
					className="bg-indigo-600 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-indigo-700 transition shadow-md"
				>
					<FontAwesomeIcon
						icon={faPaperPlane}
						size="lg"
						className="text-white"
					/>
				</button>
			</div>
		</div>
	);
}
