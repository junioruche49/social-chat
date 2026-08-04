import type { Message } from "../types/Message";

type Props = {
	messages: Message[];
	userId: string;
};

export default function ChatBody({ messages, userId }: Props) {
	return (
		<div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50 w-full">
			{messages.map((m) => (
				<div
					key={m.messageId}
					className={`flex ${m.senderId === userId ? "justify-end" : "justify-start"}  mb-4`}
				>
					<div
						className={`msg ${m.senderId === userId ? "bg-indigo-600 text-white" : "bg-white text-slate-700 border border-slate-200/80 "} rounded-tl-xs rounded-2xl p-3.5 shadow-x`}
					>
						<p>{m.content}</p>
					</div>
				</div>
			))}
		</div>
	);
}
