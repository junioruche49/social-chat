export default function ChatBody() {
	return (
		<div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50 w-full">
			<div className="flex justify-start mb-4">
				<div className="bg-white text-slate-700 px-4 py-2 rounded-2xl rounded-tl-sm shadow-sm max-w-[70%]">
					<p className="text-sm">
						Hey! This is the start of your conversation with Alice Smith.
					</p>
					<span className="text-[10px] text-slate-400 mt-1 block">
						10:00 AM
					</span>
				</div>
			</div>
			<div className="flex justify-end mb-4">
				<div className="bg-indigo-600 text-white rounded-tr-sm px-4 py-2 rounded-2xl shadow-sm max-w-[70%]">
					<p className="text-sm">hey</p>
					<span className="text-[10px] text-indigo-200 mt-1 block text-right">
						19:42
					</span>
				</div>
			</div>
		</div>
	);
}
