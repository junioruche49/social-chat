import { useMutation, useQueryClient } from '@tanstack/react-query'
import useToast from "@/shared/hooks/useToast"
import { acceptRequest } from '../endpoints/endpoints'


export const  useAcceptRequest = ()=>{
    const queryClient = useQueryClient();
    const { showSuccess } = useToast();
    return useMutation({
        mutationFn: (requestId: string) => acceptRequest(requestId), 
        onSuccess:()=>{
        queryClient.invalidateQueries({queryKey:["incoming-requests"]})
        showSuccess("Request Accepted")
    }})
}
