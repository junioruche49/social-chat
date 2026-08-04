import { httpBasrUrl } from "@/api/httpContext";
import { ApiServiceFacade } from "@/shared/services/ApiServiceFacade";
import type { User } from "@/shared/types/user";
import type { Message } from "../types/Message";

const apiServiceFacade = new ApiServiceFacade(httpBasrUrl);

export const getGetChatHistory = async (receiverId: string) => {
    const response = (await apiServiceFacade.get({
        path: `/api/chat/chathistory/${receiverId}`,
    })) as { data:{userDetails: User, messages:Message[] } };
    return response.data;
};