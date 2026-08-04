import * as signalR from "@microsoft/signalr";
import { useEffect, useMemo, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { httpBasrUrl } from "@/api/httpContext";
import ChatBody from "@/features/chat/components/ChatBody";
import ChatFooter from "@/features/chat/components/ChatFooter";
import ChatHeader from "@/features/chat/components/ChatHeader";
import { useGetChatHistory } from "@/features/chat/queries/useGetChatHistory";
import type { Message } from "@/features/chat/types/Message";
import DashboardLayout from "@/shared/components/layout/DashboardLayout";
import Loading from "@/shared/components/ui/Loading";
import { ApiServiceFacade } from "@/shared/services/ApiServiceFacade";
import useAuthStore from "@/store/useAuthStore";

const apiServiceFacade = new ApiServiceFacade(httpBasrUrl);

export default function Chat() {
	const [liveMessages, setLiveMessages] = useState<Message[]>([]);
	const [text, setText] = useState("");
	const signalrConnection = useRef<signalR.HubConnection | null>(null);
	const userId = useAuthStore((state) => state.user?.id);
	const { userid: recipientId } = useParams();
	const { data: chatHistory, isLoading } = useGetChatHistory(
		recipientId as string,
	);

	const messages = useMemo(() => {
		return [...(chatHistory?.messages ?? []), ...liveMessages];
	}, [chatHistory, liveMessages]);

	useEffect(() => {
		const connection = new signalR.HubConnectionBuilder()
			.withUrl(`${apiServiceFacade.url}/chat`)
			.withAutomaticReconnect()
			.build();

		connection.on("ReceiveMessage", (msg) => {
			// Direct comparison ensures client UI only appends active localized conversation views
			if (
				(msg.senderId === userId && msg.receiverId === recipientId) ||
				(msg.senderId === recipientId && msg.receiverId === userId)
			) {
				setLiveMessages((prev) => [...prev, msg]);
			}
		});

		connection
			.start()
			.then(() => connection.invoke("RegisterUser", userId))
			.catch((err) => console.error("SignalR Connection Failure:", err));

		signalrConnection.current = connection;

		return () => {
			connection.stop();
		};
	}, [userId, recipientId]);

	const send = async () => {
		if (!text.trim() || !signalrConnection.current) return;

		await signalrConnection.current.invoke(
			"SendMessage",
			userId,
			recipientId,
			text,
		);
		setText("");
	};

	if (isLoading) {
		return <Loading />;
	}

	return (
		<DashboardLayout>
			<div className="flex flex-col justify-between w-full h-full">
				<ChatHeader user={chatHistory?.userDetails} />
				<ChatBody messages={messages} userId={userId as string} />
				<ChatFooter send={send} text={text} setText={setText} />
			</div>
		</DashboardLayout>
	);
}
